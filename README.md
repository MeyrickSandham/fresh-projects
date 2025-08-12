# FreshProjects – Floorplan App

A minimal, responsive Angular (Nx) app for showcasing a single property via an interactive **floorplan**. Clickable rooms reveal details and a room‑specific gallery, while a main gallery shows all images for the floorplan.

---

## Current Task (Technical Challenge)

Using the technology of your choice, create a single-page web app for one house:

- Display general details: **title**, **short description**, **price**, **address**, and a **thumbnail**.
- Use the **floorplan as a navigation element** (clickable rooms / hotspots).
- On clicking a room, show **below the plan**:
  - Room **name**
  - Room **description**
  - **Photos** of the selected room (room gallery)
- The page should be **responsive** for mobile devices.
- You can use any assets you wish.
- Bonus points for **optimising the app**, and explaining optimisations.

---

## Project Overview

- **Floorplan Panel** – Displays the floorplan image overlaid with clickable room shapes (SVG). Hover to highlight; click to select.
- **Room Details Panel** – Shows the selected room’s name, description, and a **Room Gallery** filtered to that room.
- **Main Gallery** – Displays **all floorplan images**, appearing beneath the Room Details panel.
- **Responsive Layout** – Panels stack on small screens and sit side‑by‑side on large screens.

---

## Getting Started

1. **Clone** the repository and open a console at the repo root.
2. **Enter** the workspace:
   ```sh
   cd fresh-projects-workspace
   ```
3. **Install** dependencies:
   ```sh
   npm install
   ```
4. *(Optional but helpful)* Reset Nx cache:
   ```sh
   nx reset
   ```

---

## Dev Commands

- **Build (watch)**
  ```sh
  npm run build-watch
  ```

- **Serve (watch)**
  ```sh
  npm run serve
  ```

---

## Docker (Local)

### Build the UI image (Windows)

Run the 'BuildUIImage.bat' file as Administrator.
This builds a local Docker image named `freshprojectsui` using the Dockerfile.

### Run the UI image (Windows)

Run the 'RunUIImage.bat' file as Administrator.
This runs the local Docker image named `freshprojectsui`


---