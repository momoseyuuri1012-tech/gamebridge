import { useState } from "react";

import {
  Route,
  Routes,
} from "react-router-dom";

import { HomePage } from "./pages/HomePage";

import { PartyDetailPage } from "./pages/PartyDetailPage";

import { PlayerProfilePage } from "./pages/PlayerProfilePage";

import { CreatePartyPage } from "./pages/CreatePartyPage";

import { mockParties } from "./data/mockParties";

import type { Party } from "./types/party";

function App() {
  const [parties, setParties] =
    useState<Party[]>(mockParties);

  function handleCreateParty(
    newParty: Party,
  ) {
    setParties((current) => [
      ...current,
      newParty,
    ]);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            parties={parties}
          />
        }
      />

      <Route
        path="/parties/:partyId"
        element={
          <PartyDetailPage
            parties={parties}
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
    </Routes>
  );
}

export default App;