/* HEADER: Utility to generate the gitignore file outside the generate command */
import { getTemplate } from "../templates";
import fs from "node:fs/promises";
import { GenerateResult, TemplateKey } from "../types/types";

export async function generateGitIgnore(
  templateKey: TemplateKey,
): Promise<GenerateResult> {
  try {
    const exists = await fs
      .access(".gitignore")
      .then(() => true)
      .catch(() => false);

    if (exists) {
      return { success: false, error: "File exists" };
    }

    const template = getTemplate(templateKey);
    if (!template) {
      return { success: false, error: "File not found" };
    }

    await fs.writeFile(".gitignore", template.content);
    return { success: true };
  } catch (err: unknown) {
    const error = err instanceof Error ? err.message : "Unknown error";
    return { success: false, error };
  }
}
