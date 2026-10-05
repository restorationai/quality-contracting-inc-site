// Brand config — hydrated at scaffold time by build_site.py from
// plan-input.json and the client record. All {{TOKENS}} are replaced
// by the scaffold step; this file should not be hand-edited after that.

export const brand = {
  slug: "quality-contracting-inc",
  displayName: "Quality Contracting, Inc.",
  shortName: "Quality Contracting, Inc.",
  legalName: "Quality Contracting, Inc.",
  // Registered DBA / trade name — filled by rename_site_sync.py the moment
  // the state approves the client's DBA filing (empty until then). When set,
  // the footer carries the "[legal] doing business as [DBA]" line and schema
  // declares it as the business name, so Google/BrightLocal find the new
  // name corroborated on the site before and during the GBP rename.
  dbaName: "",
  domain: "qualitycontracting.us",
  canonicalUrl: "https://qualitycontracting.us",
  phone: "(508) 756-8800",
  phoneRaw: "+15087568800",
  hideMobileHeaderCall: false,
  // A2P/SMS-registration legal entity. When set, the estimate forms render
  // the carrier-compliant consent checkbox naming this entity (exact wording
  // matters to reviewers — do not paraphrase). Empty = generic consent only.
  smsConsentEntity: "",
  // Sitewide call-tracking number (2026-08-24). When BOTH fields are set,
  // a tiny inline script in BaseLayout swaps every visible phone mention
  // and tel: link to this number AFTER the page renders. The HTML source,
  // the JSON-LD in schema.ts, and anything crawlers/citation-checkers read
  // keep the canonical NAP number above — humans dial the tracked line,
  // Google sees consistent NAP. Empty = feature off (default at scaffold;
  // filled by the call-tracking provisioning step).
  trackingPhone: "(508) 355-3039",
  trackingPhoneRaw: "+15083553039",
  email: "info@qualitycontracting.us",
  hours: "24/7",
  foundedYear: "",
  primaryCity: "Auburn",
  primaryState: "MA",
  // primaryCity/primaryState = the #1 MARKETING city (headlines, coverage
  // copy). addressCity/addressState = where the business PHYSICALLY is.
  // They are usually the same and often diverge (DISS: Farrell PA office,
  // Youngstown OH target) — only the address pair may go in a PostalAddress.
  addressCity: "Auburn",
  addressState: "MA",
  streetAddress: "211 Southbridge Street",
  postalCode: "01501",
  lat: "42.1945465",
  lng: "-71.8358095",
  placeId: "ChIJ9wuzUNMF5IkR23w7vv0t_Hc",
  googleCid: "",
  imagesBase: "https://images.qualitycontracting.us",
  googleMapsApiKey: "",
  // Analytics — set post-scaffold (scripts/analytics_set.py / create_ga4.py); no-op if empty
  ga4MeasurementId: "G-G8PLTS9XDN",
  clarityProjectId: "",
  logoUrl: "/images/logo.png",
  licenseNumbers: [] as string[],
  licenseAuthority: "",
  // State license-verification page — the footer links the license number here.
  licenseLookupUrl: "",
  licenseType: "",
  // Operator-confirmed "licensed & insured" attestation from plan-input.json —
  // lets the TrustStrip show the badge before a license number is on file.
  licensedInsuredAttested: false as boolean,
  certifications: [] as string[],
  trustBadges: [] as string[],
  jobPhotos: ["https://nyscciinkhlutvqkgyvq.supabase.co/storage/v1/object/public/branding/CO-1785180744028/job-photos/posted/r1788980315_sms-1785358224564-5c715e96.jpg", "https://nyscciinkhlutvqkgyvq.supabase.co/storage/v1/object/public/branding/CO-1785180744028/job-photos/posted/r1788814538_gbp-AF1QipP_p1uc76KgQ_e_r5cWTb9_xiLVg11kKmv8wix7.jpg"] as string[],
  sameAsUrls: ["https://www.facebook.com/qualcon534/", "https://www.linkedin.com/company/quality-contracting-inc-", "https://qualitycontracting.us/services/capital-projects/", "https://maps.google.com/maps?cid=8645835952486055131", "https://www.yelp.com/biz/quality-contracting-auburn", "https://www.bbb.org/us/ma/auburn/profile/fire-water-damage-restoration/quality-contracting-inc-0261-103855", "https://www.angi.com/companylist/us/ma/auburn/quality-contracting-inc-reviews-164220227.htm", "https://www.facebook.com/p/Quality-Contracting-Ltd-100067737732248/", "https://www.thebluebook.com/iProView/266336/quality-contracting-inc/general-contractors/locations-contacts/", "https://www.houzz.com/professionals/general-contractors/quality-contracting-inc-pfvwus-pf~815837747"] as string[],
  // GBP rating fields — synced from the live Google Business Profile by
  // scripts/sync_brand_reviews.py; never hand-edited (real ratings only).
  gbpRatingValue: "4.5",
  gbpReviewCount: "112",
  gbpReviews: [
    { author: "Christine", rating: 5, text: "This is truly a Quality company just like their name. They did a great job at my home following water damage in my kitchen. Highly recommend.", when: "October 2026" },
    { author: "Donna", rating: 5, text: "We had extensive water damage, 2nd floor, leaked down to dining room, Louis & Leo were here 09/29-30/2026, they are professionals at what they do, and left home very clean after demolition!! I would give them a “10” if I could!! Thank You, Louis & Leo! Donna Isaac, Shrewsbury, Ma.", when: "October 2026" },
    { author: "Denise", rating: 5, text: "There are not enough adjectives to describe how fabulous Luis and his crew have been during the demolition phase of this job. Luis leads by example for professionalism, skill, safety, punctuality, clean up, and even humor to keep us smiling during a difficult time. We look forward to Luis returning…", when: "September 2026" },
    { author: "Ellin", rating: 5, text: "Quality did an excellent restoration job when my condo was involved in a fire.", when: "September 2026" },
    { author: "Peggy", rating: 4, text: "Derek was wonderful! We had an insurance claim from water damage. The work was well done.", when: "September 2026" },
    { author: "Mark", rating: 5, text: "Quality Contracting updated our standard tub/shower to a walk in for my elderly father. They came when they said they would, the did everything they said they would and the charged me the reasonable cost that they said they would. Highly recommend.", when: "September 2026" },
  ] as { author: string; rating: number; text: string; when: string }[],
  tagline: "24/7 restoration services in Auburn, MA.",
  ctaLabel: "24/7 Emergency Line",
  // Vertical trade-identity copy — resolved at scaffold time from
  // templates/{vertical}/vertical-tokens.json (see scripts/verticals.py).
  // Components must use these instead of hardcoding a trade phrase.
  // vertical gates layout too: restoration is call-first, so the homepage
  // hero renders NO estimate form there (Santino 2026-09-11).
  vertical: "restoration",
  tradeNoun: "restoration",
  specialistPhrase: "Damage Restoration Specialists",
  announcementSuffix: "24/7 Emergency Response",
  homeAboutBlurb: "Quality Contracting, Inc. serves Central Massachusetts and Greater Worcester from its Auburn, MA headquarters. We specialize in rapid-response disaster restoration, handling everything from water and fire damage to biohazard cleanup and full reconstruction. When disaster strikes, our certified professionals are standing by 24/7 to return your property to its pre-loss condition quickly and safely.",
} as const;

export const entityId = `${brand.canonicalUrl}/#identity`;
