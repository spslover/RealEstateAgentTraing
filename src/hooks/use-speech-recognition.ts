'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type SpeechRecognitionConstructor = typeof window.SpeechRecognition;

interface SpeechRecognitionHook {
  readonly transcript: string;
  readonly isListening: boolean;
  readonly start: () => void;
  readonly stop: () => void;
  readonly error?: string;
}

const getSpeechRecognition = (): SpeechRecognitionConstructor | undefined => {
  if (typeof window === 'undefined') return undefined;
  return (window as unknown as { webkitSpeechRecognition?: SpeechRecognitionConstructor }).webkitSpeechRecognition || window.SpeechRecognition;
};

export const useSpeechRecognition = (language: 'ja-JP' | 'zh-CN' = 'ja-JP'): SpeechRecognitionHook => {
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const Recognition = getSpeechRecognition();
    if (!Recognition) {
      setError('Speech recognition is not supported in this browser.');
      return;
    }
    const recognition = new Recognition();
    recognition.lang = language;
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const current = event.resultIndex;
      const transcriptValue = event.results[current][0]?.transcript ?? '';
      setTranscript(transcriptValue);
    };

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = (event) => setError(event.error);

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
      recognitionRef.current = null;
    };
  }, [language]);

  const start = useCallback(() => {
    try {
      recognitionRef.current?.start();
    } catch (err) {
      setError((err as Error).message);
    }
  }, []);

  const stop = useCallback(() => {
    try {
      recognitionRef.current?.stop();
    } catch (err) {
      setError((err as Error).message);
    }
  }, []);

  return { transcript, isListening, start, stop, error };
};
