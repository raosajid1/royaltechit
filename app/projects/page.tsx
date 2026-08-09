import { generatePageSEO } from "@/lib/metadata";
import ProjectsContent from "./ProjectsContent";

export const metadata = generatePageSEO({
  title: "Our Projects",
  description:
    "Explore our portfolio of successful ERP implementations, cloud migrations, e-commerce platforms, and digital transformation projects across industries.",
  keywords:
    "Royal Tech projects, ERP implementation, cloud migration, digital transformation, portfolio, case studies",
});

export default function ProjectsPage() {
  return <ProjectsContent />;
}
