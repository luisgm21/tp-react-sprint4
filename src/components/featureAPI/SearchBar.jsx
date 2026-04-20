import React, { useState, useEffect } from 'react'


const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const [inputValue, setInputValue] = useState(searchTerm);

  useEffect(() => {
    // Cada vez que searchTerm externo cambie, sincroniza el input local
    setInputValue(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchTerm(inputValue);
    }, 500);
    return () => clearTimeout(handler);
  }, [inputValue, setSearchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        action="post"
        className="flex items-center gap-3 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-md max-w-md mx-auto my-4 border border-slate-200 dark:border-slate-700 transition-colors"
      >
        <label htmlFor="buscador" className="font-medium text-gray-700 dark:text-slate-200 mr-2">Buscar:</label>
        <input
          className="flex-1 px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-full outline-none text-base bg-white dark:bg-slate-700 text-gray-900 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-400 focus:border-slate-600 focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-600 transition"
          id="buscador"
          type="text"
          placeholder="Buscar..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium rounded-full bg-slate-900 text-white shadow-sm transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
        >
          Search
        </button>
      </form>
    </>
  );
}

export default SearchBar