---
hide:
  - navigation
  - footer
---

## Keyboard Shortcuts

The following shortcuts are globally available:

| Shortcut                           | Action                   |
| ---------------------------------- | ------------------------ |
| <kbd>Alt</kbd> + <kbd>Insert</kbd> | Open search page.        |
| <kbd>Alt</kbd> + <kbd>Delete</kbd> | Toggle extension on/off. |

The following shortcuts are available on search results:

| Shortcut                         | Action                                  |
| -------------------------------- | --------------------------------------- |
| <kbd>Esc</kbd>                   | Cancel current search.                  |
| <kbd>Alt</kbd> + <kbd>PgUp</kbd> | Page up through results.                |
| <kbd>Alt</kbd> + <kbd>PgDn</kbd> | Page down through results.              |
| <kbd>Alt</kbd> + <kbd>End</kbd>  | Go to last result.                      |
| <kbd>Alt</kbd> + <kbd>Home</kbd> | Go to first result.                     |
| <kbd>Alt</kbd> + <kbd>Up</kbd>   | Go to previous result.                  |
| <kbd>Alt</kbd> + <kbd>Down</kbd> | Go to next result.                      |
| <kbd>Alt</kbd> + <kbd>B</kbd>    | Go to back to source term.              |
| <kbd>Alt</kbd> + <kbd>E</kbd>    | Add current term as expression to Anki. |
| <kbd>Alt</kbd> + <kbd>R</kbd>    | Add current term as reading to Anki.    |
| <kbd>Alt</kbd> + <kbd>P</kbd>    | Play audio for current term.            |
| <kbd>Alt</kbd> + <kbd>K</kbd>    | Add current kanji to Anki.              |

Shortcuts are configurable in the "Shortcuts" section of the settings page.

---

## Advanced Scanning Options

### Scanning local files

To enable Yomitan scanning on local files, go to `Settings` > `Security` > `Configure Yomitan Permissions`, and navigate to the `Allow access to file URLs` option. From there, follow the link to the browser's settings pages, and check `Allow access to file URLs` on Chrome/Edge, or `Access your data for all websites` for Firefox.

Yomitan may not work on PDF files. When that happens, drag and drop your PDF file into [our PDF Viewer](../yomitan-pdf-viewer/index.html).

### Scanning in private windows

To enable Yomitan scanning in private/incognito web browser windows, go to `Settings` > `Security` > `Configure Yomitan Permissions`, and navigate to the `Allow in private windows` option. From there, follow the link to the browser's settings pages, and check `Allow in private windows` on Chrome/Edge, or `Run in Private Windows` for Firefox.

---

## Audio

### Default audio sources

After looking up a term, you can click on the ![](assets/icon/play-audio.svg){ width="16" } _speaker_ button to hear the term's pronunciation. When searching for audio, multiple audio sources are checked until the first source with audio for the term is found. If no audio is found, you will hear a short click instead. Right-clicking the ![](assets/icon/play-audio.svg){ width="16" } button allows choosing the source manually.

#### Japanese

The default audio sources for Japanese are:

- JapanesePod101
- Jisho.org

#### Other languages

The default audio sources for other languages are from Wikimedia Commons:

- Lingua Libre
- Wiktionary
- LanguagePod101

While Commons has audio for many languages, some of them have limited coverage, and you may want to add additional sources, as described below.

### Configuration

Audio sources can be configured in `Settings` > `Audio` > `Configure audio playback sources` to reorder them or add new ones. Besides the four sources mentioned above, you can also use your browser's inbuilt text-to-speech (TTS) engine or add a custom URL source:

#### Text-to-speech (TTS)

To enable this, just add a new playback source with the `Text-to-speech` type and choose your desired voice. This is the simplest way to get pronunciation audio, though there a few points to keep in mind:

- TTS voices vary between browsers and so might not support all languages. For instance, [Microsoft Edge](https://www.microsoft.com/en-us/edge) offers a wide selection of free Azure natural voices for a variety of languages. Edge provides over 300 voices, compared to around 25 in Google Chrome (see [here](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support?tabs=stt) for a list of supported languages).
- TTS audio can be inaccurate for languages with complex pronunciation such as Japanese, where words can have multiple possible readings and pitch accents.
- ⚠️ Note that the TTS voices cannot be sent to Anki; this is a [limitation of the browser SpeechSynthesis API](https://github.com/yomidevs/yomitan/issues/864).

#### Custom URL

You can add a custom URL from which audio will be fetched. One use case for this is fetching audio from Forvo:

#### Yomichan Forvo Server

[Forvo](https://forvo.com/) is currently the largest online pronunciation database, with native pronunciation audio for various languages. One way to get Forvo audio in Yomitan is via the [Yomichan Forvo Server](https://ankiweb.net/shared/info/580654285) Anki add-on. It fetches from Forvo, at the cost of a slight delay. After installing it in Anki, add a `Custom URL (JSON)` audio source with the URL `http://localhost:8770?term={term}&reading={reading}&language=en` (replacing `en` with the desired language's ISO code).

---

## Advanced Options

Click the `Advanced` toggle switch in the bottom left corner of the Settings page to enable advanced options.

### Parse sentences using MeCab

[MeCab](https://taku910.github.io/mecab/) is a third-party program which uses its own dictionaries and parsing algorithm to decompose sentences into individual words. MeCab may provide more accurate parsing results than Yomitan's internal parser.

In order for Yomitan to use it, both MeCab and a native messaging component must be installed.
A setup guide can be found [here](https://github.com/yomidevs/yomitan-mecab-installer/blob/master/README.md).
