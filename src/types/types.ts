// HEADER: shared types
export interface GitIgnoreTemplate {
  id: number;
  name: string;
  description: string;
  content: string;
}

export interface TemplateResponse {
  template: string;
}
