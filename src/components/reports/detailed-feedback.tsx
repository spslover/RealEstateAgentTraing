interface DetailedFeedbackProps {
  readonly strengths: string[];
  readonly improvements: string[];
  readonly aiFeedback: string;
}

export const DetailedFeedback = ({ strengths, improvements, aiFeedback }: DetailedFeedbackProps) => {
  return (
    <section className="grid gap-4 lg:grid-cols-3">
      <div className="rounded-2xl bg-white p-6 shadow">
        <h3 className="text-sm font-semibold text-emerald-600">Strengths</h3>
        <ul className="mt-3 space-y-2 text-sm text-emerald-700">
          {strengths.map((item) => (
            <li key={item} className="rounded-lg bg-emerald-50 px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl bg-white p-6 shadow">
        <h3 className="text-sm font-semibold text-rose-600">Improvements</h3>
        <ul className="mt-3 space-y-2 text-sm text-rose-700">
          {improvements.map((item) => (
            <li key={item} className="rounded-lg bg-rose-50 px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl bg-white p-6 shadow">
        <h3 className="text-sm font-semibold text-primary-600">AI Feedback</h3>
        <p className="mt-3 text-sm text-slate-700">{aiFeedback}</p>
      </div>
    </section>
  );
};
