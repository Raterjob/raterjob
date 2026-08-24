"use client";

import { useEffect, useState } from "react";

const storageKey = "raterjob-cookie-notice-v1";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/") return;
    setVisible(window.localStorage.getItem(storageKey) !== "dismissed");
  }, []);

  if (!visible) return null;

  return (
    <aside className="cookie-notice" aria-label="Cookie notice">
      <div>
        <strong>Cookie notice</strong>
        <p>
          RaterJob currently uses only technical storage needed to provide the site.
          We do not use advertising, profiling, or visitor analytics cookies.
        </p>
        <a href="/cookie-policy">Read the Cookie Policy</a>
      </div>
      <button
        type="button"
        onClick={() => {
          window.localStorage.setItem(storageKey, "dismissed");
          setVisible(false);
        }}
      >
        Got it
      </button>
    </aside>
  );
}
