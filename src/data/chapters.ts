import type { TrainingChapter } from '@/types/training';

export const trainingChapters: TrainingChapter[] = [
  {
    id: 'chapter-1',
    chapterNumber: 1,
    titleJa: '電話応対の重要性',
    titleZh: '电话应对的重要性',
    estimatedTime: 15,
    sections: [
      {
        id: 'chapter-1-section-1',
        sectionNumber: '1.1',
        titleJa: 'ブランド体験としての電話',
        titleZh: '作为品牌体验的电话',
        contentJa:
          '電話応対はお客様の第一印象を左右する重要な接点です。声のトーンや言葉遣いは企業イメージに直結します。',
        contentZh:
          '电话沟通是左右客户第一印象的关键触点。语气与措辞直接影响企业形象。',
        keyPoints: [
          {
            id: 'k1',
            bulletJa: '応答は3コール以内に',
            bulletZh: '三声内接听电话'
          },
          {
            id: 'k2',
            bulletJa: '会社名と名前を明確に名乗る',
            bulletZh: '明确报出公司与姓名'
          }
        ],
        examples: [
          {
            id: 'ex1',
            scenarioType: 'inquiry',
            customerLineJa: '物件の内見について相談したいです。',
            customerLineZh: '想咨询一下房源看房事宜。',
            staffResponseJa: 'ありがとうございます。担当の佐藤でございます。ご希望の日程をお伺いできますか。',
            staffResponseZh: '感谢来电，我是负责的佐藤。可以先了解您的预约时间吗？',
            analysisJa: 'お客様の意図を確認しつつ、丁寧に自己紹介できている。',
            analysisZh: '一边确认客户需求一边礼貌自我介绍，表现恰当。'
          }
        ]
      }
    ]
  },
  {
    id: 'chapter-2',
    chapterNumber: 2,
    titleJa: '基本スキル',
    titleZh: '基础技能',
    estimatedTime: 25,
    sections: [
      {
        id: 'chapter-2-section-1',
        sectionNumber: '2.1',
        titleJa: '声・発声・間',
        titleZh: '声音与停顿控制',
        contentJa:
          '落ち着いたペースと明瞭な発音が信頼感を生みます。お客様の反応に合わせて間を取ります。',
        contentZh:
          '平稳语速与清晰发音能建立信赖感，并根据客户反应留出适当停顿。',
        keyPoints: [
          {
            id: 'k3',
            bulletJa: '共感を示す相づちを入れる',
            bulletZh: '通过附和表达共鸣'
          },
          {
            id: 'k4',
            bulletJa: '要点は復唱して確認',
            bulletZh: '重点信息需复述确认'
          }
        ],
        examples: [
          {
            id: 'ex2',
            scenarioType: 'complaint',
            customerLineJa: '先日の対応に不満があります。',
            customerLineZh: '对之前的处理不太满意。',
            staffResponseJa: 'ご不快な思いをさせてしまい申し訳ございません。詳しい状況をお聞かせいただけますか。',
            staffResponseZh: '非常抱歉让您感到不愉快，方便说明一下当时的情况吗？',
            analysisJa: '謝罪と共感を先に伝え、事実確認へ誘導している。',
            analysisZh: '先致歉表达共情，再引导客户说明细节。'
          }
        ]
      }
    ]
  }
];
