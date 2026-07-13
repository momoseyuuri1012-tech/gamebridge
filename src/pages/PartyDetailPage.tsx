import { useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

import type { Party } from "../types/party";
import type { JoinRequest } from "../types/joinRequest";

interface PartyDetailPageProps {
  parties: Party[];
  joinRequests: JoinRequest[];
  onCreateJoinRequest: (
    request: JoinRequest,
  ) => void;
}

export function PartyDetailPage({
  parties,
  joinRequests,
  onCreateJoinRequest,
}: PartyDetailPageProps) {
  const navigate = useNavigate();
  const { partyId } = useParams();

  const [message, setMessage] = useState("");

  const party = parties.find(
    (item) => item.id === Number(partyId),
  );

  if (!party) {
    return (
      <main className="home">
        <h1>Party not found</h1>

        <button
          type="button"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </main>
    );
  }

  const currentParty = party;

  const existingRequest = joinRequests.find(
    (request) =>
      request.partyId === currentParty.id &&
      request.applicantName === "You",
  );

  function handleJoinRequest() {
    if (existingRequest) {
      return;
    }

    const newRequest: JoinRequest = {
      id: Date.now(),
      partyId: currentParty.id,
      applicantName: "You",
      applicantCountry: "Japan",
      message,
      status: "PENDING",
    };

    onCreateJoinRequest(newRequest);
  }

  return (
    <div className="app">
      <main className="party-detail">
        <button
          type="button"
          className="back-button"
          onClick={() => navigate("/")}
        >
          ← Back
        </button>

        <section className="party-detail__main">
          <div className="party-detail__title">
            <div>
              <span className="party-type">
                {currentParty.longTerm
                  ? "Long-term"
                  : "One-time"}
              </span>

              <h1>{currentParty.title}</h1>
            </div>

            <strong>
              {currentParty.currentPlayers}/
              {currentParty.maxPlayers}
            </strong>
          </div>

          <div className="tags">
            <span>
              {currentParty.edition}
            </span>

            <span>
              {currentParty.environment}
            </span>

            {currentParty.beginnerFriendly && (
              <span>
                Beginner Friendly
              </span>
            )}
          </div>

          <div className="detail-list">
            <p>
              🎮{" "}
              {currentParty.activities.join(
                " · ",
              )}
            </p>

            <p>
              🌐{" "}
              {currentParty.languages.join(
                " / ",
              )}
            </p>

            <p>
              🎙 {currentParty.voiceChat}
            </p>

            <p>
              🕒 {currentParty.startTime}
            </p>
          </div>
        </section>

        <section className="host-card">
          <p className="section-label">
            HOST
          </p>

          <h2>{currentParty.hostName}</h2>

          <p>
            {currentParty.hostCountry}
          </p>

          <button
            type="button"
            className="secondary-button"
            onClick={() =>
              navigate(
                `/players/${currentParty.hostName}`,
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
            value={message}
            disabled={Boolean(existingRequest)}
            onChange={(event) =>
              setMessage(event.target.value)
            }
          />

          <button
            type="button"
            className="join-button"
            disabled={Boolean(existingRequest)}
            onClick={handleJoinRequest}
          >
            {existingRequest
              ? "Request Pending"
              : "Send Join Request"}
          </button>
        </section>
      </main>
    </div>
  );
}