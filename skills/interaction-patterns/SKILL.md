---
name: interaction-patterns
description: How to choose behavior and motion for interactive elements — screen transitions, bottom sheets, modals, popovers, inputs, menus, toasts, lists — based on Apple HIG and Material 3, implemented in Next.js / Radix / shadcn / Framer Motion. Includes the project's decision registry, the "same things behave the same" rule and a Decision Gate template. Use whenever Builder adds any interaction or animation, even an "obvious" one — registry first, then the guidelines, then the decision.
---

# Interaction-patterns

The user shouldn't have to think about how the interface behaves. Two things achieve this: behavior matches platform expectations (that's what HIG and Material 3 are for), and identical elements behave identically within the product (that's what the registry is for). Beautiful custom motion that breaks either rule is bad motion.

## Steps for each element

1. **Registry.** Open `interaction-registry.md`. If this element or one of the same type is there — reuse the decision as is. Write "repeating #N". Don't ask again.
2. **Guidelines.** Not in the registry — find the section in HIG and Material 3 using the table below. Read both, even if there's only one platform: they often agree, and that confirms the decision.
3. **Implementation in the stack.** Check what Radix / shadcn / Framer Motion give out of the box. A standard implementation with the right parameters beats a custom one.
4. **Choice.** Several options — Decision Gate. One option — decide, record, report.
5. **Registry.** Record the decision in `interaction-registry.md` in the format below.

## Element similarity

Similar = of the same type, regardless of content:
- all bottom sheets (filter, settings, details) — one pattern;
- all modals (confirmation, form, warning) — one pattern;
- all "forward" transitions — one, all "back" ones — mirrored;
- all popovers/tooltips/dropdowns — one open and close pattern;
- all inputs — one focus, error and disabled behavior;
- all toasts — one position, one duration.

If an element seems "special", first ask yourself why it can't behave like the rest. Usually it can.

## Table: element → guideline → implementation

| Element | Apple HIG | Material 3 | In the stack |
|---|---|---|---|
| Screen transition | Navigation, Motion | Motion: Transitions (shared axis, fade through) | Next.js App Router + Framer Motion `AnimatePresence` |
| Bottom sheet | Sheets (detents medium/large) | Bottom sheets (modal / standard, drag handle) | shadcn `Drawer` (vaul) with snap points |
| Modal / dialog | Modality, Alerts | Dialogs (basic / full-screen) | shadcn `Dialog` / `AlertDialog` |
| Popover / tooltip | Popovers | Tooltips, Menus | Radix `Popover`, `Tooltip` |
| Menu / dropdown | Menus, Context menus | Menus | shadcn `DropdownMenu`, `Command` |
| Input | Text fields | Text fields (filled / outlined) | shadcn `Input`, `Textarea` + states via tokens |
| Toast / snackbar | — (banners are used) | Snackbars | shadcn `Sonner` |
| List / swipe | Lists, Swipe actions | Lists | Radix + Framer `drag` |
| Text streaming | — | Progress indicators | character-by-character render + `prefers-reduced-motion` |

## Default duration and easing

From Material 3 Motion tokens and HIG practice:

| Type | Duration | Easing |
|---|---|---|
| Micro (hover, press, toggle) | 100–150 ms | standard |
| Element appearance (popover, toast) | 150–250 ms | emphasized-decelerate (exit faster than enter) |
| Sheet / modal open | 250–400 ms | emphasized-decelerate |
| Sheet / modal close | 200–250 ms | emphasized-accelerate |
| Screen transition | 300–400 ms | emphasized |
| Streaming | 15–30 ms / character, chunked by words | linear |

Material 3 easing curves: `standard: cubic-bezier(0.2, 0, 0, 1)`, `emphasized-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1)`, `emphasized-accelerate: cubic-bezier(0.3, 0, 0.8, 0.15)`. Set them up as `--motion-*` tokens; don't write numbers in components.

Always respect `prefers-reduced-motion`: transitions become a fade or instant.

## When to decide yourself

Decide without a gate if at least one is true:
- both guidelines give the same recommendation;
- the stack offers one standard implementation, and it matches the guideline;
- the element is secondary (tooltip, hover) and not part of the core-flow.

Write in the report: `Decided: <element> — <pattern>, no alternatives, source: <guideline/component>`.

## When to raise a gate

If the guidelines disagree, or the stack offers several reasonable paths, or the element is in the core-flow and a metric depends on its behavior. Template:

```
### Decision #N — <element>
Context: where in the flow, what depends on it
Options:
  A. <pattern> — duration/easing, behavior, source, pros/cons
  B. …
  C. …
Recommendation: <letter>, why
Impact on the registry: which other elements will behave the same way
```

## Registry entry format

```
| # | Element (type) | Pattern | Duration / easing | Source | Component in code | Decision | Date |
```
"Decision" — `self` or `gate #N`. The element type comes from the table above, so similarity can be searched by it.
