"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function CapeSweep() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setOpen(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className={`capeStage ${open ? "isOpen" : ""}`}>
      <div className="capeHalo" aria-hidden="true" />
      <figure className="capePhoto capePhotoLeft">
        <Image src="/work/braids-twist.jpg" alt="Braids and a finished fade by Jermarquis Jones" fill priority sizes="(max-width: 700px) 52vw, 300px" />
      </figure>
      <figure className="capePhoto capePhotoRight">
        <Image src="/work/loc-maintenance.jpg" alt="Loc maintenance and beard work by Jermarquis Jones" fill priority sizes="(max-width: 700px) 52vw, 300px" />
      </figure>
      <div className="capeWing capeWingLeft" aria-hidden="true"><span>FADES</span></div>
      <div className="capeWing capeWingRight" aria-hidden="true"><span>LOCS</span></div>
      <div className="capePin" aria-hidden="true">JJ</div>
    </div>
  );
}
