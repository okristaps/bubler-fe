import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "../../declerations/odincash-be";

class DfxClient {
  constructor() {
    this.canisterId = process.env.NEXT_PUBLIC_CANISTER_ID ?? "asrmz-lmaaa-aaaaa-qaaeq-cai";
    this.host = process.env.NEXT_PUBLIC_DFX_HOST || "https://ic0.app";

    this.agent = new HttpAgent({ host: this.host });

    if (process.env.NODE_ENV === "development") {
      this.agent.fetchRootKey().catch((err) => {
        console.error("Failed to fetch root key:", err);
      });
    }

    this.backend = Actor.createActor(idlFactory, {
      agent: this.agent,
      canisterId: this.canisterId,
    });
  }

  async getTop10AllTime() {
    try {
      const leaderboard = await this.backend.getTopLeaderboard(false);
      return leaderboard;
    } catch (error) {
      console.error("Error fetching all-time leaderboard:", error);
      return [];
    }
  }

  async getTop10CurrentWeek() {
    try {
      const leaderboard = await this.backend.getTopLeaderboard(true);
      return leaderboard;
    } catch (error) {
      console.error("Error fetching weekly leaderboard:", error);
      return [];
    }
  }
}

export const dfxClient = new DfxClient();
