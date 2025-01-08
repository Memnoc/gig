// HEADER: store and load gitignore templates
import { node } from "../templates/languages/node";
import { GitIgnoreTemplate } from "../types/types";
import { go } from "./languages/go";
import { kotlin } from "./languages/kotlin";
import { python } from "./languages/python";
import { ruby } from "./languages/ruby";
import { rust } from "./languages/rust";
import { typescript } from "./languages/typescript";

type TemplateKey =
  | "node"
  | "python"
  | "typescript"
  | "go"
  | "rust"
  | "kotlin"
  | "ruby";

export const templates = new Map<TemplateKey, GitIgnoreTemplate>([
  ["node", node],
  ["python", python],
  ["typescript", typescript],
  ["go", go],
  ["rust", rust],
  ["kotlin", kotlin],
  ["ruby", ruby],
]);

export function getTemplate(key: TemplateKey): GitIgnoreTemplate | undefined {
  return templates.get(key);
}

export function listTemplates(): GitIgnoreTemplate[] {
  return Array.from(templates.values());
}
