import {
  useNavigate,
  useParams,
} from "react-router-dom";

import type { Party } from "../types/party";

interface PartyDetailPageProps {
  parties: Party[];
}

export function PartyDetailPage({
  parties,
}: PartyDetailPageProps) {
  const navigate = useNavigate();

  const { partyId } = useParams();

  const party = parties.find(
    (item) =>
      item.id === Number(partyId),
  );

  if (!party) {
    return (
      <main className="home">
        <h1>Party not found</h1>

        <button
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </main>
    );
  }

  return (
    <div className="app">
      <main className="party-detail">
        <button
          className="back-button"
          onClick={() => navigate("/")}
        >
          ← Back
        </button>

        <section className="party-detail__main">
          <div className="party-detail__title">
            <div>
              <span className="party-type">
                {party.longTerm
                  ? "Long-term"
                  : "One-time"}
              </span>

              <h1>{party.title}</h1>
            </div>

            <strong>
              {party.currentPlayers}/
              {party.maxPlayers}
            </strong>
          </div>

          <div className="tags">
            <span>{party.edition}</span>

            <span>
              {party.environment}
            </span>

            {party.beginnerFriendly && (
              <span>
                Beginner Friendly
              </span>
            )}
          </div>

          <div className="detail-list">
            <p>
              🎮{" "}
              {party.activities.join(
                " · ",
              )}
            </p>

            <p>
              🌐{" "}
              {party.languages.join(
                " / ",
              )}
            </p>

            <p>
              🎙 {party.voiceChat}
            </p>

            <p>
              🕒 {party.startTime}
            </p>
          </div>
        </section>

        <section className="host-card">
          <p className="section-label">
            HOST
          </p>

          <h2>{party.hostName}</h2>

          <p>{party.hostCountry}</p>

          <button
            className="secondary-button"
            onClick={() =>
              navigate(
                `/players/${party.hostName}`,
              )
            }
          >
            View Profile
          </button>
        </section>

        <section className="join-section">
          <h2>Want to join?</h2>

          <textarea
            placeholder="Write a short message to the host..."
            maxLength={200}
          />

          <button className="join-button">
            Send Join Request
          </button>
        </section>
      </main>
    </div>
  );
}