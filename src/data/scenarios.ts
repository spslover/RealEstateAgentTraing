import type { ScenarioSimulation } from '@/types/training';

export const scenarios: ScenarioSimulation[] = [
  {
    id: 'scenario-001',
    title: '初回内見予約のご案内',
    difficulty: 'beginner',
    scenarioType: 'inquiry',
    initialContext:
      'お客様はウェブサイトから気になる賃貸物件について電話してきました。内見を希望しています。',
    conversationFlow: [
      {
        id: 'node-1',
        speaker: 'customer',
        text: 'ウェブで見た〇〇マンションを内見したいのですが、可能でしょうか？',
        nextNodeId: 'node-2'
      },
      {
        id: 'node-2',
        speaker: 'staff',
        text: 'お問い合わせありがとうございます。担当の山田でございます。ご希望の日程はございますか？',
        possibleResponses: [
          {
            id: 'response-2a',
            text: 'ありがとうございます。担当の山田でございます。ご希望の日程はございますか？',
            score: 10,
            feedback: '丁寧な自己紹介と次の行動確認ができています。',
            nextNodeId: 'node-3'
          },
          {
            id: 'response-2b',
            text: 'いつ来れますか？',
            score: 2,
            feedback: '自己紹介と感謝が不足しています。',
            nextNodeId: 'node-3'
          },
          {
            id: 'response-2c',
            text: 'スケジュールを確認して折り返します。',
            score: 5,
            feedback: '前向きな姿勢ですが、具体的なヒアリングが不足しています。',
            nextNodeId: 'node-3'
          }
        ]
      },
      {
        id: 'node-3',
        speaker: 'customer',
        text: '来週の水曜日か木曜日の夕方だと助かります。',
        nextNodeId: 'node-4'
      },
      {
        id: 'node-4',
        speaker: 'staff',
        text: '承知いたしました。水曜日でしたら17時、木曜日でしたら18時が空いております。ご都合はいかがでしょうか？',
        possibleResponses: [
          {
            id: 'response-4a',
            text: '承知いたしました。水曜日でしたら17時、木曜日でしたら18時が空いております。ご都合はいかがでしょうか？',
            score: 10,
            feedback: '選択肢を提示しながら丁寧に確認できています。',
            nextNodeId: 'node-5'
          },
          {
            id: 'response-4b',
            text: 'どちらでも大丈夫です。',
            score: 4,
            feedback: 'お客様に選択肢を委ねられていません。',
            nextNodeId: 'node-5'
          },
          {
            id: 'response-4c',
            text: 'では水曜日の17時でお願いします。',
            score: 6,
            feedback: '確認せずに決めてしまっています。',
            nextNodeId: 'node-5'
          }
        ]
      },
      {
        id: 'node-5',
        speaker: 'customer',
        text: '木曜日の18時でお願いします。',
        nextNodeId: 'node-6'
      },
      {
        id: 'node-6',
        speaker: 'staff',
        text: 'ありがとうございます。では木曜日18時に〇〇マンションのエントランスでお待ちしております。当日は身分証のご持参をお願いいたします。',
        nextNodeId: 'node-7'
      },
      {
        id: 'node-7',
        speaker: 'customer',
        text: 'わかりました。よろしくお願いします。'
      }
    ],
    evaluationCriteria: [
      {
        category: 'tone',
        weight: 0.2,
        scoreRange: [0, 100],
        description: '穏やかで安心感のある声のトーンを維持できているか'
      },
      {
        category: 'politeness',
        weight: 0.3,
        scoreRange: [0, 100],
        description: '敬語表現や言葉遣いが適切か'
      },
      {
        category: 'accuracy',
        weight: 0.3,
        scoreRange: [0, 100],
        description: '日程や場所など情報の確認が正確か'
      },
      {
        category: 'next_steps',
        weight: 0.2,
        scoreRange: [0, 100],
        description: '次のアクションを明確に提示できているか'
      }
    ]
  }
];
