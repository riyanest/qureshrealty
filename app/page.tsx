"use client";

import React, { useState } from "react";

export default function Home() {
  // Modal states
  const [activeModal, setActiveModal] = useState<string | null>(null);
  
  // Location tabs state
  const [activeTab, setActiveTab] = useState<string>("connectivity");

  // Form states
  const [heroForm, setHeroForm] = useState({ name: "", phone: "", email: "", config: "" });
  const [contactForm, setContactForm] = useState({ name: "", phone: "", email: "", unit: "2 BHK Deck Residences", notes: "" });
  const [brochureForm, setBrochureForm] = useState({ name: "", phone: "" });
  const [floorForm, setFloorForm] = useState({ name: "", phone: "", unit: "2 BHK Deck Residence (699–710 Sq.Ft.)" });
  const [vipForm, setVipForm] = useState({ name: "", phone: "", date: "", cab: "Require VIP Pick & Drop Cab" });

  const ADVISOR_PHONE = "+91 98199 07609";
  const ADVISOR_WA = "919819907609";
  const ADVISOR_EMAIL = "reply2qureshhrealty@gmail.com";
  const ADVISOR_RERA = "A011332503667";
  const PROJECT_RERA = "PR1331012602464";
  const ADVISOR_INSTAGRAM = "https://www.instagram.com/officialqureshhglobalrealty/";

  // Handlers
  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Sultana, I would like to enquire about Sunteck Belvedere Park Mira Road.%0A%0A*Name:* ${encodeURIComponent(heroForm.name)}%0A*Phone:* ${encodeURIComponent(heroForm.phone)}%0A*Email:* ${encodeURIComponent(heroForm.email || "Not provided")}%0A*Interested In:* ${encodeURIComponent(heroForm.config)}%0A%0APlease share the cost sheet and priority allotment details.`;
    window.open(`https://wa.me/${ADVISOR_WA}?text=${msg}`, "_blank");
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Sultana, I am submitting an enquiry for Sunteck Belvedere Park Mira Road.%0A%0A*Name:* ${encodeURIComponent(contactForm.name)}%0A*Phone:* ${encodeURIComponent(contactForm.phone)}%0A*Email:* ${encodeURIComponent(contactForm.email || "Not provided")}%0A*Requirement:* ${encodeURIComponent(contactForm.unit)}%0A*Notes:* ${encodeURIComponent(contactForm.notes || "None")}`;
    window.open(`https://wa.me/${ADVISOR_WA}?text=${msg}`, "_blank");
  };

  const handleBrochureSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveModal(null);
    // Trigger brochure download
    const link = document.createElement("a");
    link.href = "/Sunteck_Belvedere_Park.pdf";
    link.download = "Sunteck_Belvedere_Park.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    const msg = `Hi Sultana, I just downloaded the brochure for Sunteck Belvedere Park Mira Road.%0A%0A*Name:* ${encodeURIComponent(brochureForm.name)}%0A*Phone:* ${encodeURIComponent(brochureForm.phone)}%0A%0APlease share additional pricing and site visit details.`;
    setTimeout(() => {
      window.open(`https://wa.me/${ADVISOR_WA}?text=${msg}`, "_blank");
    }, 500);
  };

  const handleFloorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveModal(null);
    const msg = `Hi Sultana, I want to unlock the high-resolution floor plans for Sunteck Belvedere Park.%0A%0A*Name:* ${encodeURIComponent(floorForm.name)}%0A*Phone:* ${encodeURIComponent(floorForm.phone)}%0A*Requested:* ${encodeURIComponent(floorForm.unit)}`;
    window.open(`https://wa.me/${ADVISOR_WA}?text=${msg}`, "_blank");
  };

  const handleVipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveModal(null);
    const msg = `Hi Sultana, I would like to schedule a VIP Site Visit to Sunteck Belvedere Park Experience Lounge.%0A%0A*Name:* ${encodeURIComponent(vipForm.name)}%0A*Phone:* ${encodeURIComponent(vipForm.phone)}%0A*Preferred Date:* ${encodeURIComponent(vipForm.date)}%0A*Cab Preference:* ${encodeURIComponent(vipForm.cab)}`;
    window.open(`https://wa.me/${ADVISOR_WA}?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white text-ink">
      {/* Top Utility Announcement Bar */}
      <div className="bg-navy-deep text-slate-300 text-xs py-2 px-4 border-b border-gold/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4">
            <span>
              ☎ Call / WhatsApp:{" "}
              <a href={`tel:${ADVISOR_PHONE.replace(/\s+/g, '')}`} className="text-gold-light font-bold hover:underline">
                {ADVISOR_PHONE}
              </a>{" "}
              (Sultana Qureshi)
            </span>
            <span className="hidden sm:inline">|</span>
            <a href={`mailto:${ADVISOR_EMAIL}`} className="hover:text-gold-light hidden md:inline">
              ✉ {ADVISOR_EMAIL}
            </a>
            <span className="hidden sm:inline">|</span>
            <span className="hidden lg:inline">⌖ Mira Road (East), Mumbai</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span>MahaRERA: <b className="text-gold-light">{PROJECT_RERA}</b></span>
            <span>Agent RERA: <b className="text-gold-light">{ADVISOR_RERA}</b></span>
            <a
              href={ADVISOR_INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-1"
            >
              📸 @officialqureshhglobalrealty
            </a>
            <span className="bg-gold/15 border border-gold text-gold-light px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
              Zero Brokerage Advisory
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-50 bg-navy/98 backdrop-blur-md border-b border-gold/30 px-4 py-3 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-10 h-10 border-2 border-gold-light rounded-lg grid place-items-center text-gold-light font-cinzel font-bold text-lg bg-gold/10 shadow-sm">
                QG
              </div>
              <div className="text-white leading-tight">
                <div className="font-bold text-base tracking-wide">Qureshh GLOBAL REALTY</div>
                <div className="text-gold-light text-[10px] tracking-widest font-semibold uppercase">Exclusive Luxury Advisory</div>
              </div>
            </a>
            <div className="hidden lg:block w-px h-8 bg-gold/30"></div>
            <div className="hidden lg:block text-slate-200 text-xs">
              <b className="text-gold-light block text-sm">Sunteck Belvedere Park</b>
              <span>2 &amp; 3 BHK Deck Residences • Mira Road</span>
            </div>
          </div>

          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-200">
            <a href="#overview" className="hover:text-gold-light transition-colors">Overview</a>
            <a href="#advertisement" className="hover:text-gold-light transition-colors">Ad Feature</a>
            <a href="#advisor" className="hover:text-gold-light transition-colors">Meet Sultana</a>
            <a href="#pricing" className="hover:text-gold-light transition-colors">Configurations</a>
            <a href="#amenities" className="hover:text-gold-light transition-colors">35+ Amenities</a>
            <a href="#floorplans" className="hover:text-gold-light transition-colors">Floor Plans</a>
            <a href="#location" className="hover:text-gold-light transition-colors">Location</a>
            <a href="#contact" className="hover:text-gold-light transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${ADVISOR_WA}?text=Hi%20Sultana%2C%20I%20want%20to%20enquire%20about%20Sunteck%20Belvedere%20Park%20Mira%20Road`}
              target="_blank"
              rel="noreferrer"
              className="bg-green-wa hover:bg-[#20ba56] text-white text-xs font-bold px-3.5 py-2 rounded-md shadow flex items-center gap-1.5 transition-transform hover:-translate-y-0.5"
            >
              <span>💬 WhatsApp Sultana</span>
            </a>
            <a
              href={`tel:${ADVISOR_PHONE.replace(/\s+/g, '')}`}
              className="bg-gradient-to-r from-gold-light via-gold to-gold-dark text-navy-deep text-xs font-bold px-3.5 py-2 rounded-md shadow hover:brightness-105 transition-transform hover:-translate-y-0.5"
            >
              <span>📞 {ADVISOR_PHONE}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="overview" className="relative bg-gradient-to-b from-navy via-navy-deep to-navy-card text-white py-14 lg:py-20 px-4 border-b-2 border-gold/30 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(215,169,54,0.15),transparent_60%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold text-gold-light text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-5">
              ★ Tallest Landmark in Mira Road • 50 Storeys
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
              Sunteck Belvedere Park
              <span className="block gold-gradient-text">2 &amp; 3 BHK Deck Residences</span>
            </h1>

            <p className="text-slate-300 text-base lg:text-lg mb-6 leading-relaxed max-w-2xl">
              Where endless greenery meets expansive living. Luxury high-rise homes with private open-to-sky sundecks and <b className="text-white">lifetime uninterrupted views of Sanjay Gandhi National Park</b> directly on Western Express Highway, Mira Road.
            </p>

            {/* Quick Stat Pills */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <span className="bg-white/10 border border-gold/30 px-3.5 py-1.5 rounded-md text-xs text-slate-200">
                📍 <b>WEH Frontage</b> (0 Min)
              </span>
              <span className="bg-white/10 border border-gold/30 px-3.5 py-1.5 rounded-md text-xs text-slate-200">
                🚇 <b>Miragaon Metro</b> (1 Min)
              </span>
              <span className="bg-white/10 border border-gold/30 px-3.5 py-1.5 rounded-md text-xs text-slate-200">
                🌳 <b>3+ Acres</b> Land Parcel
              </span>
              <span className="bg-white/10 border border-gold/30 px-3.5 py-1.5 rounded-md text-xs text-slate-200">
                🏊 <b>55,000+ Sq.Ft.</b> Club Spaces
              </span>
              <span className="bg-white/10 border border-gold/30 px-3.5 py-1.5 rounded-md text-xs text-slate-200">
                💰 <b>Starting ₹1.29 Cr*</b>
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3.5 mb-8">
              <button
                onClick={() => setActiveModal("vipModal")}
                className="bg-gradient-to-r from-gold-light via-gold to-gold-dark text-navy-deep font-bold text-sm px-6 py-3 rounded-md shadow-lg hover:brightness-105 transition-all transform hover:-translate-y-0.5"
              >
                Book VIP Site Tour
              </button>
              <a
                href={`https://wa.me/${ADVISOR_WA}?text=Hi%20Sultana%2C%20please%20send%20me%20the%20pricing%20breakdown%20and%20brochure%20for%20Sunteck%20Belvedere%20Park%20Mira%20Road.`}
                target="_blank"
                rel="noreferrer"
                className="bg-green-wa hover:bg-[#20ba56] text-white font-bold text-sm px-6 py-3 rounded-md shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-1.5"
              >
                💬 WhatsApp Sultana
              </a>
              <button
                onClick={() => setActiveModal("brochureModal")}
                className="border border-gold-light text-gold-light hover:bg-gold/15 text-sm font-bold px-5 py-3 rounded-md transition-all"
              >
                📥 Download Brochure (PDF)
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="font-cinzel text-lg font-bold text-white">50 Storeys</div>
                <div className="text-xs text-slate-400">Tallest Landmark</div>
              </div>
              <div>
                <div className="font-cinzel text-lg font-bold text-white">35+ Club</div>
                <div className="text-xs text-slate-400">Curated Amenities</div>
              </div>
              <div>
                <div className="font-cinzel text-lg font-bold text-white">Zero Brokerage</div>
                <div className="text-xs text-slate-400">Direct Advisory</div>
              </div>
              <div>
                <div className="font-cinzel text-lg font-bold text-white">PR1331012602464</div>
                <div className="text-xs text-slate-400">MahaRERA Approved</div>
              </div>
            </div>
          </div>

          {/* Hero Lead Capture Box */}
          <div className="lg:col-span-5">
            <div className="bg-navy-card/95 border-2 border-gold rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-gold-light via-gold to-gold-dark text-navy-deep text-[11px] font-extrabold uppercase px-3 py-1 rounded shadow tracking-wider">
                PRIORITY ALLOTMENT
              </div>

              <div className="text-center mb-6">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">Get Launch Cost Sheet</h3>
                <p className="text-gold-light text-xs font-medium">Direct Developer Pricing • Floor Plan Breakdown</p>
              </div>

              <form onSubmit={handleHeroSubmit} className="space-y-3.5">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name *"
                    value={heroForm.name}
                    onChange={(e) => setHeroForm({ ...heroForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md bg-white text-ink text-sm border border-slate-200 outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number (+91) *"
                    value={heroForm.phone}
                    onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md bg-white text-ink text-sm border border-slate-200 outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={heroForm.email}
                    onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md bg-white text-ink text-sm border border-slate-200 outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
                <div>
                  <select
                    required
                    value={heroForm.config}
                    onChange={(e) => setHeroForm({ ...heroForm, config: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md bg-white text-ink text-sm border border-slate-200 outline-none focus:ring-2 focus:ring-gold"
                  >
                    <option value="">Select Configuration Interested In *</option>
                    <option value="2 BHK Deck (₹1.29 Cr+)">2 BHK Deck Residences (Starting ₹1.29 Cr*)</option>
                    <option value="3 BHK Deck (₹1.95 Cr+)">3 BHK Deck Residences (Starting ₹1.95 Cr*)</option>
                    <option value="Both Configurations">Interested in Both Options</option>
                  </select>
                </div>

                <div className="flex items-start gap-2 text-[11px] text-slate-300 leading-tight">
                  <input type="checkbox" id="heroConsent" defaultChecked required className="mt-0.5" />
                  <label htmlFor="heroConsent">
                    I authorize Sultana Qureshi (Qureshh Global Realty) to share project details, floor plans, and pricing via WhatsApp &amp; phone.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold-light via-gold to-gold-dark text-navy-deep font-bold text-sm py-3 rounded-md shadow-md hover:brightness-105 transition-all"
                >
                  🚀 SEND ENQUIRY ON WHATSAPP
                </button>
              </form>

              <div className="flex items-center gap-3 pt-4 mt-5 border-t border-white/10 text-xs text-slate-300">
                <img
                  src="/sultana-qureshi.jpg"
                  alt="Sultana Qureshi"
                  className="w-10 h-10 rounded-full border-2 border-gold-light object-cover object-top flex-shrink-0"
                />
                <div>
                  <b className="text-gold-light block">Sultana Qureshi • Founder &amp; Consultant</b>
                  <span>Direct Hotline: {ADVISOR_PHONE} | Zero Brokerage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Feature Ad Banner: The Lady at the Pool Deck */}
      <section id="advertisement" className="py-16 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-gold-dark font-extrabold text-xs tracking-widest uppercase block mb-1">
              OFFICIAL CAMPAIGN ADVERTISEMENT
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-3">
              Your National Park Views Await
            </h2>
            <p className="text-muted text-sm sm:text-base">
              Step out onto expansive private decks and immerse yourself in scenic views of Sanjay Gandhi National Park. Experience the pinnacle of resort living in Mira Road.
            </p>
          </div>

          <div className="relative rounded-2xl border-2 border-gold p-8 sm:p-12 text-white bg-gradient-to-r from-navy-deep/95 via-navy/90 to-navy-card/95 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="bg-gold/20 border border-gold text-gold-light px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block mb-3">
                  Sunteck Belvedere Park Exclusive Campaign
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
                  Expansive Homes with Private Decks
                  <span className="block text-gold-light">Lifetime National Park Views</span>
                </h3>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                  In the quiet of nature, the comfort of thoughtfully designed spaces, and the freedom to live at your own pace, everyday moments take on a greater meaning. Sunteck Belvedere Park is crafted for those who value exclusivity, calm, and seamless city connectivity.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  <div className="bg-white/10 border-l-2 border-gold p-3 rounded-r">
                    <b className="text-gold-light block text-sm">50 Storeys</b>
                    <span className="text-xs text-slate-300">Tallest Landmark</span>
                  </div>
                  <div className="bg-white/10 border-l-2 border-gold p-3 rounded-r">
                    <b className="text-gold-light block text-sm">55,000+ Sq.Ft.</b>
                    <span className="text-xs text-slate-300">Club Amenities</span>
                  </div>
                  <div className="bg-white/10 border-l-2 border-gold p-3 rounded-r">
                    <b className="text-gold-light block text-sm">Infinity Pool</b>
                    <span className="text-xs text-slate-300">Park Greens View</span>
                  </div>
                  <div className="bg-white/10 border-l-2 border-gold p-3 rounded-r">
                    <b className="text-gold-light block text-sm">WEH Frontage</b>
                    <span className="text-xs text-slate-300">Zero Mins Access</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={`tel:${ADVISOR_PHONE.replace(/\s+/g, '')}`}
                    className="bg-gradient-to-r from-gold-light via-gold to-gold-dark text-navy-deep font-bold text-xs sm:text-sm px-5 py-2.5 rounded shadow hover:brightness-105 transition-all"
                  >
                    📞 Speak with Sultana: {ADVISOR_PHONE}
                  </a>
                  <button
                    onClick={() => setActiveModal("brochureModal")}
                    className="border border-gold-light text-gold-light hover:bg-gold/15 text-xs sm:text-sm font-bold px-5 py-2.5 rounded transition-all"
                  >
                    Download Official Brochure
                  </button>
                </div>
              </div>

              <div className="lg:col-span-4 bg-navy-deep/80 border border-gold/40 rounded-xl p-6 text-center">
                <span className="text-gold-light text-xs font-bold border border-dashed border-gold px-2.5 py-1 rounded inline-block mb-3">
                  MahaRERA: {PROJECT_RERA}
                </span>
                <div className="text-xs text-slate-300 uppercase tracking-wider">Launch Price Starting At</div>
                <div className="font-cinzel text-3xl font-extrabold text-white my-2">
                  ₹1.29 Cr* <span className="text-gold-light text-sm font-sans font-medium">onwards</span>
                </div>
                <p className="text-xs text-slate-400 mb-5">
                  Flexible Developer Payment Schedules &amp; Zero Brokerage Consultation with Sultana Qureshi.
                </p>
                <a
                  href={`https://wa.me/${ADVISOR_WA}?text=Hi%20Sultana%2C%20please%20send%20me%20the%20ad%20offer%20and%20floor%20plans%20for%20Sunteck%20Belvedere%20Park`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-green-wa hover:bg-[#20ba56] text-white text-xs font-bold py-3 px-4 rounded shadow block transition-transform hover:-translate-y-0.5"
                >
                  💬 Instant WhatsApp Enquiry
                </a>
                <div className="text-[11px] text-slate-400 mt-3">
                  Developer Desk: 022 4297 2441 / 022 6591 1873
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Sultana Qureshi Section */}
      <section id="advisor" className="py-16 px-4 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 text-center">
            <div className="relative inline-block max-w-[340px] w-full rounded-2xl overflow-hidden border-4 border-gold shadow-2xl bg-navy">
              <img
                src="/sultana-qureshi.jpg"
                alt="Sultana Qureshi - Founder & Senior Property Consultant"
                className="w-full h-[430px] object-cover object-top"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-navy-deep/95 border border-gold p-3 rounded-lg text-white shadow-md text-left">
                <h4 className="font-serif text-base text-gold-light font-bold">Sultana Qureshi</h4>
                <p className="text-[11px] text-slate-300">Founder • Senior Property Consultant</p>
                <div className="text-[11px] text-gold-light font-semibold mt-1">
                  MahaRERA: {ADVISOR_RERA}
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <a
                href={ADVISOR_INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white font-semibold text-xs px-5 py-2.5 rounded-full shadow-lg hover:opacity-95 transition-all transform hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2"></line>
                </svg>
                Follow @officialqureshhglobalrealty
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="text-gold-dark font-extrabold text-xs tracking-wider uppercase block mb-1">
              YOUR PERSONAL PROPERTY CONSULTANT
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">
              Meet Sultana Qureshi
            </h3>
            <p className="text-muted text-sm sm:text-base leading-relaxed mb-4">
              Working professionally since 1997, <b>Sultana Qureshi</b> brings decades of experience in client relationships, negotiation, and premium real estate advisory. Her practice focuses on helping families and investors make informed property decisions with complete clarity and confidence.
            </p>
            <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
              Through <b>Qureshh Global Realty</b>, she represents buyers in top-tier luxury developments across Mira Road, the Western Suburbs, and selected overseas investments. Her core brand promise is transparent communication, direct developer negotiations, and a strict <b>“No Service Charge • No Brokerage”</b> policy.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-cream border border-gold/30 p-3.5 rounded-lg flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-navy text-gold-light grid place-items-center text-xs font-bold flex-shrink-0">
                  0%
                </div>
                <div>
                  <h5 className="text-xs font-bold text-navy">Zero Brokerage Guarantee</h5>
                  <p className="text-[11px] text-muted">100% free consultation &amp; advisory for Sunteck Belvedere Park.</p>
                </div>
              </div>

              <div className="bg-cream border border-gold/30 p-3.5 rounded-lg flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-navy text-gold-light grid place-items-center text-xs font-bold flex-shrink-0">
                  ★
                </div>
                <div>
                  <h5 className="text-xs font-bold text-navy">Priority Unit Allocation</h5>
                  <p className="text-[11px] text-muted">First pick of scenic National Park-facing deck residences.</p>
                </div>
              </div>

              <div className="bg-cream border border-gold/30 p-3.5 rounded-lg flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-navy text-gold-light grid place-items-center text-xs font-bold flex-shrink-0">
                  🚗
                </div>
                <div>
                  <h5 className="text-xs font-bold text-navy">Complimentary VIP Cab</h5>
                  <p className="text-[11px] text-muted">Pick-and-drop service arranged directly to the experience lounge.</p>
                </div>
              </div>

              <div className="bg-cream border border-gold/30 p-3.5 rounded-lg flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-navy text-gold-light grid place-items-center text-xs font-bold flex-shrink-0">
                  ⚖
                </div>
                <div>
                  <h5 className="text-xs font-bold text-navy">Legal &amp; Home Loan Desk</h5>
                  <p className="text-[11px] text-muted">MahaRERA verification and tie-ups with leading banks at lowest rates.</p>
                </div>
              </div>
            </div>

            <div className="bg-navy border border-gold rounded-xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 text-white">
              <div>
                <span className="text-[11px] text-gold-light uppercase tracking-wider block">Direct Phone &amp; WhatsApp Line</span>
                <a href={`tel:${ADVISOR_PHONE.replace(/\s+/g, '')}`} className="font-cinzel text-xl sm:text-2xl font-bold hover:text-gold-light">
                  {ADVISOR_PHONE}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/${ADVISOR_WA}?text=Hi%20Sultana%2C%20I%20would%20like%20to%20discuss%20Sunteck%20Belvedere%20Park`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-wa hover:bg-[#20ba56] text-white text-xs font-bold px-4 py-2 rounded shadow"
                >
                  WhatsApp Sultana
                </a>
                <div className="flex gap-1.5">
                  <a href="https://www.instagram.com/officialqureshhglobalrealty/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold hover:text-navy-deep text-white text-xs grid place-items-center transition-colors">
                    IG
                  </a>
                  <a href="https://youtube.com/@qureshhglobalrealty" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold hover:text-navy-deep text-white text-xs grid place-items-center transition-colors">
                    YT
                  </a>
                  <a href="https://www.linkedin.com/in/sultana-qureshi-215b76bb/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold hover:text-navy-deep text-white text-xs grid place-items-center transition-colors">
                    in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instagram & Social Media Reel Showcase */}
        <div className="max-w-7xl mx-auto mt-12 bg-gradient-to-r from-navy-deep via-navy to-navy-deep border border-gold/30 rounded-2xl p-6 sm:p-8 flex flex-wrap items-center justify-between gap-6 text-white shadow-xl">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-gradient-to-r from-amber-500 via-rose-500 to-pink-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Instagram Reels & Updates
              </span>
              <span className="text-gold-light text-xs font-semibold">@officialqureshhglobalrealty</span>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold mb-2">
              Watch Sunteck Belvedere Park Video Reels & Walkthroughs
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm">
              Follow Sultana Qureshi on Instagram for exclusive site walkthroughs, high-deck views, sample flat previews, and neighborhood insights.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href={ADVISOR_INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-lg hover:opacity-95 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2"></line>
              </svg>
              Connect on Instagram
            </a>
            <a
              href="https://youtube.com/@qureshhglobalrealty"
              target="_blank"
              rel="noreferrer"
              className="border border-gold text-gold-light hover:bg-gold hover:text-navy-deep font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-full transition-colors"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Configurations & Pricing */}
      <section id="pricing" className="py-16 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-gold-dark font-extrabold text-xs tracking-widest uppercase block mb-1">
              EXCLUSIVE RESIDENCE COLLECTION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-3">
              Configurations &amp; Pricing
            </h2>
            <p className="text-muted text-sm sm:text-base">
              Thoughtfully planned 2 &amp; 3 BHK residences featuring private open-air decks, optimal space planning, cross ventilation, and scenic greenery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* 2 BHK Deck */}
            <div className="bg-white border-2 border-gold rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div className="p-6 sm:p-8 bg-gradient-to-b from-white to-cream border-b border-slate-200">
                <span className="bg-navy text-gold-light text-xs font-bold px-2.5 py-1 rounded inline-block mb-3 border border-gold">
                  MOST POPULAR
                </span>
                <h3 className="font-serif text-2xl font-bold text-navy mb-1">2 BHK Deck Residences</h3>
                <p className="text-xs text-muted mb-4">Ideal for modern families seeking luxury with panoramic green views</p>
                <div className="font-cinzel text-3xl font-extrabold text-navy">
                  ₹1.29 Cr* <span className="text-gold-dark text-sm font-sans font-medium">onwards</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-3 text-sm">
                <div className="flex items-center gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span className="text-gold-dark font-bold">✓</span> Carpet Area: <b>699 – 710+ Sq. Ft.</b>
                </div>
                <div className="flex items-center gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span className="text-gold-dark font-bold">✓</span> Spacious Living &amp; Dining with attached Sun Deck
                </div>
                <div className="flex items-center gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span className="text-gold-dark font-bold">✓</span> Private deck overlooking Sanjay Gandhi National Park
                </div>
                <div className="flex items-center gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span className="text-gold-dark font-bold">✓</span> 2 Bedrooms + 2 Designer Bathrooms
                </div>
                <div className="flex items-center gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span className="text-gold-dark font-bold">✓</span> Dedicated Kitchen Utility Balcony
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gold-dark font-bold">✓</span> Vastu-compliant cross-ventilated layouts
                </div>
              </div>

              <div className="p-6 pt-0 space-y-2.5">
                <button
                  onClick={() => setActiveModal("floorModal")}
                  className="w-full bg-gradient-to-r from-gold-light via-gold to-gold-dark text-navy-deep font-bold text-sm py-3 rounded-md shadow hover:brightness-105"
                >
                  View 2 BHK Floor Plan
                </button>
                <a
                  href={`https://wa.me/${ADVISOR_WA}?text=Hi%20Sultana%2C%20please%20send%20me%20the%20complete%20cost%20sheet%20and%20floor%20plan%20for%20the%202%20BHK%20Deck%20at%20Sunteck%20Belvedere%20Park`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-green-wa hover:bg-[#20ba56] text-white text-xs font-bold py-2.5 rounded-md shadow block text-center"
                >
                  💬 Get 2 BHK Cost Sheet on WhatsApp
                </a>
              </div>
            </div>

            {/* 3 BHK Deck */}
            <div className="bg-white border-2 border-slate-200 hover:border-gold rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div className="p-6 sm:p-8 bg-gradient-to-b from-white to-cream border-b border-slate-200">
                <span className="bg-navy text-gold-light text-xs font-bold px-2.5 py-1 rounded inline-block mb-3 border border-gold">
                  ULTRA LUXURY
                </span>
                <h3 className="font-serif text-2xl font-bold text-navy mb-1">3 BHK Deck Residences</h3>
                <p className="text-xs text-muted mb-4">Expansive master residences designed for generational prestige</p>
                <div className="font-cinzel text-3xl font-extrabold text-navy">
                  ₹1.95 Cr* <span className="text-gold-dark text-sm font-sans font-medium">onwards</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-3 text-sm">
                <div className="flex items-center gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span className="text-gold-dark font-bold">✓</span> Carpet Area: <b>950 – 1,060+ Sq. Ft.</b>
                </div>
                <div className="flex items-center gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span className="text-gold-dark font-bold">✓</span> Double-Width Private Deck with Living Room
                </div>
                <div className="flex items-center gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span className="text-gold-dark font-bold">✓</span> Lifetime unobstructed hill &amp; forest canopy views
                </div>
                <div className="flex items-center gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span className="text-gold-dark font-bold">✓</span> 3 Grand Bedrooms with Master Suite + 3 Baths
                </div>
                <div className="flex items-center gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span className="text-gold-dark font-bold">✓</span> Gourmet kitchen with separate utility balcony
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gold-dark font-bold">✓</span> Corner residences with 3-side light and breeze
                </div>
              </div>

              <div className="p-6 pt-0 space-y-2.5">
                <button
                  onClick={() => setActiveModal("floorModal")}
                  className="w-full bg-gradient-to-r from-gold-light via-gold to-gold-dark text-navy-deep font-bold text-sm py-3 rounded-md shadow hover:brightness-105"
                >
                  View 3 BHK Floor Plan
                </button>
                <a
                  href={`https://wa.me/${ADVISOR_WA}?text=Hi%20Sultana%2C%20please%20send%20me%20the%20complete%20cost%20sheet%20and%20floor%20plan%20for%20the%203%20BHK%20Deck%20at%20Sunteck%20Belvedere%20Park`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-green-wa hover:bg-[#20ba56] text-white text-xs font-bold py-2.5 rounded-md shadow block text-center"
                >
                  💬 Get 3 BHK Cost Sheet on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 text-xs text-muted">
            *Government taxes, stamp duty, registration, and floor rise additional. Contact Sultana Qureshi for the official developer payment schedule.
          </div>
        </div>
      </section>

      {/* 35+ Lifestyle Amenities */}
      <section id="amenities" className="py-16 px-4 bg-navy text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-gold-light font-extrabold text-xs tracking-widest uppercase block mb-1">
              OVER 55,000 SQ. FT. OF CURATED LUXURY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-3">
              35+ World-Class Amenities
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Spread across 2 lavish levels, every amenity at Sunteck Belvedere Park is crafted to elevate everyday living into a five-star vacation.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: "🏊", title: "Infinity Edge Pool", desc: "Heated swimming pool overlooking national park greens" },
              { icon: "🏋", title: "High-Tech Gym", desc: "State-of-the-art cardio and weight training facility" },
              { icon: "🎳", title: "Bowling Alley", desc: "2-lane professional bowling lounge for family recreation" },
              { icon: "🎙", title: "Podcast & Media Studio", desc: "Acoustically treated studio for creators & meetings" },
              { icon: "🏏", title: "Cricket Pitch & Nets", desc: "Dedicated practice pitch with bowling machine" },
              { icon: "🧗", title: "Rock Climbing Wall", desc: "Custom-designed climbing wall with safety harnesses" },
              { icon: "🏸", title: "Multipurpose Court", desc: "Professional court for tennis, basketball & badminton" },
              { icon: "🌳", title: "Kids' Tree House", desc: "Themed children's adventure forest & play zone" },
              { icon: "🍹", title: "Poolside Cabana Lounge", desc: "Pergolas with comfortable daybeds and social seating" },
              { icon: "🎱", title: "Indoor Games Arena", desc: "Snooker, table tennis, foosball & chess lounge" },
              { icon: "🧘", title: "Zen Yoga Pavilion", desc: "Open-air meditation deck surrounded by gardens" },
              { icon: "🏛", title: "Grand Banquet Hall", desc: "Double-height venue for celebrations & gatherings" },
            ].map((amenity, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-gold/25 rounded-xl p-5 text-center hover:bg-white/10 hover:border-gold transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-navy-deep border border-gold text-gold-light grid place-items-center text-xl mx-auto mb-3 shadow-md">
                  {amenity.icon}
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{amenity.title}</h4>
                <p className="text-[11px] text-slate-300 leading-normal">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section id="floorplans" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-gold-dark font-extrabold text-xs tracking-widest uppercase block mb-1">
              MASTER ARCHITECTURE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-3">
              Unit Plans &amp; Layouts
            </h2>
            <p className="text-muted text-sm sm:text-base">
              Explore the masterfully engineered 2 &amp; 3 BHK floor plans designed for zero space wastage, panoramic decks, and superior ventilation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md">
              <div className="h-64 bg-slate-100 relative flex items-center justify-center p-4 border-b border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
                  alt="2 BHK Floor Plan"
                  className="w-full h-full object-cover blur-[3px]"
                />
                <div className="absolute inset-0 bg-navy/60 backdrop-blur-[2px] flex flex-col items-center justify-center text-white p-4 text-center">
                  <span className="bg-gold/20 border border-gold text-gold-light px-2.5 py-0.5 rounded text-[11px] font-bold mb-2">
                    UNIT PLAN
                  </span>
                  <h4 className="font-serif text-xl font-bold">2 BHK Deck Residences</h4>
                  <p className="text-xs text-slate-200 mb-3">Carpet Area: 699 – 710+ Sq. Ft.</p>
                  <button
                    onClick={() => setActiveModal("floorModal")}
                    className="bg-gradient-to-r from-gold-light via-gold to-gold-dark text-navy-deep font-bold text-xs px-4 py-2 rounded shadow"
                  >
                    🔓 Unlock Full Floor Plan
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-bold text-navy mb-1">2 BHK Luxury Deck Layout</h3>
                <p className="text-xs text-muted mb-4">
                  Living &amp; dining with attached private deck, 2 master bedrooms, 2 bathrooms, and kitchen utility balcony.
                </p>
                <a
                  href={`https://wa.me/${ADVISOR_WA}?text=Hi%20Sultana%2C%20please%20send%20me%20the%202%20BHK%20floor%20plan%20PDF%20for%20Sunteck%20Belvedere%20Park`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-green-wa hover:bg-[#20ba56] text-white text-xs font-bold py-2.5 rounded shadow block text-center"
                >
                  Request 2 BHK PDF via WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md">
              <div className="h-64 bg-slate-100 relative flex items-center justify-center p-4 border-b border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
                  alt="3 BHK Floor Plan"
                  className="w-full h-full object-cover blur-[3px]"
                />
                <div className="absolute inset-0 bg-navy/60 backdrop-blur-[2px] flex flex-col items-center justify-center text-white p-4 text-center">
                  <span className="bg-gold/20 border border-gold text-gold-light px-2.5 py-0.5 rounded text-[11px] font-bold mb-2">
                    UNIT PLAN
                  </span>
                  <h4 className="font-serif text-xl font-bold">3 BHK Deck Residences</h4>
                  <p className="text-xs text-slate-200 mb-3">Carpet Area: 950 – 1,060+ Sq. Ft.</p>
                  <button
                    onClick={() => setActiveModal("floorModal")}
                    className="bg-gradient-to-r from-gold-light via-gold to-gold-dark text-navy-deep font-bold text-xs px-4 py-2 rounded shadow"
                  >
                    🔓 Unlock Full Floor Plan
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-bold text-navy mb-1">3 BHK Grand Deck Layout</h3>
                <p className="text-xs text-muted mb-4">
                  Grand double-width deck, 3 luxury bedrooms, 3 bathrooms, separate dining zone, and modular kitchen utility.
                </p>
                <a
                  href={`https://wa.me/${ADVISOR_WA}?text=Hi%20Sultana%2C%20please%20send%20me%20the%203%20BHK%20floor%20plan%20PDF%20for%20Sunteck%20Belvedere%20Park`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-green-wa hover:bg-[#20ba56] text-white text-xs font-bold py-2.5 rounded shadow block text-center"
                >
                  Request 3 BHK PDF via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Advantage with Interactive Tabs */}
      <section id="location" className="py-16 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-gold-dark font-extrabold text-xs tracking-widest uppercase block mb-1">
              STRATEGIC CONNECTIVITY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-3">
              Location Advantages
            </h2>
            <p className="text-muted text-sm sm:text-base">
              Situated right on the Western Express Highway in Mira Road East, Sunteck Belvedere Park connects you effortlessly to Mumbai's top hubs.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              { id: "connectivity", label: "Connectivity" },
              { id: "education", label: "Education" },
              { id: "healthcare", label: "Healthcare" },
              { id: "retail", label: "Retail & Lifestyle" },
              { id: "recreation", label: "Recreation & Nature" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-navy text-gold-light border-navy shadow"
                    : "bg-white text-ink border border-slate-200 hover:border-gold"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Landmarks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 max-w-4xl mx-auto">
            {activeTab === "connectivity" && (
              <>
                <div className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <h5 className="font-bold text-sm text-navy">Western Express Highway (WEH)</h5>
                    <span className="text-xs text-muted">Direct highway frontage</span>
                  </div>
                  <span className="bg-cream border border-gold/40 text-gold-dark font-extrabold text-xs px-2.5 py-1 rounded-full">0 Min</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <h5 className="font-bold text-sm text-navy">Miragaon Metro Station</h5>
                    <span className="text-xs text-muted">Upcoming Metro Line 9</span>
                  </div>
                  <span className="bg-cream border border-gold/40 text-gold-dark font-extrabold text-xs px-2.5 py-1 rounded-full">1–4 Mins</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <h5 className="font-bold text-sm text-navy">Mira Road Railway Station</h5>
                    <span className="text-xs text-muted">Western Railway line</span>
                  </div>
                  <span className="bg-cream border border-gold/40 text-gold-dark font-extrabold text-xs px-2.5 py-1 rounded-full">8–9 Mins</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <h5 className="font-bold text-sm text-navy">Dahisar Check Naka</h5>
                    <span className="text-xs text-muted">Entry to Western Suburbs</span>
                  </div>
                  <span className="bg-cream border border-gold/40 text-gold-dark font-extrabold text-xs px-2.5 py-1 rounded-full">5 Mins</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <h5 className="font-bold text-sm text-navy">Borivali Railway Junction</h5>
                    <span className="text-xs text-muted">Fast &amp; outstation trains</span>
                  </div>
                  <span className="bg-cream border border-gold/40 text-gold-dark font-extrabold text-xs px-2.5 py-1 rounded-full">15 Mins</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <h5 className="font-bold text-sm text-navy">Mumbai Airport (CSMIA)</h5>
                    <span className="text-xs text-muted">Direct via WEH corridor</span>
                  </div>
                  <span className="bg-cream border border-gold/40 text-gold-dark font-extrabold text-xs px-2.5 py-1 rounded-full">35 Mins</span>
                </div>
              </>
            )}

            {activeTab === "education" && (
              <>
                <div className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <h5 className="font-bold text-sm text-navy">Singapore International School</h5>
                    <span className="text-xs text-muted">Premier IB World School</span>
                  </div>
                  <span className="bg-cream border border-gold/40 text-gold-dark font-extrabold text-xs px-2.5 py-1 rounded-full">5 Mins</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <h5 className="font-bold text-sm text-navy">Podar International School</h5>
                    <span className="text-xs text-muted">CBSE &amp; ICSE curriculum</span>
                  </div>
                  <span className="bg-cream border border-gold/40 text-gold-dark font-extrabold text-xs px-2.5 py-1 rounded-full">7 Mins</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <h5 className="font-bold text-sm text-navy">N.L. Dalmia Institute</h5>
                    <span className="text-xs text-muted">High school &amp; management</span>
                  </div>
                  <span className="bg-cream border border-gold/40 text-gold-dark font-extrabold text-xs px-2.5 py-1 rounded-full">8 Mins</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <h5 className="font-bold text-sm text-navy">St. Xavier’s High School</h5>
                    <span className="text-xs text-muted">Reputed school campus</span>
                  </div>
                  <span className="bg-cream border border-gold/40 text-gold-dark font-extrabold text-xs px-2.5 py-1 rounded-full">10 Mins</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <h5 className="font-bold text-sm text-navy">GCC International School</h5>
                    <span className="text-xs text-muted">Cambridge curriculum</span>
                  </div>
                  <span className="bg-cream border border-gold/40 text-gold-dark font-extrabold text-xs px-2.5 py-1 rounded-full">10 Mins</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <h5 className="font-bold text-sm text-navy">Kanakia International School</h5>
                    <span className="text-xs text-muted">ICSE &amp; IGCSE</span>
                  </div>
                  <span className="bg-cream border border-gold/40 text-gold-dark font-extrabold text-xs px-2.5 py-1 rounded-full">13 Mins</span>
                </div>
              </>
            )}

            {activeTab === "healthcare" && (
              <>
                <div className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <h5 className="font-bold text-sm text-navy">Bhaktivedanta Hospital</h5>
                    <span className="text-xs text-muted">Super-speciality care</span>
                  </div>
                  <span className="bg-cream border border-gold/40 text-gold-dark font-extrabold text-xs px-2.5 py-1 rounded-full">7 Mins</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <h5 className="font-bold text-sm text-navy">Orbit Superspeciality</h5>
                    <span className="text-xs text-muted">Multispeciality hospital</span>
                  </div>
                  <span className="bg-cream border border-gold/40 text-gold-dark font-extrabold text-xs px-2.5 py-1 rounded-full">7 Mins</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <h5 className="font-bold text-sm text-navy">Thunga Hospital</h5>
                    <span className="text-xs text-muted">Emergency &amp; trauma care</span>
                  </div>
                  <span className="bg-cream border border-gold/40 text-gold-dark font-extrabold text-xs px-2.5 py-1 rounded-full">8 Mins</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <h5 className="font-bold text-sm text-navy">Lotus Multispecialty</h5>
                    <span className="text-xs text-muted">Family healthcare</span>
                  </div>
                  <span className="bg-cream border border-gold/40 text-gold-dark font-extrabold text-xs px-2.5 py-1 rounded-full">11 Mins</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <h5 className="font-bold text-sm text-navy">Wockhardt Hospital</h5>
                    <span className="text-xs text-muted">Tertiary care hospital</span>
                  </div>
                  <span className="bg-cream border border-gold/40 text-gold-dark font-extrabold text-xs px-2.5 py-1 rounded-full">12 Mins</span>
                </div>
              </>
            )}

            {activeTab === "retail" && (
              <>
                <div className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <h5 className="font-bold text-sm text-navy">Thakur Mall &amp; INOX</h5>
                    <span className="text-xs text-muted">Shopping, food court &amp; cinema</span>
                  </div>
                  <span className="bg-cream border border-gold/40 text-gold-dark font-extrabold text-xs px-2.5 py-1 rounded-full">3 Mins</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <h5 className="font-bold text-sm text-navy">Decathlon Sports Hub</h5>
                    <span className="text-xs text-muted">Sports gear &amp; arena</span>
                  </div>
                  <span className="bg-cream border border-gold/40 text-gold-dark font-extrabold text-xs px-2.5 py-1 rounded-full">3 Mins</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <h5 className="font-bold text-sm text-navy">DMart Mira Road</h5>
                    <span className="text-xs text-muted">Groceries &amp; essentials</span>
                  </div>
                  <span className="bg-cream border border-gold/40 text-gold-dark font-extrabold text-xs px-2.5 py-1 rounded-full">7 Mins</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <h5 className="font-bold text-sm text-navy">Sky City Mall Borivali</h5>
                    <span className="text-xs text-muted">Luxury retail mall</span>
                  </div>
                  <span className="bg-cream border border-gold/40 text-gold-dark font-extrabold text-xs px-2.5 py-1 rounded-full">13 Mins</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <h5 className="font-bold text-sm text-navy">Maxus Mall &amp; Multiplex</h5>
                    <span className="text-xs text-muted">Retail &amp; entertainment</span>
                  </div>
                  <span className="bg-cream border border-gold/40 text-gold-dark font-extrabold text-xs px-2.5 py-1 rounded-full">17 Mins</span>
                </div>
              </>
            )}

            {activeTab === "recreation" && (
              <>
                <div className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <h5 className="font-bold text-sm text-navy">Sanjay Gandhi National Park</h5>
                    <span className="text-xs text-muted">100+ sq. km. green forest reserve</span>
                  </div>
                  <span className="bg-cream border border-gold/40 text-gold-dark font-extrabold text-xs px-2.5 py-1 rounded-full">10 Mins</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <h5 className="font-bold text-sm text-navy">Movie Time Dahisar East</h5>
                    <span className="text-xs text-muted">Cinemas &amp; entertainment</span>
                  </div>
                  <span className="bg-cream border border-gold/40 text-gold-dark font-extrabold text-xs px-2.5 py-1 rounded-full">11 Mins</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <h5 className="font-bold text-sm text-navy">PVR Cinemas Mira Road</h5>
                    <span className="text-xs text-muted">Premium multiplex</span>
                  </div>
                  <span className="bg-cream border border-gold/40 text-gold-dark font-extrabold text-xs px-2.5 py-1 rounded-full">13 Mins</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <h5 className="font-bold text-sm text-navy">Global Vipassana Pagoda</h5>
                    <span className="text-xs text-muted">Meditation monument</span>
                  </div>
                  <span className="bg-cream border border-gold/40 text-gold-dark font-extrabold text-xs px-2.5 py-1 rounded-full">40 Mins</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                  <div>
                    <h5 className="font-bold text-sm text-navy">Gorai Beach &amp; Coastal Resorts</h5>
                    <span className="text-xs text-muted">Weekend coastal getaway</span>
                  </div>
                  <span className="bg-cream border border-gold/40 text-gold-dark font-extrabold text-xs px-2.5 py-1 rounded-full">43 Mins</span>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Complete Contact & Lead Form Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-navy-deep border-2 border-gold rounded-2xl overflow-hidden shadow-2xl text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Info Panel */}
              <div className="lg:col-span-6 p-8 sm:p-12 bg-gradient-to-br from-navy via-navy-deep to-black border-b lg:border-b-0 lg:border-r border-gold/25">
                <span className="text-gold-light font-bold text-xs uppercase tracking-wider block mb-2">
                  DIRECT ADVISOR DESK
                </span>
                <h3 className="font-serif text-3xl font-bold mb-4">Connect with Sultana Qureshi</h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Whether you are planning to book your dream residence at Sunteck Belvedere Park, arrange a private site tour, or evaluate pre-launch payment plans, reach out directly.
                </p>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold/15 border border-gold text-gold-light grid place-items-center flex-shrink-0">
                      📞
                    </div>
                    <div>
                      <span className="text-[11px] text-gold-light uppercase block">Direct Phone &amp; WhatsApp</span>
                      <a href={`tel:${ADVISOR_PHONE.replace(/\s+/g, '')}`} className="font-bold text-base hover:text-gold-light">
                        {ADVISOR_PHONE}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold/15 border border-gold text-gold-light grid place-items-center flex-shrink-0">
                      ✉
                    </div>
                    <div>
                      <span className="text-[11px] text-gold-light uppercase block">Direct Email</span>
                      <a href={`mailto:${ADVISOR_EMAIL}`} className="font-medium hover:text-gold-light">
                        {ADVISOR_EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold/15 border border-gold text-gold-light grid place-items-center flex-shrink-0">
                      🏢
                    </div>
                    <div>
                      <span className="text-[11px] text-gold-light uppercase block">Consultant Office Address</span>
                      <p className="text-slate-200 text-xs">
                        Shop No. 12, Ostwal Point, Kanakia Road, Beverly Park, Mira Road (East), Maharashtra 401107
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold/15 border border-gold text-gold-light grid place-items-center flex-shrink-0">
                      📍
                    </div>
                    <div>
                      <span className="text-[11px] text-gold-light uppercase block">Sunteck Experience Lounge</span>
                      <p className="text-slate-200 text-xs">
                        Western Express Highway, Near Miragaon Metro Station, Mira Road (East), Mumbai 410 107
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 text-xs text-slate-300">
                  <span className="text-gold-light font-bold block mb-1">Official Sunteck Developer Helpline:</span>
                  <span className="text-white font-bold text-sm">022 4297 2441 / 022 6591 1873</span>
                </div>
              </div>

              {/* Right Form Panel */}
              <div className="lg:col-span-6 p-8 sm:p-12 bg-navy-card">
                <h4 className="font-serif text-2xl font-bold text-gold-light mb-2">Send Requirement Directly</h4>
                <p className="text-xs text-slate-300 mb-6">
                  Fill in your details to receive the complete brochure, floor plans, and customized cost sheet directly on your WhatsApp within minutes.
                </p>

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-white text-ink text-sm border border-slate-200 outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Mobile Number (+91) *"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-white text-ink text-sm border border-slate-200 outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-white text-ink text-sm border border-slate-200 outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <select
                      value={contactForm.unit}
                      onChange={(e) => setContactForm({ ...contactForm, unit: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-white text-ink text-sm border border-slate-200 outline-none focus:ring-2 focus:ring-gold"
                    >
                      <option value="2 BHK Deck Residences">Interested in 2 BHK Deck Residences (₹1.29 Cr*)</option>
                      <option value="3 BHK Deck Residences">Interested in 3 BHK Deck Residences (₹1.95 Cr*)</option>
                      <option value="VIP Site Visit Request">Request VIP Site Visit Only</option>
                      <option value="Cost Sheet & Payment Plan">Request Cost Sheet &amp; Payment Plan</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      rows={3}
                      placeholder="Tell Sultana about your requirement or preferred date for a site visit..."
                      value={contactForm.notes}
                      onChange={(e) => setContactForm({ ...contactForm, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-white text-ink text-sm border border-slate-200 outline-none focus:ring-2 focus:ring-gold"
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-2 text-[11px] text-slate-300">
                    <input type="checkbox" id="contactConsent" defaultChecked required className="mt-0.5" />
                    <label htmlFor="contactConsent">
                      I agree to be contacted via Call, WhatsApp &amp; SMS by Sultana Qureshi (Qureshh Global Realty) with zero brokerage.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gold-light via-gold to-gold-dark text-navy-deep font-bold text-sm py-3 rounded shadow hover:brightness-105 transition-all"
                  >
                    SEND ENQUIRY ON WHATSAPP
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#020712] text-slate-400 text-xs py-12 px-4 pb-24 sm:pb-12 border-t border-gold/25">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 border border-gold/30 rounded-lg p-4 mb-8 text-[11px] leading-relaxed">
            <b className="text-gold-light">MahaRERA Registration Details:</b> Sunteck Belvedere Park has been registered via MahaRERA registration number <b className="text-gold-light">{PROJECT_RERA}</b> and is available on the website <a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noreferrer" className="text-gold-light underline">https://maharera.mahaonline.gov.in</a> under registered projects. Promoter: Amenity Buildcon Private Limited / Sunteck Realty Ltd. Consultant MahaRERA Registration: <b className="text-gold-light">{ADVISOR_RERA}</b> (Sultana Qureshi, Qureshh Global Realty).
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-serif text-white text-base font-bold mb-3">Qureshh Global Realty</h4>
              <p className="leading-relaxed mb-3">
                Founded by <b>Sultana Qureshi</b>, providing direct, transparent, and personalized advisory across premium residential developments with our signature <b>“No Service Charge • No Brokerage”</b> commitment.
              </p>
              <p>
                ☎ Direct Line: <a href={`tel:${ADVISOR_PHONE.replace(/\s+/g, '')}`} className="text-gold-light">{ADVISOR_PHONE}</a><br />
                ✉ Email: <a href={`mailto:${ADVISOR_EMAIL}`} className="text-gold-light">{ADVISOR_EMAIL}</a>
              </p>
            </div>

            <div>
              <h4 className="font-serif text-white text-base font-bold mb-3">Sunteck Belvedere Park</h4>
              <ul className="space-y-1.5">
                <li>Elevation: 50 Storeys | 2 Iconic Towers</li>
                <li>Configuration: 2 &amp; 3 BHK Deck Residences</li>
                <li>Views: Sanjay Gandhi National Park</li>
                <li>Amenities: 55,000+ Sq. Ft. (35+ Features)</li>
                <li>Location: Western Express Highway, Mira Road</li>
                <li>Project RERA: {PROJECT_RERA}</li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-white text-base font-bold mb-3">Quick Connect</h4>
              <ul className="space-y-1.5">
                <li><a href={`https://wa.me/${ADVISOR_WA}`} target="_blank" rel="noreferrer" className="hover:text-gold-light">Chat on WhatsApp</a></li>
                <li><a href={`tel:${ADVISOR_PHONE.replace(/\s+/g, '')}`} className="hover:text-gold-light">Call Sultana Direct</a></li>
                <li><a href="https://www.instagram.com/officialqureshhglobalrealty/" target="_blank" rel="noreferrer" className="hover:text-gold-light">Instagram Profile</a></li>
                <li><a href="https://youtube.com/@qureshhglobalrealty" target="_blank" rel="noreferrer" className="hover:text-gold-light">YouTube Channel</a></li>
                <li><a href="/Sunteck_Belvedere_Park.pdf" download="Sunteck_Belvedere_Park.pdf" className="text-gold-light underline">Download Official Brochure (PDF)</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 text-center text-[11px] text-slate-500">
            © 2026 Qureshh Global Realty • Sultana Qureshi (RERA: {ADVISOR_RERA}). All rights reserved. Authorized channel partner advisory for Sunteck Belvedere Park. Disclaimer: Images and artist renderings are for representation purposes only. Prices subject to change without prior notice.
          </div>
        </div>
      </footer>

      {/* Floating Pulsing WhatsApp Button */}
      <a
        href={`https://wa.me/${ADVISOR_WA}?text=Hi%20Sultana%2C%20I%20am%20interested%20in%20Sunteck%20Belvedere%20Park%20Mira%20Road.%20Please%20share%20all%20details.`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-20 sm:bottom-6 right-6 z-50 w-14 h-14 bg-green-wa rounded-full grid place-items-center text-white text-2xl shadow-xl animate-pulse-wa hover:scale-110 transition-transform"
        title="Chat on WhatsApp with Sultana"
      >
        💬
      </a>

      {/* Mobile Sticky Bottom Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-navy-deep border-t-2 border-gold p-2 flex gap-2 shadow-2xl">
        <a
          href={`tel:${ADVISOR_PHONE.replace(/\s+/g, '')}`}
          className="flex-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark text-navy-deep font-bold text-xs py-2.5 rounded text-center shadow"
        >
          📞 Call Sultana
        </a>
        <a
          href={`https://wa.me/${ADVISOR_WA}?text=Hi%20Sultana%2C%20please%20send%20details%20for%20Sunteck%20Belvedere%20Park`}
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-green-wa text-white font-bold text-xs py-2.5 rounded text-center shadow"
        >
          💬 WhatsApp
        </a>
        <button
          onClick={() => setActiveModal("brochureModal")}
          className="border border-gold text-gold-light font-bold text-xs px-3 py-2.5 rounded"
        >
          📥 PDF
        </button>
      </div>

      {/* Brochure Modal */}
      {activeModal === "brochureModal" && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-navy-card border-2 border-gold rounded-2xl max-w-md w-full p-6 text-white relative animate-modal-pop shadow-2xl">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-3 right-4 text-slate-400 hover:text-white text-2xl"
            >
              &times;
            </button>
            <h3 className="font-serif text-xl font-bold mb-1">Download Official Brochure</h3>
            <p className="text-xs text-gold-light mb-4">Sunteck Belvedere Park • Master PDF (6.57 MB)</p>

            <form onSubmit={handleBrochureSubmit} className="space-y-3">
              <input
                type="text"
                required
                placeholder="Your Full Name *"
                value={brochureForm.name}
                onChange={(e) => setBrochureForm({ ...brochureForm, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded bg-white text-ink text-sm border border-slate-200 outline-none focus:ring-2 focus:ring-gold"
              />
              <input
                type="tel"
                required
                placeholder="Mobile Number (+91) *"
                value={brochureForm.phone}
                onChange={(e) => setBrochureForm({ ...brochureForm, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded bg-white text-ink text-sm border border-slate-200 outline-none focus:ring-2 focus:ring-gold"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gold-light via-gold to-gold-dark text-navy-deep font-bold text-sm py-3 rounded shadow hover:brightness-105"
              >
                📥 DOWNLOAD BROCHURE NOW
              </button>
            </form>
            <div className="text-[11px] text-slate-400 text-center mt-3">
              Brochure downloads immediately and a copy is sent to your WhatsApp.
            </div>
          </div>
        </div>
      )}

      {/* Floor Plan Modal */}
      {activeModal === "floorModal" && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-navy-card border-2 border-gold rounded-2xl max-w-md w-full p-6 text-white relative animate-modal-pop shadow-2xl">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-3 right-4 text-slate-400 hover:text-white text-2xl"
            >
              &times;
            </button>
            <h3 className="font-serif text-xl font-bold mb-1">Unlock Floor Plans</h3>
            <p className="text-xs text-gold-light mb-4">2 &amp; 3 BHK Deck Residences Dimensions &amp; Carpet Layouts</p>

            <form onSubmit={handleFloorSubmit} className="space-y-3">
              <input
                type="text"
                required
                placeholder="Your Full Name *"
                value={floorForm.name}
                onChange={(e) => setFloorForm({ ...floorForm, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded bg-white text-ink text-sm border border-slate-200 outline-none focus:ring-2 focus:ring-gold"
              />
              <input
                type="tel"
                required
                placeholder="Mobile Number (+91) *"
                value={floorForm.phone}
                onChange={(e) => setFloorForm({ ...floorForm, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded bg-white text-ink text-sm border border-slate-200 outline-none focus:ring-2 focus:ring-gold"
              />
              <select
                value={floorForm.unit}
                onChange={(e) => setFloorForm({ ...floorForm, unit: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded bg-white text-ink text-sm border border-slate-200 outline-none focus:ring-2 focus:ring-gold"
              >
                <option value="2 BHK Floor Plan">2 BHK Deck Residence (699–710 Sq.Ft.)</option>
                <option value="3 BHK Floor Plan">3 BHK Deck Residence (950–1060 Sq.Ft.)</option>
                <option value="Both Floor Plans">All Floor Plans</option>
              </select>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gold-light via-gold to-gold-dark text-navy-deep font-bold text-sm py-3 rounded shadow hover:brightness-105"
              >
                🔓 UNLOCK &amp; RECEIVE ON WHATSAPP
              </button>
            </form>
          </div>
        </div>
      )}

      {/* VIP Visit Modal */}
      {activeModal === "vipModal" && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-navy-card border-2 border-gold rounded-2xl max-w-md w-full p-6 text-white relative animate-modal-pop shadow-2xl">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-3 right-4 text-slate-400 hover:text-white text-2xl"
            >
              &times;
            </button>
            <h3 className="font-serif text-xl font-bold mb-1">Schedule VIP Site Visit</h3>
            <p className="text-xs text-gold-light mb-4">Sunteck Experience Lounge • Western Express Highway, Mira Road</p>

            <form onSubmit={handleVipSubmit} className="space-y-3">
              <input
                type="text"
                required
                placeholder="Your Full Name *"
                value={vipForm.name}
                onChange={(e) => setVipForm({ ...vipForm, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded bg-white text-ink text-sm border border-slate-200 outline-none focus:ring-2 focus:ring-gold"
              />
              <input
                type="tel"
                required
                placeholder="Mobile Number (+91) *"
                value={vipForm.phone}
                onChange={(e) => setVipForm({ ...vipForm, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded bg-white text-ink text-sm border border-slate-200 outline-none focus:ring-2 focus:ring-gold"
              />
              <input
                type="date"
                required
                value={vipForm.date}
                onChange={(e) => setVipForm({ ...vipForm, date: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded bg-white text-ink text-sm border border-slate-200 outline-none focus:ring-2 focus:ring-gold"
              />
              <select
                value={vipForm.cab}
                onChange={(e) => setVipForm({ ...vipForm, cab: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded bg-white text-ink text-sm border border-slate-200 outline-none focus:ring-2 focus:ring-gold"
              >
                <option value="Require VIP Pick & Drop Cab">Require Complimentary Pick &amp; Drop Cab</option>
                <option value="Visiting with own vehicle">Visiting with own vehicle</option>
              </select>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gold-light via-gold to-gold-dark text-navy-deep font-bold text-sm py-3 rounded shadow hover:brightness-105"
              >
                📅 CONFIRM SITE VISIT WITH SULTANA
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
