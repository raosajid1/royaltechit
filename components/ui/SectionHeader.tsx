import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ tag, title, description, centered = true, className }: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center max-w-3xl mx-auto mb-16", className)}>
      {tag && <span className="section-tag">{tag}</span>}
      <h2 className={cn("section-title", centered && "mb-4")}>{title}</h2>
      {description && <p className={cn("section-desc", centered && "mx-auto")}>{description}</p>}
    </div>
  );
}
