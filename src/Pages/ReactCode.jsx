import CodeBlock from "../Components/CodeBlock";

function ReactCode() {
  // #region Start Codes
  let reactRouterDom = `npm i react-router-dom`;
  let MainReactRouter = `  <BrowserRouter>
    <App />
  </BrowserRouter>
  `;
  let RoutesReactRouter = `  <Routes>
    <Route path="" element={<Website />}/>
  </Routes>
      `;
  let tailwindlibrary = `npm install -D tailwindcss@3.4.3 postcss autoprefixer`;
  let postcss = `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`;
  let tailwindconfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D4AF37",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #D4AF37, #B76E79)",
      },
    },
  },
  plugins: [],
};
`;
  let React_Vite = `npm create vite@latest my-app -- --template react`;
  let npmI = `npm install`;
  // #endregion End Codes
  return (
    <>
      <div className="w-full     text-center mx-auto border border-black p-5 mb-3 md:w-2/3 lg:w-1/2">
        <h1 className="text-6xl bold mb-2">React + Vite</h1>
        <h1 className="py-2">To Start Your Project</h1>
        <CodeBlock code={React_Vite} />
        <hr className="h-3" />
        <h1 className="text-4xl bold mb-2 text-red-700">
          Not Forget To Do This
        </h1>
        <CodeBlock code={npmI} />
      </div>
      <div className="w-full     text-center mx-auto border border-black p-5 mb-3 md:w-2/3 lg:w-1/2">
        <h1 className="text-6xl bold mb-2">React Router</h1>
        <h1 className="py-2">Fristly Install Library</h1>
        <CodeBlock code={reactRouterDom} />
        <hr className="h-3" />
        <h1 className="text-6xl bold mb-2">Use It</h1>
        <h1 className="py-2">In Main File</h1>
        <CodeBlock code={MainReactRouter} />
        <h1 className="py-2">In Routes File</h1>
        <CodeBlock code={RoutesReactRouter} />
      </div>
      <div className="w-full     text-center mx-auto border border-black p-5 mb-3 md:w-2/3 lg:w-1/2">
        <h1 className="text-6xl bold mb-2">Tailwind Css With React</h1>
        <h1 className="py-2">Fristly Install Library</h1>
        <CodeBlock code={tailwindlibrary} />
        <hr className="h-3" />
        <h1 className="text-6xl bold mb-2">Use It</h1>
        <h1 className="py-2">
          Create <span className="font-bold">postcss.config.cjs</span> File
        </h1>
        <h1 className="py-2">And Write This</h1>
        <CodeBlock code={postcss} />
        <h1 className="py-2">
          Create <span className="font-bold">tailwind.config.cjs</span> File
        </h1>
        <h1 className="py-2">And Write This</h1>
        <CodeBlock code={tailwindconfig} />
      </div>
    </>
  );
}
export default ReactCode;
