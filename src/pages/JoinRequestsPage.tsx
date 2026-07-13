import { useNavigate } from "react-router-dom";

import type { JoinRequest } from "../types/joinRequest";
import type { Party } from "../types/party";

interface JoinRequestsPageProps {
  joinRequests: JoinRequest[];
  parties: Party[];
  onUpdateRequest: (
    requestId: number,
    status: JoinRequest["status"],
  ) => void;
}

export function JoinRequestsPage({
  joinRequests,
  parties,
  onUpdateRequest,
}: JoinRequestsPageProps) {
  const navigate = useNavigate();

  return (
    <div className="app">
      <main className="join-requests-page">
        <button
          type="button"
          className="back-button"
          onClick={() => navigate("/")}
        >
          ← Back
        </button>

        <h1>Join Requests</h1>
        <p>Review players who want to join your parties.</p>

        {joinRequests.length === 0 ? (
          <p>No join requests yet.</p>
        ) : (
          <div className="request-list">
            {joinRequests.map((request) => {
              const party = parties.find(
                (item) => item.id === request.partyId,
              );

              return (
                <section
                  key={request.id}
                  className="request-card"
                >
                  <p className="section-label">
                    {party?.title ?? "Unknown Party"}
                  </p>

                  <h2>{request.applicantName}</h2>
                  <p>{request.applicantCountry}</p>

                  <p className="request-message">
                    {request.message || "No message provided."}
                  </p>

                  <p>
                    Status: <strong>{request.status}</strong>
                  </p>

                  {request.status === "PENDING" && (
                    <div className="request-actions">
                      <button
                        type="button"
                        className="accept-button"
                        onClick={() =>
                          onUpdateRequest(
                            request.id,
                            "ACCEPTED",
                          )
                        }
                      >
                        Accept
                      </button>

                      <button
                        type="button"
                        className="decline-button"
                        onClick={() =>
                          onUpdateRequest(
                            request.id,
                            "DECLINED",
                          )
                        }
                      >
                        Decline
                      </button>
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}