#!/usr/bin/env node

//  HEADER: CLI entry point
import { Cli } from "clipanion";
import { HelloCommand } from "./commands/hello";

const cli = new Cli({
  binaryName: "gig-ignite",
  binaryVersion: "1.0.0",
});

cli.register(HelloCommand);
cli.runExit(process.argv.slice(2));
