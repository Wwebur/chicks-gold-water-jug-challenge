import { JugState, waterJugSolver } from "./services/water-jug-solver";

export class MyApp {
  xCapacity: number = 2;
  yCapacity: number = 10;
  targetZ: number = 4;

  solution: JugState[] | null = null;

  solve() {
    // Ensure all values are treated as numbers
    const x = Number(this.xCapacity);
    const y = Number(this.yCapacity);
    const z = Number(this.targetZ);

    // Validate inputs
    if (isNaN(x) || isNaN(y) || isNaN(z) || x <= 0 || y <= 0 || z < 0) {
      this.solution = null;
      return;
    }

    this.solution = waterJugSolver(x, y, z);
  }
}
