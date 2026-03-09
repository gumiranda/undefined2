export interface PatternVariantMeta {
  id: string;
  pattern: string;
  name: string;
  description: string;
  tags: string[];
  uiComponents: string[];
  ssr: boolean;
}

export interface SectionProps {
  className?: string;
  id?: string;
}
