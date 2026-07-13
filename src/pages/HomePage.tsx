import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../components/Header";
import { PartyCard } from "../components/PartyCard";
import { FilterChip } from "../components/FilterChip";

import type { Party } from "../types/party";

interface HomePageProps {
  parties: Party[];
}

export function HomePage({
  parties,
}: HomePageProps) {
  const navigate = useNavigate();

  const [javaOnly, setJavaOnly] = useState(false);
  const [vcOnly, setVcOnly] = useState(false);
  const [beginnerOnly, setBeginnerOnly] =
    useState(false);
  const [longTermOnly, setLongTermOnly] =
    useState(false);

  const visibleParties = parties.filter((party) => {
    if (javaOnly && party.edition !== "Java") {
      return false;
    }

    if (
      vcOnly &&
      party.voiceChat === "No VC"
    ) {
      return false;
    }

    if (
      beginnerOnly &&
      !party.beginnerFriendly
    ) {
      return false;
    }

    if (
      longTermOnly &&
      !party.longTerm
    ) {
      return false;
    }

    return true;
  });

  function handlePartyClick(
    partyId: number,
  ) {
    navigate(`/parties/${partyId}`);
  }

  return (
    <div className="app">
      <Header />

      <main className="home">
        <section className="filters">
          <FilterChip
            label="Java"
            active={javaOnly}
            onClick={() =>
              setJavaOnly(
                (current) => !current,
              )
            }
          />

          <FilterChip
            label="VC"
            active={vcOnly}
            onClick={() =>
              setVcOnly(
                (current) => !current,
              )
            }
          />

          <FilterChip
            label="Beginner Friendly"
            active={beginnerOnly}
            onClick={() =>
              setBeginnerOnly(
                (current) => !current,
              )
            }
          />

          <FilterChip
            label="Long-term"
            active={longTermOnly}
            onClick={() =>
              setLongTermOnly(
                (current) => !current,
              )
            }
          />
        </section>

        <button
          type="button"
          className="secondary-button"
          onClick={() =>
            navigate("/join-requests")
          }
        >
          Join Requests
        </button>

        <section className="party-list">
          <div className="section-header">
            <h2>Find a Party</h2>

            <span>
              {visibleParties.length} parties
            </span>
          </div>

          {visibleParties.length === 0 ? (
            <p className="empty-message">
              No parties match your filters.
            </p>
          ) : (
            visibleParties.map((party) => (
              <PartyCard
                key={party.id}
                party={party}
                onClick={
                  handlePartyClick
                }
              />
            ))
          )}
        </section>
      </main>

      <button
        type="button"
        className="create-party-button"
        onClick={() =>
          navigate("/create-party")
        }
      >
        ＋ Create Party
      </button>
    </div>
  );
}