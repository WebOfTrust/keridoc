# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Origin

Mid 2024 we've split up old WOT-terms repo into:

- [kerisse](https://github.com/WebOfTrust/kerisse) : search engine (Typesense-based [github.io site](https://weboftrust.github.io/kerisse/))
- new [WOT-terms](https://github.com/WebOfTrust/WOT-terms): glossary, solely focussed on terminology, filtering, and connect to source management (Docusaurus-based [github.io site](https://weboftrust.github.io/WOT-terms/?level=2))
- [keridoc:](https://github.com/WebOfTrust/keridoc) KERI documentation site (Docusaurus-based: [github.io site](https://weboftrust.github.io/keridoc/?level=2))

Apart from this, we still have:
- [kerific](https://github.com/WebOfTrust/kerific): SSI-terminology dictionary including KERI terms (browser extension for Brave/Edge/Chrome).
