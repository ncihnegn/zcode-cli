import type { TuiSubmitPromptResult } from "@zcode/tui";
import type { CommandCenterDeps } from "../types.js";

const EXIT_USAGE = "Usage: /exit";

export function handleExitCommand(args: string, deps: CommandCenterDeps): TuiSubmitPromptResult {
  if (args.length > 0) {
    return {
      mode: deps.getMode?.(),
      response: EXIT_USAGE,
    };
  }
  return {
    exit: true,
    exitCode: 0,
    mode: deps.getMode?.(),
    response: "",
  };
}
