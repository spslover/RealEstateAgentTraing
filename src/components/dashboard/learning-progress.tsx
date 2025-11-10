import { BookMarked } from 'lucide-react';

import { trainingChapters } from '@/data/chapters';

export const LearningProgress = () => {
  return (
    <section className="space-y-4 rounded-3xl bg-white p-6 shadow">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookMarked className="h-5 w-5 text-primary-500" />
          <h2 className="text-lg font-semibold text-slate-800">学習モジュール</h2>
        </div>
        <span className="text-sm text-slate-500">8章中 2章完了</span>
      </header>
      <ul className="space-y-3">
        {trainingChapters.map((chapter) => (
          <li key={chapter.id} className="rounded-2xl border border-slate-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase text-primary-500">Chapter {chapter.chapterNumber}</p>
                <p className="text-base font-semibold text-slate-800">{chapter.titleJa}</p>
                <p className="text-xs text-slate-500">{chapter.titleZh}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-700">{chapter.estimatedTime} 分</p>
                <p className="text-xs text-slate-400">Estimated</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
