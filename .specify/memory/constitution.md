
<!--
Sync Impact Report:
- Version change: N/A -> 1.0.0
- Modified principles: Added performance-first, shadcn-first, accessibility & UX, dev-DX, observability & release governance
- Added sections: Technology Constraints, Development Workflow & Quality Gates
- Removed sections: None (template placeholders fully replaced)
- Templates requiring updates:
  - ✅ .specify/templates/plan-template.md
  - ✅ .specify/templates/spec-template.md
  - ✅ .specify/templates/tasks-template.md
- Follow-up TODOs:
  - TODO(RATIFICATION_DATE): confirm project ratification date if an official date exists
  - TODO(IMPLEMENTATION): add a pre-merge Lighthouse CI job in `.github/workflows`
  - TODO(ACCESSIBILITY): add an accessibility testing job in CI
-->

# Forze — Landing Pages Constitution

## Core Principles

### I. Performance-first (NON-NEGOTIABLE)
Landing pages MUST be optimized to load quickly, minimize time to interactive, and incur minimal runtime cost for users. All design and technical decisions must prioritize measurable performance objectives.

- Rationale: Landing pages are first impressions—slow pages cause conversion loss and frustrate users.
- Testable Rules:

  - Baseline: Lighthouse Performance score >= 90 (desktop), >= 80 (mobile) or an agreed variance documented in the PR.
  - LCP <= 1.5s, FID <= 100ms (or INP equivalent), TBT < 300ms under typical network conditions. Projects MAY adjust thresholds via explicit approval and documented mitigation.
  - Avoid runtime-blocking scripts; use SSG/SSR and pre-rendering where appropriate; defer non-essential third-party scripts.
  - All added dependencies or large media assets MUST include a performance impact statement in the PR.

### II. ShadCN & Design System First
The project MUST build UI using a shared, configurable component system based on ShadCN, Tailwind CSS utilities, and design tokens. Reusable components are the single source of truth for UI primitives.

- Rationale: A design system keeps the UI beautiful, consistent, and easy to iterate on.
- Testable Rules:

  - UI primitives live in `ui/`; reusable components live in `components/`.
  - Each component MUST be documented and include usage examples, prop descriptions, and variations (Storybook/MDX recommended).
  - Styling should prefer utility classes and tokens; bespoke global styles require justification.
  - Avoid duplicative components; new components require PR justification and documentation.

### III. Accessible & Intuitive UX (MUST)
UX MUST be accessible (WCAG AA preferred) and intuitive; design must be mobile-first and prioritize clarity in conversion flows.

- Rationale: Accessibility is an ethical requirement and reduces user friction across the board.
- Testable Rules:

  - Keyboard navigation and screen-reader support is required for interactive elements.
  - Color contrast must meet AA or documented exceptions; semantic HTML and ARIA usage is required where applicable.
  - Primary user flows (P1) require heuristics and basic user validation or internal UX review prior to launch.

### IV. Developer Experience & Reusability (SHOULD)
Developer workflows SHOULD be optimized to make it easy to add, test, and reuse components and flows without introducing technical debt.

- Rationale: Faster contributors and maintainable code lead to better product velocity.
- Testable Rules:

  - TypeScript must be used for new modules and components with full typings when public-facing.
  - Components must be deterministic, side-effect-free, and covered by unit tests where behavior is non-trivial.
  - Code review requires a clear PR description and link to the spec or issue.

### V. Testing, Observability & Release Discipline (MUST)
Quality gates enforce correctness and observability; visibility on performance and uptime is required.

- Rationale: Prevent regressions and enable quick diagnosis of issues in production.
- Testable Rules:

  - Every PR must run linting, TypeScript checks, unit tests, and relevant accessibility checks (axe or similar).
  - A performance budget (Lighthouse scan) must exist in CI for PRs that change public pages or shared components.
  - Releases of shared UI packages or design tokens must follow semantic versioning, be documented, and include a changelog.

## Technology Constraints & Performance Standards

