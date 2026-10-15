import React, {
  useState,
  useEffect,
  startTransition,
  ViewTransition,
} from 'react';
import {
  PROFILE,
  DOMAIN_FILTERS,
  CASE_STUDIES,
  EXPERIENCES,
  SKILL_GROUPS,
  EDUCATION,
  LANGUAGES,
  type Locale,
  type DomainCategory,
} from '../data/portfolio';

interface PortfolioAppProps {
  initialLocale?: Locale;
}

const LABELS = {
  en: {
    sections: {
      summary: 'Profile',
      impact: 'Selected Impact',
      experience: 'Experience',
      skills: 'Technical Index',
      education: 'Education',
      languages: 'Languages',
    },
    ledger: {
      copy: 'Copy',
      copied: 'Copied',
      whatsapp: 'WhatsApp',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      resumePdf: 'Resume PDF',
      print: 'Print',
    },
    filter: {
      label: 'Filter dossier:',
      reset: 'Show all',
    },
    theme: {
      light: 'Light',
      dark: 'Dark',
    },
    footer: {
      colophon: 'São Paulo, Brazil — Available for Remote, Hybrid, and Relocation roles.',
    },
  },
  pt: {
    sections: {
      summary: 'Perfil',
      impact: 'Impacto em Produção',
      experience: 'Experiência',
      skills: 'Índice Técnico',
      education: 'Formação',
      languages: 'Idiomas',
    },
    ledger: {
      copy: 'Copiar',
      copied: 'Copiado',
      whatsapp: 'WhatsApp',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      resumePdf: 'Currículo PDF',
      print: 'Imprimir',
    },
    filter: {
      label: 'Filtrar dossiê:',
      reset: 'Ver todos',
    },
    theme: {
      light: 'Claro',
      dark: 'Escuro',
    },
    footer: {
      colophon: 'São Paulo, Brasil — Disponível para posições Remotas, Híbridas e Realocação.',
    },
  },
} as const;

