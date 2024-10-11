import { connectSearchBox } from 'react-instantsearch-dom';

function SearchBox({ refine }) {
    return (
        <input
            type="search"
            className="mx-auto w-96 rounded-full border border-gray-400 px-4 py-3 focus:border-gray-500 focus:outline-none"
            placeholder="What are you looking for?"
            onChange={(e) => refine(e.currentTarget.value)}
        />
    );
}

export default connectSearchBox(SearchBox);
