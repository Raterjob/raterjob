"use client";

import { useState } from "react";

export default function RolesNavigation() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className={`roles-nav roles-guide-nav${open ? " menu-open" : ""}`}>
      <a href="/" className="roles-brand" aria-label="RaterJob home" onClick={closeMenu}>
        <img src="/favicon-rounded.png" alt="" />
        <span>Rater<i>Job</i></span>
      </a>
      <button
        type="button"
        className="roles-menu-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="roles-site-menu"
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav id="roles-site-menu" aria-label="Role guide navigation">
        <a href="/index.html#platforms" onClick={closeMenu}><span>01</span><b>Job Platforms</b></a>
        <a href="/what-is-a-rater" aria-current="page" onClick={closeMenu}><span>02</span><b>What Is a Rater?</b></a>
        <a href="/index.html#guide" onClick={closeMenu}><span>03</span><b>Guide</b></a>
        <a href="/index.html#tips" onClick={closeMenu}><span>04</span><b>Tips</b></a>
        <a href="/index.html#payments" onClick={closeMenu}><span>05</span><b>Payments</b></a>
        <a href="/index.html#about" onClick={closeMenu}><span>06</span><b>About</b></a>
      </nav>
    </header>
  );
}
