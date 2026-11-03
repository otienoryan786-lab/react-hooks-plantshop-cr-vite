# Plantsy

## Description

Plantsy is the admin side of a plant store, built with React and Vite. It
connects to a `json-server` backend to display plants, add new ones, mark them
as sold out, and search by name.

![Demo GIF](./demo.gif)

<!-- Replace with a screenshot of your finished app: ![Plantsy screenshot](./screenshots/plantsy.png) -->

## Features

- Loads and displays all plants when the app starts (`fetch` inside `useEffect`)
- Adds a new plant through the form with a `POST` request, and shows it immediately
- Toggles a plant between "In Stock" and "Out of Stock" (not saved to the backend)
- Filters plants by name as you type; clearing the search shows all plants again

## Tech Stack

React 18, Vite, json-server, Vitest and React Testing Library.

## Installation

1. Fork and clone this repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend (runs on port 6001):
   ```bash
   npm run server
   ```
4. In a second terminal, start the React app:
   ```bash
   npm run dev
   ```

Check that `http://localhost:6001/plants` returns data in your browser before
using the app.

## Usage

- **Add a plant:** fill in the name, image URL and price, then click *Add Plant*.
- **Mark sold out:** click the *In Stock* button on a plant card.
- **Search:** type in the search bar to filter plants by name.

## API Endpoints

| Method | Endpoint  | Purpose                |
| ------ | --------- | ---------------------- |
| GET    | `/plants` | Get all plants         |
| POST   | `/plants` | Create a new plant     |

## Testing

```bash
npm run test
```

## Author

Ryan Otieno
