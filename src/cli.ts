#!/usr/bin/env node

//  HEADER: CLI entry point
import { Cli } from "clipanion";
import { GenerateCommand } from "./commands/generates";

const cli = new Cli({
  binaryName: "gig-ignite",
  binaryVersion: "1.0.0",
});

cli.register(GenerateCommand);
cli.runExit(process.argv.slice(2));
