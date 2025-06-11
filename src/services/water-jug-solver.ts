/**
 * Interface representing the state of both water jugs
 * @property x - Current amount of water in jug X
 * @property y - Current amount of water in jug Y
 * @property explanation - Description of the action taken to reach this state
 */
export interface JugState {
    x: number;
    y: number;
    explanation: string;
}

/**
 * Calculates the Greatest Common Divisor (GCD) of two numbers using Euclidean algorithm
 * @param a - First number
 * @param b - Second number
 * @returns The GCD of a and b
 */
export function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
}

/**
 * Determines if a solution exists for the given water jug problem
 * @param x - Capacity of jug X
 * @param y - Capacity of jug Y
 * @param z - Target amount to measure
 * @returns true if a solution exists, false otherwise
 */
export function hasSolution(x: number, y: number, z: number): boolean {
    // If target amount is greater than both jugs, it's impossible
    if (z > Math.max(x, y)) return false;
    // A solution exists if and only if z is divisible by the GCD of x and y
    return z % gcd(x, y) === 0;
}

/**
 * Solves the water jug problem using Breadth-First Search (BFS)
 * @param xCap - Capacity of jug X
 * @param yCap - Capacity of jug Y
 * @param z - Target amount to measure
 * @returns Array of JugState representing the solution path, or null if no solution exists
 */
export function waterJugSolver(xCap: number, yCap: number, z: number): JugState[] | null {
    // Check if solution is possible
    if (!hasSolution(xCap, yCap, z)) {
        return null;
    }

    // Type definition for the state in our BFS queue
    type State = { x: number; y: number; path: JugState[] };
    
    // Keep track of visited states to avoid cycles
    const visited = new Set<string>();
    // Queue for BFS implementation
    const queue: State[] = [];

    // Start with both jugs empty
    queue.push({ x: 0, y: 0, path: [{ x: 0, y: 0, explanation: 'Start' }] });

    while (queue.length > 0) {
        const current = queue.shift()!;
        const key = `${current.x},${current.y}`;
        
        // Skip if we've seen this state before
        if (visited.has(key)) continue;
        visited.add(key);

        // Check if we've reached the target amount in either jug
        if (current.x === z || current.y === z) {
            current.path[current.path.length - 1].explanation += ' → SOLVED';
            return current.path;
        }

        const nextStates: State[] = [];

        // Generate all possible next states:

        // 1. Fill jug X to capacity
        nextStates.push({
            x: xCap,
            y: current.y,
            path: [...current.path, { x: xCap, y: current.y, explanation: 'Fill bucket X' }],
        });

        // 2. Fill jug Y to capacity
        nextStates.push({
            x: current.x,
            y: yCap,
            path: [...current.path, { x: current.x, y: yCap, explanation: 'Fill bucket Y' }],
        });

        // 3. Empty jug X
        nextStates.push({
            x: 0,
            y: current.y,
            path: [...current.path, { x: 0, y: current.y, explanation: 'Empty bucket X' }],
        });

        // 4. Empty jug Y
        nextStates.push({
            x: current.x,
            y: 0,
            path: [...current.path, { x: current.x, y: 0, explanation: 'Empty bucket Y' }],
        });

        // 5. Transfer water from X to Y
        const transferXY = Math.min(current.x, yCap - current.y);
        nextStates.push({
            x: current.x - transferXY,
            y: current.y + transferXY,
            path: [
                ...current.path,
                {
                    x: current.x - transferXY,
                    y: current.y + transferXY,
                    explanation: 'Transfer from bucket X to bucket Y',
                },
            ],
        });

        // 6. Transfer water from Y to X
        const transferYX = Math.min(current.y, xCap - current.x);
        nextStates.push({
            x: current.x + transferYX,
            y: current.y - transferYX,
            path: [
                ...current.path,
                {
                    x: current.x + transferYX,
                    y: current.y - transferYX,
                    explanation: 'Transfer from bucket Y to bucket X',
                },
            ],
        });

        // Add all possible next states to the queue
        queue.push(...nextStates);
    }

    // If we've exhausted all possibilities without finding a solution
    return null;
}
  