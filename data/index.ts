/**
 * Barrel export for all data modules.
 *
 * Import data from `@/data` for convenience, or from specific
 * sub-modules (e.g., `@/data/events`) for clarity.
 */

export { navItems } from "./nav";
export { gridItems } from "./grid";
export { events } from "./events";
export { companies } from "./sponsors";
export { domains } from "./domains";
export {
  coreTeam,
  leads,
  fullTeam,
  socialMedia,
  assistantWebDev,
  assistantAppDev,
  assistantGameDev,
  assistantGenAI,
  assistantDataScience,
  assistantAIML,
  assistantDevOps,
  assistantResearch,
  eventManagementTeam,
  prOutreachTeam,
  socialMediaTeam,
  creativeTeam,
} from "./team";

// Legacy aliases — kept for backward compatibility with older components.
export { events as projects } from "./events";
export { domains as workExperience } from "./domains";

/**
 * Testimonials stub — the original data source was removed but
 * `Clients.tsx` (currently unused) still imports it. Keeping an
 * empty array prevents build errors.
 */
export const testimonials: { quote: string; name: string; title: string }[] = [];
