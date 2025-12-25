import { ProjectDetail } from "../../types";

const chainmyth: ProjectDetail = {
  id: "1", // MUST match project.id in constants.ts
  tags: ["Multiplayer", "Motocross", "Racing", "Unity", "Netcode"],
  role: "Junior Unity Developer",
  contributions: [
    "Implemented complete multiplayer logic including player syncing and race state management",
    "Handled lag compensation and network optimization for smooth online gameplay",
    "Developed UI systems for matchmaking, race results, and score synchronization",
    "Built in-game shop and vehicle upgrade systems with networked persistence"
  ]
};

export default chainmyth;
