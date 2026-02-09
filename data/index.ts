export * from "./nav";
export * from "./grid";
export * from "./events";
export * from "./sponsors";
export * from "./domains";
export * from "./team";

// Re-export specific items to match old index.ts structure if needed for backward compatibility
// but generally better to import from specific files in new components.
export { events as projects } from "./events"; // Alias events as projects for existing components
export { domains as workExperience } from "./domains"; // Alias domains as workExperience
