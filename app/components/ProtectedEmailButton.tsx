"use client";

import type { ReactNode } from "react";

type ProtectedEmailButtonProps = {
  className?: string;
  children: ReactNode;
};

const emailCodes = [104, 101, 108, 108, 111, 64, 114, 97, 116, 101, 114, 106, 111, 98, 46, 99, 111, 109];

export default function ProtectedEmailButton({ className, children }: ProtectedEmailButtonProps) {
  function openEmail() {
    const address = emailCodes.map((code) => String.fromCharCode(code)).join("");
    const subject = encodeURIComponent("RaterJob: personalized guidance");
    const body = "Country or region:%0A%0ALanguages:%0A%0AI am interested in:%0A%0AMy question:";
    window.location.href = `mailto:${address}?subject=${subject}&body=${body}`;
  }

  return (
    <button type="button" className={className} onClick={openEmail}>
      {children}
    </button>
  );
}
