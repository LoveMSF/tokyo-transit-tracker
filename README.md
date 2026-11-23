# Tokyo Transit — Network Control

A dark, interactive control center for exploring Tokyo's railway network. The app draws four major JR and Tokyo Metro lines over dark-filtered OpenStreetMap tiles, animates simulated trains, and surfaces station and train telemetry.

## Features

- Interactive Leaflet map centered on Tokyo with color-coded Yamanote, Ginza, Marunouchi, and Chuo Rapid routes.
- Station markers with English and Japanese names, connected lines, and simulated next arrivals.
- Moving train markers with selectable live-style telemetry, including status, next station, ETA, and crowd level.
- Play/pause and 1×, 2×, and 5× simulation speed controls.
- Line visibility filters, active train counts, and instant station/train search with map fly-to.
- Live Japan Standard Time, service health, responsive mobile drawer, and map layer controls.

## Tech stack

React 18, Vite, TypeScript, Tailwind CSS, Leaflet, React Leaflet, and Lucide icons. Map tiles are provided by CARTO using the Dark Matter basemap. Train motion is simulated locally; this app does not connect to railway operator APIs.

## Setup

Requires Node.js 18 or newer and npm.

```bash
npm install
npm run dev
```

Vite prints the local development URL (usually `http://localhost:5173`). To create a production build, run `npm run build`; to serve that build locally, run `npm run preview`.

The map uses OpenStreetMap tiles with a CSS dark filter, so it does not require a CARTO API key. Keep OpenStreetMap attribution visible and follow its [tile usage policy](https://operations.osmfoundation.org/policies/tiles/).
