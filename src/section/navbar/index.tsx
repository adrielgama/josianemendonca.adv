import { useState } from "react";

import Logo from "@/assets/logo.png";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const Links = [
    { name: "Início", link: "#" },
    { name: "Propósito", link: "#purpose" },
    { name: "Depoimentos", link: "#testimonials" },
    { name: "Contato", link: "#contact" },
  ];

  return (
    <div className="shadow-lg drop-shadow-lg w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-wine600 py-1 md:px-10 px-7">
        <div className="cursor-pointer flex items-center">
          <a href="#">
            <img
              src={Logo}
              className="h-20 md:h-28"
              alt="Josiane Mendonça Logo"
            />
          </a>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute top-6 right-6 md:hidden"
        >
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gold rounded-lg md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-8 h-8"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <ul
          className={`bg-wine600 drop-shadow-lg shadow-lg md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-sm md:my-0 my-7">
              <a
                href={link.link}
                className="text-gold hover:text-white duration-300 font-medium md:font-normal"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <div className="md:hidden pb-2">
            <p className="text-center text-wine100/90 text-xs pt-6">
              Todos os direitos reservados © Josiane de Sena Mendonça OAB/BA :
              65347
            </p>

            <p className="text-center text-wine100/90 text-[10px] pt-1">
              Desenvolvido por
              <a
                href="https://adrielgama.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold"
              >
                {" "}
                adrielgama.dev
              </a>
            </p>
          </div>
        </ul>
      </div>
    </div>
  );
};
