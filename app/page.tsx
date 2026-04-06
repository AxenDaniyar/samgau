export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ===== HEADER ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0f2b5b] rounded-lg flex items-center justify-center">
              <span className="text-[#c9a84c] font-bold text-lg">С</span>
            </div>
            <div>
              <p className="text-sm font-bold text-[#0f2b5b] leading-tight tracking-tight">ПРБ «Самғау»</p>
              <p className="text-[10px] text-gray-400 leading-tight">Палата Развития Бизнеса</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm text-gray-600 hover:text-[#0f2b5b] transition-colors">О палате</a>
            <a href="#directions" className="text-sm text-gray-600 hover:text-[#0f2b5b] transition-colors">Направления</a>
            <a href="#membership" className="text-sm text-gray-600 hover:text-[#0f2b5b] transition-colors">Членство</a>
            <a href="#contacts" className="text-sm text-white bg-[#0f2b5b] hover:bg-[#1a3d7a] px-4 py-2 rounded-lg transition-colors">Связаться</a>
          </nav>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-gradient-to-br from-[#0f2b5b] via-[#162d54] to-[#0a1f3d] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#c9a84c] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-[150px]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 bg-[#c9a84c] rounded-full" />
              <span className="text-xs text-white/80">Республика Казахстан</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Палата Развития<br />
              Бизнеса <span className="text-[#c9a84c]">«Самғау»</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8 max-w-2xl">
              Формируем устойчивую институциональную основу для долгосрочного развития предпринимательства в Казахстане
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#membership" className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8963f] text-[#0f2b5b] font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
                Вступить в палату
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a href="#about" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm">
                Подробнее
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="relative -mt-12 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: "15+", label: "лет опыта" },
              { num: "500+", label: "членов палаты" },
              { num: "50+", label: "законодательных инициатив" },
              { num: "1000+", label: "решённых споров" },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg shadow-gray-200/50 border border-gray-100 p-6 text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#0f2b5b]">{s.num}</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-widest mb-3">О палате</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2b5b] mb-6 leading-tight">
                Защита и развитие бизнеса в Казахстане
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                ПРБ «Самғау» — саморегулируемая организация, объединяющая предпринимателей для защиты их прав и законных интересов в органах государственной власти, судебных инстанциях и общественных объединениях.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Мы участвуем в выработке решений органов власти, разработке законодательных и нормативных актов, формируя благоприятные условия для предпринимательства по всей республике.
              </p>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#0f2b5b]/5 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#0f2b5b]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <span className="text-sm text-gray-700">Официальный статус</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#0f2b5b]/5 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#0f2b5b]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
                  </div>
                  <span className="text-sm text-gray-700">Правовая защита</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#f8f9fc] to-[#eef1f8] rounded-2xl p-8 sm:p-10 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0f2b5b] mb-4">Наша миссия</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Формирование устойчивой институциональной основы для долгосрочного развития предпринимательства в Республике Казахстан через инвестиционную и информационную деятельность.
              </p>
              <div className="space-y-3">
                {["Представительство интересов бизнеса", "Развитие саморегулирования", "Повышение стандартов отрасли"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#c9a84c]/20 rounded flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-[#c9a84c]" fill="none" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DIRECTIONS ===== */}
      <section id="directions" className="py-20 sm:py-28 bg-[#f8f9fc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-widest mb-3">Направления</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2b5b] leading-tight">
              Ключевые направления деятельности
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>),
                title: "Защита прав",
                desc: "Представление и защита прав и законных интересов членов в органах власти, судебных инстанциях и общественных организациях"
              },
              {
                icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>),
                title: "Законодательные инициативы",
                desc: "Участие в разработке законов и нормативных актов, внесение предложений по изменению законодательства РК"
              },
              {
                icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>),
                title: "Арбитраж и медиация",
                desc: "Участие в судебном и досудебном разрешении споров, включая арбитражное производство"
              },
              {
                icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>),
                title: "Стандарты и контроль",
                desc: "Утверждение правил и стандартов, обязательных для членов палаты, контроль их соблюдения"
              },
              {
                icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>),
                title: "Обучение и аттестация",
                desc: "Организация профессиональной учёбы, аттестации и оценки соответствия деятельности работников"
              },
              {
                icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>),
                title: "Взаимодействие с государством",
                desc: "Сотрудничество с НПП «Атамекен», государственными органами и органами местного самоуправления"
              },
            ].map((d, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:shadow-gray-200/50 transition-all group">
                <div className="w-12 h-12 bg-[#0f2b5b]/5 group-hover:bg-[#c9a84c]/10 rounded-xl flex items-center justify-center text-[#0f2b5b] group-hover:text-[#c9a84c] transition-colors mb-4">
                  {d.icon}
                </div>
                <h3 className="text-base font-bold text-[#0f2b5b] mb-2">{d.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MEMBERSHIP ===== */}
      <section id="membership" className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-widest mb-3">Членство</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2b5b] mb-6 leading-tight">
                Преимущества членства в палате
              </h2>
              <div className="space-y-5">
                {[
                  { title: "Правовая защита", desc: "Представление ваших интересов в государственных органах и судах" },
                  { title: "Влияние на законодательство", desc: "Участие в разработке законов, влияющих на вашу отрасль" },
                  { title: "Профессиональное развитие", desc: "Доступ к обучению, аттестации и повышению квалификации" },
                  { title: "Разрешение споров", desc: "Арбитраж и медиация для быстрого решения деловых конфликтов" },
                  { title: "Информационная поддержка", desc: "Получение актуальной информации от государственных органов" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 bg-[#c9a84c]/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-sm font-bold text-[#c9a84c]">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0f2b5b] mb-0.5">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#0f2b5b] to-[#1a3d7a] rounded-2xl p-8 sm:p-10 text-white">
              <h3 className="text-xl font-bold mb-3">Готовы вступить?</h3>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                Подайте заявку на вступление в Палату Развития Бизнеса «Самғау» и получите доступ ко всем преимуществам членства.
              </p>
              <div className="space-y-4 mb-6">
                {["Юридические лица", "Индивидуальные предприниматели", "Объединения предпринимателей"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#c9a84c]/20 rounded flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-[#c9a84c]" fill="none" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>
              <a href="#contacts" className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8963f] text-[#0f2b5b] font-semibold px-6 py-3 rounded-lg transition-colors text-sm w-full justify-center">
                Подать заявку
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACTS ===== */}
      <section id="contacts" className="py-20 sm:py-28 bg-[#f8f9fc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-widest mb-3">Контакты</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2b5b] leading-tight">
              Свяжитесь с нами
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
              <div className="w-12 h-12 bg-[#0f2b5b]/5 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-[#0f2b5b]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <p className="text-xs font-semibold text-[#0f2b5b] mb-1">Адрес</p>
              <p className="text-sm text-gray-500">Казахстан</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
              <div className="w-12 h-12 bg-[#0f2b5b]/5 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-[#0f2b5b]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <p className="text-xs font-semibold text-[#0f2b5b] mb-1">Email</p>
              <p className="text-sm text-gray-500">info@samgau.kz</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
              <div className="w-12 h-12 bg-[#0f2b5b]/5 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-[#0f2b5b]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <p className="text-xs font-semibold text-[#0f2b5b] mb-1">Телефон</p>
              <p className="text-sm text-gray-500">Уточняется</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#0f2b5b] text-white py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-[#c9a84c] font-bold text-sm">С</span>
              </div>
              <span className="text-sm font-semibold">ПРБ «Самғау»</span>
            </div>
            <p className="text-xs text-white/40">© 2025 Палата Развития Бизнеса «Самғау». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
