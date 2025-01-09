// HEADER: shared types
export interface GitIgnoreTemplate {
  id: number;
  name: string;
  description: string;
  content: string;
  key?: string;
}

export interface TemplateResponse {
  template: string;
}

export type TemplateKey =
  | "node"
  | "python"
  | "typescript"
  | "go"
  | "rust"
  | "kotlin"
  | "ruby";

export interface GenerateResult {
  success: boolean;
  error?: string;
}
