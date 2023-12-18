# OPH66

Frontend interface for the Openhouse 2566 website.

> ⚠️ Warning: This document might not be zero-error. If you encounter any problems, please contact _Leon_ on Discord.

## Prerequisites

Please install the following.

- [Node.js](https://nodejs.org/en/): **v20 or above** is required. **v20.8.1** is recommended.
- [pnpm](https://pnpm.io/): **v8 or above** is required. latest version is recommended.
- [Git](https://git-scm.com/): latest version is recommended.

## Setting Up the Development Environment

1.  [VSCode](https://code.visualstudio.com/) is recommended for development.
1.  Install the following extensions (Optional but highly recommended):
    - [Astro](https://marketplace.visualstudio.com/items?itemName=astro.astro)
    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
    - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
1.  Setting the VSCode workspace settings (Optional but highly recommended):

    1.  Open the command palette (Ctrl + Shift + P)
    1.  Type "Preferences: Open Settings (JSON)" and press Enter
    1.  Insert the following code into the settings.json file

        ```json
        {
          "tailwindCSS.experimental.classRegex": [
            ["clsx\\(([^)]_)\\)", "(?:'|\"|`)([^']_)(?:'|\"|`)"]
          ],
          "prettier.documentSelectors": ["**/*.astro"],
          "[astro]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode"
          },
          "eslint.validate": [
            "javascript",
            "javascriptreact",
            "astro",
            "typescript",
            "typescriptreact"
          ],
          "files.insertFinalNewline": true
        }
        ```

        > Note: Please make sure you understand what you are doing before changing the settings.
        >
        > Here is a brief explanation of the settings.
        >
        > `tailwindCSS.experimental.classRegex` is for the Tailwind CSS and clsx() support.
        >
        > `prettier.documentSelectors (astro)`
        > and
        > `[astro]: { "editor.defaultFormatter": "esbenp.prettier-vscode" }`
        > are for the Prettier support for Astro files.
        >
        > `eslint.validate` is for the ESLint support.
        >
        > `files.insertFinalNewline` is for the final newline at the end of the file which if set to `false`, you may encounter some problems with Prettier.

1.  Save the file and you are done!

## Getting Started

1. Clone this repository

   ```bash
   git clone https://github.com/isd-sgcu/oph66-frontend.git
   ```

   or download the zip file and extract it.

   > Note: Make sure you go into the directory after cloning or extracting the zip file.
   >
   > ```bash
   > cd oph66-frontend
   > ```

   > 📣 For **Windows** users, please run the following command to prevent line ending issues.
   >
   > ```bash
   > git config --global core.autocrlf false
   > ```

1. Install dependencies

   ```bash
   pnpm install
   ```

   Make sure that all dependencies are installed successfully. And husky should be install!

   The output should look like this:
   [After installlation output](./docs/assets/after-install.png)

1. Run the development server
   ```bash
   pnpm dev
   ```
1. Open [localhost:4321](http://localhost:4321) in your browser. Done!

## Contributing

1. Create a new branch

   ```bash
   git checkout -b <branch-name> origin/dev
   ```

   > Note: In case you don't confident about how to name your branch, the branch name from Linear is a good choice.

1. Make your changes
1. Stage and commit your changes

   ```bash
   git add .

   git commit -m "<commit-message>"
   ```

   > Note: Don't forget to use the [conventional commit format](#conventional-commit-format) for your commit message.

1. Push your changes

   ```bash
   git push origin <branch-name>
   ```

1. Create a pull request to the dev branch in GitHub
1. Wait for the code to be reviewed and merged
1. Repeat

   > Note: Don't forget to always pull the latest changes from the dev branch before creating a new branch.
   >
   > ```bash
   > git pull origin dev
   > ```

**If you have any questions, please contact _Leon_ on Discord.**

**Enjoy! 😋**

### Conventional Commit Format

In short, the commit message should look like this:

```bash
git commit -m "feat: <what-you-did>"

# or

git commit -m "fix: <what-you-fixed>"

# or

git commit -m "refactor: <what-you-refactored>"
```

The commit message should start with one of the following types:

- feat: A new feature
- fix: A bug fix
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- docs: Documentation only changes
- chore: Changes to the build process or auxiliary tools and libraries

For more information, please read the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0/) documentation.
