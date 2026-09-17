# Deutsch — CEFR Course & Tutor v3.6

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

## Version 3.6 — complete A1 course sequence

- Six connected A1 modules, 24 units (18 lessons and six checkpoints), 160 guided activities.
- Each unit includes outcomes, contextual dialogue, reading, device-based German listening, vocabulary, patterns, guided answers, original writing and speaking self-checks.
- Unit-specific saved steps, answers and writing drafts; completion unlocks the next unit and Home resumes the appropriate unfinished lesson.
- All guided activities must be attempted with at least 80% correct. Checkpoints provide feedback after submission and support retries. Free writing and speaking are explicitly self-assessed.
- Per-activity rewards are awarded once; incorrect items remain in a review list until corrected.
- Existing deutsch-v3/deutsch-v2 completion and points migrate without resetting. Earlier Unit 1.1 completion is retained and its expanded content can be reviewed.
- A1 progress uses all 24 units; A2–C2 are clearly marked as future content.
- V3.5 imagery and PWA folder structure are retained. Cache: deutsch-v3.6.

See [the A1 syllabus](data/A1-SYLLABUS.md) for outcomes, sequence and source references. The course is an original learning sequence mapped to CEFR A1; completing it is not a certificate or an independently assessed proficiency result. Additional real conversation and repeated listening are recommended.

### Content maintenance

`data/a1-units.json` contains all A1 lessons. `data/curriculum.json` controls module order. `data/unit-1.json` mirrors the first lesson for compatibility. `data/course-data.js` must contain the same data for direct loading without runtime JSON fetching. Keep these files synchronized and update the service-worker cache for every release.

### Audio and assessment limits

Audio uses the browser speech API and an installed German system voice. Availability and offline voice support vary by device. The app shows an explicit message when no German voice is available; transcript support remains accessible and is recorded. It does not record speech or automatically assess pronunciation. Guided written answers accept the specified target phrases plus listed alternatives, normalizing punctuation, case and common umlaut transliterations. Other valid expressions may need human feedback. No private user data is uploaded by the app.
