# Yomitan

[![Chrome Release](<https://img.shields.io/chrome-web-store/v/likgccmbimhjbgkjambclfkhldnlhbnn?logo=Google%20Chrome&logoColor=lightblue&color=lightblue&label=chrome%20release%20(stable)>)](https://chrome.google.com/webstore/detail/yomitan/likgccmbimhjbgkjambclfkhldnlhbnn)
[![Firefox Release](<https://img.shields.io/amo/v/yomitan?logo=Firefox&color=orange&label=firefox%20release%20(stable)>)](https://addons.mozilla.org/en-US/firefox/addon/yomitan/)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/themoeway/yomitan/badge)](https://securityscorecards.dev/viewer/?uri=github.com/themoeway/yomitan)
[![Discord](https://dcbadge.vercel.app/api/server/UGNPMDE7zC?style=flat)](https://discord.gg/UGNPMDE7zC)

:wave: **Yomitan is [the successor](https://foosoft.net/posts/passing-the-torch-to-yomitan/) to Yomichan** ([migration guide](./docs/yomichan-migration.md#migrating-from-yomichan)) which was [sunset](https://foosoft.net/posts/sunsetting-the-yomichan-project/) by her owner on Feb 26, 2023. We have made a number of [foundational changes](#changes) to ensure **the project stays alive, works on latest browser versions, and is easy to contribute to**.

:loudspeaker: **New contributors [welcome](#contributing)!**

:loudspeaker: **Interested in adding a new language to Yomitan? See [here](./docs/development/language-features.md) for thorough documentation!**

---

## What is Yomitan?

Yomitan turns your web browser into a tool for building language literacy by helping you **read** texts that would otherwise be too difficult to tackle in [a variety of supported languages](./docs/supported-languages.md).

!!! note "Yomitan Features"
    Yomitan provides `powerful features` not available in other browser-based dictionaries:
    
    === "Popup"
        - :speech_balloon: Interactive popup definition window for displaying search results.
    === "Audio"
        - :loud_sound: Built-in native pronunciation audio with the ability to add your own [custom audio sources](./docs/audio.md).
    === "Stroke Order"
        - :writing_hand: Kanji stroke order diagrams are just a click away.
    === "Anki"
        - :pencil: [Automatic flashcard creation](./docs/anki-integration.md#anki-integration) for the [Anki](https://apps.ankiweb.net/) flashcard program via the [AnkiConnect](https://foosoft.net/projects/anki-connect) plugin.
    === "Search"
        - :mag: Custom search page for easily executing custom search queries.
    === "Dictionaries"
        - :book: Support for multiple dictionary formats including [EPWING](https://ja.wikipedia.org/wiki/EPWING) via the [Yomitan Import](https://github.com/themoeway/yomitan-import) tool.
    === "Contribute"
        - :sparkles: Clean, modern code makes it easy for developers to [contribute](#contributing) new features and languages.

=== "Yomitan Popup"
    === "Term"
        ![Term definitions](assets/ss/terms.png)
    === "Kanji"
        ![Kanji information](assets/ss/kanji.png)
=== "Yomitan Settings"
    === "Dictionary"
        ![Dictionary options](assets/ss/dictionaries.png)
    === "Anki"
        ![Anki options](assets/ss/anki.png)

[Get started](getting-started/index.md){ .md-button .md-button }