import React, { useState } from "react";

function SearchBox({ searchValue = "", setSearchValue }) {
  const [inputValue, setInputValue] = useState(searchValue);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSearchClick = () => {
    setSearchValue(inputValue);
  };
  return (
    <div className="mt-10">
      <label className="flex items-center gap-2 relative w-full">
        <div className="absolute left-3 opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className=" border-2 w-full rounded-lg p-2 pr-20 pl-10"
          placeholder="Search movies by title..."
        />
        <button
          onClick={handleSearchClick}
          className=" absolute text-white right-0 bg-red-400 rounded-lg py-[12px] px-[20px]"
        >
          Search
        </button>
      </label>
    </div>
  );
}

export default SearchBox;
