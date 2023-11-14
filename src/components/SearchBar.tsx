import React from 'react'
import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  return (
    <form>
      <div className="flex">
        <label className="mb-2
        text-sm
        font-medium
        text-gray-900
        sr-only
        dark:text-white
        ">
          Your Email
        </label>
        <button data-dropdown-toggle="dropdown" className="
          flex-shrink-0
          inline-flex
          items-center
          py-1
          px-4
          text-sm
          font-medium
          text-center
          text-gray-900
          bg-gray-100
          border
          border-gray-700
          rounded-s-lg
          hover:bg-gray-200
          focus:ring-4
          focus:outline-none
          focus:ring-gray-100
          dark:bg-gray-700
          dark:hover:bg-gray-600
          dark:focus:ring-gray-700
          dark:text-white
          dark:border-gray-700"
          type="button">
          All categories
          <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>
        <input
          type="search"
          className="
            block
            p-1
            w-full
            text-sm
            text-gray-900
            bg-transparent
            border
            border-gray-300
            focus:ring-blue-800
            focus:border-blue-500
            dark:border-s-gray-700

            dark:border-gray-700
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:border-blue-800
            outline-none focus:border-1"
          placeholder="Enter video id or url"
          size={42}
        />
        <div className="relative w-full">
          <button
            type="submit"
            className="
              relative 
              top-0
              end-0
              p-1
              text-sm
              font-medium
              h-full
              text-white
              bg-gray-700
              border
              rounded-e
              border-gray-700
              focus:ring-1
              focus:outline-none
              hover:bg-blue-500
              hover:ring-gray-300
              focus:bg-blue-500
              dark:hover:bg-gray-700
              dark:focus:ring-gray-800">
            <IoSearch />
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
}