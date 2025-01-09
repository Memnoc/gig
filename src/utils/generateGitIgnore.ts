/* HEADER: Utility to generate the gitignore file outside the generate command */
import alert from "better-cli-alerts";
import { getTemplate } from "../templates";
import fs from "node:fs/promises";
import { GenerateResult, TemplateKey } from "../types/types";

export async function generateGitIgnore(
  templateKey: TemplateKey,
): Promise<GenerateResult> {
  console.log("Trying to get template for key:", templateKey); // Debug
  try {
    const exists = await fs
      .access(".gitignore")
      .then(() => true)
      .catch(() => false);

    if (exists) {
      alert({
        type: "warning",
        message: "A .gitignore file already exists",
        description: "WARNING",
      });
      return { success: false, error: "File exists" };
    }

    const template = getTemplate(templateKey);
    console.log("Found template:", template); // Debug
    if (!template) {
      alert({
        type: "error",
        message: "Template not found",
        description: "ERROR",
      });
      return { success: false, error: "File not found" };
    }

    await fs.writeFile(".gitignore", template.content);

    alert({
      type: "success",
      message: "Generated .gitignore file!",
      description: "SUCCESS",
    });

    return { success: true };
  } catch (err: unknown) {
    const error = err instanceof Error ? err.message : "Unknown error";
    alert({
      type: "error",
      message: error,
      description: "ERROR",
    });
    return { success: false, error };
  }
}
