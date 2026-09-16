"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";

type Service = { name: string; price: string; duration: string; visible: boolean };

const defaults: Service[] = [
  { name: "Adult haircut", price: "$40", duration: "See Booksy", visible: true },
  { name: "Haircut and beard", price: "$50", duration: "See Booksy", visible: true },
  { name: "Braids or twists with haircut", price: "$100", duration: "See Booksy", visible: true },
  { name: "Loc maintenance and haircut", price: "$125 and up", duration: "See Booksy", visible: true },
];

export function AdminPanel() {
  const [services, setServices] = useState(defaults);
  const [hours, setHours] = useState("Split shift availability. Full hours are on Booksy.");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("jj-service-desk");
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored);
      const frame = requestAnimationFrame(() => {
        if (Array.isArray(parsed.services)) setServices(parsed.services);
        if (typeof parsed.hours === "string") setHours(parsed.hours);
      });
      return () => cancelAnimationFrame(frame);
    } catch { /* Keep sourced defaults when local preview data is invalid. */ }
  }, []);

  function save(event: FormEvent) {
    event.preventDefault();
    localStorage.setItem("jj-service-desk", JSON.stringify({ services, hours }));
    setSaved(true);
  }

  return (
    <form className="adminPanel" onSubmit={save}>
      <div className="adminTop"><div><p>LOCAL SERVICE DESK</p><h1>Services at a glance.</h1><span>Changes are saved in this browser for preview.</span></div><Link href="/">View website ↗</Link></div>
      <section className="adminCard">
        <div className="adminCardTitle"><span>01</span><div><h2>Service display</h2><p>Edit visibility, price, and the time label.</p></div></div>
        <div className="adminServices">
          {services.map((service, index) => (
            <div className="adminService" key={service.name}>
              <label className="visibility"><input type="checkbox" checked={service.visible} onChange={(event) => setServices(services.map((item, i) => i === index ? { ...item, visible: event.target.checked } : item))} /><span>{service.visible ? "Visible" : "Hidden"}</span></label>
              <label>Service<input value={service.name} onChange={(event) => setServices(services.map((item, i) => i === index ? { ...item, name: event.target.value } : item))} /></label>
              <label>Price<input value={service.price} onChange={(event) => setServices(services.map((item, i) => i === index ? { ...item, price: event.target.value } : item))} /></label>
              <label>Duration<input value={service.duration} onChange={(event) => setServices(services.map((item, i) => i === index ? { ...item, duration: event.target.value } : item))} /></label>
            </div>
          ))}
        </div>
      </section>
      <section className="adminCard adminHours"><div className="adminCardTitle"><span>02</span><div><h2>Hours note</h2><p>Keep the public availability note aligned with Booksy.</p></div></div><label>Public hours note<textarea value={hours} onChange={(event) => setHours(event.target.value)} /></label></section>
      <div className="adminActions"><button type="submit">Save on this device</button><a href="https://booksy.com/en-us/393369_fades-braids-by-jermarquis-jones_barber-shop_19362_fort-wayne">Preview Booksy link ↗</a>{saved && <span role="status">Saved in this browser.</span>}</div>
    </form>
  );
}
