import { JugState, waterJugSolver } from './services/water-jug-solver';

export class MyApp {
  xCapacity = 2;
  yCapacity = 10;
  targetZ = 4;

  solution: JugState[] | null = [];

  solve() {
    this.solution = waterJugSolver(this.xCapacity, this.yCapacity, this.targetZ);
  }
}
