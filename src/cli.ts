#!/usr/bin/env node

//  HEADER: CLI entry point
import { Builtins, Cli } from "clipanion";
import { GenerateCommand } from "./commands/generates";

const cli = new Cli({
  binaryName: "gig-ignite",
  binaryVersion: "1.0.0",
});

cli.register(GenerateCommand);
cli.register(Builtins.HelpCommand);
cli.register(Builtins.VersionCommand);
cli.register(Builtins.DefinitionsCommand);
cli.runExit(process.argv.slice(2));
