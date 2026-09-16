# Deutsch — CEFR Course & Tutor v3.2

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
- updates the PWA cache to `deutsch-v3.1.0`
- preserves the V3 visual design and six-step Unit 1 navigation


## Version 3.2 startup fix

- fixes the JavaScript startup syntax error caused by the browser global `top`
- renames the internal scroll helper to `scrollPageTop()`
- updates the PWA cache to `deutsch-v3.2.0` so browsers fetch the corrected files
- preserves the V3 visual design, progress data and six-step Unit 1 lesson flow
