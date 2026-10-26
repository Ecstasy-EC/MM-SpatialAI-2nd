# MM-SpatialAI 2027 workshop website

Static site for the 2nd Workshop on Multi-Modal Spatial AI for Open-World Understanding, Reasoning, and Action (ICRA 2027).

## Editing

All content lives in `assets/js/config.js` (speakers, organizers, schedule, call for papers, dates, challenge, sponsors). `index.html` and `assets/js/main.js` normally do not need to change.

- Photos: add them to `assets/images/speakers/` and `assets/images/organizers/` with the file names used in `config.js`. Until a photo exists, the page shows initials.
- Conference logo: optional, path set in `workshop.conference_logo`.
- Links that appear once set: `workshop.submission_url` (OpenReview button), `workshop.online_url` (Join Online button), `challenge.url`.
- Sponsors section is hidden while `sponsors` is empty.

## Preview locally

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Deploy on GitHub Pages

1. Push the contents of this folder to the root of a GitHub repository.
2. In the repository: Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. The site appears at `https://<user>.github.io/<repo>/` after a minute.
