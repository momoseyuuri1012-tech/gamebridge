interface FilterChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function FilterChip({
  label,
  active = false,
  onClick,
}: FilterChipProps) {
  return (
    <button
      type="button"
      className={`filter-chip ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}