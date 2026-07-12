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

  const [javaOnly, setJavaOnly] =
    useState(false);

  const visibleParties = javaOnly
    ? parties.filter(
        (party) => party.edition === "Java",
      )
    : parties;

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

          <FilterChip label="Bedrock" />
          <FilterChip label="VC" />

          <FilterChip
            label="Beginner Friendly"
          />

          <FilterChip label="Long-term" />
        </section>

        <section className="party-list">
          <div className="section-header">
            <h2>Find a Party</h2>

            <span>
              {visibleParties.length} parties
            </span>
          </div>

          {visibleParties.map((party) => (
            <PartyCard
              key={party.id}
              party={party}
              onClick={handlePartyClick}
            />
          ))}
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