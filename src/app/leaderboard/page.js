import BubbleBackground from "@/components/bubble-bg";
import Leaderboard from "../game/components/leaderboard/leaderboard";
export default function LeaderboardPage() {
  return (
    <div className="h-full w-full overflow-y-auto pb-[40px] mt-[20]">
      <Leaderboard />

      <BubbleBackground />
    </div>
  );
}
