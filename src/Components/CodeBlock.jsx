// src/components/CodeBlock.jsx
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock({ code, language = "javascript" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-[#1e1e1e] rounded-lg overflow-hidden">
      {/* زر Copy */}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-gray-800 text-white text-sm px-3 py-1 rounded hover:bg-gray-700 transition"
      >
        {copied ? "✅ Copied!" : "📋 Copy"}
      </button>

      {/* الكود */}
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          backgroundColor: "#1e1e1e",
          padding: "1rem",
          margin: 0,
          fontSize: "0.9rem",
        }}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
