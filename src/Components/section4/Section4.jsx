import React, { useRef } from "react";

// Adepta iSol – Industries/Verticals section (updated)
// Now with LEFT/RIGHT buttons placed at the BOTTOM of the slider
// Exact CSS (no Tailwind). Desktop = 4-card grid. Mobile/Tablet = slider + bottom controls.

const DATA = [
  {
    titleGreen: "Healthcare",
    titleWhite: "",
    body:
      "With innovative, technology driven solutions for better outcome we break through challenges across the healthcare sector.",
    img:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1800&auto=format&fit=crop",
  },
  {
    titleGreen: "Banking, Finance and",
    titleWhite: "Insurance",
    body:
      "We bring transaction efficiency, fraud prevention, new levels of security and fraud prevention through a collaborative approach.",
    img:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=1800&auto=format&fit=crop",
  },
  {
    titleGreen: "Healthcare",
    titleWhite: "",
    body:
      "With innovative, technology driven solutions for better outcome we break through challenges across the healthcare sector.",
    img:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1800&auto=format&fit=crop",
  },
  {
    titleGreen: "Banking, Finance and",
    titleWhite: "Insurance",
    body:
      "We bring transaction efficiency, fraud prevention, new levels of security and fraud prevention through a collaborative approach.",
    img:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=1800&auto=format&fit=crop",
  },
  {
    titleGreen: "Banking, Finance and",
    titleWhite: "Insurance",
    body:
      "We bring transaction efficiency, fraud prevention, new levels of security and fraud prevention through a collaborative approach.",
    img:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=1800&auto=format&fit=crop",
  },
 {
    titleGreen: "Healthcare",
    titleWhite: "",
    body:
      "With innovative, technology driven solutions for better outcome we break through challenges across the healthcare sector.",
    img:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1800&auto=format&fit=crop",
  },
  {
    titleGreen: "Banking, Finance and",
    titleWhite: "Insurance",
    body:
      "We bring transaction efficiency, fraud prevention, new levels of security and fraud prevention through a collaborative approach.",
    img:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=1800&auto=format&fit=crop",
  },
  {
    titleGreen: "Healthcare",
    titleWhite: "",
    body:
      "With innovative, technology driven solutions for better outcome we break through challenges across the healthcare sector.",
    img:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1800&auto=format&fit=crop",
  },
  {
    titleGreen: "Banking, Finance and",
    titleWhite: "Insurance",
    body:
      "We bring transaction efficiency, fraud prevention, new levels of security and fraud prevention through a collaborative approach.",
    img:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=1800&auto=format&fit=crop",
  },
  {
    titleGreen: "Healthcare",
    titleWhite: "",
    body:
      "With innovative, technology driven solutions for better outcome we break through challenges across the healthcare sector.",
    img:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1800&auto=format&fit=crop",
  },
  {
    titleGreen: "Banking, Finance and",
    titleWhite: "Insurance",
    body:
      "We bring transaction efficiency, fraud prevention, new levels of security and fraud prevention through a collaborative approach.",
    img:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=1800&auto=format&fit=crop",
  },
 {
    titleGreen: "Healthcare",
    titleWhite: "",
    body:
      "With innovative, technology driven solutions for better outcome we break through challenges across the healthcare sector.",
    img:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1800&auto=format&fit=crop",
  },
];

function Card({ item }) {
  return (
    <div className="ai-card">
      <img className="ai-card__img" src={item.img} alt="" />
      <div className="ai-card__overlay" />
      <div className="ai-card__content">
        <div className="ai-card__title">
          <h3 className="ai-card__title--green">{item.titleGreen}</h3>
          {item.titleWhite ? (
            <h3 className="ai-card__title--white">{item.titleWhite}</h3>
          ) : null}
        </div>
        <p className="ai-card__body">{item.body}</p>
      </div>
    </div>
  );
}

export default function AdeptaIndustries() {
  const trackRef = useRef(null);

  const scrollByAmount = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.95; // nearly one viewport width
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  
   return (
  <section className="ai-section">
    <style>{css}</style>
    <div className="ai-container">
      <div className="ai-head">
        <h2>Industries We Serve</h2>
        <p>Single slider with bottom controls across all screen sizes.</p>
      </div>

      {/* Single responsive slider (no desktop grid) */}
      <div className="ai-slider">
        <div className="ai-track" ref={trackRef}>
          {DATA.map((item, idx) => (
            <div key={idx} className="ai-slide">
              <Card item={item} />
            </div>
          ))}
        </div>

        {/* Bottom controls */}
        <div className="ai-controls">
          <button className="ai-btn" aria-label="Previous" onClick={() => scrollByAmount(-1)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="ai-btn" aria-label="Next" onClick={() => scrollByAmount(1)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
);

  
}

// --- CSS ---
const css = `
:root {
  --ai-green: #22c55e;
  --ai-white: #ffffff;
}

/* Section wrapper */
.ai-section { width: 100%; background: #ffffff; }
.ai-container { max-width: 1540px; margin: auto; padding: 32px 20px 56px; }

.ai-head h2 { margin: 0 0 8px; font-size: 28px; line-height: 1.2; color: #111827; font-weight: 800; }
.ai-head p { color: #6b7280; margin: 0 0 20px; }

/* Remove the grid entirely (we use the slider on all sizes) */
.ai-grid { display: none; }

/* Card */
.ai-card {
  position: relative; height: 460px; border-radius: 18px; overflow: hidden;
  box-shadow: 10px 10px 30px rgba(0,0,0,.15); background: #000;
}
.ai-card__img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; }
.ai-card__overlay { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(0,0,0,.65) 0%, rgba(0,0,0,.45) 45%, rgba(0,0,0,.25) 100%); }
.ai-card__content { position: absolute; left: 24px; right: 24px; bottom: 24px; color: var(--ai-white); }
.ai-card__title--green { color: var(--ai-green); font-size: 36px; line-height: 1.05; margin: 0; font-weight: 900; letter-spacing: -0.02em; }
.ai-card__title--white { color: var(--ai-white); font-size: 36px; line-height: 1.05; margin: -2px 0 10px; font-weight: 900; letter-spacing: -0.02em; }
.ai-card__body { max-width: 520px; font-size: 18px; line-height: 1.6; margin: 0; color: rgba(255,255,255,.95); }

/* Slider always visible */
.ai-slider { position: relative; }

/* Horizontal track */
.ai-track {
  display: flex; gap: 16px; overflow-x: auto;
  scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; scrollbar-width: none;
}
.ai-track::-webkit-scrollbar { display: none; }

/* Responsive slide widths (acts like grid on desktop) */
.ai-slide { min-width: 92%; scroll-snap-align: start; }
@media (min-width: 640px)  { .ai-slide { min-width: 48%; } }  /* ~2 per view */
@media (min-width: 1024px) { .ai-slide { min-width: 32%; } }  /* ~3 per view */
@media (min-width: 1280px) { .ai-slide { min-width: 24%; } }  /* ~4 per view */

/* Bottom controls */
.ai-controls {
  display: flex; justify-content: center; align-items: center;
  gap: 12px; margin-top: 14px;
}
.ai-btn {
  width: 42px; height: 42px; border-radius: 999px;
  border: 1px solid rgba(0,0,0,.15);
  background: #111827; color: #fff; display: grid; place-items: center;
  cursor: pointer; transition: transform .15s ease, opacity .15s ease, background .2s ease;
}
.ai-btn:hover { opacity: .95; background: #0f172a; }
.ai-btn:active { transform: scale(.96); }
`;
