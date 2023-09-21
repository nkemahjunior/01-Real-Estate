import Search from "./Search";
import SearchResults from "./SearchResults";

function SearchParent() {
  return (
    <div className="bg-indigo-50 p-4">
      <Search />
      <SearchResults/>
    </div>
  );
}

export default SearchParent;
