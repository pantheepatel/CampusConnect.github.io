import React from "react";
import { useState, useEffect } from "react";
import "./Navbar.css";

export default function DarkMode() {
  const [DarkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!DarkMode);
  };

  useEffect(() => {
    const root = document.documentElement;

    if (DarkMode) {
      root.style.setProperty("--textwhite", "black");
      root.style.setProperty("--textblack", "white");
      root.style.setProperty("--db", "rgb(224, 224, 250)");
      root.style.setProperty("--lb", "black");
      root.style.setProperty("--blue", "white");
    } else {
      root.style.setProperty("--textwhite", "white");
      root.style.setProperty("--textblack", "black");
      root.style.setProperty("--db", "rgb(1, 0, 41)");
      root.style.setProperty("--lb", "rgb(65, 230, 255)");
      root.style.setProperty("--blue", "#2b2a33");
    }
  }, [DarkMode]);

  return (
    <div className="switch" onClick={handleDarkMode}>
      {DarkMode ? (
        <i>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M14.53 10.53a7 7 0 01-9.058-9.058A7.003 7.003 0 008 15a7.002 7.002 0 006.53-4.47z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </i>
      ) : (
        <i>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"></path>
            </g>
          </svg>
        </i>
      )}
    </div>
  );
}
