"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ─── Ticker content ─────────────────────────────────────────── */
const TICKER_ITEMS = [
  "Fresh Produce Daily",
  "Authentic African Spices",
  "Caribbean Pantry Staples",
  "Imported Specialty Items",
  "Meats & Seafood",
  "Plantain & Yam",
  "Palm Oil & Groundnuts",
  "Jerk Seasoning & More",
];

/* ─── Offering cards ─────────────────────────────────────────── */
const OFFERINGS = [
  {
    title: "Fresh Produce",
    desc: "Yams, plantain, cassava, bitter leaf, ugu, and seasonal West African vegetables.",
    img: "/store/produce.webp",
    alt: "Fresh produce including plantain, yam, and pineapple",
  },
  {
    title: "Pantry Staples",
    desc: "Rice, beans, gari, semovita, fufu mixes, Golden Morn, and imported canned goods.",
    img: "/store/fufu.webp",
    alt: "Pantry staples including fufu mix and flour",
  },
  {
    title: "Canned & Dried Goods",
    desc: "Titus sardines, Gala, stockfish, crayfish, tomato paste, and specialty preserves.",
    img: "/store/canned.webp",
    alt: "Canned goods and dried fish aisle",
  },
  {
    title: "Grains & Legumes",
    desc: "Brown and white beans, black-eyed peas, moin-moin mix, and assorted whole grains.",
    img: "/store/beans.webp",
    alt: "Beans and grains shelf",
  },
];

/* ─── Gallery images ─────────────────────────────────────────── */
const GALLERY = [
  { src: "/store/shelves.webp", alt: "K&G Market shelves" },
  { src: "/store/tea-pantry.webp", alt: "Tea and condiments aisle" },
  { src: "/store/canned.webp", alt: "Canned goods aisle" },
  { src: "/store/frozen.webp", alt: "Frozen foods section" },
  { src: "/store/beans.webp", alt: "Grains and beans section" },
];

/* ─── Scroll animation hook ─────────────────────────────────── */
function useFadeUp() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ─── Nav scroll hook ────────────────────────────────────────── */
function useNavScroll() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}

