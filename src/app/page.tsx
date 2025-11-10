import { Suspense } from 'react';

import { Navigation } from '@/components/common/navigation';
import { LearningProgress } from '@/components/dashboard/learning-progress';
import { ScenarioGrid } from '@/components/dashboard/scenario-grid';
import { WelcomeBanner } from '@/components/dashboard/welcome-banner';
import { ActionItems } from '@/components/reports/action-items';
import { DetailedFeedback } from '@/components/reports/detailed-feedback';
import { RadarChart } from '@/components/reports/radar-chart';
import { ScoreOverview } from '@/components/reports/score-overview';
import { TranscriptionViewer } from '@/components/reports/transcription-viewer';
import { ScenarioSimulator } from '@/components/simulator/scenario-simulator';
import { mockReports } from '@/data/reports';
import { generateActionItems } from '@/utils/action-items';

const DashboardPage = () => {
  const latestReport = mockReports[0];
  const categories = Object.keys(latestReport.categoryScores);
  const recommendations = generateActionItems(latestReport);

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside>
          <Navigation />
        </aside>
        <section className="space-y-6">
          <WelcomeBanner name="佐藤" />
          <div className="grid gap-6 xl:grid-cols-3">
            <div className="xl:col-span-2 space-y-6">
              <LearningProgress />
              <ScenarioGrid />
            </div>
            <div className="space-y-4">
              <ScoreOverview score={latestReport.overallScore} />
              <div className="rounded-2xl bg-white p-6 shadow">
                <RadarChart categories={categories} scores={latestReport.categoryScores} />
              </div>
            </div>
          </div>
          <DetailedFeedback
            aiFeedback={latestReport.aiGeneratedFeedback}
            improvements={latestReport.areasForImprovement}
            strengths={latestReport.strengths}
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <TranscriptionViewer text={latestReport.transcription} />
            <ActionItems recommendations={recommendations} />
          </div>
          <Suspense fallback={<div className="rounded-3xl bg-white p-6 shadow">Loading simulator...</div>}>
            <ScenarioSimulator />
          </Suspense>
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;
