// HEADER: List of available templates
import { Command } from "clipanion";
import { listTemplates } from "../templates/index";
import { TemplateKey } from "../types/types";
import { generateGitIgnore } from "../utils/generateGitIgnore";
import { intro, outro, select, spinner, note } from "@clack/prompts";

/* INFO:
 *
 * icons: {}
 * Best going with a simple object
 * to keep dependencies low
 *
 * */
// const icons = {
//   file: "📄",
//   folder: "📁",
//   success: chalk.green("✓"),
//   error: chalk.red("✖"),
// } as const;

/* INFO:
 *
 * class: ListCommand
 * We need to expose the list of available templates
 * to the end user.
 *
 * */
export class ListCommand extends Command {
  static paths = [["list"], ["l"]];

  async execute(): Promise<number> {
    try {
      // Intro
      intro("Welcome to GIG - GitIgnore Generator");

      // Load templates with spinner
      const s = spinner();
      s.start("Loading templates");
      const templates = listTemplates();
      s.stop("Templates loaded");

      // Template selection
      const template = await select({
        message: "Choose a template",
        options: templates.map((t) => ({
          value: t.key,
          label: t.name,
          hint: t.description,
        })),
      });

      if (!template) {
        outro("No template selected. Goodbye!");
        return 0;
      }

      // Generate file
      note(`Generating .gitignore for ${String(template)}`);
      const result = await generateGitIgnore(template as TemplateKey);

      // Outro
      outro(
        result.success ? "✨ All done!" : "❌ Failed to generate gitignore",
      );

      return result.success ? 0 : 1;
    } catch (err: unknown) {
      const error = err instanceof Error ? err.message : "unknown error";
      outro(`❌ ${error}`);
      return 1;
    }
  }
}
