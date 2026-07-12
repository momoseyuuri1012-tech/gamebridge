import type { Party } from "../types/party";

interface PartyCardProps {
  party: Party;
  onClick?: (partyId: number) => void;
}

export function PartyCard({
  party,
  onClick,
}: PartyCardProps) {
  return (
    <article
      className="party-card"
      onClick={() => onClick?.(party.id)}
      role="button"
      tabIndex={0}
    >
      <div className="party-card__header">
        <div>
          <h2>{party.title}</h2>

          <p>
            {party.hostName} · {party.hostCountry}
          </p>
        </div>

        <span className="player-count">
          {party.currentPlayers}/{party.maxPlayers}
        </span>
      </div>

      <div className="tags">
        <span>{party.edition}</span>

        <span>{party.environment}</span>

        {party.beginnerFriendly && (
          <span>Beginner Friendly</span>
        )}

        {party.longTerm && (
          <span>Long-term</span>
        )}
      </div>

      <p>
        🎮 {party.activities.join(" · ")}
      </p>

      <p>
        🌐 {party.languages.join(" / ")}
      </p>

      <p>
        🎙 {party.voiceChat}
      </p>

      <p className="start-time">
        🕒 {party.startTime}
      </p>
    </article>
  );
}