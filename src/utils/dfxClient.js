import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "../../declerations/bubler-be";

class DfxClient {
  constructor() {
    this.canisterId = process.env.NEXT_PUBLIC_CANISTER_ID;
    this.host = process.env.NEXT_PUBLIC_DFX_HOST || "http://127.0.0.1:4943";

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

  async getLeaderboard() {
    try {
      const leaderboard = await this.backend.getLeaderboard();
      console.log("Leaderboard Data:", leaderboard);
      return leaderboard;
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
      return [];
    }
  }
}

export const dfxClient = new DfxClient();
