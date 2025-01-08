// HEADER: main commands to generate the gitignore from the CLI
import { Command, Option } from "clipanion";
import alert from "better-cli-alerts";
import { getTemplate } from "../templates";
import fs from "node:fs/promises";

/* INFO: Retrieves .gitignore content and place it into a file .gitignore
 *
 * The GenerateCommand class extends the Command class from Clipanion
 * The asynchronous function execute() performs validation
 * on the existence of the .gitignore file
 *
 * getTemplate() function retrieves the template
 *
 * better-cli-alerts handles the error validation with custom messages
 *
 * INFO:
 * The execute function access the .gitignore template
 * Verify it's existence
 * If it exists, an alert with better-cli-alerts is produced
 * If it does not, it attempts to retrieve a template
 * If found, the template is added, if not, an error is produced
 *
 *
 * */
export class GenerateCommand extends Command {
  static paths = [["generate"], ["g"]];

  template = Option.String("--template", { required: false });

  async execute() {
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
        return 1;
      }

      const template = getTemplate(this.template as "node");
      if (!template) {
        alert({
          type: "error",
          message: "Template not found",
          description: "ERROR",
        });
        return 1;
      }

      await fs.writeFile(".gitignore", template.content);

      alert({
        type: "success",
        message: "Generated .gitignore file!",
        description: "SUCCESS",
      });

      return 0;
    } catch (err: unknown) {
      const error = err instanceof Error ? err.message : "Unknown error";
      alert({
        type: "error",
        message: error,
        description: "ERROR",
      });
      return 1;
    }
  }
}
