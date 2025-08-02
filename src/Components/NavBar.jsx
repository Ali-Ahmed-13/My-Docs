import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "React", to: "/react" },
    { name: "React Components", to: "/react-comp" },
    { name: "Redux", to: "/redux" },
  ];

  const linkClass =
    "transition px-2 py-1 rounded text-gray-600 hover:text-black";

  const activeClass = "text-black font-semibold underline";

  return (
    <nav className="bg-white shadow-md mb-10 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-gray-800">
            ALI's DOCS
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${linkClass} block ${isActive ? activeClass : ""}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
