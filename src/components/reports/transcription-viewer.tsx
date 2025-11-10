interface TranscriptionViewerProps {
  readonly text: string;
}

export const TranscriptionViewer = ({ text }: TranscriptionViewerProps) => {
  return (
    <section className="rounded-2xl bg-white p-6 shadow">
      <h3 className="text-sm font-semibold text-slate-700">Transcription</h3>
      <pre className="mt-3 max-h-60 overflow-y-auto whitespace-pre-wrap rounded-xl bg-slate-50 p-4 text-xs text-slate-600">
        {text}
      </pre>
    </section>
  );
};
