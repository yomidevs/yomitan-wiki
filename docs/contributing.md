## Contributing

🚀 **Dip your toes into contributing by looking at issues with the label [good-first-issue](https://github.com/themoeway/yomitan/issues?q=is%3Aopen+is%3Aissue+label%3Agood-first-issue).**

Since this is a distributed effort, we **highly welcome new contributors**! Feel free to browse the [issue tracker](https://github.com/themoeway/yomitan/issues), and read our [contributing guidelines](./CONTRIBUTING.md).

Here are some ways anyone can help:

- Try using the Yomitan dev build. Not only do you get cutting edge features, but you can help uncover bugs and give feedback to developers early on.
- Document any UI/UX friction in Github Issues. We're looking to make Yomitan more accessible to non-technical users.
- All the issues in `area/bug` older than 2 months need help reproducing. If anything interests you, please try to reproduce it and report your results. We can't easily tell if these issues are one-off, have since been resolved, or are no longer relevant.

> The current active maintainers of Yomitan spend a lot of their time debugging and triaging issues. When someone files a bug report, we need to assess the frequency and severity of the bug. It is extremely helpful if we get multiple reports of people who experience a bug or people who can contribute additional detail to an existing bug report.

If you're looking to code, please let us know what you plan on working on before submitting a Pull Request. This gives the core maintainers an opportunity to provide feedback early on before you dive too deep. You can do this by opening a Github Issue with the proposal.

Some contributions we always appreciate:

- Well-written tests covering different functionalities. This includes [playwright tests](https://github.com/themoeway/yomitan/tree/master/test/playwright), [benchmark tests](https://github.com/themoeway/yomitan/tree/master/benches), and unit tests.
- Increasing our type coverage.
- More and better documentation!

Information on how to setup and build the codebase can be found [here](./CONTRIBUTING.md#setup).

If you want to add or improve support for a language, read the documentation on [language features](./docs/development/language-features.md).

Feel free to join us on [TheMoeWay Discord 🐇](https://discord.gg/UGNPMDE7zC) at [#yomitan-development](https://discord.com/channels/617136488840429598/1081538711742844980).

## Third-Party Libraries

Yomitan uses several third-party libraries to function.

<!-- The following table is generated using the command `npm run license-report:markdown`. -->

| Name                | Installed version | License type | Link                                             |
| :------------------ | :---------------- | :----------- | :----------------------------------------------- |
| @zip.js/zip.js      | 2.7.32            | BSD-3-Clause | git+https://github.com/gildas-lormeau/zip.js.git |
| dexie               | 3.2.4             | Apache-2.0   | git+https://github.com/dfahlander/Dexie.js.git   |
| dexie-export-import | 4.0.7             | Apache-2.0   | git+https://github.com/dexie/Dexie.js.git        |
| yomitan-handlebars  | 1.0.0             | MIT          | n/a                                              |
| parse5              | 7.1.2             | MIT          | git://github.com/inikulin/parse5.git             |
| wanakana            | 5.3.1             | MIT          | git+ssh://git@github.com/WaniKani/WanaKana.git   |
| hangul.js           | 0.2.6             | MIT          | git+https://github.com/e-/Hangul.js.git          |
