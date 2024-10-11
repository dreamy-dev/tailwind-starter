import { connectStateResults } from 'react-instantsearch-dom';
import Link from 'next/link';

function SearchHits({ searchState, searchResults }) {
    return searchState.query ? (
        <div className="relative">
            <div className="absolute left-0 right-0 top-1 rounded-2xl border border-gray-400 bg-white shadow-2xl">
                {searchResults?.hits.length === 0 && (
                    <div className="px-6 py-3">No results found!</div>
                )}
                {searchResults?.hits.length > 0 &&
                    searchResults.hits.map((hit) => {
                        console.log(searchResults);
                        return (
                            <Link
                                key={hit.objectID}
                                className="flex items-center gap-4 border-t border-gray-400 px-3 py-3 ring-inset ring-gray-100 transition-colors first:rounded-t-2xl first:border-0 last:rounded-b-2xl hover:bg-gray-100 focus:outline-none focus:ring-4"
                                href={`/${hit.full_slug}`}
                            >
                                {hit.name}
                            </Link>
                        );
                    })}
            </div>
        </div>
    ) : (
        <></>
    );
}

export default connectStateResults(SearchHits);
