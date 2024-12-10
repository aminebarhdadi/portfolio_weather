import React from "react";
import Image from "next/image";

const Header = () => {
    return (
      <header className="sticky container mx-auto top-2 sm:top-4 z-50  my-2 ">
        
        <nav className="navbar  rounded-box flex gap-2 shadow max-md:flex-col md:items-center">
        <div className="flex  items-center justify-between">
          <div className="navbar-start items-center justify-between max-md:w-full">
            <a href="#" aria-label="Homepage Link">
              <Image 
              src='/img/logo.png'
              width={90}
              height={90}
              alt="Logo"
              />
            </a>
            <div className="md:hidden">
              <button type="button" className="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square" data-collapse="#logo-navbar-collapse" aria-controls="logo-navbar-collapse" aria-label="Toggle navigation">
                <span className="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
                <span className="icon-[tabler--x] collapse-open:block hidden size-4"></span>
              </button>
            </div>
          </div>
        </div>
        <div id="logo-navbar-collapse" className="md:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full">
          <ul className="menu md:menu-horizontal gap-2 p-0 text-base">
            <li><a href="/#hero">Startseite</a></li>
            <li><a href="/#skills">Fähigkeiten</a></li>
            <li><a href="/#projects">Projekte</a></li>
            <li><a href="/weather">Weather</a></li>
            <li><a href="/#contact">Kontakt</a></li>
          </ul>
        </div>
      </nav>

      </header>
    );
  };
  

export default Header;

