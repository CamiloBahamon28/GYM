import React from "react";

export const Navbar = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-primary p-5">
      <div class="flex items-center flex-shrink-0 text-white mr-6 ">
        <svg
          class="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
        {/* logo de la empresa */}
        </svg>
        <span class="font-bold text-5xl ">GYM SMITH</span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            class="block mt-4 font-comfortaa text-lg lg:inline-block lg:mt-0 text-white hover:text-third mr-4"
          >
            Inicio
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 font-comfortaa text-lg lg:inline-block lg:mt-0 text-white hover:text-third mr-4"
          >
            Planes Entrenamiento
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 font-comfortaa text-lg lg:inline-block lg:mt-0 text-white hover:text-third"
          >
            Nosotros
          </a>
        </div>
        <div>
          <a
            href="#"
            class="inline-block text-lg px-3 py-1 border rounded-full text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-fourth mt-4 lg:mt-0"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};
