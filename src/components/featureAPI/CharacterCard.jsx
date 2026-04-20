import React from 'react';

/**
 * Props esperadas:
 * @param {string} name
 * @param {string} status
 * @param {string} species
 * @param {string} gender
 * @param {string} image
 */
const CharacterCard = ({ name, location, status, species, gender, image }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md overflow-hidden w-72 mx-auto border border-slate-200 dark:border-slate-700 transition-colors">
      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover object-center bg-slate-100 dark:bg-slate-700"
      />
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1 truncate">{name}</h2>
        <div className="flex flex-col gap-1 text-sm">
          <div className="flex gap-2 items-center">
            <span className="font-semibold text-slate-700 dark:text-slate-300">Status:</span>
            <span className="text-slate-800 dark:text-slate-100">{status}</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-semibold text-slate-700 dark:text-slate-300">Species:</span>
            <span className="text-slate-800 dark:text-slate-100">{species}</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-semibold text-slate-700 dark:text-slate-300">Gender:</span>
            <span className="text-slate-800 dark:text-slate-100">{gender}</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-semibold text-slate-700 dark:text-slate-300">Location:</span>
            <span className="text-slate-800 dark:text-slate-100">{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;