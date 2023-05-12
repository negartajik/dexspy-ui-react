import { useState } from "react";
import { Logo, LivePricing } from '../components'

const Sidebar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

  return (
    <div className="flex h-screen bg-gray-200">
    {/* Sidebar */}
    <div
      className={`${
        isMenuOpen ? "xs:w-72 xl:w-72 2xl:w-72" : "w-20"
      } border-0 shadow-expand top-0 z-40 h-full w-full max-w-full  bg-body duration-200 ltr:left-0 rtl:right-0  dark:border-gray-700 dark:bg-dark md:fixed hidden md:block`}
    >
      <div className="h-16 flex items-center justify-center">
        <Logo/>
      </div>
      <div className="flex-grow flex flex-col items-center justify-start">
        <button
          className="h-16 w-full flex items-center justify-center"
          onClick={toggleMenu}
        >
          <LivePricing className="h-6 w-6" />
          <span className={`${isMenuOpen ? "" : "hidden"} ml-2`}>Menu</span>
        </button>
        <button className="h-16 w-full flex items-center justify-center">
          <LivePricing className="h-6 w-6" />
          <span className={`${isMenuOpen ? "" : "hidden"} ml-2`}>Search</span>
        </button>
        <button className="h-16 w-full flex items-center justify-center">
          <LivePricing className="h-6 w-6" />
          <span className={`${isMenuOpen ? "" : "hidden"} ml-2`}>Chart</span>
        </button>
        <button className="h-16 w-full flex items-center justify-center">
          <LivePricing className="h-6 w-6" />
          <span className={`${isMenuOpen ? "" : "hidden"} ml-2`}>Settings</span>
        </button>
      </div>
    </div>
    {/* Content */}
    <div className="flex-grow flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-700 h-16">
        {/* Your navbar content goes here */}
      </nav>
      {/* Main content */}
      <main className="flex-grow p-4">
        {/* Your main content goes here */}
      </main>
    </div>
  </div>
  )
}

export default Sidebar