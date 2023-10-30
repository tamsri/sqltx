// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { ExtensionContext, commands, window, Range } from "vscode";
import formatSqlt from "./formatters/formatSqlt";

const formatSqltCommand = commands.registerCommand(
  "sqltx.formatSqlt",
  async () => {
    const editor = window.activeTextEditor;
    if (!editor) {
      return;
    }

    const { document } = editor;
    const formattedContent = await formatSqlt(document);

    editor.edit((editBuilder) => {
      editBuilder.replace(
        new Range(
          document.positionAt(0),
          document.positionAt(document.getText().length)
        ),
        formattedContent
      );
    });
  }
);

export function activate(context: ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  console.log("Hello World, SQLTX is now active!");

  context.subscriptions.push(formatSqltCommand);
}

// This method is called when your extension is deactivated
export function deactivate() {}
