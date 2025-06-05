# 🌍 Earthquake Data Dashboard

An interactive and responsive React + TypeScript web application that visualizes recent global earthquake data using a scatter chart and table. Built with Tailwind CSS, Recharts, and Context API for seamless data exploration.

## 🔧 Tech Stack

- ⚛️ React (with Vite + TypeScript)
- 🎨 Tailwind CSS (for responsive styling)
- 📊 Recharts (for scatter plot visualization)
- 📦 PapaParse (for CSV parsing)
- 🔗 React Context (for selection syncing between components)

---

## 🚀 Features

- 📈 **Chart Panel**: Select any two metrics (magnitude, depth, lat, long) for X/Y scatter plot.
- 📋 **Table Panel**: Scrollable table listing all parsed data entries with timestamps, magnitude, depth, and location.
- 🔄 **Interconnected UI**: 
  - Click a table row → highlights point on chart
  - Click a chart point → highlights + scrolls to row in table
- 📁 **Data Source**: [USGS All-Month Earthquake CSV](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv)
- ⚙️ Built with modular components and global state management via Context API

---

## 🧑‍💻 Getting Started

### 1. Clone & Install
```bash
git clone <your-repo-url>
cd earthquake-dashboard
npm install
