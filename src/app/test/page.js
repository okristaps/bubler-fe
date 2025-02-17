// "use client";

// import { dfxClient } from "@/utils/dfxClient";
// import { useEffect, useState } from "react";

// export default function Page() {
//   const [leaderboard, setLeaderboard] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const data = await dfxClient.getLeaderboard();
//       setLeaderboard(data);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Leaderboard</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Game ID</th>
//             <th>Wallet</th>
//             <th>Username</th>
//             <th>Seed</th>
//             <th>Score</th>
//             <th>Time Played</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leaderboard.map((entry, index) => (
//             <tr key={index}>
//               <td>{entry.gameId}</td>
//               <td>{entry.wallet}</td>
//               <td>{entry.username}</td>
//               <td>{entry.seed}</td>
//               <td>{entry.score}</td>
//               <td>{entry.timePlayed}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

export default function Page() {}