- Supported stack:
  - Vite (recommended), React (>= 18 / 19 compatible), TypeScript, Tailwind CSS, ShadCN UI, lucide-react.
  - Prefer small, dependency-free libraries for specialized functionality.

- Performance & Build Constraints:
  - Prefer static or pre-rendered pages; client-side hydration only when necessary.
  - Optimize images and fonts: use AVIF/WebP where supported and `font-display: swap` plus preconnect.
  - Enforce tree-shaking and code-splitting; avoid large bundles and single-monolithic assets.

- Security and Privacy:
  - Do not include user-tracking scripts without product and legal approval.
  - Use secure storage for API keys and secrets; protect data at rest and in transit.

## Development Workflow, Review Process & Quality Gates

- PR Checklist (MUST):
  - Link to spec or task and include user-facing impact summary.
  - Run linting, type-checks, unit tests, and a performance (Lighthouse) & accessibility check for public pages or components.
  - Include component documentation updates and example usage where applicable.
  - At least one reviewer must approve changes; a second approval required for changes to components and design tokens.

- CI / Release Workflow:
  - Branch-based PRs run all checks; merges to `main` trigger production build and release checks.
  - Tag releases with semantic versions when publishing shared components or tokens.

- Design & UX Process:
  - New designs should include a spec or Figma with developer notes and responsive breakpoints.
  - Design tokens and color decisions must be maintained in a single canonical place and updated via PR.

## Governance & Amendments

This constitution represents the living principles that guide this project. Any amendment requires:
  - A PR that outlines the change, rationale, affected templates & tasks, and an implementation/migration plan.
  - Approval from at least two maintainers and the product lead (or equivalent). If the change impacts production behavior (performance, accessibility), run an experimental validation or compatibility test.

Versioning for the constitution document:
  - MAJOR: Breaking governance changes or principle removals/renames.
  - MINOR: New principles added or meaningful expansion of existing guidance.
  - PATCH: Clarification, typo fixes, or non-semantic edits.

**Version**: 1.0.0 | **Ratified**: 2025-11-27 | **Last Amended**: 2025-11-27

<!--
Sync Impact Report:
- Version change: N/A -> 1.0.0
- Modified principles: Added performance-first, shadcn-first, accessibility & UX, dev-DX, observability & release governance
- Added sections: Technology Constraints, Development Workflow & Quality Gates
- Removed sections: None (template placeholders fully replaced)
- Templates requiring updates:
  - ✅ .specify/templates/plan-template.md
  - ✅ .specify/templates/spec-template.md
  - ✅ .specify/templates/tasks-template.md
- Follow-up TODOs:
  - TODO(RATIFICATION_DATE): confirm project ratification date if an official date exists
  - TODO(IMPLEMENTATION): add a pre-merge Lighthouse CI job in `.github/workflows`
  - TODO(ACCESSIBILITY): add an accessibility testing job in CI
-->

# Forze — Landing Pages Constitution

## Core Principles

 
### I. Performance-first (NON-NEGOTIABLE)
Landing pages MUST be optimized to load quickly, minimize time to interactive, and incur minimal runtime cost for users. All design and technical decisions must prioritize measurable performance objectives.

	- Rationale: Landing pages are first impressions—slow pages cause conversion loss and frustrate users.
	- Testable Rules:

  - Baseline: Lighthouse Performance score >= 90 (desktop), >= 80 (mobile) or an agreed variance documented in the PR.
  - LCP <= 1.5s, FID <= 100ms (or INP equivalent), TBT < 300ms under typical network conditions. Projects MAY adjust thresholds via explicit approval and documented mitigation.
  - Avoid runtime-blocking scripts; use SSG/SSR and pre-rendering where appropriate; defer non-essential third-party scripts.
  - All added dependencies or large media assets MUST include a performance impact statement in the PR.

 
### II. ShadCN & Design System First
The project MUST build UI using a shared, configurable component system based on ShadCN, Tailwind CSS utilities, and design tokens. Reusable components are the single source of truth for UI primitives.

