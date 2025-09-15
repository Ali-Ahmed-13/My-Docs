import CodeBlock from "../Components/CodeBlock";

function ReactCode() {
  // #region Start Codes
  let reactRouterDom = `bun i react-router-dom`;
  let MainReactRouter = `  <BrowserRouter>
    <App />
  </BrowserRouter>
  `;
  let FeatureSRC = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
  `;
  let RoutesReactRouter = `  <Routes>
    <Route path="" element={<Website />}/>
  </Routes>
      `;
  let tailwindlibrary = `bun install -D tailwindcss@3 postcss autoprefixer`;
  let tailwindlibrarynpx = `npx tailwindcss init -p`;
  let tailwindconfig = `/** @type {import('tailwindcss').Config} */
export default = {
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
  let React_Vite = `bun create vite@latest`;
  let bunI = `bun install`;

  let framerInstall = `bun i framer-motion`;
  let useMotion = `// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
`;
  let TextAnimation = `let text = "ALi Is A Best Programmer In The World";
  ////////////////////////////
let hVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
let spanVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};
  /////////////////////////////
<motion.h1
    variants={hVariant}
    initial="hidden"
    animate="visible"
    className="text-5xl font-bold"
  >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={spanVariant}>
          {char}
        </motion.span>
      ))}
</motion.h1>
`;
  let smoothLibrary = `bun i react-anchor-link-smooth-scroll`;
  let useSmooth = `import AnchorLink from "react-anchor-link-smooth-scroll"; 
  
  <AnchorLink href="#section1" > Go to Section 1 </AnchorLink>

  <div id="section1">Section 1</div>
  `;
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
        <CodeBlock code={bunI} />
        <h1 className="py-2 text-3xl">Feature</h1>
        <h1 className="py-2">
          In <span className="font-bold">vite.config.ts</span> File
        </h1>
        <CodeBlock code={FeatureSRC} />
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
        <h1 className="py-2">And Do This Code In Your Tirminal</h1>
        <CodeBlock code={tailwindlibrarynpx} />
        <h1 className="text-6xl bold mb-2">Use It</h1>
        <h1 className="py-2">
          In <span className="font-bold">tailwind.config.js</span> File
        </h1>
        <CodeBlock code={tailwindconfig} />
      </div>
      <div className="w-full     text-center mx-auto border border-black p-5 mb-3 md:w-2/3 lg:w-1/2">
        <h1 className="text-6xl bold mb-2">Framer Motion</h1>
        <h1 className="py-2">Fristly Install Library</h1>
        <CodeBlock code={framerInstall} />
        <hr className="h-3" />
        <h1 className="text-6xl bold mb-2">Use It</h1>
        <CodeBlock code={useMotion} />
        <hr className="h-3" />
        <h1 className="text-6xl bold mb-2">Text Animation</h1>
        <CodeBlock code={TextAnimation} />
      </div>
      <div className="w-full     text-center mx-auto border border-black p-5 mb-3 md:w-2/3 lg:w-1/2">
        <h1 className="text-6xl bold mb-2">Smooth Scroll </h1>
        <h1 className="py-2">Fristly Install Library</h1>
        <CodeBlock code={smoothLibrary} />
        <hr className="h-3" />
        <h1 className="text-6xl bold mb-2">Use It</h1>
        <CodeBlock code={useSmooth} />
      </div>
    </>
  );
}
export default ReactCode;
