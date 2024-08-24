# Nick Cave lyric database

Kind of foolish to start this a week before *Wild God*, but here I am. This template's scraper uses Genius API but as far as I'm concerned, any lyric website is a secondary source when Nick Cave publishes all NC&TBS and Grinderman himself (old man blogger 🖤). The lyrics in this dataset are all copy and pasted verbatim from [Nick Cave's official website](https://www.nickcave.com/lyrics/) as of 2024/08/22 besides these editorial choices:

- "There Is A Kingdom:" Added linebreak that looked missing between "Just like a bird  / That sings up the sun"
- "O Children:" Was missing spaces after each "Hey little train!"
- All of *Grinderman 2* except for "Palaces of Montezuma:" Removed double linebreaks.
- "Anthrocene:" Removed double linebreaks.
- "I Need You:" Removed double linebreaks.
- "Distant Sky:" [Does not currently have a lyric up](https://www.nickcave.com/lyric/distant-sky/), so this is transcribed.
- "Skeleton Tree:" Removed double linebreaks.
- All of *Carnage*: Removed double linebreaks.
- "Wild God": Removed double linebreaks, and I suspect will do for the rest of the album.

Additionally,

- I will not edit *DIG!!! LAZARUS DIG!!!* for legibility.
- He writes just "Chorus" or "(Chorus)" on "Babe, I'm On Fire" and "Let The Bells Ring." I may or may not replace those with the actual chorus text later.
- "Hollywood" include a four asterik ("****") divider because Nick does
- "White Elephant" includes a dedication "*For Thomas H*"
- It would be nice to have The Birthday Party/Boys Next Door, but the project's whole thing is fidelity to his published lyrics.

## Changelog

### 2024 Aug 24
- Updated license.
- Deleted `album_map.json` and `song_titles.txt`.

### 2024 Aug 23
- *Abattoir Blues / The Lyre of Orpheus* are back to being one album;
    `album_map.json`, `lyrics.csv`, `lyrics.json`, `songs.csv` edited.

### 2024 Aug 22
- Created `album_map.json`, `lyrics.csv`, `lyrics.json`, `songs.csv` and `song_titles.txt`.
- Deleted `scraper.py`, `local.py.default` and `requirements.txt`.

