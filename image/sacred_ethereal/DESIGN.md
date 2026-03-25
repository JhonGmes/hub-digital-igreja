# Design System Specification: High-End Editorial

## 1. Overview & Creative North Star: "The Digital Sanctuary"
This design system rejects the cluttered, rigid grid of traditional SaaS. Instead, it embraces the "Digital Sanctuary" philosophy—a creative North Star that prioritizes breath, light, and editorial authority. We achieve a premium feel not through complexity, but through intentional restraint, extreme "airy" spacing, and sophisticated layering.

By utilizing asymmetric layouts—where a large `display-lg` Noto Serif title might sit off-center against a vast `surface` background—we break the "template" look. We treat the screen like a high-end physical publication, where the white space is as functional as the content itself.

## 2. Colors & Surface Philosophy
The palette is rooted in the earth (Gold/Beige) and the sky (Light Blue), balanced by a clinical yet warm neutral scale.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Boundaries must be invisible yet felt. Define areas through background shifts: place a `surface-container-low` section against a `surface` background. If you feel the urge to draw a line, add `spacing-8` of white space instead.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers, like stacked sheets of fine, semi-translucent paper.
*   **Base:** `surface` (#fbf9f8) - The foundational canvas.
*   **Nesting:** Place `surface-container-lowest` (#ffffff) cards on top of `surface-container-low` (#f5f3f3) sections to create a "lifted" feel without a single drop shadow.
*   **The Glass & Gradient Rule:** For floating elements (Modals, Navigation Bars), use Glassmorphism. Apply `surface-container-lowest` at 70% opacity with a `backdrop-blur` of 20px. 
*   **Signature Glows:** For primary CTAs, use a subtle radial gradient: `primary` (#735c00) transitioning to `primary-container` (#d4af37). This provides a "soulful" depth that flat hex codes cannot replicate.

## 3. Typography: Editorial Authority
The interplay between the expressive Noto Serif and the utilitarian Manrope creates a "Modern Spiritual" tension.

*   **Display & Headlines (Noto Serif):** These are your "Art" moments. Use `display-lg` for hero statements. Increase letter-spacing slightly for a more "breathable" feel. These should feel like headers in an exhibition.
*   **Body & Titles (Manrope):** Use Manrope for everything functional. It provides the "SaaS Authority." Use `body-lg` (1rem) as your standard to maintain the "Premium" scale—never go smaller than `body-md` for critical information.
*   **The Contrast Rule:** Always pair a `display-md` Noto Serif headline with a `label-md` Manrope sub-header in all-caps to create an intentional, high-contrast editorial hierarchy.

## 4. Elevation & Depth
In this system, depth is organic, mimicking ambient light rather than artificial computer-generated shadows.

*   **The Layering Principle:** Avoid shadows for static cards. Instead, use the Tonal Scale. A `surface-container-high` element naturally feels "closer" to the user than a `surface-container` background.
*   **Ambient Shadows:** For active states or floating menus, use an extra-diffused shadow: `offset-y: 20px, blur: 40px, color: rgba(77, 70, 53, 0.05)`. The tint is derived from `on-surface-variant`, making it feel like a natural shadow cast on a warm surface.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` token at 15% opacity. High-contrast, 100% opaque borders are strictly forbidden.

## 5. Components

### Buttons
*   **Primary:** A delicate gradient of `primary` to `primary-container`. `rounded-full` or `rounded-xl`. No shadow, but a subtle inner-glow of `primary-fixed` at 20% opacity on the top edge.
*   **Secondary:** `surface-container-highest` background with `on-surface` text. No border.
*   **Tertiary:** Pure text using `title-sm` (Manrope), with an underline that only appears on hover.

### Input Fields
*   **Style:** Background `surface-container-low`, `rounded-md` (1.5rem). 
*   **Interaction:** On focus, the background shifts to `surface-container-lowest` and a soft `primary` glow (4px blur) appears. Never use a heavy outline for the focus state.

### Cards & Lists
*   **Forbid Dividers:** Do not use lines to separate list items. Use `spacing-4` of vertical gap or alternating subtle background tints (`surface` vs `surface-container-low`).
*   **The "Airy" Card:** Cards should have a minimum padding of `spacing-6` (2rem) to ensure the content never feels "trapped" by the `rounded-xl` corners.

### Suggested Premium Component: The "Zen Loader"
Instead of a spinning circle, use a soft, pulsing gradient orb using `secondary-container` and `primary-fixed_dim` that expands and contracts, reflecting the "Modern Spirituality" vibe.

## 6. Do’s and Don’ts

### Do:
*   **Embrace Asymmetry:** Let a text block sit on the left with a massive amount of empty space on the right.
*   **Use Large Scales:** If a title is important, make it `display-lg`. Don't be afraid of "oversized" typography.
*   **Layer Tones:** Stack `surface` tokens to create hierarchy.

### Don’t:
*   **Don't Use Pure Black:** Always use `on-background` (#1b1c1c) or `on-surface-variant` for a softer, premium reading experience.
*   **Don't "Box-In" Content:** Avoid wrapping every section in a bordered container. Let the content breathe against the background.
*   **Don't Use Tight Spacing:** If you think a gap is big enough, add `spacing-2` more. This system thrives on "The Luxury of Space."