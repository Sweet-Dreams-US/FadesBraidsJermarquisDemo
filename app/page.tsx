import { CapeSweep } from "@/components/CapeSweep";
import Image from "next/image";

const booksy = "https://booksy.com/en-us/393369_fades-braids-by-jermarquis-jones_barber-shop_19362_fort-wayne";

const groups = [
  {
    number: "01",
    name: "Cuts & Beard",
    services: [
      ["Adult haircut", "$40"],
      ["Kids haircut", "$30"],
      ["Haircut and beard", "$50"],
      ["Beard maintenance", "$30"],
      ["Haircut and facial", "$85"],
    ],
  },
  {
    number: "02",
    name: "Braids & Twists",
    services: [
      ["Braids or twists with haircut", "$100"],
      ["Kids braids or twists with haircut", "$75"],
      ["Braids or twists", "$75 and up"],
      ["Kids braids or twists", "$60 and up"],
    ],
  },
  {
    number: "03",
    name: "Locs & Color",
    services: [
      ["Loc style", "$60 and up"],
      ["Start locs", "$125 and up"],
      ["Loc maintenance", "$90 and up"],
      ["Loc maintenance and haircut", "$125 and up"],
      ["Kids loc maintenance", "$75 and up"],
      ["Kids loc maintenance and haircut", "$100 and up"],
      ["Bleaching or coloring", "$75 and up"],
    ],
  },
];

export default function Home() {
  return (
    <main>
      <div className="previewBar">Independent website preview <span>•</span> Booking continues on Booksy</div>
      <header className="siteHeader">
        <a className="wordmark" href="#top" aria-label="Fades and Braids by Jermarquis Jones home">
          <strong>FADES & BRAIDS</strong><span>BY JERMARQUIS JONES</span>
        </a>
        <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#services">Services</a><a href="#visit">Visit</a></nav>
        <a className="headerBook" href={booksy}>Book on Booksy</a>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow"><span>FORT WAYNE</span><i />CUTS • BRAIDS • LOCS</p>
          <h1>FADES.<br />BRAIDS.<br /><em>LOCS.</em></h1>
          <p className="heroSub">Haircuts, beard care, braids, twists, and loc services by Jermarquis Jones.</p>
          <div className="heroActions">
            <a className="primaryButton" href={booksy}>Book on Booksy <span>↗</span></a>
            <div className="rating"><strong>5.0</strong><span>★★★★★<small>on Booksy</small></span></div>
          </div>
        </div>
        <div className="heroCape"><CapeSweep /></div>
        <div className="heroRail" aria-hidden="true"><span>JERMARQUIS</span><b>•</b><span>FORT WAYNE</span><b>•</b><span>BOOKSY</span></div>
      </section>

      <section className="workSection" id="work">
        <div className="sectionLead"><p>THE WORK</p><h2>Detail from every angle.</h2><span>Real work from Jermarquis&apos;s Booksy portfolio.</span></div>
        <figure className="workPlate plateWide"><Image src="/work/braids-twist.jpg" alt="Braids with a finished fade by Jermarquis Jones" fill sizes="(max-width: 800px) 50vw, 40vw" /><figcaption><b>BRAIDS + FADE</b><span>01</span></figcaption></figure>
        <figure className="workPlate plateTall"><Image src="/work/loc-maintenance.jpg" alt="Loc maintenance and beard work by Jermarquis Jones" fill sizes="(max-width: 800px) 50vw, 28vw" /><figcaption><b>LOCS + BEARD</b><span>02</span></figcaption></figure>
      </section>

      <section className="servicesSection" id="services">
        <div className="servicesIntro"><p>THE SERVICE BOARD</p><h2>Know the look.<br />Know the price.</h2><a href={booksy}>See times and book ↗</a></div>
        <div className="serviceGroups">
          {groups.map((group) => (
            <article className="serviceGroup" key={group.name}>
              <div className="groupTitle"><span>{group.number}</span><h3>{group.name}</h3></div>
              <div>{group.services.map(([name, price]) => <p key={name}><span>{name}</span><b>{price}</b></p>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="visitSection" id="visit">
        <div className="visitBadge"><span>5.0</span><strong>BOOKSY</strong><i>★★★★★</i></div>
        <div className="visitCopy"><p>THE CHAIR IS IN FORT WAYNE</p><h2>Pick your service.<br />Book your time.</h2><div className="address"><span>2793 Maplecrest Rd, Suite A<br />Fort Wayne, IN 46815</span><span>Split shift availability<br />Full hours on Booksy</span></div><a className="primaryButton light" href={booksy}>Open Booksy <span>↗</span></a></div>
      </section>

      <footer>
        <div className="footerName">FADES &<br /><em>BRAIDS</em></div>
        <div className="footerMeta"><span>JERMARQUIS JONES</span><span>FORT WAYNE, INDIANA</span><a href={booksy}>BOOK ON BOOKSY ↗</a><a className="deskLink" href="/admin">Service Desk</a></div>
      </footer>
    </main>
  );
}
