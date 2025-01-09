/*  HEADER:
 * Command to expose, chose and create
 * gitignores from available templates
 **/
import { Command } from "clipanion";
import { listTemplates } from "../templates/index";
import { TemplateKey } from "../types/types";
import { generateGitIgnore } from "../utils/generateGitIgnore";
import { intro, outro, select, spinner, note } from "@clack/prompts";
import alert from "better-cli-alerts";

export class ListCommand extends Command {
  static paths = [["list"], ["l"]];

  async execute(): Promise<number> {
    try {
      intro("👏 Welcome to GIG - GitIgnore Generator");

      const s = spinner();
      s.start("🧠 Loading templates");
      const templates = listTemplates();
      s.stop("🙆 Templates loaded");

      // Template selection
      const template = await select({
        message: `📁 Choose gitignore template`,
        options: templates.map((t) => ({
          value: t.key,
          label: t.name,
          hint: t.description,
        })),
      });

      if (!template) {
        alert({
          type: "warning",
          message: "No template selected",
          description: "CANCELLED",
        });
        outro("Goodbye!");
        return 0;
      }

      note(`📜 Generating .gitignore for ${String(template)}`);
      const result = await generateGitIgnore(template as TemplateKey);

      if (result.success) {
        alert({
          type: "success",
          message: "Generated .gitignore file!",
          description: "SUCCESS",
        });
      } else {
        alert({
          type: "error",
          message: result.error || "Failed to generate file",
          description: "FAIL",
        });
      }

      outro(result.success ? `✨ All done!'` : "🛑 Operation failed");
      return result.success ? 0 : 1;
    } catch (err: unknown) {
      const error = err instanceof Error ? err.message : "unknown error";
      alert({
        type: "error",
        message: error,
        description: "ERROR",
      });
      outro(`❌ ${error}`);
      return 1;
    }
  }
}
