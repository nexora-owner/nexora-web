import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-white scroll-smooth">
      
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 w-full z-50 bg-[#0B1220]/80 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <a href="#hero" className="flex items-center gap-1.5 font-semibold">
  <Image
    src="/logo.png"
    alt="Nexora Systems Logo"
    width={56}
    height={56}
    className="rounded-lg"
  />
   <span className="leading-none">Nexora Systems</span>
</a>
     

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a
              href="#contact"
              className="ml-4 px-4 py-2 rounded-lg bg-teal-500 text-black font-medium hover:bg-teal-400 transition"
            >
              Get Started
            </a>
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section id="hero"
        className="min-h-screen flex items-center justify-center px-6 pt-32
        bg-[radial-gradient(ellipse_at_top,_#1E3A8A_0%,_#0B1220_60%)]"
      >
        <div className="max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
            bg-white/10 text-teal-400 text-sm mb-6">
            ✦ Innovative Digital Solutions
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Engineering the Future
          </h1>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            We craft cutting-edge mobile apps, fintech solutions, IoT systems,
            and e-commerce platforms that drive business growth and user engagement.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-teal-500 text-black font-semibold hover:bg-teal-400 transition"
            >
              Start Your Project →
            </a>
            <a
              href="#services"
              className="px-6 py-3 rounded-xl border border-teal-400/50 text-teal-400 hover:bg-teal-400/10 transition"
            >
              View Our Work
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 border-t border-white/10 pt-12">
            <Stat number="150+" label="Projects Delivered" />
            <Stat number="50+" label="Happy Clients" />
            <Stat number="8+" label="Years Experience" />
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-24 px-6 bg-[#0E1628]">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold mb-14 text-center">Our Services</h2>

    <div className="grid gap-8 md:grid-cols-3">
      
      {/* Web */}
      <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-teal-400/40 transition">
        <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-teal-400/20 flex items-center justify-center text-2xl">
          💻
        </div>
        <h3 className="text-xl font-semibold mb-3">Web & Mobile Development</h3>
        <p className="text-slate-400 text-sm">
          Modern, scalable web and mobile applications.
        </p>
      </div>

      {/* Fintech */}
      <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-teal-400/40 transition">
        <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-teal-400/20 flex items-center justify-center text-2xl">
          💳
        </div>
        <h3 className="text-xl font-semibold mb-3">Fintech & Payment Systems</h3>
        <p className="text-slate-400 text-sm">
          Secure digital payments and financial platforms.
        </p>
      </div>

      {/* IoT */}
      <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-teal-400/40 transition">
        <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-teal-400/20 flex items-center justify-center text-2xl">
          📡
        </div>
        <h3 className="text-xl font-semibold mb-3">IoT & Smart Solutions</h3>
        <p className="text-slate-400 text-sm">
          Connected devices and intelligent systems.
        </p>
      </div>

      {/* AI */}
      <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-teal-400/40 transition">
        <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-teal-400/20 flex items-center justify-center text-2xl">
          🤖
        </div>
        <h3 className="text-xl font-semibold mb-3">AI & Automation</h3>
        <p className="text-slate-400 text-sm">
          AI-powered systems, chatbots, and automation tools.
        </p>
      </div>

      {/* Kiosk */}
      <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-teal-400/40 transition">
        <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-teal-400/20 flex items-center justify-center text-2xl">
          🖥️
        </div>
        <h3 className="text-xl font-semibold mb-3">Kiosk Systems</h3>
        <p className="text-slate-400 text-sm">
          Self-service kiosks for payments and services.
        </p>
      </div>

      {/* Custom */}
      <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-teal-400/40 transition">
        <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-teal-400/20 flex items-center justify-center text-2xl">
          ⚙️
        </div>
        <h3 className="text-xl font-semibold mb-3">Custom Software</h3>
        <p className="text-slate-400 text-sm">
          Tailored systems built for your business needs.
        </p>
      </div>

    </div>
  </div>
</section>

     <section
        id="contact"
        style={{ padding: "100px 0", background: "#020617" }}
      >
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-bold">
            Let’s Build Something Great
          </h2>

          <p className="mt-5 mb-8 text-slate-400">
            Ready to start your project?
          </p>

          <div className="flex flex-col items-center gap-2 text-slate-300">
            <p>
              📞{" "}
              <a
                href="tel:+97688989800"
                className="hover:text-white transition"
              >
                +976 8898 9800
              </a>
            </p>

            <p>
              📞{" "}
              <a
                href="tel:+97689117914"
                className="hover:text-white transition"
              >
                +976 8911 7914
              </a>
            </p>

            <p>
              📧{" "}
              <a
                href="mailto:nexora.owner@gmail.com"
                className="hover:text-white transition"
              >
                nexora.owner@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="py-6 text-center text-slate-500 text-sm border-t border-white/10">
        © {new Date().getFullYear()} Nexora Systems LLC. All rights reserved.
      </footer>
    </main>
  );
}

/* ===== Components ===== */
function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-bold text-teal-400">{number}</div>
      <div className="text-slate-400 mt-1 text-sm">{label}</div>
    </div>
  );
}

