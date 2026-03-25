# Design System Document: The Sacred Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Sanctuary"**

This design system rejects the "utilitarian grid" of standard religious software in favor of a high-end editorial experience. We aim to evoke the feeling of entering a physical sanctuary: quiet, expansive, and filled with light. 

To move beyond a "template" look, we utilize **Intentional Asymmetry**. Hero sections should feature off-center typography paired with large, ethereal imagery. We treat the screen not as a flat canvas, but as a series of layered, translucent surfaces that invite the user into a state of reflection. The goal is "Premium Spirituality"—where every pixel feels intentional, welcoming, and profoundly calm.

---

## 2. Colors: Tonal Radiance
Our palette is rooted in the interplay of light and gold. We do not use "colors" so much as we use "atmospheres."

### Core Palette
- **Primary (`#735C00` / `#D4AF37`):** Use for high-intent actions and spiritual highlights.
- **Surface & Background (`#F8F9FA` / `#FFFFFF`):** The "Breath" of the system. Whites should feel expansive.
- **Tertiary (`#456275` / `#EAF3FB`):** Used for subtle depth and "sky-like" backgrounds.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning. Boundaries must be defined solely through background shifts (e.g., a `surface-container-low` section sitting on a `surface` background). This maintains a seamless, high-end "editorial" flow.

### Surface Hierarchy & Nesting
Treat the UI as stacked sheets of fine paper or frosted glass.
*   **Level 0 (Base):** `surface` (#F8F9FA)
*   **Level 1 (Sections):** `surface-container-low` (#F3F4F5)
*   **Level 2 (Cards):** `surface-container-lowest` (#FFFFFF)

### The "Glass & Gold" Rule
For floating elements (modals, navigation bars), use **Glassmorphism**: 
*   **Token:** `surface` at 80% opacity.
*   **Effect:** `backdrop-blur: 20px`.
*   **Accent:** A subtle `primary` to `primary-container` linear gradient (45 degrees) for CTAs to provide "soul" and professional polish.

---

## 3. Typography: The Divine Voice
We pair a sophisticated serif for authority with a modern sans-serif for clarity.

*   **Display & Headlines (`Noto Serif`):** This is our "Editorial Voice." Use `display-lg` (3.5rem) for hero statements with generous letter-spacing (-0.02em). It should feel like a classic inscription.
*   **Body & Labels (`Manrope`):** This is our "Functional Voice." Use `body-lg` (1rem) for readability. Manrope’s geometric nature balances the tradition of the serif headlines.

**Hierarchy Tip:** Always lead with the Serif. Even in small headers, the Serif conveys the "Premium" nature of the church brand.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too aggressive for a spiritual context. We use "Ambient Light."

*   **The Layering Principle:** Instead of shadows, stack `surface-container-lowest` on `surface-container-low`. The contrast in brightness creates natural depth.
*   **Ambient Shadows:** For "floating" components like primary cards, use:
    *   `box-shadow: 0 12px 40px rgba(25, 28, 29, 0.04);`
    *   The shadow is never grey; it is a tinted version of `on-surface` at a very low opacity.
*   **The Ghost Border:** If a boundary is strictly required for accessibility, use the `outline-variant` token at **15% opacity**. Never 100%.
*   **Softness:** Every container must use `Roundedness: lg (2rem)` or `xl (3rem)` to remove any "sharpness" from the experience.

---

## 5. Components: Softness & Intent

### Buttons
*   **Primary:** Soft Gold gradient (`primary` to `primary-container`). `Border-radius: full`. Text: `label-md` (All Caps, 0.05em tracking).
*   **Secondary:** Ghost style. No background, only a "Ghost Border" (15% opacity `outline-variant`).
*   **Tertiary:** Text only in `primary` gold, with a soft background shift on hover.

### Cards
*   **The Sanctuary Card:** Forbid the use of divider lines. Use `Spacing: 8 (2.75rem)` to separate internal content. Use a `surface-container-lowest` background with a `lg` radius.
*   **Imagery:** All imagery within cards must have a soft `20px` blur on the edges or a subtle gradient overlay to ensure text legibility.

### Input Fields
*   **Style:** Minimalist. No bottom line or box border. Use `surface-container-highest` with a `md (1.5rem)` radius.
*   **Focus:** Transition background to `tertiary-fixed` (#C8E6FE) rather than showing a high-contrast border.

### Spiritual Accents (Bespoke Components)
*   **The Reflection Space:** A large-format component for daily verses or quotes. Uses a `tertiary-container` background with a high-opacity backdrop-blur overlay.
*   **Ethereal Divider:** Instead of a line, use a `24 (8.5rem)` spacing gap with a single, centered 4px dot in `primary-fixed-dim`.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts. Place text on the left and let the "blurred religious imagery" bleed off the right edge.
*   **Do** use the `24 (8.5rem)` spacing scale for section breaks. This "breathing room" creates the premium feel.
*   **Do** use "Soft Gold" sparingly. It should feel like a reward or a guide, not a distraction.

### Don'ts
*   **Don't** use pure black (#000000). Always use `on-surface` (#191C1D) for a softer, more natural ink look.
*   **Don't** use standard 4px or 8px border radii. They feel "corporate." Always stay above `16px`.
*   **Don't** use hard dividers. If you feel the need for a line, add more whitespace instead.
*   **Don't** use high-saturation imagery. Always apply a soft-focus filter or a light-wash overlay to keep the focus on the content and the spirit.