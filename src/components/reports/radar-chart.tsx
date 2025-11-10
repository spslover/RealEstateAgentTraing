interface RadarChartProps {
  readonly categories: string[];
  readonly scores: Record<string, number>;
}

export const RadarChart = ({ categories, scores }: RadarChartProps) => {
  const maxScore = 100;
  const points = categories
    .map((category, index) => {
      const angle = (Math.PI * 2 * index) / categories.length - Math.PI / 2;
      const value = Math.min(scores[category] ?? 0, maxScore) / maxScore;
      const x = 120 + Math.cos(angle) * 100 * value;
      const y = 120 + Math.sin(angle) * 100 * value;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <svg viewBox="0 0 240 240" className="h-full w-full">
      <circle cx="120" cy="120" r="100" className="fill-primary-50" />
      <polygon points={points} className="fill-primary-400/40 stroke-primary-500" strokeWidth={2} />
      {categories.map((category, index) => {
        const angle = (Math.PI * 2 * index) / categories.length - Math.PI / 2;
        const x = 120 + Math.cos(angle) * 110;
        const y = 120 + Math.sin(angle) * 110;
        return (
          <text key={category} x={x} y={y} textAnchor="middle" className="text-[10px] uppercase text-slate-600">
            {category}
          </text>
        );
      })}
    </svg>
  );
};
