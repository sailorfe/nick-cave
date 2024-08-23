# Nick Cave lyric database

Kind of foolish to start this a week before *Wild God*, but here I am. I realize the main feature of this tempalte is `scraper.py` that uses Genius' API, but as far as I'm concerned, any lyric website is a secondary source when Nick Cave publishes all NC&TBS and Grinderman himself (old man blogger 🖤). I'm basically doing this by hand:

```python
ARTIST_ID = 1177
API_PATH = "https://api.genius.com"
ARTIST_URL = API_PATH + "/artists/" + str(ARTIST_ID)
CSV_PATH = 'songs.csv'
LYRIC_PATH = 'lyrics.csv'
LYRIC_JSON_PATH = 'lyrics.json'
SONG_LIST_PATH = 'song_titles.txt'
```

The lyrics in this dataset are all copy and pasted verbatim from [Nick Cave's official website](https://www.nickcave.com/lyrics/) as of 2024/08/22 besides these editorial choices:

- "There Is A Kingdom:" Added linebreak that looked missing between "Just like a bird  / That sings up the sun"
- *Abattoir Blues / The Lyre Of Orpheus* are split into two albums.
- "O Children:" Was missing spaces after each "Hey little train!"
- All of *Grinderman 2* except for "Palaces of Montezuma:" Removed double linebreaks.
- "Anthrocene:" Removed double linebreaks.
- "I Need You:" Removed double linebreaks.
- "Distant Sky:" [Does not currently have a lyric up](https://www.nickcave.com/lyric/distant-sky/), so this is transcribed.
- "Skeleton Tree:" Removed double linebreaks.
- All of *Carnage*: Removed double linebreaks.
- "Wild God": Removed double linebreaks, and I suspect will do for the rest of the album.

**Quirks**
- I refuse to edit *DIG!!! LAZARUS DIG!!!* for legibility/scrapabilty. He was on some poetic puncutation kick that I respect.
- He writes just "Chorus" or "(Chorus)" on "Babe, I'm On Fire" and "Let The Bells Ring." I may or may not replace those with the actual chorus text later.
- "Hollywood" has a four asterik ("****") divider; included because Nick does despite not being telligible lyrically
- "White Elephant" has a dedication "*For Thomas H*"; see previous reasoning

## Changelog

### 2024 Aug 22
- Created `album_map.json`, `lyrics.csv`, `lyrics.json`, `songs.csv` and `song_titles.txt`.
- Deleted `scraper.py`,  `local.py.default` and `requirements.txt` now that I've realized I did this shit by hand and more faithfully tbh