- Rationale: A design system keeps the UI beautiful, consistent, and easy to iterate on.
- Testable Rules:

  - UI primitives live in `ui/`; reusable components live in `components/`.
  - Each component MUST be documented and include usage examples, prop descriptions, and variations (Storybook/MDX recommended).
  - Styling should prefer utility classes and tokens; bespoke global styles require justification.
  - Avoid duplicative components; new components require PR justification and documentation.

 
### III. Accessible & Intuitive UX (MUST)
UX MUST be accessible (WCAG AA preferred) and intuitive; design must be mobile-first and prioritize clarity in conversion flows.

- Rationale: Accessibility is an ethical requirement and reduces user friction across the board.
- Testable Rules:

  - Keyboard navigation and screen-reader support is required for interactive elements.
  - Color contrast must meet AA or documented exceptions; semantic HTML and ARIA usage is required where applicable.
  - Primary user flows (P1) require heuristics and basic user validation or internal UX review prior to launch.

 
### IV. Developer Experience & Reusability (SHOULD)
Developer workflows SHOULD be optimized to make it easy to add, test, and reuse components and flows without introducing technical debt.

- Rationale: Faster contributors and maintainable code lead to better product velocity.
- Testable Rules:

  - TypeScript must be used for new modules and components with full typings when public-facing.
  - Components must be deterministic, side-effect-free, and covered by unit tests where behavior is non-trivial.
  - Code review requires a clear PR description and link to the spec or issue.

 
### V. Testing, Observability & Release Discipline (MUST)
Quality gates enforce correctness and observability; visibility on performance and uptime is required.

- Rationale: Prevent regressions and enable quick diagnosis of issues in production.
- Testable Rules:

  - Every PR must run linting, TypeScript checks, unit tests, and relevant accessibility checks (axe or similar).
  - A performance budget (Lighthouse scan) must exist in CI for PRs that change public pages or shared components.
  - Releases of shared UI packages or design tokens must follow semantic versioning, be documented, and include a changelog.

 
## Technology Constraints & Performance Standards

	- Supported stack:
		- Vite (recommended), React (>= 18 / 19 compatible), TypeScript, Tailwind CSS, ShadCN UI, lucide-react.
		- Prefer small, dependency-free libraries for specialized functionality.

	- Performance & Build Constraints:
		- Prefer static or pre-rendered pages; client-side hydration only when necessary.
		- Optimize images and fonts: use AVIF/WebP where supported and `font-display: swap` plus preconnect.
		- Enforce tree-shaking and code-splitting; avoid large bundles and single-monolithic assets.

	- Security and Privacy:
		- Do not include user-tracking scripts without product and legal approval.
		- Use secure storage for API keys and secrets; protect data at rest and in transit.


 
## Development Workflow, Review Process & Quality Gates

	- PR Checklist (MUST):
		- Link to spec or task and include user-facing impact summary.
		- Run linting, type-checks, unit tests, and a performance (Lighthouse) & accessibility check for public pages or components.
		- Include component documentation updates and example usage where applicable.
		- At least one reviewer must approve changes; a second approval required for changes to components and design tokens.

	- CI / Release Workflow:
		- Branch-based PRs run all checks; merges to `main` trigger production build and release checks.
		- Tag releases with semantic versions when publishing shared components or tokens.

	- Design & UX Process:
		- New designs should include a spec or Figma with developer notes and responsive breakpoints.
		- Design tokens and color decisions must be maintained in a single canonical place and updated via PR.


 
## Governance & Amendments

This constitution represents the living principles that guide this project. Any amendment requires:
	- A PR that outlines the change, rationale, affected templates & tasks, and an implementation/migration plan.
	- Approval from at least two maintainers and the product lead (or equivalent). If the change impacts production behavior (performance, accessibility), run an experimental validation or compatibility test.

Versioning for the constitution document:
	- MAJOR: Breaking governance changes or principle removals/renames.
	- MINOR: New principles added or meaningful expansion of existing guidance.
	- PATCH: Clarification, typo fixes, or non-semantic edits.

**Version**: 1.0.0 | **Ratified**: 2025-11-27 | **Last Amended**: 2025-11-27
