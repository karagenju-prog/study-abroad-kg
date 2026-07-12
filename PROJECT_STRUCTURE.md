# Project Structure

## Main folders

- `app/` — Next.js routes/pages only. Do not store reusable components or data here.
- `components/layout/` — layout components such as Header.
- `data/` — reusable data objects, for example countries.
- `styles/` — global CSS split by page/section.
- `public/` — images and logos.

## Where to edit

- Main page styles: `styles/home.css`
- Header styles: `styles/header.css`, `styles/mobile-header.css`, `styles/mobile-layout.css`
- Countries list page: `styles/countries-list.css`
- Dynamic country detail page: `styles/country-detail.css`
- Italy main page: `styles/italy.css`
- Italy universities page: `styles/italy-universities.css`
- Italy scholarships page: `styles/italy-scholarships.css`
- Italy documents page: `styles/italy-documents.css`
- Start page: `styles/start.css`
- Shared/base styles: `styles/base.css`, `styles/shared.css`

## Rule

Do not add new CSS to the bottom of `app/globals.css`. Add it to the correct file in `styles/`.