export default function PortfolioApp({
  initialLocale = 'en',
}: PortfolioAppProps) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [activeDomain, setActiveDomain] = useState<DomainCategory>('all');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const switchLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    startTransition(() => {
      setLocale(nextLocale);
    });
    if (typeof window !== 'undefined') {
      document.documentElement.lang = nextLocale === 'pt' ? 'pt-BR' : 'en';
      const targetPath = nextLocale === 'pt' ? '/pt/' : '/';
      window.history.replaceState({}, '', targetPath);
    }
  };

  const handleDomainSelect = (domain: DomainCategory) => {
    startTransition(() => {
      setActiveDomain(domain);
    });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  const ui = LABELS[locale];

  return (
    <div className="min-h-screen selection:bg-[var(--ink-primary)] selection:text-[var(--bg-page)]">
      {/* =========================================================
          UNDERSTATED EDITORIAL MASTHEAD
      ========================================================= */}
      <header className="editorial-rule-b no-print">
        <div className="mx-auto max-w-5xl px-6 sm:px-10 h-14 flex items-center justify-between text-xs">
          <div className="flex items-center gap-3 text-[var(--ink-muted)]">
            <a
              href="#top"
              className="font-medium tracking-tight text-[var(--ink-primary)]"
            >
              {PROFILE.name}
            </a>
            <span aria-hidden="true">·</span>
            <span className="hidden sm:inline">{PROFILE.location[locale]}</span>
          </div>

          <div className="flex items-center gap-5 font-mono text-[11px] text-[var(--ink-muted)]">
            {/* Language Switcher */}
            <div role="group" aria-label="Language" className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => switchLocale('en')}
                aria-pressed={locale === 'en'}
                className={`cursor-pointer transition-colors ${
                  locale === 'en'
                    ? 'text-[var(--ink-primary)] font-semibold underline underline-offset-4'
                    : 'hover:text-[var(--ink-primary)]'
                }`}
              >
                EN
              </button>
              <span>/</span>
              <button
                type="button"
                onClick={() => switchLocale('pt')}
                aria-pressed={locale === 'pt'}
                className={`cursor-pointer transition-colors ${
                  locale === 'pt'
                    ? 'text-[var(--ink-primary)] font-semibold underline underline-offset-4'
                    : 'hover:text-[var(--ink-primary)]'
                }`}
              >
                PT
              </button>
            </div>

            <span aria-hidden="true" className="text-[var(--rule-color)]">|</span>

            {/* Theme Switcher */}
            <button
              type="button"
              onClick={toggleTheme}
              className="cursor-pointer hover:text-[var(--ink-primary)] transition-colors"
            >
              {theme === 'light' ? ui.theme.dark : ui.theme.light}
            </button>

            <span aria-hidden="true" className="text-[var(--rule-color)] hidden sm:inline">|</span>

            {/* Print Dossier */}
            <button
              type="button"
              onClick={() => window.print()}
              className="hidden sm:inline cursor-pointer hover:text-[var(--ink-primary)] transition-colors"
            >
              {ui.ledger.print}
            </button>
          </div>
        </div>
      </header>

      <ViewTransition>
        <main id="top" className="mx-auto max-w-5xl px-6 sm:px-10 pb-28">
          {/* =========================================================
              HERO & INLINE CONTACT LEDGER
          ========================================================= */}
          <section className="pt-14 sm:pt-20 pb-12 editorial-rule-b">
            <div className="max-w-3xl">
              <h1 className="font-editorial text-4xl sm:text-5xl md:text-[3.5rem] font-normal tracking-[-0.02em] leading-[1.08] text-[var(--ink-primary)]">
                {PROFILE.name}
              </h1>

              <p className="mt-3 text-base sm:text-lg font-medium text-[var(--ink-secondary)] tracking-[-0.01em]">
                {PROFILE.headline[locale]}
              </p>

              <p className="mt-1.5 text-xs sm:text-sm text-[var(--ink-muted)]">
                {PROFILE.location[locale]} — {PROFILE.availability[locale]}
              </p>
            </div>

            {/* Inline Contact Ledger */}
            <div className="mt-8 pt-5 editorial-rule-t flex flex-wrap items-center gap-x-5 gap-y-2.5 text-xs sm:text-[13px] font-mono text-[var(--ink-secondary)]">
              <div className="inline-flex items-center gap-2">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="editorial-link text-[var(--ink-primary)]"
                >
                  {PROFILE.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="no-print text-[11px] px-1.5 py-0.5 border border-[var(--rule-color)] hover:border-[var(--ink-primary)] text-[var(--ink-muted)] hover:text-[var(--ink-primary)] transition-colors cursor-pointer"
                >
                  {copiedEmail ? ui.ledger.copied : ui.ledger.copy}
                </button>
              </div>

              <span aria-hidden="true" className="text-[var(--ink-muted)]">·</span>

              <a
                href={PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link"
              >
                {PROFILE.phoneDisplay} ({ui.ledger.whatsapp} ↗)
              </a>

              <span aria-hidden="true" className="text-[var(--ink-muted)]">·</span>

              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link"
              >
                {ui.ledger.linkedin} ↗
              </a>

              <span aria-hidden="true" className="text-[var(--ink-muted)]">·</span>

              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link"
              >
                {ui.ledger.github} ↗
              </a>

              <span aria-hidden="true" className="text-[var(--ink-muted)] no-print">·</span>

              <a
                href="/Bruna_Godoi_Machado_Resume.pdf"
                download="Bruna_Godoi_Machado_Resume.pdf"
                className="editorial-link font-medium text-[var(--ink-primary)] no-print"
              >
                {ui.ledger.resumePdf} ↓
              </a>
            </div>
          </section>

          {/* =========================================================
              ROW 1: EXECUTIVE SUMMARY (ASYMMETRIC 2-COLUMN INDEX)
          ========================================================= */}
          <section
            aria-labelledby="summary-index"
            className="py-10 sm:py-12 editorial-rule-b grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
          >
            <div className="md:col-span-3">
              <h2
                id="summary-index"
                className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)]"
              >
                {ui.sections.summary}
              </h2>
            </div>

            <div className="md:col-span-9 space-y-4 text-[15px] sm:text-base leading-[1.7] text-[var(--ink-secondary)] max-w-[68ch]">
              {PROFILE.summary[locale].map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* =========================================================
              ROW 2: EDITORIAL KEY-FIGURES STRIP & CASE NOTES
          ========================================================= */}
          <section
            id="impact"
            aria-labelledby="impact-index"
            className="py-10 sm:py-12 editorial-rule-b grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
          >
            <div className="md:col-span-3">
              <h2
                id="impact-index"
                className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)]"
              >
                {ui.sections.impact}
              </h2>
            </div>

            <div className="md:col-span-9">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-x-6 lg:gap-x-0 lg:divide-x lg:divide-[var(--rule-color)]">
                {CASE_STUDIES.map((cs, index) => (
                  <div
                    key={cs.id}
                    className={`${
                      index > 0 ? 'lg:pl-6' : ''
                    } ${index < CASE_STUDIES.length - 1 ? 'lg:pr-6' : ''}`}
                  >
                    <div className="font-mono text-[11px] text-[var(--ink-muted)]">
                      {cs.company} · {cs.period[locale]}
                    </div>
                    <div className="font-editorial text-3xl sm:text-[2rem] font-normal tracking-tight text-[var(--ink-primary)] mt-1.5 leading-none">
                      {cs.metricValue}
                    </div>
                    <div className="text-xs font-medium text-[var(--ink-primary)] mt-2">
                      {cs.metricLabel[locale]}
                    </div>
                    <p className="text-xs leading-relaxed text-[var(--ink-muted)] mt-2">
                      {cs.summary[locale]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* =========================================================
              ROW 3: PROFESSIONAL EXPERIENCE (CHRONOLOGICAL DOSSIER)
          ========================================================= */}
          <section
            id="experience"
            aria-labelledby="experience-index"
            className="py-10 sm:py-12 editorial-rule-b grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
          >
            <div className="md:col-span-3">
              <div className="md:sticky md:top-10 space-y-4">
                <h2
                  id="experience-index"
                  className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)]"
                >
                  {ui.sections.experience}
                </h2>

                {/* Subtle Underline Domain Filter */}
                <div className="no-print pt-2">
                  <div className="text-[11px] font-mono text-[var(--ink-muted)] mb-2">
                    {ui.filter.label}
                  </div>
                  <div
                    role="toolbar"
                    aria-label="Filter experience by domain"
                    className="flex flex-wrap md:flex-col items-start gap-1.5 text-xs"
                  >
                    {DOMAIN_FILTERS.map((item) => {
                      const isActive = activeDomain === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleDomainSelect(item.id)}
                          aria-pressed={isActive}
                          className={`cursor-pointer text-left transition-colors py-0.5 ${
                            isActive
                              ? 'text-[var(--ink-primary)] font-medium underline underline-offset-4'
                              : 'text-[var(--ink-muted)] hover:text-[var(--ink-primary)]'
                          }`}
                        >
                          {item.label[locale]}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-9 divide-y divide-[var(--rule-color)]">
              {EXPERIENCES.map((exp, idx) => {
                const roleMatches =
                  activeDomain === 'all' || exp.domains.includes(activeDomain);

                return (
                  <article
                    key={exp.id}
                    className={`${
                      idx === 0 ? 'pb-9' : 'py-9'
                    } transition-opacity duration-200 ${
                      roleMatches ? 'opacity-100' : 'opacity-30'
                    }`}
                  >
                    {/* Header Row: Role, Company & Dates */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-4">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold tracking-tight text-[var(--ink-primary)]">
                          {exp.company}
                          <span className="font-normal text-[var(--ink-muted)] mx-2">
                            —
                          </span>
                          <span className="font-normal text-[var(--ink-secondary)]">
                            {exp.role[locale]}
                          </span>
                        </h3>
                      </div>

                      <div className="font-mono text-xs text-[var(--ink-muted)] shrink-0">
                        {exp.period[locale]}
                      </div>
                    </div>

                    <div className="text-xs text-[var(--ink-muted)] mb-4">
                      {exp.location[locale]}
                      {exp.workMode ? ` (${exp.workMode[locale]})` : ''}
                    </div>

                    {/* Narrative Bullet Points */}
                    <ul className="space-y-3 text-sm sm:text-[15px] leading-[1.65] text-[var(--ink-secondary)]">
                      {exp.bullets.map((bullet, bIdx) => {
                        const bulletMatches =
                          activeDomain === 'all' ||
                          bullet.domains.includes(activeDomain);

                        return (
                          <li
                            key={bIdx}
                            className={`pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[var(--ink-muted)] transition-opacity ${
                              bulletMatches ? 'opacity-100' : 'opacity-40'
                            }`}
                          >
                            <strong className="font-medium text-[var(--ink-primary)]">
                              {bullet.title[locale]}:
                            </strong>{' '}
                            {bullet.description[locale]}
                          </li>
                        );
                      })}
                    </ul>

                    {/* Understated Monospace Specification Line */}
                    <div className="mt-4 pt-3 text-xs font-mono text-[var(--ink-muted)]">
                      {exp.techStack.join(' · ')}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* =========================================================
              ROW 4: TECHNICAL SKILLS SPECIFICATION TABLE
          ========================================================= */}
          <section
            id="skills"
            aria-labelledby="skills-index"
            className="py-10 sm:py-12 editorial-rule-b grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
          >
            <div className="md:col-span-3">
              <h2
                id="skills-index"
                className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)]"
              >
                {ui.sections.skills}
              </h2>
            </div>

            <div className="md:col-span-9 divide-y divide-[var(--rule-color)]">
              {SKILL_GROUPS.map((group, idx) => {
                const groupMatches =
                  activeDomain === 'all' ||
                  group.skills.some((s) => s.domains.includes(activeDomain));

                return (
                  <div
                    key={group.id}
                    className={`${
                      idx === 0 ? 'pb-5' : 'py-5'
                    } grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline transition-opacity ${
                      groupMatches ? 'opacity-100' : 'opacity-35'
                    }`}
                  >
                    <h3 className="sm:col-span-4 text-xs sm:text-sm font-medium text-[var(--ink-primary)]">
                      {group.category[locale]}
                    </h3>

                    <div className="sm:col-span-8 text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed">
                      {group.skills.map((skill, sIdx) => {
                        const isMatch =
                          activeDomain !== 'all' &&
                          skill.domains.includes(activeDomain);

                        return (
                          <React.Fragment key={skill.name}>
                            <span
                              className={
                                isMatch
                                  ? 'text-[var(--ink-primary)] font-semibold underline decoration-[var(--ink-primary)] underline-offset-4'
                                  : ''
                              }
                            >
                              {skill.name}
                            </span>
                            {sIdx < group.skills.length - 1 && (
                              <span className="text-[var(--ink-muted)] mx-2">
                                ·
                              </span>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* =========================================================
              ROW 5: EDUCATION & SPECIALIZATIONS
          ========================================================= */}
          <section
            id="education"
            aria-labelledby="education-index"
            className="py-10 sm:py-12 editorial-rule-b grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
          >
            <div className="md:col-span-3">
              <h2
                id="education-index"
                className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)]"
              >
                {ui.sections.education}
              </h2>
            </div>

            <div className="md:col-span-9 divide-y divide-[var(--rule-color)]">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={edu.degree.en}
                  className={`${idx === 0 ? 'pb-5' : 'py-5'}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-sm sm:text-base font-medium text-[var(--ink-primary)]">
                      {edu.degree[locale]}
                      <span className="font-normal text-[var(--ink-muted)] mx-2">
                        —
                      </span>
                      <span className="font-normal text-[var(--ink-secondary)]">
                        {edu.institution}
                      </span>
                    </h3>

                    <span className="font-mono text-xs text-[var(--ink-muted)] shrink-0">
                      {edu.period}
                    </span>
                  </div>

                  {edu.focus && (
                    <p className="mt-1.5 text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed">
                      {edu.focus[locale]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* =========================================================
              ROW 6: LANGUAGES
          ========================================================= */}
          <section
            id="languages"
            aria-labelledby="languages-index"
            className="py-10 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
          >
            <div className="md:col-span-3">
              <h2
                id="languages-index"
                className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)]"
              >
                {ui.sections.languages}
              </h2>
            </div>

            <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {LANGUAGES.map((lang) => (
                <div key={lang.language.en}>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-sm sm:text-base font-medium text-[var(--ink-primary)]">
                      {lang.language[locale]}
                    </h3>
                    <span className="text-xs font-mono text-[var(--ink-muted)]">
                      — {lang.level[locale]}
                    </span>
                  </div>
                  {lang.detail && (
                    <p className="mt-1 text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed">
                      {lang.detail[locale]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </main>
      </ViewTransition>

      {/* =========================================================
          MINIMALIST COLOPHON FOOTER
      ========================================================= */}
      <footer className="editorial-rule-t py-10 text-xs text-[var(--ink-muted)] no-print">
        <div className="mx-auto max-w-5xl px-6 sm:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>{ui.footer.colophon}</div>
          <div className="font-mono text-[11px] flex items-center gap-4">
            <a href={`mailto:${PROFILE.email}`} className="editorial-link">
              {PROFILE.email}
            </a>
            <span>·</span>
            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
