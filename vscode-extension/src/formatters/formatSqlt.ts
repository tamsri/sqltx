import { TextDocument, commands, window } from "vscode";
import * as prettier from "prettier";

const formatSqlt = async (document: TextDocument): Promise<string> => {
  const options = (await prettier.resolveConfigFile(document.fileName)) || {};

  return prettier.format(document.getText(), {
    ...options,
    parser: "sql",
  });
};

export default formatSqlt;
