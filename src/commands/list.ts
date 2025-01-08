// HEADER: List of available templates
import { Command } from "clipanion";
import alert from "better-cli-alerts";
import { listTemplates } from "../templates/index";
import enquirerPkg from "enquirer";
import { TemplateResponse } from "../types/types";
const { prompt } = enquirerPkg;

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
  async execute() {
    try {
      const templates = listTemplates();
      console.log(templates);
      const { template } = await prompt<TemplateResponse>({
        type: "select",
        name: "template",
        message: "Choose a template",
        choices: templates.map((t) => ({
          name: t.name,
          value: t.id,
          description: t.description,
        })),
      });

      const selectedTemplate = templates.find(
        (t) => t.name.trim() === template,
      );

      if (!selectedTemplate) {
        alert({
          type: "error",
          message: "Template not found",
          description: "ERROR",
        });
        return 1;
      }

      alert({
        type: "success",
        message: `Selected: ${selectedTemplate.name}`,
        description: "TEMPLATE FOUND",
      });
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
