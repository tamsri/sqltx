# SQLTX

SQLTX is a versatile SQL toolset designed to extend query development through dynamic templating and advanced formatting features. With support for multiple databases, including PostgreSQL, MySQL, and more, it provides developers a better develoopment experience (DX) to their SQL code for reusability.

## Project Structure

The project is organized into different components:

- **Extension for Visual Studio Code**:
  - `/vscode-extension`: Contains the VS Code extension, providing syntax highlighting and code formatting for `.sqlt` files.
    - `/formatters`: Custom formatters for .sqlt, .pgsqlt, .mysqlt, and other.
    - `/syntaxes`: Custom TextMate grammar files for syntax highlighting.
    - `package.json`: Configuration for the VS Code extension.

- **Plugin for JetBrains IDEs**: (To be implemented)

- **Libraries**:
  - `/python`: Contains the Python library that supports executing `.*sqlt` files.

## Usage

### Visual Studio Code
1. Install the VS Code extension for syntax highlighting and code formatting.

## Contributing

We welcome contributions! If you have suggestions, bug reports, or want to contribute code, please follow our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
