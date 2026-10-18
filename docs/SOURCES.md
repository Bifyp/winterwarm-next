# Sources, rights and content boundaries

## Factual sources consulted

- https://winterwarm.pl/ — offer structure, categories, LED families, departmental contacts, office and warehouse, published figures and use cases.
- https://winterwarm.pl/o-nas/ — team, advisory/design/installation/service scope and company context. The source has inconsistent experience-year wording in different sections; no new timeline was invented. The explicitly published figures are attributed as source-site figures.
- https://winterwarm.pl/ogrzewanie-nadmuchowe/ — XR+, HR, EH, QwikShift, WWH and variants.
- https://winterwarm.pl/nagrzewnica-winterwarm-xr/ — XR+ features and selected technical parameters for nine models. The table uses nominal heat output, not maximum heat input; these are distinct measures.
- https://winterwarm.pl/skyline/ — Skyline features, maximum efficacy and technical data.
- https://winterwarm.pl/przegrody-drzwi-bramy-doki/bramy-i-doki/ — gates and docks, Wiśniowski and Krispol offer names.
- https://grind.co.uk/pages/grind-sustainability — earlier typography reference for v3; no Grind brand assets or proprietary type copied.

External catalog destinations were taken from these sources. Not every external URL or future redirect is independently availability-tested. Technical data and contact information are not live-synced; confirm before publication.

## Asset provenance

All nine content images were replaced with original AI-generated concept illustrations at the user's request. No company product, team or installation photographs remain in the content image set. These fictional scenes are not evidence of actual projects, company premises or the appearance of a named product. The generic heater does not depict an XR+ model, and generic lighting does not depict a Skyline model.

The rendered company wordmark has been removed and replaced by literal text “ЛОГО”. The favicon is a generic letter, and content, product names, contact information and SEO descriptions have been replaced by neutral template material. Historical source URLs below document earlier research, not current endorsement or current copy.

| Local image                   | Subject                                                                         |
| ----------------------------- | ------------------------------------------------------------------------------- |
| `assets/ai-hero-v1.webp`      | Koncepcyjna hala przemysłowa z ogrzewaniem — ilustracja AI                      |
| `assets/ai-heater-v1.webp`    | Koncepcyjna nagrzewnica bez marki — ilustracja AI, nie zdjęcie modelu XR+       |
| `assets/ai-office-v1.webp`    | Koncepcyjne biuro techniczne — ilustracja AI, nie siedziba firmy                |
| `assets/ai-showroom-v1.webp`  | Koncepcyjny salon samochodowy — ilustracja AI                                   |
| `assets/ai-workshop-v1.webp`  | Koncepcyjna hala z ogrzewaniem — ilustracja AI                                  |
| `assets/ai-warehouse-v1.webp` | Koncepcyjny magazyn z instalacjami — ilustracja AI                              |
| `assets/ai-doors-v1.webp`     | Koncepcyjne bramy przemysłowe — ilustracja AI                                   |
| `assets/ai-lighting-v1.webp`  | Koncepcyjna hala z oświetleniem LED — ilustracja AI, nie zdjęcie modelu Skyline |
| `assets/ai-building-v1.webp`  | Koncepcyjny przekrój budynku przemysłowego — ilustracja AI                      |

Images are optimized as WebP, embedded in `asset-source/*.b64`, verified by SHA-256 during the build, and restored under fresh filenames to avoid serving cached old photographs. Historical base64 source filenames are retained for transport only; their content is now generated artwork.

## Fonts and code

DM Serif Display and Hanken Grotesk are locally embedded under their SIL Open Font Licenses; full license files are included. There are no runtime Google Fonts requests. The current site uses Next.js, React and TypeScript; Prisma/PostgreSQL scaffolding is included but not yet wired into the catalog or inquiry API. There are no runtime Google Fonts requests.

The updated design skill is a development tool, not part of the delivered browser runtime. Its reference-image library, source code and research are not bundled with the public site.

## No invented proof

No customer testimonials, named client contracts, savings figures, certifications beyond attributed product facts, prices, availability, engineering sizing results or successful form submissions have been fabricated. The site does not calculate a required heater power from floor area. No emails were sent during testing.

## Visible illustration links

`lib/photo-sources.ts` maps every content image to its displayed local AI-generated file. Keyboard-accessible “Ilustracja AI” badges open that exact file in a new tab with `noopener noreferrer`; none links to or implies a company original. They track clipping, scrolling and dynamic image selection and hide behind modal dialogs and the mobile menu. The footer, per-visit warning and gallery explicitly disclose fictional AI imagery.
