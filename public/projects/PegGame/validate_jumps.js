// Peg Game Jump Validator
// This script validates that all legal jumps are present and no illegal jumps exist

const ROWS = [
    [0],
    [1, 2],
    [3, 4, 5],
    [6, 7, 8, 9],
    [10, 11, 12, 13, 14]
];

const VALID_JUMPS = [
    // Vertical jumps (same column, adjacent rows only)
    [0, 1, 3], [3, 1, 0],
    [0, 2, 5], [5, 2, 0],

    // Horizontal jumps (same row, adjacent positions)
    [3, 4, 5], [5, 4, 3],
    [6, 7, 8], [8, 7, 6],
    [7, 8, 9], [9, 8, 7],
    [10, 11, 12], [12, 11, 10],
    [11, 12, 13], [13, 12, 11],
    [12, 13, 14], [14, 13, 12],

    // Diagonal jumps (left-to-right descending)
    [1, 4, 8], [8, 4, 1],
    [2, 4, 7], [7, 4, 2],
    [1, 3, 6], [6, 3, 1],
    [3, 7, 12], [12, 7, 3],
    [4, 8, 13], [13, 8, 4],
    [5, 8, 12], [12, 8, 5],
    [4, 7, 11], [11, 7, 4],

    // Diagonal jumps (right-to-left descending)
    [2, 5, 9], [9, 5, 2],
    [5, 9, 14], [14, 9, 5],
    [5, 7, 10], [10, 7, 5],
    [3, 8, 14], [14, 8, 3],
    [10, 6, 3], [3, 6, 10],
];

// Create a coordinate system for each peg position
// Using (row, column) where column is the index within the row
function getCoordinates(position) {
    for (let row = 0; row < ROWS.length; row++) {
        const col = ROWS[row].indexOf(position);
        if (col !== -1) {
            return { row, col };
        }
    }
    return null;
}

// Get position from coordinates
function getPosition(row, col) {
    if (row < 0 || row >= ROWS.length || col < 0 || col >= ROWS[row].length) {
        return null;
    }
    return ROWS[row][col];
}

// Check if three positions are in a valid line (horizontal or diagonal)
// AND that from->over and over->to are adjacent (only jumping ONE peg)
function areInLine(from, over, to) {
    const fromCoord = getCoordinates(from);
    const overCoord = getCoordinates(over);
    const toCoord = getCoordinates(to);

    if (!fromCoord || !overCoord || !toCoord) return false;

    // Calculate the vectors
    const vec1 = {
        row: overCoord.row - fromCoord.row,
        col: overCoord.col - fromCoord.col
    };

    const vec2 = {
        row: toCoord.row - overCoord.row,
        col: toCoord.col - overCoord.col
    };

    // Vectors must be equal (same direction and magnitude)
    // AND each step must be exactly 1 row (adjacent positions)
    const vectorsEqual = vec1.row === vec2.row && vec1.col === vec2.col;
    const isAdjacent = Math.abs(vec1.row) === 1 || (vec1.row === 0 && Math.abs(vec1.col) === 1);

    return vectorsEqual && isAdjacent;
}

// Generate all theoretically possible jumps based on geometry
function generateAllPossibleJumps() {
    const possible = [];

    for (let from = 0; from < 15; from++) {
        for (let to = 0; to < 15; to++) {
            if (from === to) continue;

            for (let over = 0; over < 15; over++) {
                if (over === from || over === to) continue;

                // Check if from -> over -> to forms a valid line
                if (areInLine(from, over, to)) {
                    possible.push([from, over, to]);
                }
            }
        }
    }

    return possible;
}

// Main validation
console.log("=== Peg Game Jump Validation ===\n");

const allPossibleJumps = generateAllPossibleJumps();
console.log(`Total geometrically possible jumps: ${allPossibleJumps.length}`);
console.log(`Total jumps in VALID_JUMPS array: ${VALID_JUMPS.length}\n`);

// Check for missing jumps
const missingJumps = [];
for (const jump of allPossibleJumps) {
    const [from, over, to] = jump;
    const exists = VALID_JUMPS.some(([f, o, t]) =>
        f === from && o === over && t === to
    );
    if (!exists) {
        missingJumps.push(jump);
    }
}

if (missingJumps.length > 0) {
    console.log("❌ MISSING JUMPS:");
    missingJumps.forEach(([from, over, to]) => {
        const fromC = getCoordinates(from);
        const overC = getCoordinates(over);
        const toC = getCoordinates(to);
        console.log(`  [${from}, ${over}, ${to}] - (${fromC.row},${fromC.col}) -> (${overC.row},${overC.col}) -> (${toC.row},${toC.col})`);
    });
    console.log();
} else {
    console.log("✓ All possible jumps are present!\n");
}

// Check for illegal jumps
const illegalJumps = [];
for (const jump of VALID_JUMPS) {
    const [from, over, to] = jump;
    const exists = allPossibleJumps.some(([f, o, t]) =>
        f === from && o === over && t === to
    );
    if (!exists) {
        illegalJumps.push(jump);
    }
}

if (illegalJumps.length > 0) {
    console.log("❌ ILLEGAL JUMPS (should not be in VALID_JUMPS):");
    illegalJumps.forEach(([from, over, to]) => {
        const fromC = getCoordinates(from);
        const overC = getCoordinates(over);
        const toC = getCoordinates(to);
        console.log(`  [${from}, ${over}, ${to}] - (${fromC.row},${fromC.col}) -> (${overC.row},${overC.col}) -> (${toC.row},${toC.col})`);
    });
    console.log();
} else {
    console.log("✓ No illegal jumps found!\n");
}

// Check for duplicates
const duplicates = [];
const seen = new Set();
for (const jump of VALID_JUMPS) {
    const key = jump.join(',');
    if (seen.has(key)) {
        duplicates.push(jump);
    }
    seen.add(key);
}

if (duplicates.length > 0) {
    console.log("❌ DUPLICATE JUMPS:");
    duplicates.forEach(([from, over, to]) => {
        console.log(`  [${from}, ${over}, ${to}]`);
    });
    console.log();
} else {
    console.log("✓ No duplicate jumps found!\n");
}

// Summary
console.log("=== SUMMARY ===");
if (missingJumps.length === 0 && illegalJumps.length === 0 && duplicates.length === 0) {
    console.log("✅ VALID_JUMPS array is CORRECT!");
} else {
    console.log("❌ VALID_JUMPS array has issues:");
    if (missingJumps.length > 0) console.log(`   - ${missingJumps.length} missing jump(s)`);
    if (illegalJumps.length > 0) console.log(`   - ${illegalJumps.length} illegal jump(s)`);
    if (duplicates.length > 0) console.log(`   - ${duplicates.length} duplicate(s)`);
}
