// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to change the site's content. No code needed.
// ─────────────────────────────────────────────────────────────
export const site = {
  name: 'Scott Freeborn',
  tagline: 'Folk & Americana from the Colorado Front Range',

  // 3-4 sentences. Replace with your real bio.
  bio: `Scott Freeborn is a Lyons, Colorado singer-songwriter with 20-plus years of
  playing in bands and on stages behind him. He works in weathered folk and Americana
  with a bluegrass streak — fitting, since Lyons is bluegrass country — telling stories
  in the tradition of writers like Todd Snider: wry, heartfelt, and meant to be heard up
  close. Most of it comes through a late-'70s Mossman Great Plains, an acoustic with
  about as much road on it as he's got. Catch him at open mics and small rooms across
  the Front Range.`,

  // Pull-quote shown under the bio in the About section.
  quote: { text: 'Success is just a mess of overdues.', author: 'John Hartford' },

  // Booking: until you set up Formspree, this email is the fallback.
  bookingEmail: 'booking@scottfreeborn.com',
  // Make the form live: create a free form at formspree.io and paste its ID here (the part after /f/).
  formspreeId: 'xkolgypw',

  // Merch store URL (Fourthwall storefront).
  merchUrl: 'https://scottfreeborn-shop.fourthwall.com',
  // Fourthwall storefront token is injected at build time via VITE_FW_STOREFRONT_TOKEN
  // (set in dev/.env.local for local dev, and as a GitHub Actions secret for deploys).

  // YouTube video ids (the part after watch?v=). Add/remove as many as you like.
  // Each must be Public or Unlisted (with embedding allowed) to play here.
  videos: ['0VKhBaz_Cyo', 'mHWMSBIWeCY', 'whsYURD7R5I'],

  // Streaming / listen links. Add as you get them.
  listen: [
    // { label: 'Spotify', url: 'https://...' },
    // { label: 'Bandcamp', url: 'https://...' },
  ],

  // Upcoming shows — managed in a Google Sheet (no code needed to add/edit/delete).
  // Setup: Sheet header row uses these names (ANY ORDER, extras ignored, only Date+Venue required):
  //   Date, Venue, City, Venue URL, Venue Link Text, Tickets
  // The venue links to Venue URL (showing Venue Link Text if given, else the venue name); Tickets = a button.
  // Then File -> Share -> Publish to web -> CSV, and paste THAT url here (the gviz/edit url won't work — no CORS):
  // Then File -> Share -> Publish to web -> (the sheet) -> CSV, and paste that URL here:
  showsSheetCsvUrl:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQLdbhAsjIdQN34kzXG9IB_aZI6EaFbkDmCABV4HJFOr-Z3R239fQqoBhKzRgmGqZj0o1yF_JRZ6rnW/pub?output=csv',
  // Fallback list, used only if the sheet URL is blank or fails to load:
  shows: [],

  // Social links shown in the footer. Add Instagram / Spotify / Bandcamp here once you have them.
  socials: [
    { label: 'YouTube', url: 'https://www.youtube.com/@JambalamSessions' },
  ],
}
