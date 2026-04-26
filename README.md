# HamsaDex — React Pokédex Application

![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-blue)
![Vite](https://img.shields.io/badge/Vite-purple)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-success)

---

## 🌐 Live Demo

GitHub Pages Deployment:

https://hamushh.github.io/HamsaDex/

Repository:

https://github.com/Hamushh/HamsaDex

LinkedIn:

https://www.linkedin.com/in/hamsa-s-853535314/

---

## 📖 Overview

HamsaDex is a Pokédex-style web application developed using React, TypeScript, and Vite as part of a frontend assignment.

The application allows users to browse Pokémon data retrieved from PokéAPI, navigate through paginated results, search for Pokémon by name or ID, and view detailed information for each Pokémon.

The project focuses on clean UI design, reusable components, structured code organization, API integration, and deployment using GitHub Pages.

---

## ✅ Assignment Requirements Covered

### 1. Fetch Data from an External API

The application retrieves Pokémon data from:

https://pokeapi.co/

Data is fetched dynamically using the Fetch API.

---

### 2. Pagination

The Pokédex displays Pokémon in pages instead of loading everything at once.

Pagination is implemented using:

- Next button  
- Previous button  
- `limit` and `offset` query parameters  

Example:

```text
https://pokeapi.co/api/v2/pokemon?limit=12&offset=0

