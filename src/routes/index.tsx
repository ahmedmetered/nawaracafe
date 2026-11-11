import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, Coffee, Heart, Search, Clock3, MapPin, Star, Send, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CoffeeIllustration, MapIllustration, Wave } from "@/components/cafe-art";
import { categories, copy, filterMenu, number, price, reasons, type Category, type Language, type Localized } from "@/data/cafe";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "قهوة نوّارة | المنيو — Nawara Café Menu" },
    { name: "description", content: "اكتشف منيو قهوة نوّارة: قهوة، مشروبات وحلويات معمولة بحب. Explore coffee, happy little bites and sweet treats at Nawara Café." },
    { property: "og:title", content: "قهوة نوّارة | Nawara Café Menu" },
    { property: "og:description", content: "القهوة اللي بتظبط مزاجك — Coffee that fixes your mood. Discover our colourful café menu." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  const [language, setLanguage] = useState<Language>("ar");
  const [category, setCategory] = useState<Category>("hot");
  const [query, setQuery] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const t = (value: Localized) => value[language];
  const Arrow = language === "ar" ? ArrowLeft : ArrowRight;
  useEffect(() => {
    try { const stored = localStorage.getItem("nawara-language"); if (stored === "en" || stored === "ar") setLanguage(stored); } catch { /* Language still works without storage. */ }
  }, []);
  useEffect(() => { document.documentElement.lang = language; document.documentElement.dir = language === "ar" ? "rtl" : "ltr"; }, [language]);
  function changeLanguage(next: Language) {
    setLanguage(next); setQuery("");
    try { localStorage.setItem("nawara-language", next); } catch { /* Storage may be disabled. */ }
  }
  function submitFeedback(event: FormEvent<HTMLFormElement>) { event.preventDefault(); if (rating > 0) { event.currentTarget.reset(); setSubmitted(true); } }
  const items = filterMenu(category, query, language);
  return <div className="cafe" lang={language} dir={language === "ar" ? "rtl" : "ltr"}>
    <header className="site-header"><div className="page-width header-inner">
      <a href="#home" className="brand"><span className="brand-icon"><Coffee /></span><span className="brand-name">{t(copy.brand)}</span></a>
      <nav className="header-nav"><a href="#menu">{t(copy.navMenu)}</a><a href="#story">{t(copy.navAbout)}</a><a href="#visit">{t(copy.navVisit)}</a></nav>
      <div className="language-toggle" aria-label="العربية / English">
        <Button variant="language" aria-pressed={language === "en"} onClick={() => changeLanguage("en")}>English</Button>
        <Button variant="language" aria-pressed={language === "ar"} onClick={() => changeLanguage("ar")}>العربية</Button>
      </div>
    </div></header>
    <main>
      <section className="hero" id="home"><div className="page-width hero-inner">
        <div className="hero-copy"><div className="eyebrow hero-eyebrow">{t(copy.eyebrow)}</div><h1>{t(copy.heroFirst)}</h1><h2>{t(copy.tagline)}</h2><p className="hero-description">{t(copy.heroDescription)}</p>
          <div className="hero-actions"><Button variant="cafe" asChild><a href="#menu">{t(copy.viewMenu)}<Arrow /></a></Button><span className="made-with"><Heart />{t(copy.madeWith)}</span></div>
        </div>
        <div className="hero-art"><CoffeeIllustration /><span className="cup-sticker">{t(copy.cupLabel)}</span><span className="art-caption">{t(copy.since)}</span></div>
      </div><Wave /></section>
      <div className="page-width special-wrap"><section className="special" aria-label={t(copy.specialLabel)}><span className="special-icon" aria-hidden="true">☕🍪</span><div className="special-text"><div className="eyebrow">✦ {t(copy.specialLabel)}</div><h3>{t(copy.specialTitle)}</h3><p className="special-description">{t(copy.specialDescription)}</p></div><div className="special-price"><span>{price(95, language)}</span><del>{price(115, language)}</del></div><span className="special-badge">♡ {t(copy.specialBadge)}</span></section></div>
      <section className="page-width menu-section" id="menu">
        <div className="section-head"><div><div className="eyebrow">✦ {t(copy.menuEyebrow)}</div><h2>{t(copy.menuTitle)}</h2><p>{t(copy.menuDescription)}</p></div><label className="search-box"><Search /><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={t(copy.search)} aria-label={t(copy.search)} /></label></div>
        <div className="category-tabs" role="tablist" aria-label={t(copy.navMenu)}>{categories.map(item => <Button key={item.id} id={`tab-${item.id}`} role="tab" variant="category" aria-selected={category === item.id} aria-controls="menu-panel" onClick={() => setCategory(item.id)}>{category === item.id && <span className="tab-pill" />}<span className="tab-content"><span aria-hidden="true">{item.icon}</span><span>{t(item.name)}</span></span></Button>)}</div>
        <div id="menu-panel" role="tabpanel" aria-labelledby={`tab-${category}`}>
          {items.length ? <div className="menu-grid" key={`${category}-${language}`}>{items.map(item => <article className="menu-card" key={item.id}><div className={`item-art tone-${item.tone}`}><span className="item-emoji" aria-hidden="true">{item.icon}</span><span className="art-spark" aria-hidden="true">✦</span><span className="art-dot" />{item.badge && <span className={`item-badge badge-${item.badge}`}>{item.badge === "vegan" ? "❧ " : item.badge === "best" ? "★ " : "✦ "}{t(copy[item.badge])}</span>}</div><div className="item-info"><div className="item-top"><h3>{t(item.name)}</h3><span className="item-price">{price(item.price, language)}</span></div><p>{t(item.description)}</p></div></article>)}</div> : <p className="empty-menu" role="status">{t(copy.empty)}</p>}
        </div><p className="menu-note">{t(copy.menuNote)}</p>
      </section>
      <section className="why-section" id="story"><div className="page-width"><div className="center-head"><div className="eyebrow">♡ {t(copy.whyEyebrow)}</div><h2>{t(copy.whyTitle)}</h2></div><div className="reasons">{reasons.map((reason, index) => <article className="reason" key={index}><span className={`reason-icon tone-${reason.tone}`} aria-hidden="true">{reason.icon}</span><h3>{t(reason.title)}</h3><p>{t(reason.description)}</p></article>)}</div></div></section>
      <section className="page-width visit-section" id="visit"><div className="eyebrow">✦ {t(copy.visitEyebrow)}</div><h2>{t(copy.visitTitle)}</h2><div className="visit-grid"><div className="visit-info"><div><div className="info-heading"><Clock3 /><h3>{t(copy.hours)}</h3></div><div className="hours-row"><span>{t(copy.weekdays)}</span><span>{t(copy.weekdayTime)}</span></div><div className="hours-row"><span>{t(copy.weekend)}</span><span>{t(copy.weekendTime)}</span></div></div><div><div className="info-heading"><MapPin /><h3>{t(copy.location)}</h3></div><p className="address-text">{t(copy.address)}</p><p className="location-note">{t(copy.locationNote)}</p></div></div><div className="map" role="img" aria-label={t(copy.mapLabel)}><MapIllustration /><div className="map-pin"><MapPin /><span>{t(copy.mapLabel)}</span></div><span className="map-note">{t(copy.mapNote)}</span></div></div></section>
      <section className="feedback-section"><div className="page-width feedback-grid"><div className="feedback-intro"><div className="eyebrow">♡ {t(copy.feedbackEyebrow)}</div><h2>{t(copy.feedbackTitle)}</h2><p>{t(copy.feedbackDescription)}</p><span className="feedback-art" aria-hidden="true">💌</span></div>
        {submitted ? <div className="thanks" role="status"><div className="thanks-icon" aria-hidden="true">🧡✨</div><h3>{t(copy.thanks)}</h3><p>{t(copy.thanksDescription)}</p><Button variant="outline" className="reset-note" onClick={() => { setSubmitted(false); setRating(0); }}>{t(copy.another)}</Button></div> : <form className="feedback-form" onSubmit={submitFeedback}><div className="form-top"><label className="field">{t(copy.name)}<input required name="name" placeholder={t(copy.namePlaceholder)} maxLength={100} autoComplete="given-name" /></label><div className="field"><span id="rating-label">{t(copy.rating)}</span><div className="rating-stars" role="group" aria-labelledby="rating-label" onMouseLeave={() => setHoverRating(0)}>{[1,2,3,4,5].map(value => <Button variant="star" type="button" className={(hoverRating || rating) >= value ? "selected" : ""} key={value} aria-label={`${number(value, language)} ${t(copy.star)}`} aria-pressed={rating === value} onMouseEnter={() => setHoverRating(value)} onFocus={() => setHoverRating(value)} onBlur={() => setHoverRating(0)} onClick={() => setRating(value)}><Star /></Button>)}</div></div></div><label className="field">{t(copy.message)}<textarea required name="message" placeholder={t(copy.messagePlaceholder)} maxLength={1500} /></label><div className="form-bottom"><Button variant="cafe" type="submit" disabled={rating === 0}>{t(copy.send)}<Send /></Button><p className="form-note">{t(copy.feedbackNote)}</p></div></form>}
      </div></section>
    </main>
    <footer className="page-width site-footer"><div className="footer-top"><div><a className="brand" href="#home"><span className="brand-icon"><Coffee /></span><span className="brand-name">{t(copy.brand)}</span></a><p>{t(copy.footer)}</p></div><div className="socials"><Button variant="social" aria-label={t(copy.instagram)} title={`${t(copy.instagram)} — ${t(copy.socialNote)}`} disabled><Instagram /></Button><Button variant="social" aria-label={t(copy.facebook)} title={`${t(copy.facebook)} — ${t(copy.socialNote)}`} disabled><Facebook /></Button></div></div><div className="footer-bottom"><span>© {number(2026, language)} {t(copy.copyright)} ♡</span><span className="footer-demo">{t(copy.demo)}</span></div></footer>
  </div>;
}
