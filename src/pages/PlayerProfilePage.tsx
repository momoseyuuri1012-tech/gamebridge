import { useNavigate } from "react-router-dom";

export function PlayerProfilePage() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <main className="player-profile">
        <button
          className="back-button"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <section className="profile-main">
          <div className="profile-avatar">
            A
          </div>

          <h1>Alex</h1>

          <p>Taiwan</p>

          <p className="profile-bio">
            I enjoy relaxed survival,
            building, and exploring with
            players from different
            countries.
          </p>
        </section>

        <section className="profile-section">
          <h2>Languages</h2>

          <div className="tags">
            <span>
              Chinese · Native
            </span>

            <span>
              English · Intermediate
            </span>
          </div>
        </section>

        <section className="profile-section">
          <h2>Minecraft</h2>

          <div className="tags">
            <span>Java</span>
            <span>Survival</span>
            <span>Building</span>
            <span>Exploration</span>
            <span>Vanilla</span>
            <span>VC Optional</span>
          </div>
        </section>

        <section className="profile-section">
          <h2>Player Trust</h2>

          <p>
            🎮 12 Completed Sessions
          </p>

          <p>
            🔁 92% Would Play Again
          </p>

          <div className="tags">
            <span>Friendly</span>
            <span>Reliable</span>
            <span>
              Good Teammate
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}