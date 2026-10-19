# Rank AI — Restoration Astro Starter

**Version:** see `VERSION`
**Owner:** restorationai
**Purpose:** Canonical Astro starter for Rank AI restoration-industry client sites.

## What this is

The deterministic Astro template that Skill 3 (`rank-ai-build-site`) clones per client, theming via tokens and populating via content collections. Every Rank AI client site is a copy of this directory plus per-client content and brand config.

## What this is not

- Not a stand-alone Astro project — `{{TOKEN}}` placeholders are substituted at scaffold time and will break direct `npm install && npm run build` until Skill 3 runs.
- Not per-client customizable in the starter — per-client variation lives in three places only:
  1. Brand tokens (colors, logo, fonts, NAP) — replaced at scaffold
  2. Content collection markdown — produced by `render`
  3. Domain binding — set by `cut-over`

If you find yourself wanting to fork the starter per client, instead update this starter and version-bump. All existing client sites stay pinned to their build's starter version.

## Token reference

These `{{TOKEN}}` strings are substituted by `build_site.py scaffold` from `plan-input.json` and the client record. Adding a new token requires updating both this starter and the scaffold step.

| Token | Source | Example |
| --- | --- | --- |
| `quality-contracting-inc` | client record `slug` | `narestco` |
| `Quality Contracting, Inc.` | plan-input `brand.display_name` | `National Restoration Construction` |
| `Quality Contracting, Inc.` | plan-input `brand.short_name` | `NARESTCO` |
| `Quality Contracting, Inc.` | plan-input `brand.legal_name` | `National Restoration Construction LLC` |
| `qcirestoration.com` | client record `domain` | `narestco.com` |
| `https://qcirestoration.com` | derived | `https://narestco.com` |
| `(508) 756-8800` / `+15087568800` | brand.phone | `(206) 883-0333` / `+12068830333` |
| `info@qualitycontracting.us` | brand.email | `info@narestco.com` |
| `24/7` | brand.hours | `24/7` |
| `` | brand.founded_year | `2004` |
| `Auburn` / `MA` | derived from primary area | `Federal Way` / `WA` |
| `211 Southbridge Street` / `01501` | brand.street_address / brand.postal_code | |
| `42.1945465` / `-71.8358095` | brand.lat / brand.lng | from GBP |
| `ChIJ9wuzUNMF5IkR23w7vv0t_Hc` / `` | brand.place_id / brand.google_cid | from GBP |
| `[]` | brand.license_numbers (JSON-encoded array) | `["NATIORC792M6"]` |
| `` / `` | brand.license_authority / brand.license_type | |
| `[]` | brand.certifications (JSON-encoded array) | `["IICRC", "BBB Accredited"]` |
| `["https://www.facebook.com/qualcon534/", "https://www.linkedin.com/company/quality-contracting-inc-"]` | brand.same_as_urls (JSON-encoded array) | |
| `` / `` | from GBP | `5.0` / `31` |
| `24/7 restoration services in Auburn, MA.` | brand.tagline | short marketing line |
| `#dc0a0e` etc. | brand.colors (set per client or default to restoration palette) | `#0b3a7a` |
| `Inter` / `Inter` | brand.fonts | `Inter` / `Inter` |
| `/images/logo.png` / `QC` | derived; logo lives on the per-client R2 bucket | |
| `https://images.qcirestoration.com` | `https://images.{domain}` | |
| `- [Air Duct Cleaning](https://qcirestoration.com/services/air-duct-cleaning/)
- [Asbestos Abatement](https://qcirestoration.com/services/asbestos-abatement/)
- [Biohazard Cleanup](https://qcirestoration.com/services/biohazard-cleanup/)
- [Carpet Cleaning](https://qcirestoration.com/services/carpet-cleaning/)
- [Contents Restoration and Storage](https://qcirestoration.com/services/contents-restoration/)
- [Contents Restoration & Storage](https://qcirestoration.com/services/contents-restoration-storage/)
- [Crawl Space Encapsulation](https://qcirestoration.com/services/crawl-space-encapsulation/)
- [Emergency Board-Up and Tarping](https://qcirestoration.com/services/emergency-board-up-tarping/)
- [Emergency Plumbing](https://qcirestoration.com/services/emergency-plumbing/)
- [Fire Damage Restoration](https://qcirestoration.com/services/fire-damage-restoration/)
- [Renovations, Remodels and General Contracting](https://qcirestoration.com/services/general-contracting/)
- [Mold Remediation](https://qcirestoration.com/services/mold-remediation/)
- [Odor Removal and Deodorization](https://qcirestoration.com/services/odor-removal/)
- [Post-Construction and Specialty Cleaning](https://qcirestoration.com/services/post-construction-cleaning/)
- [Roofing Installation and Replacement](https://qcirestoration.com/services/roofing/)
- [Sewage Cleanup and Sanitization](https://qcirestoration.com/services/sewage-cleanup/)
- [Storm Damage Restoration](https://qcirestoration.com/services/storm-damage-restoration/)
- [Vandalism Cleanup](https://qcirestoration.com/services/vandalism-cleanup/)
- [Water Damage Restoration](https://qcirestoration.com/services/water-damage-restoration/)
- [Water Leak Detection](https://qcirestoration.com/services/water-leak-detection/)` / `- [Auburn, MA](https://qcirestoration.com/service-areas/auburn-ma/)
- [Worcester, MA](https://qcirestoration.com/service-areas/worcester-ma/)
- [Shrewsbury, MA](https://qcirestoration.com/service-areas/shrewsbury-ma/)
- [Westborough, MA](https://qcirestoration.com/service-areas/westborough-ma/)
- [Southborough, MA](https://qcirestoration.com/service-areas/southborough-ma/)
- [Hopkinton, MA](https://qcirestoration.com/service-areas/hopkinton-ma/)
- [Framingham, MA](https://qcirestoration.com/service-areas/framingham-ma/)
- [Natick, MA](https://qcirestoration.com/service-areas/natick-ma/)
- [Wellesley, MA](https://qcirestoration.com/service-areas/wellesley-ma/)
- [Needham, MA](https://qcirestoration.com/service-areas/needham-ma/)
- [Newton, MA](https://qcirestoration.com/service-areas/newton-ma/)
- [Weston, MA](https://qcirestoration.com/service-areas/weston-ma/)
- [Oxford, MA](https://qcirestoration.com/service-areas/oxford-ma/)
- [Whitinsville, MA](https://qcirestoration.com/service-areas/whitinsville-ma/)
- [East Douglas, MA](https://qcirestoration.com/service-areas/east-douglas-ma/)
- [Northborough, MA](https://qcirestoration.com/service-areas/northborough-ma/)
- [Southbridge Town, MA](https://qcirestoration.com/service-areas/southbridge-town-ma/)
- [Sturbridge, MA](https://qcirestoration.com/service-areas/sturbridge-ma/)
- [Fiskdale, MA](https://qcirestoration.com/service-areas/fiskdale-ma/)
- [Milford, MA](https://qcirestoration.com/service-areas/milford-ma/)
- [Marlborough, MA](https://qcirestoration.com/service-areas/marlborough-ma/)
- [Hudson, MA](https://qcirestoration.com/service-areas/hudson-ma/)
- [Bellingham, MA](https://qcirestoration.com/service-areas/bellingham-ma/)
- [Ware, MA](https://qcirestoration.com/service-areas/ware-ma/)
- [Leominster, MA](https://qcirestoration.com/service-areas/leominster-ma/)
- [Franklin Town, MA](https://qcirestoration.com/service-areas/franklin-town-ma/)
- [Palmer Town, MA](https://qcirestoration.com/service-areas/palmer-town-ma/)
- [Maynard, MA](https://qcirestoration.com/service-areas/maynard-ma/)` / `Available on request` / `Southern New England, with crews responding across a 50 mile radius of Auburn` | computed at scaffold from plan + brand | |

