# Moved to kurita.dev

The portfolio and blog now live at **https://kurita.dev/**, hosted on Cloudflare Pages.
The source is maintained separately in a private repository.

This public repository is retained only for the old GitHub Pages URL,
https://kuriyan1204.github.io/.

## Redirects

- GitHub Pages retains the existing `kurita.dev` custom-domain setting via
  `redirect/CNAME`, preserving GitHub's native redirect to the new domain.
- `redirect/index.html` and `redirect/404.html` also provide a fixed redirect to
  the new home page using JavaScript, HTML refresh, and a visible fallback link.
  They work as a fallback if the custom-domain setting is later removed.
- With GitHub's native redirect enabled, old URL paths are preserved. Posts from
  the previous site were not migrated, so obsolete paths may show the new site's
  404 page.

Keep this repository **public**, with GitHub Pages publishing from the root of
`gh-pages`. Pushes to `master` publish only the `redirect/` directory to that branch.
No build step, Ruby, npm, analytics tag, or additional deployment secret is needed.
Do not point `kurita.dev` DNS back to GitHub: its destination is Cloudflare Pages.

## Retired site

The previous al-folio template, posts, images, and dependency files have been
removed from the current source tree. They remain available in Git history.
The original template's MIT license is retained in `LICENSE`.
