// HEADER: List of available templates
import { Command } from "clipanion";
import alert from "better-cli-alerts";
import { listTemplates } from "../templates/index";
import enquirerPkg from "enquirer";
import { TemplateKey, TemplateResponse } from "../types/types";
import chalk from "chalk";
import { generateGitIgnore } from "../utils/generateGitIgnore";
const { prompt } = enquirerPkg;

const icons = {
  file: "📄",
  folder: "📁",
  success: chalk.green("✓"),
  error: chalk.red("✖"),
} as const;

/* INFO:
 *
 * Issues a list command that exposes the available
 * gitignore options
 *
 *
 * Define the path
 * Get the list of templates
 * Create the prompt with enquirer
 * Handle the validation with better-cli-alerts
 * Await for user choice
 * Make sure the choice "exists"
 * */
export class ListCommand extends Command {
  static paths = [["list"], ["l"]];

  static usage = Command.Usage({
    description: "List available gitignore templates",
    examples: [
      ["List all templates", "gig list"],
      ["Short form", "gig l"],
    ],
  });

  async execute() {
    try {
      const templates = listTemplates();

      const { template } = await prompt<TemplateResponse>({
        type: "select",
        name: "template",
        message: `${icons.file} Choose a template:`,
        choices: templates.map((t) => ({
          name: t.name,
          value: t.name,
          description: t.description,
        })),
      });

      const selectedTemplate = templates.find(
        (t) => t.name.trim() === template,
      );

      if (!selectedTemplate) {
        alert({
          type: "error",
          message: `${icons.error} Template not found`,
          description: "ERROR",
        });
        return 1;
      }

      const result = await generateGitIgnore(template as TemplateKey);
      if (!result.success) return 1;

      return 0;
    } catch (err: unknown) {
      const error = err instanceof Error ? err.message : "unknown error";
      alert({
        type: "error",
        message: error,
        description: "ERROR",
      });
      return 1;
    }
  }
}
