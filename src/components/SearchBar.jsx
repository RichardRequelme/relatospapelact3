export const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Buscar libro..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};