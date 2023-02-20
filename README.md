# Opinionated template for creating Svelte libraries

A highly opinionated template for getting started with developing a component/branding library, with minimal configuration on your part.

## Features

- CI pipeline that handles:
  - Creating a new release on Github.
  - Automatic `CHANGELOG.md` creation derived from commit-messages.
  - Running tests.
  - Pre-processing CSS.
  - Publishing to NPM.
- Unit-testing with Vitest.
- Story-creation with Histoire.
- Example CSS-tokens and utility-classes.

## Setup dev-environment from this template

1. **Create an instance of the template** by pressing the green `Use this template` button on the top of this page.

2. **Clone the repository** you created to your local machine
   1. Press the green `Code` button on the top of your repository page, and copy the `HTTPS` link.

        > Alternatively, you can use SSH, but you will need to set up SSH-keys on your machine.

   2. Run `git clone [YOUR_REPO_LINK]` in your terminal.

3. **Install pnpm** by running `npm install -g pnpm`

4. **Install dependencies** with `pnpm install`

5. **Run the dev-server** with `pnpm story:dev`

Now you can start developing your library.

## Setup CI to publish to NPM

### 1. **Create a new secret in Github with your NPM token**

Go to your Github repository > `Settings` > `Secrets` > `New repository secret`. It's name should be `NPM_ACCESS_TOKEN` and should have your NPM token as its value.

> If you are unsure how to create a NPM token, follow [this guide](https://docs.npmjs.com/creating-and-viewing-access-tokens).
>
> You can update the registry you wanna publish to in the `.github` / `npm-publish.yml` file. This template is set up to publish to the NPM-registry by default.

### 2. **Rename the library**

Under the `name` property in `package.json`, replace `[NPM_ACCOUNT_NAME]` with your npm account-name, and `[NPM_PACKAGE_NAME]` with your library name. (Also remove the brackets)

### 3. **Tell semantic release what repository to use**

Under the `repository` property in `package.json`, replace `[GITHUB_USERNAME]` with your Github username, and `[GITHUB_REPOSITORY_NAME]` with the name of your Github repository. (Also remove the brackets)

## Creating a new release of your library

1. Setup CI as described above.
2. Create a new branch for your release.
3. Make your changes.
4. When commiting your changes, be sure to format your commit-message according to [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). This is needed for semantic-release to be able to create a new release.

   > For example, if you are adding a new feature, your commit-message should be
   >
   > `feat: [my new cool feature]`

   Alternatively, you can use a CLI wizard like [commitizen](https://commitizen-tools.github.io/commitizen/) to help you format your commit-messages.

5. Push your changes to Github.
6. Create a pull-request to merge your changes into the `master` branch.
7. Once you have merged your changes into the `master` branch, a new release will be created automatically, once the pipeline has finished running.

## Learn more about the tools used in this template

- [Svelte](https://svelte.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [pnpm](https://pnpm.io/)
- [Histoire](https://histoire.dev)
- [LightningCSS](https://lightningcss.dev/)
- [Vitest](https://vitest.dev/)
- [Semantic Release](https://semantic-release.gitbook.io/semantic-release/)

## Configuration

- `browserlist` - Configures target browsers for CSS-transpilation. You can use [this site](https://browsersl.ist/) to help configure a list of browsers you want to support.
