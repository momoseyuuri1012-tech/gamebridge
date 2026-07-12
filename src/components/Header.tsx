export function Header() {
  return (
    <header className="app-header">
      <div>
        <h1>GameBridge</h1>
        <p>Find Minecraft friends across Asia.</p>
      </div>

      <button
        type="button"
        className="profile-button"
        aria-label="Open profile"
      >
        👤
      </button>
    </header>
  );
}