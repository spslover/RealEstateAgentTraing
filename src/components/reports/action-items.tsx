interface ActionItemsProps {
  readonly recommendations: string[];
}

export const ActionItems = ({ recommendations }: ActionItemsProps) => {
  return (
    <section className="rounded-2xl bg-white p-6 shadow">
      <h3 className="text-sm font-semibold text-primary-600">Next Actions</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        {recommendations.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-primary-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
