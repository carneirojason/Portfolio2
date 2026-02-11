import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectById, projects } from "@/data/projects";
import { ProjectDetail } from "./ProjectDetail";
import { SatelliteImagingContent } from "./SatelliteImagingContent";
import { LandingTimeContent } from "./LandingTimeContent";
import { RafaleContent } from "./RafaleContent";
import { TimeseriesXaiContent } from "./TimeseriesXaiContent";
import { NutriCuisineContent } from "./NutriCuisineContent";
import { SweetSpotContent } from "./SweetSpotContent";
import { PriceSignalContent } from "./PriceSignalContent";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} | Jason CARNEIRO`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();
  if (id === "satellite-imaging") {
    return <SatelliteImagingContent />;
  }
  if (id === "landing-time") {
    return <LandingTimeContent />;
  }
  if (id === "rafale") {
    return <RafaleContent />;
  }
  if (id === "timeseries-xai") {
    return <TimeseriesXaiContent />;
  }
  if (id === "nutricuisine") {
    return <NutriCuisineContent />;
  }
  if (id === "sweet-spot") {
    return <SweetSpotContent />;
  }
  if (id === "price-signal") {
    return <PriceSignalContent />;
  }
  return <ProjectDetail project={project} />;
}
