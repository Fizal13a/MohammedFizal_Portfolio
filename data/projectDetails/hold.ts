import { ProjectDetail } from "../../types";

const chainmyth: ProjectDetail = {
  id: "5", // MUST match project.id in constants.ts
  tags: ["Multiplayer", "Car Combat", "Capture the Flag", "Netcode for GameObjects"],
  role: "Solo Game Developer (Work in progress)",
  contributions: [
    "Implemented core multiplayer car gameplay and capture-the-flag mechanics",
    "Developed networking logic using Netcode for GameObjects",
    "Handled player synchronization, authority, and state management",
    "Built scoring, respawn, and match flow systems"
  ]
};

export default chainmyth;
