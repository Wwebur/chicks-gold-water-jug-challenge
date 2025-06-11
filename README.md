# Water Jug Challenge

## Overview

This app solves the classic **Water Jug Riddle** using BFS search.  
You can input jug sizes X and Y and the target amount Z.

- If a solution exists, it will display step-by-step actions.
- If no solution is possible, it will display "No Solution".

## Algorithm

- We use **Breadth First Search (BFS)** to explore all possible jug states.
- The problem is solvable if Z is a multiple of gcd(X, Y).
- We track visited states and return the shortest path.

## How to run

1. Install dependencies:

```bash
npm install
