# Winterwarm — design and verification report

## Direction and idea

Applied the user's updated `022-design-taste-frontend.zip`, freshly loaded from the design skill page. Full SKILL.md, copy and critique references were read.

Direction: **The dark room**, seed **1120611301**. The three options dealt were Place carries it, Name as a monument and Dark room. Dark room was chosen because it continues the explicitly approved architectural scene and exhibits the real XR+ unit within a coherent navy field.

The dealt hero “two prints in darkness” was not imposed: the user explicitly asked to preserve the v3 upper scene. Palette and typography were kept from that approved design, rather than blindly replacing them with another random pair. New inner pages use the same grid and typography, with large real photographs and practical information. No new stock imagery was needed.

Idea: **Winterwarm's HVAC, access and light offering becomes three selectable zones in one building, then three real destinations in the site.** The same choices drive navigation, building exploration, catalog filtering and routing of the project brief. The idea is specific to the company's combination of departments, although not exclusive to it; creativity is capped at 7 in the self-review rather than presented as a novel invention.

## Subject inventory

- Jasin office, Wiejska 32a, 62-020 Swarzędz.
- Separate Bugaj warehouse, Kobylnicka 52, with earlier closing time.
- HVAC, access/building partitions and LED departments with distinct phone/email contacts.
- The physical XR+ heater and its genuine product cutout.
- Nine XR+ models with published nominal output/airflow/mass data.
- Skyline linear modules and WLL600/WLL610 profiles.
- Skyline's published maximum 163 lm/W figure.
- Genuine company team photograph, not invented staff biographies.
- Existing warehouse and showroom photographs.
- The original numbered building diagram covering both mechanical and access zones.
- Existing navy/orange identity; approved DM Serif Display/Hanken Grotesk pairing.
- Weekday office/warehouse hours and direct contact as the principal conversion path.

## Page argument

The visitor is an investor, designer, contractor or building manager. First establish the relevant building need, then the relevant engineering department, then real offer information, then prepare a useful inquiry. The site does not pretend a floor-area-only selection is an engineering design.

- Home: the whole building is the unit of work → real divisions, unit, diagram, photos, team and direct contacts.
- Division pages: the scope is concrete → actual named product families, use contexts and next questions.
- Catalog: find an appropriate family → 22 searchable/filterable source-grounded records.
- XR+: assess the published series → specific features and a nine-model technical comparison.
- Skyline: understand the linear system → features and a clearly sourced technical definition list.
- Gates/docks: understand the offer → actual listed manufacturers and information required for selection.
- Object guide: structure the initial conversation → a useful selection interface and honest limitations.
- Company/gallery: see the genuine team and material → no fabricated clients or case-study results.
- Contacts/brief: reach the correct department → actual contacts, validated local composition, mailto and text export.

## Visual review

ROUND 1
Seen in one second: large serif headline, navy field, real engineering image.
Idea: three engineering zones become one coherent building/site journey.
Live thing: building zones, catalog and inquiry routing.
Layout words by section: hero=cinematic / offer=interactive split / product=object / building=map / gallery=offset / company=team / contact=directory.
Scores: design 7.1 · usability 7.1 · creativity 7.0 · content 7.6 → overall 7.1.
Caps applied: nearest-competitor test caps creativity at 7.
Top three problems:
1. Closing and product headlines overran two lines at desktop/tablet widths → shortened the copy and gave tablet inner-page titles a full-width composition.
2. Catalog repeated representative photographs and squeezed mobile text into a narrow column → retain photographs only for three representative entries and use full-width text rows on phones.
3. Footer had an unintentional stacked desktop layout and feature sections looked too card-like → explicit footer grid, open editorial feature lists and staggered process text.

ROUND 2
Seen in one second: a coherent dark industrial editorial site, not a default card-grid landing page.
Idea: three departments stay connected through real routes and the visitor's brief.
Live thing: all main destinations, live search, filters, model selection, object selection and brief export.
Layout words by section: hero=scene / division=photo / features=open list / specs=table / portfolio=offset / contact=directory / inquiry=form.
Scores: design 7.7 · usability 8.0 · creativity 7.0 · content 7.8 → overall 7.7.
Caps applied: creativity capped at 7; this is a subjective editorial assessment, not an independent award or external audit.
Remaining limitations: category photos are not high-resolution bespoke art direction; full original-model product cards are not all rebuilt locally; no backend/CMS or live deployment. These are explicitly documented rather than disguised with fabricated content.

## Actual verification

- 15 routes, including 404, measured at 1440, 768 and 390 px: **45 responsive audits**.
- No page-level horizontal overflow, missing images, JavaScript page errors or main headings beyond two lines in those tests.
- **23 functional checks passed**: tabs/keyboard, building zones, mobile menu/Escape, search, catalog URL filter, query, empty state/reset, XR model highlight, object chooser, brief prefill/validation/department routing/content/download/invalidation, privacy dialog, preview navigation and browser back.
- All **15 standalone-preview routes** verified separately for correct title, one H1, no horizontal overflow or page errors.
- **478 local link/resource/fragment targets** validated; no missing targets or duplicate IDs; labels resolve to controls.
- No-script check: readable content, all catalog entries, primary/project contact links, and disabled brief submission so private data cannot accidentally be submitted by a fallback GET.
- Motion measured without reduced motion: homepage 29 moving elements, HVAC 23, LED 16, XR+ 17. Reduced-motion behavior was used throughout responsive screenshot checks.
- Core contrast pairs calculated: body 16.53:1, secondary text 9.39:1, primary button 6.90:1, field boundary 4.21:1. This is not a complete automated accessibility certification.
- Updated skill source linter: **0 FAIL, 1 WARN**. Remaining 1px-border warning is for genuine form inputs/selects and is retained for usable control boundaries.
- The original skill `inspect.mjs` was attempted on both the baseline and new HVAC page; it failed with a Chromium CDP `Internal error` before producing a complete report. It is **not claimed as passed**. Standalone Playwright responsive/function checks, motion/contrast checks and the mandatory capture helper were used for verification instead.
- Actual desktop/mobile page PNGs were visually opened individually. Representative tablet hero, catalog and form compositions, plus search, brief result and other key states, were also opened. No blanket claim of an independent audit is made.
- No email, CRM request, analytics event or external form submission was sent during testing.

## Deliberate exceptions and handoff

The photographic floor applies to editorial marketing pages, not to adding four irrelevant pictures to a contact directory, form, error state or compact technical catalog. Those utility pages prioritize readable factual controls. Technical tables, form borders, taxonomy labels and actual product-choice interfaces retain their useful interface conventions. The home photographic scrim is the neutral-photo exception, not a decorative gradient.

All real photos come from the client's material; attribution and rights caveats are in SOURCES.md and the site's footer. No found stock image, creator identity or license has been invented. The only generated scene is clearly labeled. There are no fabricated numerical demo business facts to replace, but published source data, legal wording, image rights and technical model details must be confirmed before going live. See README-RU.md for deployment and backend boundaries.
