# Interaction Registry — <name>

Rule: identical elements behave identically. Before adding any interaction, search here by type.

| # | Element (type) | Pattern | Duration / easing | Source | Component in code | Decision | Date |
|---|---|---|---|---|---|---|---|
| 1 | Forward transition | shared-axis X | 300ms / emphasized | M3 Motion | AnimatePresence | self | |
| 2 | Back transition | mirror of #1 | 250ms / emphasized-accelerate | M3 Motion | AnimatePresence | self | |
| 3 | Bottom sheet | modal, snap 50/90% | 350ms / 220ms | HIG Sheets, M3 | Drawer (vaul) | gate # | |
| 4 | Modal | centered, backdrop | 250ms / 200ms | HIG Modality, M3 Dialogs | Dialog | self | |
| 5 | Popover / tooltip | closes on Esc and outside click | 150ms | HIG Popovers, Radix | Popover, Tooltip | self | |
| 6 | Toast | bottom center, 4s | 200ms | M3 Snackbar | Sonner | self | |
| 7 | Input: focus / error | ring by token, error below the field | 100ms | HIG Text fields, M3 | Input | self | |
| 8 | Text streaming | character by character, chunk by words | 20ms/char | — | StreamText | self | |

Rows 1–8 are kit defaults. Override only through a gate.
