# Deutsch — CEFR Course & Tutor v3.5

A mobile-first, long-term German learning PWA built around a structured CEFR pathway.

## Version 3

- professional visual refresh with German-inspired illustration and colour
- corrected true single-column mobile layout
- Unit 1 rebuilt as a six-step sequential lesson
- Back / Continue navigation with saved lesson position
- unit completion only appears at the end of the lesson
- interactive answer feedback and persistent practice record
- German text-to-speech for dialogue, vocabulary and speaking models
- improved placement, progress and completion screens
- existing v2 learner progress migrates automatically
- offline-capable service worker with a new v3 cache

The course content is original and organised around CEFR-style communicative outcomes. It is not an official Goethe-Institut product or CEFR examination.

GitHub Pages: publish `main` from `/ (root)`.


## Version 3.1 reliability fix

- fixes the app hanging on “Loading your course…”
- loads course data directly from a versioned JavaScript data module
- keeps JSON course files for future curriculum editing
- adds a visible startup error instead of an indefinite loading screen
- updates the PWA cache to `deutsch-v3.4.0`
- preserves the V3 visual design and six-step Unit 1 navigation


## Version 3.2 startup fix

- fixes the JavaScript startup syntax error caused by the browser global `top`
- renames the internal scroll helper to `scrollPageTop()`
- updates the PWA cache to `deutsch-v3.4.0` so browsers fetch the corrected files
- preserves the V3 visual design, progress data and six-step Unit 1 lesson flow


## Version 3.4
- realistic German landmark photography throughout the mobile interface
- reduced mobile hero height and tighter typography
- safer bottom-navigation spacing on iPhone
- consistent photographic CEFR pathway thumbnails
- photographic dialogue, placement and completion artwork
- preserves the working six-step Unit 1.1 lesson flow and saved progress

## Version 3.5
- Replaces screenshot/collage crops with four standalone AI-generated realistic German scenes, optimized as 1536 × 1024 JPEGs.
- Consistent scene framing, compact cards and headings, polished navigation, and a photographic progress header.
- Retains the six-step Unit 1 flow, course data, speech, scoring, and existing deutsch-v3 / deutsch-v2 progress keys.
- Cache version deutsch-v3.5; cache cleanup is limited to Deutsch caches.
- Built from repository V3.4 commit f06a14d7a55ec04835f0cdb7dbec6ae4ae26f2a2 because the referenced /mnt/data ZIP was not available locally.
- Existing navigation has Home, Course, Placement and Progress; no separate menu route was present.

### Asset provenance
Generated using the built-in image generation tool. Prompts requested separate natural travel/editorial photographs of Cologne Cathedral and the Rhine, Brandenburg Gate, two coffee cups at a German old-town cafe, and Neuschwanstein Castle; warm natural light, realistic texture, landscape 3:2 framing, no text, UI, collage or watermark. Placement uses the Cologne scene. These are AI-generated representations, not documentary photographs.
