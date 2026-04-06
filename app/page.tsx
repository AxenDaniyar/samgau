"use client";
import { useState } from "react";

function Modal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", org: "", phone: "", email: "" });
  const [sent, setSent] = useState(false);
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4" onClick={onClose}>
      <div className="bg-white rounded-lg w-full max-w-[400px] p-5" onClick={e => e.stopPropagation()}>
        {sent ? (
          <div className="text-center py-6">
            <p className="text-[15px] font-semibold text-[#0f2b5b] mb-1">Заявка принята</p>
            <p className="text-[13px] text-gray-400 mb-4">Мы свяжемся с вами</p>
            <button onClick={onClose} className="text-[12px] text-gray-400 hover:text-gray-600">Закрыть</button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <p className="text-[15px] font-semibold text-[#0f2b5b]">Вступить в палату</p>
              <button onClick={onClose} className="text-gray-300 hover:text-gray-500 text-lg">&times;</button>
            </div>
            <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-2.5">
              <input required placeholder="ФИО контактного лица" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-3 py-2 border border-gray-200 rounded text-[13px] focus:outline-none focus:border-[#0f2b5b]/40" />
              <input placeholder="Организация" value={form.org} onChange={e => setForm({...form, org: e.target.value})} className="w-full px-3 py-2 border border-gray-200 rounded text-[13px] focus:outline-none focus:border-[#0f2b5b]/40" />
              <input required placeholder="Телефон" type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full px-3 py-2 border border-gray-200 rounded text-[13px] focus:outline-none focus:border-[#0f2b5b]/40" />
              <input placeholder="Email" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-3 py-2 border border-gray-200 rounded text-[13px] focus:outline-none focus:border-[#0f2b5b]/40" />
              <button type="submit" className="w-full bg-[#0f2b5b] text-white text-[13px] font-medium py-2.5 rounded hover:bg-[#183a6e] transition-colors mt-1">Отправить</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-[1080px] mx-auto px-5 h-[52px] flex items-center justify-between">
          <span className="text-[13px] font-bold text-[#0f2b5b] tracking-tight">САМҒАУ</span>
          <nav className="hidden md:flex items-center gap-5 text-[12px]">
            <a href="#about" className="text-gray-400 hover:text-[#0f2b5b]">О палате</a>
            <a href="#activities" className="text-gray-400 hover:text-[#0f2b5b]">Деятельность</a>
            <a href="#events" className="text-gray-400 hover:text-[#0f2b5b]">Мероприятия</a>
            <a href="#contacts" className="text-gray-400 hover:text-[#0f2b5b]">Контакты</a>
            <button onClick={() => setModalOpen(true)} className="bg-[#0f2b5b] text-white px-3 py-1.5 rounded hover:bg-[#183a6e] transition-colors">Вступить</button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-[52px] bg-[#0f2b5b]">
        <div className="max-w-[1080px] mx-auto px-5 py-14 sm:py-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="text-[10px] text-[#c9a84c] uppercase tracking-[0.2em] font-medium mb-3">Палата Развития Бизнеса</p>
            <h1 className="text-[30px] sm:text-[40px] font-extrabold text-white leading-[1.1] tracking-tight">
              «Самғау»
            </h1>
            <p className="text-[14px] text-white/35 mt-3 max-w-[440px] leading-relaxed">
              Содействие развитию предпринимательства через взаимодействие бизнеса и государственных органов Республики Казахстан
            </p>
          </div>
          <button onClick={() => setModalOpen(true)} className="text-[12px] font-semibold bg-[#c9a84c] text-[#0f2b5b] px-5 py-2 rounded hover:bg-[#b89540] transition-colors self-start lg:self-auto">
            Вступить в палату
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-12 sm:py-16 border-b border-gray-100">
        <div className="max-w-[1080px] mx-auto px-5">
          <div className="grid lg:grid-cols-3 gap-8">
            <div>
              <p className="text-[10px] text-[#c9a84c] uppercase tracking-[0.2em] font-semibold mb-2">О палате</p>
              <h2 className="text-[22px] font-extrabold text-[#0f2b5b] leading-tight">Кто мы</h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-[13px] text-gray-500 leading-[1.8] mb-3">
                ПРБ «Самғау» — саморегулируемая организация, которая представляет интересы предпринимателей в органах государственной власти, содействует формированию благоприятной деловой среды и выступает площадкой для диалога между бизнесом и государством.
              </p>
              <p className="text-[13px] text-gray-500 leading-[1.8]">
                Палата участвует в разработке законодательных инициатив, проводит обучающие мероприятия, организует бизнес-форумы и обеспечивает правовую поддержку своих членов.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section id="activities" className="py-12 sm:py-16">
        <div className="max-w-[1080px] mx-auto px-5">
          <p className="text-[10px] text-[#c9a84c] uppercase tracking-[0.2em] font-semibold mb-2">Деятельность</p>
          <h2 className="text-[22px] font-extrabold text-[#0f2b5b] leading-tight mb-8">Чем занимается палата</h2>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {[
              { title: "Взаимодействие с государственными органами", desc: "Участие в выработке решений органов власти, разработка и продвижение законодательных инициатив в интересах предпринимателей" },
              { title: "Развитие предпринимательства", desc: "Формирование институциональной основы для устойчивого развития бизнеса, инвестиционная и информационная поддержка" },
              { title: "Семинары, форумы, обучение", desc: "Организация деловых мероприятий, профессиональной учёбы, аттестации и повышения квалификации для членов палаты" },
              { title: "Защита прав предпринимателей", desc: "Представление интересов членов в судах, госорганах, участие в арбитраже и досудебном урегулировании споров" },
              { title: "Стандарты и саморегулирование", desc: "Разработка отраслевых стандартов, контроль их соблюдения, развитие культуры саморегулирования в бизнесе" },
              { title: "Сотрудничество с НПП «Атамекен»", desc: "Совместная работа с Национальной палатой предпринимателей по вопросам регулирования и поддержки бизнеса" },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-gray-100 pl-4 hover:border-[#c9a84c] transition-colors">
                <h3 className="text-[13px] font-bold text-[#0f2b5b] mb-1">{item.title}</h3>
                <p className="text-[12px] text-gray-400 leading-[1.65]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="py-12 sm:py-16 bg-[#f8f9fb]">
        <div className="max-w-[1080px] mx-auto px-5">
          <p className="text-[10px] text-[#c9a84c] uppercase tracking-[0.2em] font-semibold mb-2">Мероприятия</p>
          <h2 className="text-[22px] font-extrabold text-[#0f2b5b] leading-tight mb-8">Что мы проводим</h2>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "Бизнес-форумы", desc: "Площадки для диалога предпринимателей, инвесторов и представителей государства" },
              { title: "Семинары и тренинги", desc: "Обучение по вопросам права, финансов, управления и взаимодействия с госорганами" },
              { title: "Круглые столы", desc: "Обсуждение законодательных инициатив и проблем бизнес-среды с участием экспертов" },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-lg p-5">
                <h3 className="text-[13px] font-bold text-[#0f2b5b] mb-1.5">{item.title}</h3>
                <p className="text-[12px] text-gray-400 leading-[1.65]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1080px] mx-auto px-5">
          <div className="bg-[#0f2b5b] rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <h3 className="text-[16px] font-bold text-white mb-1">Вступайте в Палату</h3>
              <p className="text-[12px] text-white/35 max-w-[400px] leading-relaxed">
                Юридические лица, ИП и объединения предпринимателей — оставьте заявку, и мы свяжемся с вами
              </p>
            </div>
            <button onClick={() => setModalOpen(true)} className="text-[12px] font-semibold bg-[#c9a84c] text-[#0f2b5b] px-5 py-2.5 rounded hover:bg-[#b89540] transition-colors shrink-0">
              Оставить заявку
            </button>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-12 sm:py-16 bg-[#f8f9fb]">
        <div className="max-w-[1080px] mx-auto px-5">
          <p className="text-[10px] text-[#c9a84c] uppercase tracking-[0.2em] font-semibold mb-2">Контакты</p>
          <h2 className="text-[22px] font-extrabold text-[#0f2b5b] leading-tight mb-6">Свяжитесь с нами</h2>
          <div className="grid sm:grid-cols-3 gap-4 max-w-[600px]">
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Адрес</p>
              <p className="text-[13px] font-medium text-[#0f2b5b]">Казахстан</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Email</p>
              <p className="text-[13px] font-medium text-[#0f2b5b]">info@samgau.kz</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Телефон</p>
              <p className="text-[13px] font-medium text-[#0f2b5b]">Уточняется</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0f2b5b] py-5">
        <div className="max-w-[1080px] mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-[11px] font-semibold text-white/50">САМҒАУ</span>
          <p className="text-[10px] text-white/20">© 2025 Палата Развития Бизнеса «Самғау»</p>
        </div>
      </footer>
    </div>
  );
}
