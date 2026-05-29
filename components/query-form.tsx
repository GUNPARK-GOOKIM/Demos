"use client";
import { useEffect, useState } from "react";
import {
  AlertTriangle,
  CheckCircle,
  DollarSign,
  Globe,
  Loader2,
  Mail,
  Phone,
  Send,
  Smartphone,
  User
} from "lucide-react";

const WEBSITE_TYPES = [
  "Business / Corporate",
  "E-Commerce Store",
  "Portfolio / Personal",
  "Restaurant / Cafe",
  "Hotel / Resort Booking",
  "Real Estate",
  "SaaS / Dashboard",
  "Healthcare / Clinic",
  "Education / LMS",
  "Other"
];

const BUDGET_RANGES = [
  "INR 5,000 - INR 15,000",
  "INR 15,000 - INR 30,000",
  "INR 30,000 - INR 60,000",
  "INR 60,000 - INR 1,00,000",
  "INR 1,00,000+",
  "Not sure yet"
];

type QueryFormProps = {
  templateName?: string;
  templateCategory?: string;
  prefilledBudget?: string;
  prefilledWebsiteType?: string;
  whatsappNumber?: string;
};

export function QueryForm({
  templateName,
  templateCategory,
  prefilledBudget,
  prefilledWebsiteType,
  whatsappNumber = "919285328987"
}: QueryFormProps) {
  const isTemplateFlow = Boolean(templateName && prefilledBudget && prefilledWebsiteType);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState(() => ({
    name: "",
    email: "",
    phone: "",
    budget: prefilledBudget ?? "",
    websiteType: prefilledWebsiteType ?? "",
    message: ""
  }));

  useEffect(() => {
    if (!isTemplateFlow) return;
    setForm((prev) => ({
      ...prev,
      budget: prefilledBudget ?? prev.budget,
      websiteType: prefilledWebsiteType ?? prev.websiteType
    }));
  }, [isTemplateFlow, prefilledBudget, prefilledWebsiteType]);

  const set = (key: string, val: string) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  const buildWhatsAppMessage = () => {
    const lines = [
      "Hey, I'm interested in getting a website built!",
      "",
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      `*Phone:* ${form.phone}`,
      `*Budget:* ${form.budget || "Not specified"}`,
      `*Website Type:* ${form.websiteType || "Not specified"}`
    ];
    if (templateName) lines.push(`*Liked Template:* ${templateName}`);
    if (templateCategory) lines.push(`*Template Category:* ${templateCategory}`);
    if (form.message) lines.push(`*Message:* ${form.message}`);
    return encodeURIComponent(lines.join("\n"));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return;

    setStatus("sending");
    const popup = window.open("", "_blank");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          template: templateName || "General Inquiry"
        })
      });

      if (!response.ok) {
        popup?.close();
        setStatus("error");
        return;
      }

      const waUrl = `https://wa.me/${whatsappNumber}?text=${buildWhatsAppMessage()}`;
      if (popup) {
        popup.location.href = waUrl;
      } else {
        window.open(waUrl, "_blank");
      }
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      popup?.close();
      setStatus("error");
    }
  };

  return (
    <section
      id="inquiry"
      style={{
        borderTop: "1px solid var(--border)",
        padding: "80px 20px",
        background: "var(--surface)",
        scrollMarginTop: "96px"
      }}
    >
      <style>{`
        .qf-input{width:100%;padding:14px 16px 14px 44px;border-radius:14px;border:1px solid var(--border);background:var(--background);color:var(--foreground);font-size:15px;font-weight:500;outline:none;transition:border-color .2s,box-shadow .2s}
        .qf-input:focus{border-color:var(--accent);box-shadow:0 0 0 3px rgba(99,102,241,.15)}
        .qf-input::placeholder{color:var(--muted);font-weight:400}
        .qf-select{width:100%;padding:14px 16px 14px 44px;border-radius:14px;border:1px solid var(--border);background:var(--background);color:var(--foreground);font-size:15px;font-weight:500;outline:none;appearance:none;cursor:pointer;transition:border-color .2s,box-shadow .2s}
        .qf-select:focus{border-color:var(--accent);box-shadow:0 0 0 3px rgba(99,102,241,.15)}
        .qf-textarea{width:100%;padding:14px 16px;border-radius:14px;border:1px solid var(--border);background:var(--background);color:var(--foreground);font-size:15px;font-weight:500;outline:none;resize:vertical;min-height:100px;transition:border-color .2s,box-shadow .2s}
        .qf-textarea:focus{border-color:var(--accent);box-shadow:0 0 0 3px rgba(99,102,241,.15)}
        .qf-textarea::placeholder{color:var(--muted);font-weight:400}
        .qf-btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;width:100%;padding:16px 32px;border-radius:14px;border:none;font-size:16px;font-weight:800;cursor:pointer;transition:transform .2s,box-shadow .2s,opacity .2s}
        .qf-btn:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(99,102,241,.35)}
        .qf-btn:active{transform:translateY(0)}
        .qf-btn:disabled{opacity:.6;cursor:not-allowed;transform:none!important;box-shadow:none!important}
        .qf-field{position:relative}
        .qf-icon{position:absolute;left:14px;top:50%;transform:translateY(-50%);pointer-events:none;opacity:.45}
        .qf-readonly{opacity:.9}
        .qf-readonly[readonly]{cursor:default}
        @media(max-width:640px){
          .qf-grid{grid-template-columns:1fr!important}
        }
      `}</style>

      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 14
            }}
          >
            GET STARTED
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "var(--foreground)",
              lineHeight: 1,
              marginBottom: 16
            }}
          >
            Tell us what you need.
          </h2>
          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7 }}>
            {isTemplateFlow
              ? "Template details are already filled. Just enter your name, email, and phone."
              : "Fill in your details and we will reach out within 24 hours. Your inquiry is also sent via WhatsApp for instant response."}
          </p>
        </div>

        {status === "sent" ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              borderRadius: 24,
              border: "1px solid var(--border)",
              background: "var(--background)"
            }}
          >
            <CheckCircle
              size={48}
              style={{ color: "#22c55e", margin: "0 auto 20px" }}
            />
            <h3
              style={{
                fontSize: 24,
                fontWeight: 800,
                color: "var(--foreground)",
                marginBottom: 10
              }}
            >
              Inquiry Sent!
            </h3>
            <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.7 }}>
              We have received your inquiry and opened a WhatsApp conversation.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16
            }}
          >
            <div
              className="qf-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16
              }}
            >
              <div className="qf-field">
                <User size={16} className="qf-icon" />
                <input
                  className="qf-input"
                  type="text"
                  placeholder="Your Name *"
                  required
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                />
              </div>
              <div className="qf-field">
                <Mail size={16} className="qf-icon" />
                <input
                  className="qf-input"
                  type="email"
                  placeholder="Email Address *"
                  required
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                />
              </div>
            </div>

            <div className="qf-field">
              <Smartphone size={16} className="qf-icon" />
              <input
                className="qf-input"
                type="tel"
                placeholder="Phone Number *"
                required
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
              />
            </div>

            {isTemplateFlow ? (
              <>
                <div
                  className="qf-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16
                  }}
                >
                  <div className="qf-field">
                    <DollarSign size={16} className="qf-icon" />
                    <input
                      className="qf-input qf-readonly"
                      type="text"
                      value={form.budget}
                      readOnly
                    />
                  </div>
                  <div className="qf-field">
                    <Globe size={16} className="qf-icon" />
                    <input
                      className="qf-input qf-readonly"
                      type="text"
                      value={form.websiteType}
                      readOnly
                    />
                  </div>
                </div>
                <input type="hidden" value={form.budget} name="budget" />
                <input type="hidden" value={form.websiteType} name="websiteType" />
              </>
            ) : (
              <>
                <div
                  className="qf-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16
                  }}
                >
                  <div className="qf-field">
                    <DollarSign size={16} className="qf-icon" />
                    <select
                      className="qf-select"
                      value={form.budget}
                      onChange={(e) => set("budget", e.target.value)}
                    >
                      <option value="">Select Budget Range</option>
                      {BUDGET_RANGES.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="qf-field">
                    <Globe size={16} className="qf-icon" />
                    <select
                      className="qf-select"
                      value={form.websiteType}
                      onChange={(e) => set("websiteType", e.target.value)}
                    >
                      <option value="">What type of website do you need?</option>
                      {WEBSITE_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <textarea
                  className="qf-textarea"
                  placeholder="Tell us more about your project (optional)"
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                />
              </>
            )}

            {status === "error" ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  border: "1px solid color-mix(in srgb, #ef4444 55%, transparent)",
                  background: "color-mix(in srgb, #ef4444 10%, transparent)",
                  color: "#fca5a5",
                  borderRadius: 12,
                  padding: "10px 12px",
                  fontSize: 13,
                  fontWeight: 600
                }}
              >
                <AlertTriangle size={15} />
                Could not send email right now. Please try again.
              </div>
            ) : null}

            <button
              type="submit"
              className="qf-btn"
              disabled={status === "sending"}
              style={{
                background: "var(--foreground)",
                color: "var(--background)"
              }}
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={18} style={{ animation: "spin 1s linear infinite" }} />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Submit Inquiry
                  <Phone size={14} style={{ opacity: 0.6 }} />
                </>
              )}
            </button>

            <p
              style={{
                textAlign: "center",
                fontSize: 12,
                color: "var(--muted)",
                marginTop: 4
              }}
            >
              Your details will be sent to our WhatsApp and email for the fastest response.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
