import React from 'react'
import DarkThemeSwitcher from './DarkThemeSwitcher';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="bg-zinc-100 dark:bg-stone-900 p-4 fixed w-full top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-inherit">My Website</h1>

          <SearchBar />

        </div>
        <div className="flex items-center space-x-4">
          <label className="flex items-center cursor-pointer">
            <span className="mr-2">Light/Dark</span>
            <DarkThemeSwitcher />
          </label>
        </div>
      </div>
    </header>
  )
}

export default Header