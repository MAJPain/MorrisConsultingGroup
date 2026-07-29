# Image assets

Drop portrait photography here. The site references these paths:

| File                     | Used on                        | Status                    |
| ------------------------ | ------------------------------ | ------------------------- |
| `sheldon-morris.jpg`     | Home (founder feature) + `/team` slot 01 | **Add this file** — the founder headshot provided with the brief. |
| `kenya-dugger.jpg`       | `/team` slot 02                | Optional — add when the photograph is delivered. |

## Behavior when a file is missing

The `<Portrait>` component (see `components/Portrait.tsx`) never renders a
broken image. If a referenced file is absent it shows a designed placeholder:
a bone-white panel with a thin warm-brown frame, the person's initials set in
Cormorant Garamond, and a `— PORTRAIT FORTHCOMING` label.

So the site runs and looks intentional even before the photographs are in
place. Add `sheldon-morris.jpg` to replace the founder placeholder with the
real headshot.

## Recommended specs

- Portrait orientation, roughly 4:5 aspect ratio.
- At least 1200px on the short edge for a crisp render on high-density screens.
- JPEG, quality ~80. Keep faces naturally framed — the CSS uses
  `object-position: center` and does not crop tightly.
