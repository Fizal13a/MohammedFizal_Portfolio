import { ProjectDetail } from "../../types";

const chainmyth: ProjectDetail = {
  id: "2", // MUST match project.id in constants.ts
  tags: ["Multiplayer", "Racing", "Car Game", "Unity Networking"],
  role: "Junior Unity Developer",
  contributions: [
    "Implemented overall multiplayer architecture and race flow logic",
    "Handled player position synchronization and race state updates",
    "Developed lag compensation and network optimization for smooth gameplay",
    "Built and integrated multiplayer UI including scores and race results"
  ]
};

export default chainmyth;
