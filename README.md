# Water Jug Challenge

## Overview

This app solves the classic **Water Jug Riddle** using BFS search.  
You can input jug sizes X and Y and the target amount Z.

- If a solution exists, it will display step-by-step actions.
- If no solution is possible, it will display "No Solution".
- Features a modern UI with loading states and responsive design.

## Live Demo

Check out the live demo: [Water Jug Challenge](https://chicks-gold-water-jug-challenge.vercel.app/)

## Tech Stack

- **Framework**: Aurelia.js
- **Language**: TypeScript
- **Styling**: CSS3 with CSS Variables
- **Deployment**: Vercel

## Features

- Interactive input for jug capacities and target amount
- Real-time solution calculation
- Loading spinner for better UX
- Responsive design that works on all devices
- Clear step-by-step solution display
- Input validation
- Modern and clean UI

## Algorithm

- We use **Breadth First Search (BFS)** to explore all possible jug states.
- The problem is solvable if:
  - Z is a multiple of gcd(X, Y)
  - Z is not greater than the maximum capacity
- We track visited states and return the shortest path.

## How to Run Locally

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to `http://localhost:9000`
