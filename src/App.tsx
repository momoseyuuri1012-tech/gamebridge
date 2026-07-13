import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { PartyDetailPage } from "./pages/PartyDetailPage";
import { PlayerProfilePage } from "./pages/PlayerProfilePage";
import { CreatePartyPage } from "./pages/CreatePartyPage";
import { JoinRequestsPage } from "./pages/JoinRequestsPage";

import { mockParties } from "./data/mockParties";

import type { Party } from "./types/party";
import type { JoinRequest } from "./types/joinRequest";

function App() {
  const [parties, setParties] =
    useState<Party[]>(mockParties);

  const [joinRequests, setJoinRequests] =
    useState<JoinRequest[]>([]);

  function handleCreateParty(newParty: Party) {
    setParties((current) => [
      ...current,
      newParty,
    ]);
  }

  function handleCreateJoinRequest(
    newRequest: JoinRequest,
  ) {
    setJoinRequests((current) => [
      ...current,
      newRequest,
    ]);
  }

  function handleUpdateJoinRequest(
  requestId: number,
  status: JoinRequest["status"],
) {
  const targetRequest = joinRequests.find(
    (request) => request.id === requestId,
  );

  if (!targetRequest) {
    return;
  }

  setJoinRequests((current) =>
    current.map((request) =>
      request.id === requestId
        ? { ...request, status }
        : request,
    ),
  );

  if (status === "ACCEPTED") {
    setParties((current) =>
      current.map((party) =>
        party.id === targetRequest.partyId
          ? {
              ...party,
              currentPlayers: Math.min(
                party.currentPlayers + 1,
                party.maxPlayers,
              ),
            }
          : party,
      ),
    );
  }
}

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage parties={parties} />
        }
      />

      <Route
        path="/parties/:partyId"
        element={
          <PartyDetailPage
            parties={parties}
            joinRequests={joinRequests}
            onCreateJoinRequest={
              handleCreateJoinRequest
            }
          />
        }
      />

      <Route
        path="/players/:playerName"
        element={
          <PlayerProfilePage />
        }
      />

      <Route
        path="/create-party"
        element={
          <CreatePartyPage
            onCreateParty={
              handleCreateParty
            }
          />
        }
      />

      <Route
        path="/join-requests"
        element={
          <JoinRequestsPage
            joinRequests={joinRequests}
            parties={parties}
            onUpdateRequest={
              handleUpdateJoinRequest
            }
          />
        }
      />
    </Routes>
  );
}

export default App;