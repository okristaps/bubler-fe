import { HttpAgent, Actor } from "@dfinity/agent";

export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    getBubbles: IDL.Func([], [IDL.Vec(IDL.Record({ id: IDL.Text, size: IDL.Nat, x: IDL.Nat, y: IDL.Nat }))], ["query"]),
    addBubble: IDL.Func([IDL.Record({ id: IDL.Text, size: IDL.Nat, x: IDL.Nat, y: IDL.Nat })], [], []),
    removeBubble: IDL.Func([IDL.Text], [], []),
  });
};

export const init = ({ IDL }) => {
  return [];
};

const agent = new HttpAgent({ host: "http://127.0.0.1:4943" });

await agent.fetchRootKey();

const bubblerCanister = Actor.createActor(idlFactory, {
  agent,
  canisterId: "bkyz2-fmaaa-aaaaa-qaaaq-cai",
  fetchRootKey: false,
});

export default bubblerCanister;
