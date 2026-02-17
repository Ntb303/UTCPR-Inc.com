"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  HeartPulse,
  Users,
  GraduationCap,
  ShieldCheck,
  Instagram,
  Facebook,
  Menu,
  X,
} from "lucide-react";

// ✅ Vercel/Next.js notes
// - Put all images in /public (Next.js serves them at /<filename>)
  2.png
  Nish Professional Pic.jpg
  Yash Library Class.jpg
  Prisha and Yash.jpg
  Sig Ep KD Class.jpg
  Dhruv and Vik.jpg
  Gauri and Darshil.jpg
  Nish on the News.jpg
  Donald Parks Award.jpg
  UT CPR Basketball Tournament.jpg
// - Filenames with spaces can work, but encoding is safer.
const img = (filename) => encodeURI(`/${filename}`);

const HIGHLIGHTS = [
  { icon: HeartPulse, label: "Hands-on CPR" },
  { icon: GraduationCap, label: "Student-led" },
  { icon: Users, label: "Community impact" },
  { icon: ShieldCheck, label: "AHA-aligned" },
];

const COMMUNITY_PARTNERS = [
  "US Army",
  "Lucas County Health Department",
  "Toledo Public Libraries",
  "Toledo Public Schools",
];

export default function Page() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 scroll-smooth">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <img
              src={img("2.png")}
              alt="UT CPR Logo"
              className="h-10 w-auto"
            />
            <span className="font-semibold text-gray-900">UT CPR, Inc</span>
          </a>

          <div className="relative">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white p-2 shadow-sm hover:bg-gray-50"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden">
                {[
                  ["Home", "#top"],
                  ["Who We Are", "#who"],
                  ["Collaborations", "#collaborations"],
                  ["Founder", "#founder"],
                  ["Media & Recognition", "#media"],
                  ["Tournament", "#tournament"],
                  ["Donate", "#donate"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="block px-4 py-3 text-sm text-gray-800 hover:bg-gray-50"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="top"
        className="relative bg-red-700 text-white py-24 px-6 text-center overflow-hidden"
      >
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <img
                src={img("2.png")}
                alt="UT Toledo CPR Logo"
                className="h-14 w-auto"
              />
              <h1 className="text-5xl font-bold">UT CPR, Inc</h1>
            </div>

            <p className="text-xl mb-10">Learn CPR. Save Lives. Strengthen Our Community.</p>

            <Button className="bg-white text-red-700 font-semibold px-6 py-3 rounded-2xl shadow">
              Get Trained
            </Button>
          </div>

          <div className="mt-12 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <Card key={label} className="rounded-2xl bg-white/10 border-white/20">
                <CardContent className="p-5 flex flex-col items-center gap-2">
                  <Icon className="h-6 w-6" />
                  <p className="text-sm font-medium">{label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="who" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Who We Are</h2>

          <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
            UT CPR, Inc is a student-run nonprofit organization based in Toledo, Ohio. We are
            dedicated to providing hands-on CPR and Basic Life Support (BLS) training to students
            on campus and members of the surrounding community. Through education, outreach, and
            community events, we empower individuals with lifesaving skills.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <img
              src={img("Yash Library Class.jpg")}
              alt="CPR training session"
              className="rounded-2xl shadow-lg object-cover w-full h-80"
            />
            <img
              src={img("Prisha and Yash.jpg")}
              alt="UT CPR team"
              className="rounded-2xl shadow-lg object-cover w-full h-80"
            />
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section id="collaborations" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Our Collaborations</h2>

          <p className="text-lg text-center max-w-4xl mx-auto mb-6">
            UT CPR, Inc proudly collaborates with community institutions and campus organizations
            to expand access to lifesaving CPR education.
          </p>

          <div className="max-w-4xl mx-auto mb-10 flex flex-wrap justify-center gap-3">
            {COMMUNITY_PARTNERS.map((name) => (
              <span
                key={name}
                className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-medium"
              >
                {name}
              </span>
            ))}
            <span className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-medium">
              Fraternities &amp; Sororities
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <img
              src={img("Sig Ep KD Class.jpg")}
              alt="Fraternity and sorority CPR training"
              className="rounded-2xl shadow-xl object-cover w-full h-80"
            />
            <img
              src={img("Dhruv and Vik.jpg")}
              alt="CPR training demonstration"
              className="rounded-2xl shadow-xl object-cover w-full h-80"
            />
            <img
              src={img("Gauri and Darshil.jpg")}
              alt="Community CPR collaboration"
              className="rounded-2xl shadow-xl object-cover w-full h-80"
            />
          </div>
        </div>
      </section>

      {/* Founder */}
      <section id="founder" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src={img("Nish Professional Pic.jpg")}
              alt="Founder Nishanth Siva"
              className="rounded-2xl shadow-2xl object-cover w-80 h-80"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Founder</h2>
            <p className="text-lg leading-relaxed mb-4">
              UT CPR, Inc was founded by <strong>Nishanth Siva</strong>, an incoming medical
              student who started the organization after working as an EMT.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Through his experience responding to emergency calls, Nishanth witnessed firsthand
              how critical the first few minutes of care can be. He recognized that increasing
              access to CPR education could dramatically improve survival outcomes.
            </p>
            <p className="text-lg leading-relaxed">
              Inspired to help reduce the bystander intervention gap during medical emergencies,
              he created UT CPR, Inc to empower students and community members with the skills
              and confidence to act when it matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Media & Recognition */}
      <section id="media" className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Media & Recognition</h2>

          <p className="text-lg text-center max-w-4xl mx-auto mb-12">
            UT CPR, Inc has been featured on <strong>Toledo News</strong> for its impact on
            increasing CPR awareness and community training efforts. In addition, the
            organization was honored at the University of Toledo with the
            <strong> Donald Parks Award for Most Outstanding Student Organization</strong>,
            recognizing its leadership, service, and campus-wide impact.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <img
              src={img("Nish on the News.jpg")}
              alt="Featured on Toledo News"
              className="rounded-2xl shadow-xl object-cover w-full h-96"
            />
            <img
              src={img("Donald Parks Award.jpg")}
              alt="Donald Parks Award - Most Outstanding Student Organization"
              className="rounded-2xl shadow-xl object-cover w-full h-96"
            />
          </div>
        </div>
      </section>

      {/* Tournament */}
      <section id="tournament" className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Annual Charity Basketball Tournament</h2>
          <p className="text-lg mb-6">
            UT CPR, Inc proudly hosts an annual basketball tournament to raise funds for the
            American Heart Association Heart Walk. This event brings together students and
            community members to promote heart health, teamwork, and community impact.
          </p>
          <p className="text-md max-w-3xl mx-auto mb-10">
            Proceeds directly support the mission to fight heart disease and stroke while
            raising awareness about CPR and emergency preparedness.
          </p>

          <img
            src={img("UT CPR Basketball Tournament.jpg")}
            alt="UT CPR Annual Basketball Tournament"
            className="rounded-2xl shadow-xl object-cover w-full max-w-5xl mx-auto h-[420px]"
          />
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Support Our Mission</h2>
          <p className="text-lg mb-8">
            UT CPR, Inc is a registered 501(c)(3) nonprofit organization. Your tax-deductible
            donation helps us provide CPR and BLS training, purchase lifesaving equipment, and
            expand heart health education across the Toledo community.
          </p>

          <Button asChild className="bg-red-600 text-white rounded-2xl px-8 py-3">
            <a href="https://gofund.me/b52e3fabf" target="_blank" rel="noreferrer">
              Donate via GoFundMe
            </a>
          </Button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Contact Us</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-10">
            Want to schedule a training, collaborate, or support UT CPR? Send us a message below
            or email us directly at{" "}
            <a className="font-semibold text-red-700 hover:underline" href="mailto:utoledocpr@gmail.com">
              utoledocpr@gmail.com
            </a>
            .
          </p>

          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 md:p-8">
              <form
                className="grid gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = new FormData(form);
                  const name = String(data.get("name") || "").trim();
                  const email = String(data.get("email") || "").trim();
                  const message = String(data.get("message") || "").trim();

                  const subject = encodeURIComponent(
                    `UT CPR Website Contact${name ? ` — ${name}` : ""}`
                  );
                  const body = encodeURIComponent(
                    `Name: ${name || "(not provided)"}\nEmail: ${email || "(not provided)"}\n\nMessage:\n${message}`
                  );

                  window.location.href = `mailto:utoledocpr@gmail.com?subject=${subject}&body=${body}`;
                }}
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-200"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-200"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-200"
                    placeholder="Tell us what you’re looking for…"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <p className="text-sm text-gray-600">
                    Submitting opens your email app to send the message.
                  </p>
                  <Button type="submit" className="bg-red-600 text-white rounded-2xl px-8 py-3">
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1f44] text-blue-100 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm">
                © {new Date().getFullYear()} UT CPR, Inc. Toledo, Ohio. | 501(c)(3) Nonprofit
              </p>
              <p className="text-sm mt-2">
                Independent student-run nonprofit organization partnered with the American Heart
                Association.
              </p>
              <p className="text-sm mt-2">Contact: utoledocpr@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/utoledocpr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 hover:bg-white/20 transition"
                aria-label="UT CPR Instagram"
              >
                <Instagram className="h-5 w-5" />
                <span className="text-sm font-medium">@utoledocpr</span>
              </a>

              <a
                href="https://www.facebook.com/search/top?q=UT%20cpr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 hover:bg-white/20 transition"
                aria-label="UT CPR Facebook"
              >
                <Facebook className="h-5 w-5" />
                <span className="text-sm font-medium">UT cpr</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