## File layout

See `rank-ai/docs/build-site-skill-spec.md` § Outputs for the canonical tree.

## Content collections

`src/content/config.ts` defines the schemas every page entry must match. The collections map to the Astro routes:

| Collection  | Route file                                             | Frontmatter must include                   |
| ----------- | ------------------------------------------------------ | ------------------------------------------ |
| `pages`     | `src/pages/index.astro`, `src/pages/[fixed].astro`     | archetype, title, h1, meta_description, primary_keyword |
| `services`  | `src/pages/services/[slug].astro`                      | + service_slug, service_display            |
| `serviceAreas` | `src/pages/service-areas/[area].astro`             | + area_slug, city, state                   |
| `locations` | `src/pages/service-areas/[area]/[service].astro`       | + area_slug, service_slug, city, state, service_display |
| `blog`      | `src/pages/blog/[slug].astro`                          | + slug, published_at, services             |
| `legal`     | `src/pages/[legal].astro`                              | + ref (privacy/terms/accessibility)        |

## Adding a route

If a new archetype is added to the planning template, also add:
1. Content collection definition in `src/content/config.ts`
2. Route file under `src/pages/` matching the URL pattern
3. Schema-stub references in the route
4. Update this README's collection table

## Versioning

Bump `VERSION` whenever:
- A `{{TOKEN}}` is added or removed (breaking — scaffold must be updated)
- A content-collection field is added/removed/renamed (breaking — Skill 3's frontmatter writer must be updated)
- A new route or archetype is added (additive)
- A component/layout signature changes in a way Skill 3 consumes (potentially breaking)

Tweaks to copy or styling within an existing component are not breaking and don't require a bump.
