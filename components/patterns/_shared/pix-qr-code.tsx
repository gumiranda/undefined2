"use client";

function generateQrModules(): boolean[][] {
  const size = 25;
  const grid: boolean[][] = Array.from({ length: size }, () =>
    Array(size).fill(false)
  );
  const drawFinder = (row: number, col: number) => {
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 7; c++) {
        const isOuter = r === 0 || r === 6 || c === 0 || c === 6;
        const isInner = r >= 2 && r <= 4 && c >= 2 && c <= 4;
        grid[row + r][col + c] = isOuter || isInner;
      }
    }
  };
  drawFinder(0, 0);
  drawFinder(0, size - 7);
  drawFinder(size - 7, 0);
  let seed = 42;
  const next = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed;
  };
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      const inFinder =
        (r < 8 && c < 8) ||
        (r < 8 && c >= size - 8) ||
        (r >= size - 8 && c < 8);
      if (!inFinder) grid[r][c] = next() % 3 !== 0;
    }
  }
  return grid;
}

export default function PixQrCode({ size = 200 }: { size?: number }) {
  const modules = generateQrModules();
  const cellSize = 8;
  const svgSize = modules.length * cellSize;
  return (
    <svg
      viewBox={`0 0 ${svgSize} ${svgSize}`}
      width={size}
      height={size}
      className="mx-auto"
      role="img"
      aria-label="PIX QR Code"
    >
      <rect width={svgSize} height={svgSize} fill="white" rx={4} />
      {modules.map((row, r) =>
        row.map(
          (on, c) =>
            on && (
              <rect
                key={`${r}-${c}`}
                x={c * cellSize}
                y={r * cellSize}
                width={cellSize}
                height={cellSize}
                fill="#111"
              />
            )
        )
      )}
    </svg>
  );
}
