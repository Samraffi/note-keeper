interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onCreateNote: () => void;
}

const SearchBar = ({ value, onChange, onCreateNote }: SearchBarProps) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <input
        type="text"
        placeholder="Поиск заметок..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={onCreateNote}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Новая заметка
      </button>
    </div>
  );
};

export default SearchBar;
