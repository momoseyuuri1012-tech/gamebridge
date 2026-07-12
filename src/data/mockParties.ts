import type { Party } from "../types/party";

export const mockParties: Party[] = [
  {
    id: 1,
    title: "Long-term Survival",
    hostName: "Alex",
    hostCountry: "Taiwan",

    edition: "Java",
    environment: "Vanilla",

    activities: ["Building", "Exploration"],
    languages: ["English", "Chinese"],

    voiceChat: "Optional",

    beginnerFriendly: true,
    longTerm: true,

    currentPlayers: 2,
    maxPlayers: 4,

    startTime: "Today 20:00 JST",
  },

  {
    id: 2,
    title: "Casual Modded Adventure",
    hostName: "Minjun",
    hostCountry: "South Korea",

    edition: "Java",
    environment: "Modded",

    activities: ["Exploration", "Combat"],
    languages: ["English", "Korean"],

    voiceChat: "Required",

    beginnerFriendly: true,
    longTerm: false,

    currentPlayers: 1,
    maxPlayers: 5,

    startTime: "Today 22:00 JST",
  },
];