/* ─────────────────────────────────────────────────────────────── */
export default function Home() {
  useFadeUp();
  const navScrolled = useNavScroll();
  const heroBgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = heroBgRef.current;
    if (!img) return;
    if (img.complete) {
      img.classList.add("loaded");
    } else {
      img.addEventListener("load", () => img.classList.add("loaded"));
    }
  }, []);

  const tickerContent = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <>
      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav className={`nav ${navScrolled ? "scrolled" : ""}`}>
        <div className="container nav__inner">
          <a href="#" className="nav__logo">
            <span className="nav__logo-main">K&amp;G Market</span>
            <span className="nav__logo-sub">African &amp; Caribbean</span>
          </a>
          <ul className="nav__links">
            <li>
              <a href="#about">Our Story</a>
            </li>
            <li>
              <a href="#offerings">Products</a>
            </li>
            <li>
              <a href="#visit">Visit Us</a>
            </li>
          </ul>
          <a className="nav__cta" href="tel:6292510000">
            📞 Call Now
          </a>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="hero" id="home">
        <Image
          ref={heroBgRef as React.Ref<HTMLImageElement>}
          className="hero__bg"
          src="/store/hero.webp"
          alt="K&G African and Caribbean Market store interior"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="hero__overlay" />
        <div className="container hero__content">
          <p className="hero__tag">Murfreesboro, Tennessee</p>
          <h1 className="hero__headline">
            Where Africa &amp; <em>The Caribbean</em> Come Home
          </h1>
          <p className="hero__sub">
            Authentic groceries, spices, and specialty products rooted in
            tradition — brought to your community with heart.
          </p>
          <div className="hero__actions">
            <a className="btn-primary" href="#visit">
              Find Our Store →
            </a>
            <a className="btn-ghost" href="#about">
              Our Story
            </a>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <div className="hero__stat-num">500+</div>
              <div className="hero__stat-label">Products in store</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-num">2</div>
              <div className="hero__stat-label">Continents of flavor</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-num">7</div>
              <div className="hero__stat-label">Days a week</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-num">100%</div>
              <div className="hero__stat-label">Family owned</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ─────────────────────────────────────────── */}
      <div className="ticker" aria-hidden>
        <div className="ticker__track">
          {tickerContent.map((item, i) => (
            <span className="ticker__item" key={i}>
              {item}
              <span className="ticker__dot" />
            </span>
          ))}
        </div>
      </div>

      {/* ── ABOUT ───────────────────────────────────────────── */}
      <section className="about" id="about">
        <div className="container">
          <div className="about__grid">
            {/* Image stack */}
            <div className="about__images fade-up">
              <Image
                className="about__img-main"
                src="/store/produce.webp"
                alt="Fresh produce at K&G Market — plantain, yam, pineapple and more"
                width={680}
                height={520}
                style={{ objectFit: "cover", borderRadius: "24px" }}
              />
              <Image
                className="about__img-accent"
                src="/store/shelves.webp"
                alt="Fully stocked shelves at K&G Market"
                width={400}
                height={340}
                style={{ objectFit: "cover", borderRadius: "12px" }}
              />
              <div className="about__badge">
                <span>Family</span>
                Owned &amp;
                <br />
                Operated
              </div>
            </div>

            {/* Text */}
            <div className="about__text">
              <span className="section-label fade-up">Our Story</span>
              <h2 className="about__heading fade-up">
                Culture, Community &amp; <em>Family</em>
              </h2>
              <p className="about__body fade-up">
                K&amp;G African and Caribbean Market is a family-owned grocery
                store dedicated to bringing the rich flavors and cultural
                traditions of Africa and the Caribbean to the Murfreesboro
                community. Built on hard work, trust, and a passion for quality,
                we offer a wide selection of authentic foods, spices, and
                specialty items that remind customers of home.
              </p>

              <blockquote className="about__quote fade-up">
                <p>
                  "More than just a store — it&apos;s a place where culture,
                  community, and family come together."
                </p>
              </blockquote>

              <p className="about__body fade-up">
                With a welcoming atmosphere and personalized service, every
                visit to K&amp;G is an experience rooted in warmth and
                belonging. Whether you&apos;re searching for a specific
                ingredient from home or discovering something new, you&apos;ll
                always feel welcome here. Customers drive to us from across
                Rutherford County and Middle Tennessee — including Nashville,
                Smyrna, La Vergne, and beyond.
              </p>

              <div className="about__values fade-up">
                <span className="about__value-pill">Quality</span>
                <span className="about__value-pill">Authenticity</span>
                <span className="about__value-pill">Community</span>
                <span className="about__value-pill">Trust</span>
                <span className="about__value-pill">Family</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFERINGS ──────────────────────────────────────── */}
      <section className="offerings" id="offerings">
        <div className="container">
          <div className="offerings__header fade-up">
            <span className="section-label">What We Carry</span>
            <h2 className="offerings__heading">Flavors From Two Continents</h2>
            <p className="offerings__sub">
              From everyday staples to hard-to-find specialties — everything you
              need to cook authentic African and Caribbean meals, all under one
              roof.
            </p>
          </div>

          <div className="offerings__grid">
            {OFFERINGS.map((item, i) => (
              <article
                className="offering-card fade-up"
                key={item.title}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <Image
                  className="offering-card__img"
                  src={item.img}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="offering-card__overlay" />
                <div className="offering-card__body">
                  {/* <span className="offering-card__icon">{item.icon}</span> */}
                  <h3 className="offering-card__title">{item.title}</h3>
                  <p className="offering-card__desc">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY STRIP ──────────────────────────────────── */}
      <div className="gallery-strip" aria-hidden>
        {GALLERY.map((img) => (
          <div className="gallery-strip__item" key={img.src}>
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={240}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </div>

      {/* ── VISIT ───────────────────────────────────────────── */}
      <section className="visit" id="visit">
        <div className="container">
          <div className="visit__grid">
            {/* Left column */}
            <div>
              <span className="section-label fade-up">Come See Us</span>
              <h2 className="visit__heading fade-up">
                Find Us in Murfreesboro
              </h2>
              <p className="visit__intro fade-up">
                We&apos;re conveniently located on Old Fort Parkway in
                Murfreesboro — easy to reach from Nashville, Smyrna, La
                Vergne, and the rest of Middle Tennessee. Come in, explore the
                aisles, and let our team help you find exactly what you&apos;re
                looking for.
              </p>

              {/* Address */}
              <div className="info-block fade-up">
                <div className="info-block__label">Our Address</div>
                <div className="info-block__address">
                  <a
                    href="https://maps.google.com/?q=2705+Old+Fort+Pkwy+Murfreesboro+TN+37128"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    2705 Old Fort Pkwy
                    <br />
                    Murfreesboro, TN 37128
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="info-block fade-up">
                <div className="info-block__label">Call Us</div>
                <div className="phone-links">
                  <a className="phone-link" href="tel:6292510000">
                    <span className="phone-link__icon">📞</span>
                    (629) 251-0000
                  </a>
                  <a className="phone-link" href="tel:3473503899">
                    <span className="phone-link__icon">📞</span>
                    (347) 350-3899
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="info-block fade-up">
                <div className="info-block__label">Email Us</div>
                <a
                  className="email-link"
                  href="mailto:kgafricanmarket@gmail.com"
                >
                  ✉️ kgafricanmarket@gmail.com
                </a>
              </div>
            </div>

            {/* Right column – hours */}
            <div className="fade-up">
              <div
                className="info-block__label"
                style={{ marginBottom: "20px" }}
              >
                Store Hours
              </div>
              <table className="hours-table">
                <tbody>
                  <tr>
                    <td>Monday</td>
                    <td>8:30 AM – 8:00 PM</td>
                  </tr>
                  <tr>
                    <td>Tuesday</td>
                    <td>8:30 AM – 8:00 PM</td>
                  </tr>
                  <tr>
                    <td>Wednesday</td>
                    <td>8:30 AM – 8:00 PM</td>
                  </tr>
                  <tr>
                    <td>Thursday</td>
                    <td>8:30 AM – 8:00 PM</td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td>8:30 AM – 8:00 PM</td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>8:30 AM – 8:00 PM</td>
                  </tr>
                  <tr className="today">
                    <td>Sunday</td>
                    <td>3:00 PM – 7:00 PM</td>
                  </tr>
                </tbody>
              </table>

              <div
                style={{
                  marginTop: "36px",
                  padding: "20px 24px",
                  background: "var(--c-linen)",
                  borderRadius: "var(--r-md)",
                  borderLeft: "3px solid var(--c-amber)",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "var(--c-muted)",
                    lineHeight: 1.65,
                  }}
                >
                  <strong style={{ color: "var(--c-bark)", fontWeight: 600 }}>
                    Open 7 days a week.
                  </strong>{" "}
                  We&apos;re here whenever you need us — from your weekday
                  grocery run to your Sunday meal prep.
                </p>
              </div>
            </div>

            {/* Map – full width */}
            <div className="visit__map-wrap fade-up">
              <iframe
                src="https://maps.google.com/maps?q=2705+Old+Fort+Pkwy,+Murfreesboro,+TN+37128&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="K&G African and Caribbean Market location"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div>
              <div className="footer__brand-name">
                K&amp;G African and
                <br />
                Caribbean Market
              </div>
              <div className="footer__brand-tagline">
                Where culture comes home
              </div>
              <p className="footer__brand-desc">
                A family-owned grocery bringing the authentic tastes of Africa
                and the Caribbean to Murfreesboro, Tennessee.
              </p>
            </div>

            {/* Visit */}
            <div>
              <div className="footer__col-title">Visit</div>
              <ul className="footer__list">
                <li>2705 Old Fort Pkwy</li>
                <li>Murfreesboro, TN 37128</li>
                <li style={{ marginTop: "6px" }}>
                  Mon – Sat: 8:30 AM – 8:00 PM
                </li>
                <li>Sun: 3:00 PM – 7:00 PM</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="footer__col-title">Contact</div>
              <ul className="footer__list">
                <li>
                  <a href="tel:6292510000">(629) 251-0000</a>
                </li>
                <li>
                  <a href="tel:3473503899">(347) 350-3899</a>
                </li>
                <li style={{ marginTop: "6px" }}>
                  <a href="mailto:kgafricanmarket@gmail.com">
                    kgafricanmarket@gmail.com
                  </a>
                </li>
                <li style={{ marginTop: "6px" }}>
                  <a
                    href="https://maps.google.com/?q=2705+Old+Fort+Pkwy+Murfreesboro+TN+37128"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions →
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="footer__divider" />

          <div className="footer__bottom">
            <span>
              © {new Date().getFullYear()} K&amp;G African and Caribbean Market.
              All rights reserved.
            </span>
            <span>Made with care for the Murfreesboro community</span>
          </div>
        </div>
      </footer>
    </>
  );
}
