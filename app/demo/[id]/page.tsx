import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConversionFooter } from "@/components/conversion-footer";
import { DemoLayoutRenderer } from "@/components/demo-layouts";
import { getTemplate, templates } from "@/data/templates";

type DemoPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return templates.map((template) => ({
    id: template.id
  }));
}

export async function generateMetadata({
  params
}: DemoPageProps): Promise<Metadata> {
  const { id } = await params;
  const template = getTemplate(id);

  if (!template) {
    return {
      title: "Demo Not Found | Akshat Lakhera"
    };
  }

  return {
    title: `${template.title} | Akshat Lakhera`,
    description: template.summary,
    openGraph: {
      title: `${template.title} | Akshat Lakhera`,
      description: template.summary,
      images: [template.image]
    }
  };
}

export default async function DemoPage({ params }: DemoPageProps) {
  const { id } = await params;
  const template = getTemplate(id);

  if (!template) {
    notFound();
  }

  return (
    <main>
      <DemoLayoutRenderer template={template} />
      <div id="conversion-footer">
        <ConversionFooter template={template} />
      </div>
    </main>
  );
}
