import CodeBlock from "../Components/CodeBlock";

const ReactComp = () => {
  let NavBarCode = `import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Your Link Name", to: "/Your Link Path" },
  ];

  return (
    <nav className="bg-white shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-800">
            MySite
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-gray-600 hover:text-black transition"
              >
                {link.name}
              </Link>
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
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-black transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
} `;
  let NavBarLiCode = `bun i lucide-react react-router-dom `;
  let BrowserRouter = `  <BrowserRouter>
  <App />
  </BrowserRouter>`;
  return (
    <>
      <div className="w-full     text-center mx-auto border border-black p-5 mb-3 md:w-2/3 lg:w-1/2">
        <h1 className="text-6xl bold">NavBar</h1>
        <h3 className="py-2">Simple Responsev NavBar Component Code </h3>
        <CodeBlock code={NavBarCode} />
        <h1 className="mt-4 mb-2 text-3xl bold text-red-600">
          Not Forget To Install Libraries
        </h1>
        <CodeBlock code={NavBarLiCode} />
        <h1 className="mt-4 mb-2 text-3xl bold text-red-600">
          Not Forget To Add This In Main File
        </h1>
        <CodeBlock code={BrowserRouter} />
      </div>
    </>
  );
};

export default ReactComp;
