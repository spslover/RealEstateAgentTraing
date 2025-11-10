import { Mic, Type } from 'lucide-react';

import type { ResponseOption } from '@/types/training';

interface ResponseInputProps {
  readonly options?: ResponseOption[];
  readonly onSelect: (option: ResponseOption | 'voice' | 'text') => void;
}

export const ResponseInput = ({ options, onSelect }: ResponseInputProps) => {
  return (
    <section className="space-y-4 rounded-2xl bg-white p-6 shadow">
      <div className="flex gap-3">
        <button
          className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-primary-300 hover:text-primary-600"
          onClick={() => onSelect('voice')}
          type="button"
        >
          <Mic className="h-4 w-4" /> 音声入力
        </button>
        <button
          className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-primary-300 hover:text-primary-600"
          onClick={() => onSelect('text')}
          type="button"
        >
          <Type className="h-4 w-4" /> テキスト入力
        </button>
      </div>
      {options ? (
        <div className="space-y-2">
          {options.map((option) => (
            <button
              key={option.id}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm text-slate-700 transition hover:border-primary-300 hover:bg-primary-50"
              onClick={() => onSelect(option)}
              type="button"
            >
              {option.text}
            </button>
          ))}
        </div>
      ) : (
        <p className="text-sm text-slate-500">自由入力モードがまもなく利用可能になります。</p>
      )}
    </section>
  );
};
