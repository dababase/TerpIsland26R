// Optional prefill for the event-code field only — never a restriction.
// The app resolves whatever code the judge actually types against the
// events table at sign-in. This deployment is dedicated to Terp Island
// 2026's Rosin track, so it's prefilled, but it'd still resolve any other
// event code typed in.
export const EVENT_CODE = 'TerpIsle26R'

// Judging guide pages shown from the "Judging guide" button on the scoring
// screen (images in /public/guide). Empty = the button is hidden.
export const GUIDE_PAGES = []
