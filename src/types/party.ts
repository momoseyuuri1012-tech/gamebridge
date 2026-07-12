export type MinecraftEdition = "Java" | "Bedrock";

export type VoiceChatOption =
  | "Required"
  | "Optional"
  | "No VC";

export interface Party {
  id: number;
  title: string;
  hostName: string;
  hostCountry: string;

  edition: MinecraftEdition;
  environment: "Vanilla" | "Modded";

  activities: string[];
  languages: string[];

  voiceChat: VoiceChatOption;

  beginnerFriendly: boolean;
  longTerm: boolean;

  currentPlayers: number;
  maxPlayers: number;

  startTime: string;
}