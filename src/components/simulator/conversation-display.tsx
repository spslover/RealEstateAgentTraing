import type { ConversationNode } from '@/types/training';

interface ConversationDisplayProps {
  readonly messages: ConversationNode[];
  readonly currentSpeaker?: 'customer' | 'staff';
}

export const ConversationDisplay = ({ messages, currentSpeaker }: ConversationDisplayProps) => {
  return (
    <section className="space-y-3 overflow-y-auto rounded-2xl bg-white p-6 shadow">
      {messages.map((message) => (
        <div key={message.id} className="flex flex-col">
          <span
            className={`text-xs font-semibold uppercase ${
              message.speaker === 'staff' ? 'text-primary-500' : 'text-emerald-500'
            }`}
          >
            {message.speaker === 'staff' ? 'Staff' : 'Customer'}
          </span>
          <p
            className={`rounded-xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
              message.speaker === 'staff'
                ? 'self-end bg-primary-50 text-primary-700'
                : 'self-start bg-emerald-50 text-emerald-700'
            } ${currentSpeaker === message.speaker ? 'ring-2 ring-offset-2 ring-primary-200' : ''}`}
          >
            {message.text}
          </p>
        </div>
      ))}
    </section>
  );
};
