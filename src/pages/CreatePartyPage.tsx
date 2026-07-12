import { useState } from "react";
import { useNavigate } from "react-router-dom";

import type {
  MinecraftEdition,
  Party,
  VoiceChatOption,
} from "../types/party";

interface CreatePartyPageProps {
  onCreateParty: (party: Party) => void;
}

export function CreatePartyPage({
  onCreateParty,
}: CreatePartyPageProps) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [edition, setEdition] =
    useState<MinecraftEdition>("Java");
  const [environment, setEnvironment] =
    useState<"Vanilla" | "Modded">("Vanilla");
  const [language, setLanguage] = useState("English");
  const [voiceChat, setVoiceChat] =
    useState<VoiceChatOption>("Optional");
  const [maxPlayers, setMaxPlayers] = useState(4);
  const [activity, setActivity] = useState("Survival");
  const [beginnerFriendly, setBeginnerFriendly] =
    useState(false);
  const [longTerm, setLongTerm] = useState(false);

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const newParty: Party = {
      id: Date.now(),
      title,
      hostName: "You",
      hostCountry: "Japan",
      edition,
      environment,
      activities: [activity],
      languages: [language],
      voiceChat,
      beginnerFriendly,
      longTerm,
      currentPlayers: 1,
      maxPlayers,
      startTime: "Today",
    };

    onCreateParty(newParty);
    navigate("/");
  }

  return (
    <div className="app">
      <main className="create-party-page">
        <button
          type="button"
          className="back-button"
          onClick={() => navigate("/")}
        >
          ← Back
        </button>

        <h1>Create a Party</h1>
        <p>Find Minecraft players to join you.</p>

        <form
          className="party-form"
          onSubmit={handleSubmit}
        >
          <label>
            Party Title
            <input
              type="text"
              placeholder="Long-term Survival"
              value={title}
              onChange={(event) =>
                setTitle(event.target.value)
              }
              required
            />
          </label>

          <label>
            Minecraft Edition
            <select
              value={edition}
              onChange={(event) =>
                setEdition(
                  event.target.value as MinecraftEdition,
                )
              }
            >
              <option value="Java">Java</option>
              <option value="Bedrock">Bedrock</option>
            </select>
          </label>

          <label>
            Environment
            <select
              value={environment}
              onChange={(event) =>
                setEnvironment(
                  event.target.value as
                    | "Vanilla"
                    | "Modded",
                )
              }
            >
              <option value="Vanilla">Vanilla</option>
              <option value="Modded">Modded</option>
            </select>
          </label>

          <label>
            Activity
            <select
              value={activity}
              onChange={(event) =>
                setActivity(event.target.value)
              }
            >
              <option value="Survival">Survival</option>
              <option value="Building">Building</option>
              <option value="Exploration">
                Exploration
              </option>
              <option value="Combat">Combat</option>
            </select>
          </label>

          <label>
            Language
            <select
              value={language}
              onChange={(event) =>
                setLanguage(event.target.value)
              }
            >
              <option value="English">English</option>
              <option value="Japanese">Japanese</option>
              <option value="Korean">Korean</option>
              <option value="Chinese">Chinese</option>
            </select>
          </label>

          <label>
            Voice Chat
            <select
              value={voiceChat}
              onChange={(event) =>
                setVoiceChat(
                  event.target.value as VoiceChatOption,
                )
              }
            >
              <option value="Optional">Optional</option>
              <option value="Required">Required</option>
              <option value="No VC">No VC</option>
            </select>
          </label>

          <label>
            Maximum Players
            <input
              type="number"
              min="2"
              max="20"
              value={maxPlayers}
              onChange={(event) =>
                setMaxPlayers(Number(event.target.value))
              }
            />
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={beginnerFriendly}
              onChange={(event) =>
                setBeginnerFriendly(event.target.checked)
              }
            />
            Beginner Friendly
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={longTerm}
              onChange={(event) =>
                setLongTerm(event.target.checked)
              }
            />
            Long-term Party
          </label>

          <button type="submit" className="join-button">
            Publish Party
          </button>
        </form>
      </main>
    </div>
  );
}