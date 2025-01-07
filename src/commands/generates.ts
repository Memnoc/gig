// HEADER: main commands to generate the gitignore from the CLI
import { Command } from "clipanion";
import alert from "better-cli-alerts";

export class HelloCommand extends Command {
  static paths = [["hello"]];

  async execute() {
    alert({
      type: "success",
      message: "GIG is working!",
      description: "SUCCESS",
    });
    return 0;
  }
}
