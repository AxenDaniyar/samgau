export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a2e]">
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
            <a href="#contacts" className="text-[13px] text-white bg-[#0f2b5b] hover:bg-[#183a6e] px-3.5 py-1.5 rounded-md transition-colors">Связаться</a>
          </nav>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="pt-14">
        <div className="bg-[#0f2b5b] relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-[#c9a84c]/8 rounded-full blur-[100px]" />
            <div className="absolute -bottom-40 -left-20 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px]" />
          </div>
          <div className="relative max-w-[1120px] mx-auto px-5 py-16 sm:py-24">
            <p className="text-[11px] font-medium text-[#c9a84c] uppercase tracking-[0.15em] mb-4">Республика Казахстан</p>
            <h1 className="text-[32px] sm:text-[44px] lg:text-[52px] font-extrabold text-white leading-[1.08] tracking-tight mb-5 max-w-[620px]">
              Палата Развития Бизнеса <span className="text-[#c9a84c]">«Самғау»</span>
            </h1>
            <p className="text-[15px] sm:text-[17px] text-white/50 leading-relaxed max-w-[520px] mb-8">
              Формируем институциональную основу для развития предпринимательства в Казахстане
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#about" className="text-[13px] font-semibold bg-[#c9a84c] hover:bg-[#b89540] text-[#0f2b5b] px-5 py-2.5 rounded-md transition-colors">
                О палате →
              </a>
              <a href="#contacts" className="text-[13px] font-medium bg-white/8 hover:bg-white/12 border border-white/15 text-white/80 px-5 py-2.5 rounded-md transition-colors">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="border-b border-gray-100">
        <div className="max-w-[1120px] mx-auto px-5 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { num: "15+", label: "Лет опыта" },
            { num: "500+", label: "Членов палаты" },
            { num: "50+", label: "Законодательных инициатив" },
            { num: "1000+", label: "Решённых споров" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-[28px] font-extrabold text-[#0f2b5b] tracking-tight">{s.num}</p>
              <p className="text-[12px] text-gray-400 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-16 sm:py-24">
        <div className="max-w-[1120px] mx-auto px-5">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold text-[#c9a84c] uppercase tracking-[0.15em] mb-3">О палате</p>
              <h2 className="text-[26px] sm:text-[32px] font-extrabold text-[#0f2b5b] leading-tight tracking-tight mb-5">
                Защита и развитие<br />бизнеса в Казахстане
              </h2>
              <p className="text-[14px] text-gray-500 leading-[1.7] mb-4">
                ПРБ «Самғау» — саморегулируемая организация, объединяющая предпринимателей для защиты их прав и законных интересов в органах государственной власти, судебных инстанциях и общественных объединениях.
              </p>
              <p className="text-[14px] text-gray-500 leading-[1.7]">
                Мы участвуем в выработке решений органов власти, разработке законодательных и нормативных актов, формируя благоприятные условия для предпринимательства по всей республике.
              </p>
            </div>
            <div className="lg:col-span-2 bg-[#f7f8fb] rounded-xl p-6 sm:p-8">
              <p className="text-[11px] font-semibold text-[#c9a84c] uppercase tracking-[0.15em] mb-3">Миссия</p>
              <p className="text-[14px] text-gray-600 leading-[1.7] mb-5">
                Формирование устойчивой основы для долгосрочного развития предпринимательства через инвестиционную и информационную деятельность.
              </p>
              <div className="space-y-2.5">
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
      <section id="directions" className="py-16 sm:py-24 bg-[#f7f8fb]">
        <div className="max-w-[1120px] mx-auto px-5">
          <div className="mb-10">
            <p className="text-[11px] font-semibold text-[#c9a84c] uppercase tracking-[0.15em] mb-3">Направления</p>
            <h2 className="text-[26px] sm:text-[32px] font-extrabold text-[#0f2b5b] leading-tight tracking-tight">
              Ключевые направления деятельности
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { num: "01", title: "Защита прав", desc: "Представление и защита прав членов в органах власти, судах и общественных организациях" },
              { num: "02", title: "Законодательные инициативы", desc: "Участие в разработке законов и нормативных актов, предложения по изменению законодательства" },
              { num: "03", title: "Арбитраж и медиация", desc: "Судебное и досудебное разрешение споров, включая арбитражное производство" },
              { num: "04", title: "Стандарты и контроль", desc: "Утверждение правил и стандартов, обязательных для членов палаты" },
              { num: "05", title: "Обучение и аттестация", desc: "Профессиональная учёба, аттестация и оценка соответствия деятельности" },
              { num: "06", title: "Взаимодействие с государством", desc: "Сотрудничество с НПП «Атамекен» и государственными органами" },
            ].map((d, i) => (
              <div key={i} className="bg-white rounded-lg p-5 border border-gray-100 hover:border-gray-200 transition-colors">
                <span className="text-[11px] font-bold text-[#c9a84c] tracking-wider">{d.num}</span>
                <h3 className="text-[14px] font-bold text-[#0f2b5b] mt-2 mb-1.5">{d.title}</h3>
                <p className="text-[13px] text-gray-400 leading-[1.6]">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MEMBERSHIP ===== */}
      <section id="membership" className="py-16 sm:py-24">
        <div className="max-w-[1120px] mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <p className="text-[11px] font-semibold text-[#c9a84c] uppercase tracking-[0.15em] mb-3">Членство</p>
              <h2 className="text-[26px] sm:text-[32px] font-extrabold text-[#0f2b5b] leading-tight tracking-tight mb-6">
                Преимущества членства
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Правовая защита", desc: "Представление интересов в государственных органах и судах" },
                  { title: "Влияние на законодательство", desc: "Участие в разработке законов, влияющих на вашу отрасль" },
                  { title: "Профессиональное развитие", desc: "Обучение, аттестация и повышение квалификации" },
                  { title: "Разрешение споров", desc: "Арбитраж и медиация для решения деловых конфликтов" },
                  { title: "Информационная поддержка", desc: "Актуальная информация от государственных органов" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3.5">
                    <span className="text-[12px] font-bold text-[#c9a84c] mt-0.5 w-5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h4 className="text-[14px] font-semibold text-[#0f2b5b] mb-0.5">{item.title}</h4>
                      <p className="text-[13px] text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0f2b5b] rounded-xl p-6 sm:p-8">
              <h3 className="text-[18px] font-bold text-white mb-2">Кто может вступить</h3>
              <p className="text-[13px] text-white/40 leading-[1.6] mb-5">
                Членами палаты могут стать предприниматели и организации, заинтересованные в развитии бизнес-среды Казахстана.
              </p>
              <div className="space-y-2.5 mb-6">
                {["Юридические лица", "Индивидуальные предприниматели", "Объединения предпринимателей"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-1 h-1 bg-[#c9a84c] rounded-full shrink-0" />
                    <span className="text-[13px] text-white/60">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-[12px] text-white/30 leading-[1.6]">
                Для вступления свяжитесь с нами через контактные данные ниже.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACTS ===== */}
      <section id="contacts" className="py-16 sm:py-24 bg-[#f7f8fb]">
        <div className="max-w-[1120px] mx-auto px-5">
          <div className="mb-10">
            <p className="text-[11px] font-semibold text-[#c9a84c] uppercase tracking-[0.15em] mb-3">Контакты</p>
            <h2 className="text-[26px] sm:text-[32px] font-extrabold text-[#0f2b5b] leading-tight tracking-tight">
              Свяжитесь с нами
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 max-w-[700px]">
            {[
              { label: "Адрес", value: "Казахстан" },
              { label: "Email", value: "info@samgau.kz" },
              { label: "Телефон", value: "Уточняется" },
            ].map((c, i) => (
              <div key={i} className="bg-white rounded-lg p-5 border border-gray-100">
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">{c.label}</p>
                <p className="text-[14px] font-medium text-[#0f2b5b]">{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#0f2b5b] py-6">
        <div className="max-w-[1120px] mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-white/10 rounded flex items-center justify-center">
              <span className="text-[#c9a84c] font-bold text-[9px]">С</span>
            </div>
            <span className="text-[12px] font-medium text-white/70">ПРБ «Самғау»</span>
          </div>
          <p className="text-[11px] text-white/25">© 2025 Палата Развития Бизнеса «Самғау». Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
