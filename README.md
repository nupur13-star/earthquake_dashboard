# 🌍 Earthquake Data Dashboard

A modern, responsive React + TypeScript dashboard that visualizes live earthquake data from USGS through an interactive scatter chart and a dynamic data table.

![screenshot](./screenshot.png)

---

## 📌 Project Overview

This single-page application (SPA) provides a side-by-side interface:

- **📊 Chart Panel** (left): Interactive scatter plot using Recharts. Users can select which variables to display on the X and Y axes.
- **📋 Data Table** (right): Scrollable table with full earthquake data and row highlighting.

The chart and table are interconnected—hovering/selecting one updates the other, showing seamless state sharing.

---

## 🚀 Tech Stack

| Category        | Tools Used                          |
|----------------|--------------------------------------|
| Frontend | `React`, `TypeScript` `Vite` |
| Styling  | `Tailwind CSS`               |
| Charts   | `Recharts`                   |
| State Sharing | `Props`, `React Context`,`Zustand` (optional integration) |
| Data Parsing|`PapaParse` |
| Dataset  | USGS Earthquake Data (CSV)      |

---

## 📦 Features

- ✅ Fully responsive layout with two main panels
- ✅ Earthquake data fetched and parsed from a CSV file (`all_month.csv`)
- ✅ Dropdowns to switch X/Y axis for dynamic chart exploration
- ✅ Hover and selection syncing between table and chart
- ✅ Clean, gradient-enhanced design for a modern feel
- ✅ Type-safe data handling with TypeScript interfaces

---

## 📁 Project Setup

### 1. Clone the repository

git clone https://github.com/nupur13-star/earthquake_dashboard.git
cd earthquake_dashboard
install dependencies by npm install

## 3. Place the Data File
Download the USGS earthquake data file and place it in the public folder:

File name: all_month.csv

Download link: USGS - All Month CSV

4. Start the development server
bash
Copy code
npm run dev
Open http://localhost:5173 to view it in the browser.

AI Usage
During development, GitHub Copilot and ChatGPT were used to:

Set up TypeScript interfaces for the parsed CSV

Create reusable state handling logic via hooks
FOLDER STRUCTURE 
src/
├── assets/                  # Logos and images
├── components/              # ChartPanel, DataTable
├── context/                 # SelectionProvider & custom hook
├── types/                   # EarthquakeEntry interface
├── utils/                   # PapaParse CSV loader
├── App.tsx
├── index.css
└── main.tsx

STATE MANAGEMENT 
Props Pattern: Used to pass data and handlers from parent to Chart and Table.

React Context: Used to sync selection state between Chart and Table.

Zustand: (Optional) easily integratable for scalable global state

AUTHOR 
NUPUR PATEL
https://github.com/nupur13-star