"use client";
import { useState } from "react";

function MembershipForm({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  if (!open) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4" onClick={onClose}>
      <div className="bg-white rounded-xl w-full max-w-[440px] p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        {sent ? (
          <div className="text-center py-8">
            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-green-600 text-lg">✓</span>
            </div>
            <h3 className="text-[16px] font-bold text-[#0f2b5b] mb-1">Заявка отправлена</h3>
            <p className="text-[13px] text-gray-400">Мы свяжемся с вами в ближайшее время</p>
            <button onClick={onClose} className="mt-4 text-[13px] text-gray-400 hover:text-gray-600">Закрыть</button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-[16px] font-bold text-[#0f2b5b]">Заявка на вступление</h3>
              <button onClick={onClose} className="text-gray-300 hover:text-gray-500 text-lg leading-none">&times;</button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                required
                type="text"
                placeholder="ФИО"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-md border border-gray-200 text-[13px] text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-[#c9a84c] transition-colors"
              />
              <input
                type="text"
                placeholder="Компания / ИП"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-md border border-gray-200 text-[13px] text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-[#c9a84c] transition-colors"
              />
              <input
                required
                type="tel"
                placeholder="Телефон"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-md border border-gray-200 text-[13px] text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-[#c9a84c] transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-md border border-gray-200 text-[13px] text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-[#c9a84c] transition-colors"
              />
              <textarea
                placeholder="Комментарий (необязательно)"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={2}
                className="w-full px-3.5 py-2.5 rounded-md border border-gray-200 text-[13px] text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-[#c9a84c] transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full bg-[#0f2b5b] hover:bg-[#183a6e] text-white text-[13px] font-semibold py-2.5 rounded-md transition-colors"
              >
                Отправить заявку
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#1a1a2e]">
      <MembershipForm open={formOpen} onClose={() => setFormOpen(false)} />

      {/* ===== HEADER ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100/80">
        <div className="max-w-[1120px] mx-auto px-5 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-[#0f2b5b] rounded flex items-center justify-center">
              <span className="text-[#c9a84c] font-bold text-[11px]">С</span>
            </div>
            <span className="text-[13px] font-semibold text-[#0f2b5b] tracking-tight">ПРБ «Самғау»</span>
          </div>
          <nav className="hidden md:flex items-center gap-5">
            <a href="#about" className="text-[13px] text-gray-500 hover:text-[#0f2b5b] transition-colors">О палате</a>
            <a href="#directions" className="text-[13px] text-gray-500 hover:text-[#0f2b5b] transition-colors">Направления</a>
            <a href="#membership" className="text-[13px] text-gray-500 hover:text-[#0f2b5b] transition-colors">Членство</a>
            <a href="#contacts" className="text-[13px] text-white bg-[#0f2b5b] hover:bg-[#183a6e] px-3.5 py-1.5 rounded-md transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="pt-14">
        <div className="bg-[#0f2b5b] relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-[#c9a84c]/8 rounded-full blur-[100px]" />
          </div>
          <div className="relative max-w-[1120px] mx-auto px-5 py-14 sm:py-20">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-[560px]">
                <h1 className="text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold text-white leading-[1.15] tracking-tight mb-4">
                  Палата Развития Бизнеса<br /><span className="text-[#c9a84c]">«Самғау»</span>
                </h1>
                <p className="text-[14px] sm:text-[15px] text-white/45 leading-relaxed">
                  Саморегулируемая организация, объединяющая предпринимателей Казахстана для защиты прав и развития бизнес-среды
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:flex-col lg:gap-2.5">
                <button
                  onClick={() => setFormOpen(true)}
                  className="text-[13px] font-semibold bg-[#c9a84c] hover:bg-[#b89540] text-[#0f2b5b] px-5 py-2.5 rounded-md transition-colors"
                >
                  Вступить в палату
                </button>
                <a href="#about" className="text-[13px] font-medium text-white/50 hover:text-white/70 px-5 py-2.5 transition-colors">
                  Подробнее ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="border-b border-gray-100">
        <div className="max-w-[1120px] mx-auto px-5 py-7 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { num: "15+", label: "Лет опыта" },
            { num: "500+", label: "Членов палаты" },
            { num: "50+", label: "Законодательных инициатив" },
            { num: "1000+", label: "Решённых споров" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-[24px] font-extrabold text-[#0f2b5b] tracking-tight">{s.num}</p>
              <p className="text-[11px] text-gray-400 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-14 sm:py-20">
        <div className="max-w-[1120px] mx-auto px-5">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold text-[#c9a84c] uppercase tracking-[0.15em] mb-2.5">О палате</p>
              <h2 className="text-[24px] sm:text-[28px] font-extrabold text-[#0f2b5b] leading-tight tracking-tight mb-4">
                Защита и развитие бизнеса
              </h2>
              <p className="text-[14px] text-gray-500 leading-[1.7] mb-3">
                ПРБ «Самғау» представляет и защищает права и законные интересы своих членов в органах государственной власти, судебных инстанциях и общественных объединениях.
              </p>
              <p className="text-[14px] text-gray-500 leading-[1.7]">
                Палата участвует в выработке решений органов власти, разработке законодательных и нормативных актов, формируя благоприятные условия для предпринимательства в Республике Казахстан.
              </p>
            </div>
            <div className="lg:col-span-2 bg-[#f7f8fb] rounded-xl p-6">
              <p className="text-[11px] font-semibold text-[#c9a84c] uppercase tracking-[0.15em] mb-2.5">Миссия</p>
              <p className="text-[14px] text-gray-600 leading-[1.7] mb-4">
                Формирование устойчивой институциональной основы для долгосрочного развития предпринимательства через инвестиционную и информационную деятельность.
              </p>
              <div className="space-y-2">
                {["Представительство интересов бизнеса", "Развитие саморегулирования", "Повышение стандартов отрасли"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-1 h-1 bg-[#c9a84c] rounded-full shrink-0" />
                    <span className="text-[13px] text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DIRECTIONS ===== */}
      <section id="directions" className="py-14 sm:py-20 bg-[#f7f8fb]">
        <div className="max-w-[1120px] mx-auto px-5">
          <div className="mb-8">
            <p className="text-[11px] font-semibold text-[#c9a84c] uppercase tracking-[0.15em] mb-2.5">Направления</p>
            <h2 className="text-[24px] sm:text-[28px] font-extrabold text-[#0f2b5b] leading-tight tracking-tight">
              Направления деятельности
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {[
              { num: "01", title: "Защита прав", desc: "Представление и защита прав членов в органах власти, судах и общественных организациях" },
              { num: "02", title: "Законодательные инициативы", desc: "Участие в разработке законов и нормативных актов, внесение предложений по изменению законодательства" },
              { num: "03", title: "Арбитраж и медиация", desc: "Судебное и досудебное разрешение споров, включая арбитражное производство" },
              { num: "04", title: "Стандарты и контроль", desc: "Утверждение правил и стандартов, обязательных для членов палаты, контроль соблюдения" },
              { num: "05", title: "Обучение и аттестация", desc: "Профессиональная учёба, аттестация и оценка соответствия деятельности работников" },
              { num: "06", title: "Взаимодействие с государством", desc: "Сотрудничество с НПП «Атамекен», государственными органами и органами местного самоуправления" },
            ].map((d, i) => (
              <div key={i} className="bg-white rounded-lg p-4.5 border border-gray-100 hover:border-gray-200 transition-colors" style={{ padding: '18px' }}>
                <span className="text-[10px] font-bold text-[#c9a84c] tracking-wider">{d.num}</span>
                <h3 className="text-[13px] font-bold text-[#0f2b5b] mt-1.5 mb-1">{d.title}</h3>
                <p className="text-[12px] text-gray-400 leading-[1.6]">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MEMBERSHIP ===== */}
      <section id="membership" className="py-14 sm:py-20">
        <div className="max-w-[1120px] mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <p className="text-[11px] font-semibold text-[#c9a84c] uppercase tracking-[0.15em] mb-2.5">Членство</p>
              <h2 className="text-[24px] sm:text-[28px] font-extrabold text-[#0f2b5b] leading-tight tracking-tight mb-5">
                Преимущества членства
              </h2>
              <div className="space-y-3.5">
                {[
                  { title: "Правовая защита", desc: "Представление интересов в государственных органах и судах" },
                  { title: "Влияние на законодательство", desc: "Участие в разработке законов, влияющих на вашу отрасль" },
                  { title: "Профессиональное развитие", desc: "Обучение, аттестация и повышение квалификации" },
                  { title: "Разрешение споров", desc: "Арбитраж и медиация для решения деловых конфликтов" },
                  { title: "Информационная поддержка", desc: "Актуальная информация от государственных органов" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-[11px] font-bold text-[#c9a84c] mt-0.5 w-4 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h4 className="text-[13px] font-semibold text-[#0f2b5b] mb-0.5">{item.title}</h4>
                      <p className="text-[12px] text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0f2b5b] rounded-xl p-6">
              <h3 className="text-[16px] font-bold text-white mb-2">Кто может вступить</h3>
              <p className="text-[13px] text-white/35 leading-[1.6] mb-4">
                Членами палаты могут стать предприниматели и организации, заинтересованные в развитии бизнес-среды Казахстана.
              </p>
              <div className="space-y-2 mb-5">
                {["Юридические лица", "Индивидуальные предприниматели", "Объединения предпринимателей"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-1 h-1 bg-[#c9a84c] rounded-full shrink-0" />
                    <span className="text-[13px] text-white/50">{item}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setFormOpen(true)}
                className="w-full text-center text-[13px] font-semibold bg-[#c9a84c] hover:bg-[#b89540] text-[#0f2b5b] py-2.5 rounded-md transition-colors"
              >
                Оставить заявку
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACTS ===== */}
      <section id="contacts" className="py-14 sm:py-20 bg-[#f7f8fb]">
        <div className="max-w-[1120px] mx-auto px-5">
          <div className="mb-8">
            <p className="text-[11px] font-semibold text-[#c9a84c] uppercase tracking-[0.15em] mb-2.5">Контакты</p>
            <h2 className="text-[24px] sm:text-[28px] font-extrabold text-[#0f2b5b] leading-tight tracking-tight">
              Свяжитесь с нами
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-3.5 max-w-[660px]">
            {[
              { label: "Адрес", value: "Казахстан" },
              { label: "Email", value: "info@samgau.kz" },
              { label: "Телефон", value: "Уточняется" },
            ].map((c, i) => (
              <div key={i} className="bg-white rounded-lg p-4 border border-gray-100">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">{c.label}</p>
                <p className="text-[13px] font-medium text-[#0f2b5b]">{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#0f2b5b] py-5">
        <div className="max-w-[1120px] mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-white/10 rounded flex items-center justify-center">
              <span className="text-[#c9a84c] font-bold text-[9px]">С</span>
            </div>
            <span className="text-[12px] font-medium text-white/60">ПРБ «Самғау»</span>
          </div>
          <p className="text-[11px] text-white/20">© 2025 Палата Развития Бизнеса «Самғау»</p>
        </div>
      </footer>
    </div>
  );
}
