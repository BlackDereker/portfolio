export type Locale = 'en' | 'pt';

export type DomainCategory =
  | 'all'
  | 'go'
  | 'python'
  | 'ai-ml'
  | 'cloud-finops'
  | 'distributed';

export interface DomainFilterItem {
  id: DomainCategory;
  label: Record<Locale, string>;
  count: number;
}

export interface CaseStudy {
  id: string;
  company: string;
  period: Record<Locale, string>;
  metricValue: string;
  metricLabel: Record<Locale, string>;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  architectureFlow: Record<Locale, string[]>;
  tags: string[];
  domains: DomainCategory[];
  accentColor: 'emerald' | 'cyan' | 'violet' | 'amber';
}

export interface ExperienceBullet {
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  highlightMetric?: string;
  domains: DomainCategory[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: Record<Locale, string>;
  period: Record<Locale, string>;
  location: Record<Locale, string>;
  workMode?: Record<Locale, string>;
  bullets: ExperienceBullet[];
  techStack: string[];
  domains: DomainCategory[];
}

export interface SkillGroup {
  id: string;
  category: Record<Locale, string>;
  domain: DomainCategory;
  skills: {
    name: string;
    detail?: Record<Locale, string>;
    primary?: boolean;
    domains: DomainCategory[];
  }[];
}

export interface EducationItem {
  degree: Record<Locale, string>;
  institution: string;
  period: string;
  focus?: Record<Locale, string>;
  badge: Record<Locale, string>;
}

export interface LanguageProficiency {
  language: Record<Locale, string>;
  level: Record<Locale, string>;
  detail?: Record<Locale, string>;
}

export const SITE_URL =
  import.meta.env?.PUBLIC_SITE_URL || 'https://brunagodoimachado.dev';

export const PROFILE = {
  name: 'Bruna Godoi Machado',
  headline: {
    en: 'Senior Software Engineer | Backend & Cloud Architecture | Go • Python • Applied AI/ML',
    pt: 'Engenheira de Software Sênior | Arquitetura Backend & Cloud | Go • Python • IA/ML Aplicada',
  },
  shortRole: {
    en: 'Senior Backend & Cloud Systems Architect',
    pt: 'Arquiteta Sênior de Sistemas Backend & Cloud',
  },
  location: {
    en: 'São Paulo, SP, Brazil',
    pt: 'São Paulo, SP, Brasil',
  },
  availability: {
    en: 'Available for Remote, Hybrid, and Relocation opportunities',
    pt: 'Disponível para oportunidades Remotas, Híbridas e Realocação',
  },
  email: 'bgodoimachado@gmail.com',
  phoneDisplay: '+55 (11) 95657-2790',
  phoneE164: '+5511956572790',
  whatsappUrl: 'https://wa.me/5511956572790',
  linkedinUrl: 'https://linkedin.com/in/brunagodoimachado',
  linkedinHandle: 'linkedin.com/in/brunagodoimachado',
  githubUrl: 'https://github.com/brunagodoimachado',
  githubHandle: 'github.com/brunagodoimachado',
  yearsExperience: '6+',
  summary: {
    en: [
      'Senior Software Engineer with 6+ years of experience architecting high-throughput, low-latency microservices, scalable cloud infrastructure (AWS/GCP), and production-grade AI/ML pipelines.',
      'Combines hands-on technical leadership with a strong FinOps discipline to optimize cloud costs and resolve complex performance bottlenecks—ranging from legacy analytical database migrations to training proprietary deep learning engines that eliminated recurring third-party vendor expenses. Highly proficient in Go (Golang), Python, distributed systems, and Platform Engineering.',
    ],
    pt: [
      'Engenheira de Software Sênior com mais de 6 anos de experiência arquitetando microsserviços de alta vazão e baixa latência, infraestrutura em nuvem escalável (AWS/GCP) e pipelines de IA/ML em nível de produção.',
      'Combina liderança técnica prática com forte disciplina de FinOps para otimizar custos de nuvem e resolver gargalos críticos de performance — desde migrações de bancos analíticos legados com zero downtime até o treinamento de motores proprietários de Deep Learning que eliminaram custos recorrentes com fornecedores terceirizados. Alta proficiência em Go (Golang), Python, sistemas distribuídos e Platform Engineering.',
    ],
  },
  seo: {
    en: {
      title:
        'Bruna Godoi Machado — Senior Software Engineer | Go, Python, Cloud & Applied AI/ML',
      description:
        'Senior Software Engineer with 6+ years architecting low-latency Go & Python microservices, AWS/GCP cloud infrastructure, AI FinOps ($24k+/yr saved), and production AI/ML pipelines in São Paulo, Brazil.',
    },
    pt: {
      title:
        'Bruna Godoi Machado — Engenheira de Software Sênior | Go, Python, Cloud & IA/ML',
      description:
        'Engenheira de Software Sênior com 6+ anos de experiência em microsserviços Go e Python de baixa latência, arquitetura Cloud (AWS/GCP), FinOps com IA e pipelines de IA/ML em produção.',
    },
  },
};

export const DOMAIN_FILTERS: DomainFilterItem[] = [
  {
    id: 'all',
    label: { en: 'All Systems', pt: 'Todos os Sistemas' },
    count: 5,
  },
  {
    id: 'go',
    label: { en: 'Go & High-Concurrency', pt: 'Go & Alta Concorrência' },
    count: 2,
  },
  {
    id: 'python',
    label: { en: 'Python & Core APIs', pt: 'Python & APIs Core' },
    count: 4,
  },
  {
    id: 'ai-ml',
    label: { en: 'Applied AI / Deep Learning', pt: 'IA Aplicada / Deep Learning' },
    count: 4,
  },
  {
    id: 'cloud-finops',
    label: { en: 'Cloud, FinOps & DevOps', pt: 'Cloud, FinOps & DevOps' },
    count: 5,
  },
  {
    id: 'distributed',
    label: { en: 'Distributed & Data Systems', pt: 'Sistemas Distribuídos & Dados' },
    count: 4,
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'finops-ai-auditor',
    company: 'Wildlife Studios',
    period: { en: '2025 – 2026', pt: '2025 – 2026' },
    metricValue: '$24,000+/yr',
    metricLabel: {
      en: 'Annualized Cloud Savings & 99.99% SLA',
      pt: 'Economia Anual Recorrente & 99.99% SLA',
    },
    title: {
      en: 'AI-Driven FinOps Auditing & Low-Latency Go Game Services',
      pt: 'Auditoria FinOps com IA & Microsserviços Go de Baixa Latência',
    },
    summary: {
      en: 'Engineered an automated AI auditing system across Databricks and Datadog telemetry alongside high-concurrency Go microservices serving global Unity game titles at 99.99% uptime.',
      pt: 'Desenvolveu um sistema automatizado de auditoria com IA integrando Databricks e Datadog, além de microsserviços em Go de alta concorrência integrados a SDKs Unity com 99.99% de disponibilidade.',
    },
    architectureFlow: {
      en: ['Unity SDKs / React IDP', 'Go gRPC/REST Services', 'Databricks + Datadog AI Auditor', '$24k+/yr Saved'],
      pt: ['Unity SDKs / React IDP', 'Serviços Go gRPC/REST', 'Auditor IA Databricks + Datadog', '$24k+/ano Poupados'],
    },
    tags: ['Go (Golang)', 'Databricks', 'Datadog', 'AI FinOps', 'React IDP', 'Unity SDK'],
    domains: ['go', 'ai-ml', 'cloud-finops', 'distributed'],
    accentColor: 'emerald',
  },
  {
    id: 'globo-adtech-async',
    company: 'Globo',
    period: { en: '2023 – 2025', pt: '2023 – 2025' },
    metricValue: '30s → <500ms',
    metricLabel: {
      en: '98.3% Latency Reduction + 95%+ AI Brand Safety',
      pt: 'Redução de 98.3% na Latência + 95%+ Brand Safety IA',
    },
    title: {
      en: 'Event-Driven AdTech Validation & Multimodal Gemini AI Moderation',
      pt: 'Validação AdTech Assíncrona & Moderação Multimodal com Gemini IA',
    },
    summary: {
      en: 'Refactored synchronous ad validation flows into an asynchronous event-driven pipeline processing millions of daily payloads, and integrated Google Gemini multimodal models to automate 95%+ of live broadcast brand safety.',
      pt: 'Refatorou fluxos síncronos de validação publicitária para arquitetura assíncrona orientada a eventos (milhões de payloads/dia) e integrou modelos multimodais Google Gemini automatizando 95%+ da moderação de marca.',
    },
    architectureFlow: {
      en: ['Live Broadcast Stream', 'Async Event Queue (<500ms)', 'Gemini Multimodal AI (95%+)', 'Google Ads API'],
      pt: ['Stream Ao Vivo', 'Fila Assíncrona (<500ms)', 'Gemini IA Multimodal (95%+)', 'Google Ads API'],
    },
    tags: ['Python', 'Google Gemini AI', 'Async Architecture', 'Google Ads API', 'High-Throughput'],
    domains: ['python', 'ai-ml', 'distributed'],
    accentColor: 'cyan',
  },
  {
    id: 'idwall-neural-engine',
    company: 'Idwall',
    period: { en: '2022 – 2023', pt: '2022 – 2023' },
    metricValue: '~95% Cost Cut',
    metricLabel: {
      en: '90%+ CNN/LSTM Accuracy & <10ms Entity Lookups',
      pt: '90%+ Acurácia CNN/LSTM & Consultas em <10ms',
    },
    title: {
      en: 'Proprietary Deep Learning CAPTCHA Engine & Zero-Downtime DB Migration',
      pt: 'Motor Deep Learning Proprietário & Migração de Banco Zero-Downtime',
    },
    summary: {
      en: 'Trained and deployed an in-house CNN + LSTM neural engine (Keras/TensorFlow) reaching 90%+ accuracy to eliminate ~95% of third-party API expenses, and migrated critical data from Databricks to PostgreSQL for <10ms real-time lookups.',
      pt: 'Treinou e implantou motor neural proprietário CNN + LSTM (Keras/TensorFlow) com 90%+ de acurácia eliminando ~95% dos gastos com APIs terceiras, além de migrar dados críticos do Databricks para PostgreSQL (<10ms).',
    },
    architectureFlow: {
      en: ['Identity Verification API', 'CNN + LSTM Neural Engine', 'Databricks → PostgreSQL', '<10ms Lookups'],
      pt: ['API Antifraude', 'Motor Neural CNN + LSTM', 'Databricks → PostgreSQL', 'Consultas <10ms'],
    },
    tags: ['Python', 'TensorFlow', 'Keras', 'CNN / LSTM', 'PostgreSQL', 'Databricks'],
    domains: ['python', 'ai-ml', 'cloud-finops', 'distributed'],
    accentColor: 'violet',
  },
  {
    id: 'mutant-cicd-nlp',
    company: 'Mutant & Globant',
    period: { en: '2020 – 2022', pt: '2020 – 2022' },
    metricValue: 'Hours → <15m',
    metricLabel: {
      en: 'Deployment Cycle Acceleration & >85% Test Coverage',
      pt: 'Ciclo de Deploy Acelerado & >85% Cobertura de Testes',
    },
    title: {
      en: 'Cloud-Native NLP TTS Orchestration & Automated CI/CD Pipelines',
      pt: 'Orquestração Cloud de Modelos NLP TTS & Automação de CI/CD',
    },
    summary: {
      en: 'Built containerized NLP models for Text-to-Speech (TTS) across AWS and Azure, engineered high-volume Python/TypeScript APIs, and standardized CI/CD workflows with >85% unit test coverage.',
      pt: 'Desenvolveu modelos de NLP para motores Text-to-Speech (TTS) em Docker na AWS e Azure, APIs de alto volume em Python/TypeScript e pipelines CI/CD com cobertura de testes acima de 85%.',
    },
    architectureFlow: {
      en: ['Python / TS Microservices', 'NLP TTS Docker Engine', 'Bitbucket CI/CD (>85% Cov)', 'AWS & Azure Cloud'],
      pt: ['Microsserviços Python / TS', 'Motor Docker NLP TTS', 'CI/CD Automatizado (>85%)', 'Cloud AWS & Azure'],
    },
    tags: ['Python', 'TypeScript', 'NLP / TTS', 'Docker', 'AWS & Azure', 'CI/CD'],
    domains: ['python', 'ai-ml', 'cloud-finops'],
    accentColor: 'amber',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'wildlife-studios',
    company: 'Wildlife Studios',
    role: {
      en: 'L4 Backend Engineer',
      pt: 'L4 Backend Engineer (Engenheira Backend Sênior)',
    },
    period: {
      en: 'September 2025 – June 2026',
      pt: 'Setembro 2025 – Junho 2026',
    },
    location: {
      en: 'São Paulo, Brazil',
      pt: 'São Paulo, Brasil',
    },
    workMode: {
      en: 'Remote / Hybrid',
      pt: 'Remoto / Híbrido',
    },
    bullets: [
      {
        title: {
          en: 'High-Concurrency Go Microservices',
          pt: 'Microsserviços Go de Alta Concorrência',
        },
        description: {
          en: 'Architected and maintained low-latency backend microservices in Go (Golang), integrating internal developer portals (React) and Unity SDKs for seamless client-to-cloud communication across global game titles.',
          pt: 'Arquitetou e manteve microsserviços backend de baixa latência em Go (Golang), integrando portais internos de desenvolvedores (React) e SDKs Unity para comunicação fluida cliente-nuvem em títulos globais de jogos.',
        },
        highlightMetric: 'Go + React IDP',
        domains: ['go', 'distributed'],
      },
      {
        title: {
          en: 'AI-Driven FinOps & Cost Optimization',
          pt: 'FinOps Orientado por IA & Otimização de Custos',
        },
        description: {
          en: 'Engineered an automated AI auditing system across Databricks and Datadog environments, uncovering compute redundancies and securing $24,000+/year in annualized recurring savings.',
          pt: 'Projetou um sistema automatizado de auditoria com IA nos ambientes Databricks e Datadog, identificando redundâncias computacionais e garantindo mais de US$ 24.000/ano em economia recorrente anualizada.',
        },
        highlightMetric: '$24,000+/year saved',
        domains: ['ai-ml', 'cloud-finops', 'distributed'],
      },
      {
        title: {
          en: 'Developer Experience (DX) & Reliability',
          pt: 'Developer Experience (DX) & Confiabilidade',
        },
        description: {
          en: 'Streamlined multi-studio developer workflows and reduced configuration friction in deployment pipelines, accelerating release velocity while maintaining a 99.99% service uptime SLA.',
          pt: 'Otimizou fluxos de trabalho de múltiplos estúdios e reduziu atritos de configuração em pipelines de deploy, acelerando a velocidade de entregas mantendo um SLA de disponibilidade de 99,99%.',
        },
        highlightMetric: '99.99% uptime SLA',
        domains: ['go', 'cloud-finops'],
      },
    ],
    techStack: [
      'Go (Golang)',
      'React',
      'Unity SDK',
      'Databricks',
      'Datadog',
      'AI FinOps',
      'Distributed Systems',
    ],
    domains: ['go', 'ai-ml', 'cloud-finops', 'distributed'],
  },
  {
    id: 'globo',
    company: 'Globo',
    role: {
      en: 'Senior Software Engineer',
      pt: 'Engenheira de Software Sênior',
    },
    period: {
      en: 'November 2023 – August 2025',
      pt: 'Novembro 2023 – Agosto 2025',
    },
    location: {
      en: 'São Paulo, Brazil',
      pt: 'São Paulo, Brasil',
    },
    bullets: [
      {
        title: {
          en: 'AdTech Architecture & High Throughput',
          pt: 'Arquitetura AdTech & Alta Vazão',
        },
        description: {
          en: "Architected and scaled high-traffic media ingestion and validation pipelines within Globo's AdTech ecosystem, processing millions of daily payloads under peak traffic.",
          pt: 'Arquitetou e escalou pipelines de ingestão e validação de mídia de alto tráfego no ecossistema AdTech da Globo, processando milhões de payloads diários sob tráfego de pico.',
        },
        highlightMetric: 'Millions of daily payloads',
        domains: ['python', 'distributed'],
      },
      {
        title: {
          en: 'Asynchronous Architecture',
          pt: 'Arquitetura Assíncrona Orientada a Eventos',
        },
        description: {
          en: 'Refactored synchronous ad validation flows into an event-driven asynchronous architecture, reducing validation latency from 30 seconds to under 500ms.',
          pt: 'Refatorou fluxos síncronos de validação de anúncios para uma arquitetura assíncrona orientada a eventos, reduzindo a latência de validação de 30 segundos para menos de 500ms.',
        },
        highlightMetric: '30s → <500ms latency',
        domains: ['python', 'distributed'],
      },
      {
        title: {
          en: 'Multimodal AI & Brand Safety',
          pt: 'IA Multimodal & Brand Safety',
        },
        description: {
          en: 'Integrated Google Gemini multimodal models into video and image ingestion pipelines, automating 95%+ of brand safety compliance moderation across streaming broadcasts.',
          pt: 'Integrou modelos multimodais Google Gemini em pipelines de ingestão de vídeo e imagem, automatizando 95%+ da moderação de conformidade e brand safety em transmissões de streaming.',
        },
        highlightMetric: '95%+ AI automation',
        domains: ['python', 'ai-ml'],
      },
      {
        title: {
          en: 'Real-Time Distribution',
          pt: 'Distribuição Programática em Tempo Real',
        },
        description: {
          en: 'Engineered high-availability distributed integrations linking live streaming infrastructure with the Google Ads API for real-time programmatic ad delivery.',
          pt: 'Desenvolveu integrações distribuídas de alta disponibilidade conectando a infraestrutura de live streaming à Google Ads API para entrega de anúncios programáticos em tempo real.',
        },
        highlightMetric: 'Real-time Google Ads API',
        domains: ['python', 'distributed', 'cloud-finops'],
      },
    ],
    techStack: [
      'Python',
      'Google Gemini AI',
      'Asynchronous Processing',
      'Google Ads API',
      'Distributed Systems',
    ],
    domains: ['python', 'ai-ml', 'distributed'],
  },
  {
    id: 'idwall',
    company: 'Idwall',
    role: {
      en: 'Software Engineer II',
      pt: 'Engenheira de Software II',
    },
    period: {
      en: 'April 2022 – October 2023',
      pt: 'Abril 2022 – Outubro 2023',
    },
    location: {
      en: 'São Paulo, Brazil',
      pt: 'São Paulo, Brasil',
    },
    bullets: [
      {
        title: {
          en: 'Proprietary Deep Learning Engine',
          pt: 'Motor Proprietário de Deep Learning',
        },
        description: {
          en: 'Engineered and deployed an in-house CAPTCHA-solving neural engine utilizing CNN and LSTM architectures (Keras/TensorFlow), reaching 90%+ accuracy and eliminating ~95% of third-party API expenses.',
          pt: 'Projetou e implantou um motor neural interno de resolução de CAPTCHAs utilizando arquiteturas CNN e LSTM (Keras/TensorFlow), atingindo 90%+ de acurácia e eliminando ~95% das despesas com APIs de terceiros.',
        },
        highlightMetric: '90%+ accuracy • ~95% cost cut',
        domains: ['python', 'ai-ml', 'cloud-finops'],
      },
      {
        title: {
          en: 'Zero-Downtime Database Migration',
          pt: 'Migração de Banco de Dados com Zero-Downtime',
        },
        description: {
          en: 'Led the end-to-end migration of critical user entity data from Databricks to PostgreSQL, resolving analytical query bottlenecks and enabling real-time lookups in <10ms.',
          pt: 'Liderou a migração ponta a ponta de dados críticos de entidades de usuários do Databricks para PostgreSQL, eliminando gargalos analíticos e habilitando consultas em tempo real em <10ms.',
        },
        highlightMetric: '<10ms real-time lookups',
        domains: ['python', 'distributed', 'cloud-finops'],
      },
      {
        title: {
          en: 'Anti-Fraud Backend Scalability',
          pt: 'Escalabilidade de Backend Antifraude',
        },
        description: {
          en: 'Optimized mission-critical Python microservices for digital identity verification and fraud prevention, ensuring high resilience during seasonal traffic spikes.',
          pt: 'Otimizou microsserviços Python de missão crítica para verificação de identidade digital e prevenção a fraudes, garantindo alta resiliência durante picos sazonais de tráfego.',
        },
        highlightMetric: 'High-resilience Identity API',
        domains: ['python', 'distributed'],
      },
    ],
    techStack: [
      'Python',
      'TensorFlow',
      'Keras',
      'CNN',
      'LSTM',
      'PostgreSQL',
      'Databricks',
      'Information Security',
    ],
    domains: ['python', 'ai-ml', 'cloud-finops', 'distributed'],
  },
  {
    id: 'globant',
    company: 'Globant',
    role: {
      en: 'Python Developer',
      pt: 'Desenvolvedora Python',
    },
    period: {
      en: 'October 2021 – April 2022',
      pt: 'Outubro 2021 – Abril 2022',
    },
    location: {
      en: 'São Paulo, Brazil',
      pt: 'São Paulo, Brasil',
    },
    bullets: [
      {
        title: {
          en: 'Enterprise Backend Engineering',
          pt: 'Engenharia Backend Enterprise',
        },
        description: {
          en: 'Built scalable microservices and RESTful APIs in Python for global tier-one clients following strict agile and clean-code engineering standards.',
          pt: 'Construiu microsserviços escaláveis e APIs RESTful em Python para clientes globais tier-one seguindo rigorosos padrões ágeis e de Clean Code.',
        },
        highlightMetric: 'Global Tier-1 APIs',
        domains: ['python', 'distributed'],
      },
      {
        title: {
          en: 'Quality Assurance & CI/CD',
          pt: 'Garantia de Qualidade & CI/CD',
        },
        description: {
          en: 'Standardized continuous integration workflows and automated test suites, maintaining unit test coverage above 85%.',
          pt: 'Padronizou fluxos de integração contínua e suítes de testes automatizados, mantendo cobertura de testes unitários acima de 85%.',
        },
        highlightMetric: '>85% unit test coverage',
        domains: ['python', 'cloud-finops'],
      },
    ],
    techStack: [
      'Python',
      'REST APIs',
      'Microservices',
      'Cloud',
      'CI/CD',
      'Unit Testing',
    ],
    domains: ['python', 'cloud-finops', 'distributed'],
  },
  {
    id: 'mutant',
    company: 'Mutant',
    role: {
      en: 'Software Developer (Promoted from Junior)',
      pt: 'Desenvolvedora de Software (Promovida de Júnior)',
    },
    period: {
      en: 'March 2020 – October 2021',
      pt: 'Março 2020 – Outubro 2021',
    },
    location: {
      en: 'São Paulo, Brazil',
      pt: 'São Paulo, Brasil',
    },
    bullets: [
      {
        title: {
          en: 'Scalable Web Services & APIs',
          pt: 'Serviços Web Escaláveis & APIs',
        },
        description: {
          en: 'Developed backend services and REST APIs in Python (Flask, Django, Falcon) and Node.js (TypeScript) connected to SQL and MongoDB for high-volume customer interaction platforms.',
          pt: 'Desenvolveu serviços backend e APIs REST em Python (Flask, Django, Falcon) e Node.js (TypeScript) conectados a SQL e MongoDB para plataformas de interação com clientes de alto volume.',
        },
        highlightMetric: 'High-volume REST APIs',
        domains: ['python', 'distributed'],
      },
      {
        title: {
          en: 'NLP Models & Cloud Orchestration',
          pt: 'Modelos NLP & Orquestração em Nuvem',
        },
        description: {
          en: 'Built Natural Language Processing (NLP) models for Text-to-Speech (TTS) engines, containerized with Docker and deployed across AWS and Azure cloud environments.',
          pt: 'Construiu modelos de Processamento de Linguagem Natural (NLP) para motores Text-to-Speech (TTS), containerizados com Docker e implantados em ambientes cloud AWS e Azure.',
        },
        highlightMetric: 'NLP TTS on AWS & Azure',
        domains: ['python', 'ai-ml', 'cloud-finops'],
      },
      {
        title: {
          en: 'Pipeline Automation',
          pt: 'Automação de Pipelines de Deploy',
        },
        description: {
          en: 'Automated deployment workflows via Bitbucket Pipelines, slashing deployment cycles from hours down to under 15 minutes.',
          pt: 'Automatizou fluxos de deploy via Bitbucket Pipelines, reduzindo ciclos de implantação de horas para menos de 15 minutos.',
        },
        highlightMetric: 'Hours → <15m deploys',
        domains: ['cloud-finops'],
      },
    ],
    techStack: [
      'Python',
      'Flask',
      'Django',
      'Node.js',
      'TypeScript',
      'AWS',
      'Azure',
      'Docker',
      'NLP',
    ],
    domains: ['python', 'ai-ml', 'cloud-finops', 'distributed'],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'languages',
    category: {
      en: 'Languages & Runtimes',
      pt: 'Linguagens & Runtimes',
    },
    domain: 'go',
    skills: [
      {
        name: 'Go (Golang)',
        detail: {
          en: 'High-concurrency microservices, gRPC & low-latency runtimes',
          pt: 'Microsserviços de alta concorrência, gRPC & baixa latência',
        },
        primary: true,
        domains: ['go', 'distributed'],
      },
      {
        name: 'Python',
        detail: {
          en: 'FastAPI, Django, Flask, Falcon, Asyncio & ML pipelines',
          pt: 'FastAPI, Django, Flask, Falcon, Asyncio & pipelines ML',
        },
        primary: true,
        domains: ['python', 'ai-ml'],
      },
      {
        name: 'TypeScript / JavaScript',
        detail: {
          en: 'Node.js APIs & React Internal Developer Portals',
          pt: 'APIs Node.js & Portais Internos de Desenvolvedores em React',
        },
        primary: true,
        domains: ['go', 'python'],
      },
      {
        name: 'SQL',
        detail: {
          en: 'Query optimization, indexing & analytical data modeling',
          pt: 'Otimização de queries, indexação & modelagem analítica',
        },
        domains: ['distributed'],
      },
    ],
  },
  {
    id: 'cloud-devops',
    category: {
      en: 'Cloud, DevOps & Observability',
      pt: 'Cloud, DevOps & Observabilidade',
    },
    domain: 'cloud-finops',
    skills: [
      {
        name: 'AWS (ECS, ECR, S3)',
        detail: {
          en: 'Production container orchestration & cloud-native storage',
          pt: 'Orquestração de containers em produção & storage cloud-native',
        },
        primary: true,
        domains: ['cloud-finops'],
      },
      {
        name: 'Google Cloud Platform (GCP)',
        detail: {
          en: 'Vertex/Gemini AI integrations & distributed cloud services',
          pt: 'Integrações Gemini AI & serviços distribuídos em nuvem',
        },
        primary: true,
        domains: ['cloud-finops', 'ai-ml'],
      },
      {
        name: 'Docker & Kubernetes',
        detail: {
          en: 'Containerized workloads, multi-stage builds & cluster scaling',
          pt: 'Workloads containerizados, builds multi-stage & escalabilidade',
        },
        primary: true,
        domains: ['cloud-finops', 'distributed'],
      },
      {
        name: 'Terraform & ArgoCD',
        detail: {
          en: 'Infrastructure as Code (IaC) & GitOps continuous delivery',
          pt: 'Infraestrutura como Código (IaC) & entrega contínua GitOps',
        },
        domains: ['cloud-finops'],
      },
      {
        name: 'Datadog & FinOps',
        detail: {
          en: 'APM telemetry, SLA monitoring (99.99%) & AI cost auditing',
          pt: 'Telemetria APM, monitoramento de SLA (99.99%) & auditoria FinOps',
        },
        primary: true,
        domains: ['cloud-finops', 'ai-ml'],
      },
      {
        name: 'CI/CD Pipelines',
        detail: {
          en: 'Automated test gates, Bitbucket Pipelines & fast release cycles',
          pt: 'Gates de teste automatizados, Bitbucket Pipelines & releases rápidos',
        },
        domains: ['cloud-finops'],
      },
    ],
  },
  {
    id: 'ai-ml',
    category: {
      en: 'AI & Machine Learning',
      pt: 'IA & Machine Learning',
    },
    domain: 'ai-ml',
    skills: [
      {
        name: 'LLMs (Google Gemini)',
        detail: {
          en: 'Multimodal video/image compliance moderation & AI agents',
          pt: 'Moderação multimodal de vídeo/imagem & agentes de IA',
        },
        primary: true,
        domains: ['ai-ml', 'python'],
      },
      {
        name: 'Deep Learning (CNN, LSTM, Transformers)',
        detail: {
          en: 'Proprietary neural engines with 90%+ production accuracy',
          pt: 'Motores neurais proprietários com 90%+ de acurácia em produção',
        },
        primary: true,
        domains: ['ai-ml', 'python'],
      },
      {
        name: 'PyTorch, TensorFlow & Keras',
        detail: {
          en: 'Model training, inference optimization & containerized serving',
          pt: 'Treinamento de modelos, otimização de inferência & deploy',
        },
        primary: true,
        domains: ['ai-ml', 'python'],
      },
      {
        name: 'Natural Language Processing (NLP)',
        detail: {
          en: 'Text-to-Speech (TTS) synthesis & semantic text pipelines',
          pt: 'Síntese Text-to-Speech (TTS) & pipelines semânticos de texto',
        },
        domains: ['ai-ml', 'python'],
      },
    ],
  },
  {
    id: 'databases-streaming',
    category: {
      en: 'Databases & Event Streaming',
      pt: 'Bancos de Dados & Streaming',
    },
    domain: 'distributed',
    skills: [
      {
        name: 'PostgreSQL & MySQL',
        detail: {
          en: 'Zero-downtime migrations & <10ms real-time entity lookups',
          pt: 'Migrações zero-downtime & consultas em tempo real (<10ms)',
        },
        primary: true,
        domains: ['distributed', 'python'],
      },
      {
        name: 'Apache Kafka & RabbitMQ',
        detail: {
          en: 'Event-driven asynchronous pipelines & high-throughput brokers',
          pt: 'Pipelines assíncronos orientados a eventos & alta vazão',
        },
        primary: true,
        domains: ['distributed', 'go', 'python'],
      },
      {
        name: 'Redis & MongoDB',
        detail: {
          en: 'Sub-millisecond caching layers & document data stores',
          pt: 'Camadas de cache sub-milissegundo & bancos orientados a documentos',
        },
        domains: ['distributed', 'python'],
      },
      {
        name: 'Databricks',
        detail: {
          en: 'Lakehouse analytics, compute auditing & ETL data pipelines',
          pt: 'Analytics Lakehouse, auditoria de computação & pipelines ETL',
        },
        primary: true,
        domains: ['distributed', 'cloud-finops', 'ai-ml'],
      },
    ],
  },
  {
    id: 'architecture',
    category: {
      en: 'Architecture & Platform Engineering',
      pt: 'Arquitetura & Platform Engineering',
    },
    domain: 'distributed',
    skills: [
      {
        name: 'High-Concurrency Microservices',
        detail: {
          en: 'Resilient distributed systems handling millions of daily payloads',
          pt: 'Sistemas distribuídos resilientes para milhões de payloads diários',
        },
        primary: true,
        domains: ['go', 'python', 'distributed'],
      },
      {
        name: 'REST & gRPC APIs',
        detail: {
          en: 'Schema-first service contracts & low-latency communication',
          pt: 'Contratos de serviço schema-first & comunicação de baixa latência',
        },
        primary: true,
        domains: ['go', 'python', 'distributed'],
      },
      {
        name: 'Platform Engineering (IDP w/ React)',
        detail: {
          en: 'Internal Developer Portals, self-service workflows & DX',
          pt: 'Portais Internos de Desenvolvedores (React), self-service & DX',
        },
        primary: true,
        domains: ['go', 'cloud-finops'],
      },
      {
        name: 'FinOps & Cloud Economics',
        detail: {
          en: 'Automated telemetry cost governance & resource right-sizing',
          pt: 'Governança automatizada de custos & dimensionamento de recursos',
        },
        primary: true,
        domains: ['cloud-finops'],
      },
      {
        name: 'Automated Testing (TDD / Unit)',
        detail: {
          en: 'Clean-code test suites maintaining >85% code coverage',
          pt: 'Suítes de testes Clean Code mantendo >85% de cobertura',
        },
        domains: ['python', 'go', 'cloud-finops'],
      },
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: {
      en: 'MBA in Software Engineering',
      pt: 'MBA em Engenharia de Software',
    },
    institution: 'USP / ESALQ',
    period: '2024 – 2026',
    focus: {
      en: 'Enterprise software architecture, technical governance, and distributed systems leadership.',
      pt: 'Arquitetura de software corporativo, governança técnica e liderança em sistemas distribuídos.',
    },
    badge: {
      en: 'Postgraduate MBA',
      pt: 'Pós-Graduação MBA',
    },
  },
  {
    degree: {
      en: 'Postgraduate Specialization in Artificial Intelligence',
      pt: 'Pós-Graduação Lato Sensu em Inteligência Artificial',
    },
    institution: 'Mackenzie Presbyterian University',
    period: '2022 – 2023',
    focus: {
      en: 'Deep Learning, Computer Vision, Neural Networks, and Applied Machine Learning.',
      pt: 'Deep Learning, Visão Computacional, Redes Neurais e Machine Learning Aplicado.',
    },
    badge: {
      en: 'AI Specialization',
      pt: 'Especialização em IA',
    },
  },
  {
    degree: {
      en: 'B.S. in Computer Science',
      pt: 'Bacharelado em Ciência da Computação',
    },
    institution: 'Mackenzie Presbyterian University',
    period: '2018 – 2021',
    badge: {
      en: 'Bachelor of Science',
      pt: 'Bacharelado',
    },
  },
];

export const LANGUAGES: LanguageProficiency[] = [
  {
    language: {
      en: 'Portuguese',
      pt: 'Português',
    },
    level: {
      en: 'Native',
      pt: 'Nativo',
    },
    detail: {
      en: 'Native speaker based in São Paulo, Brazil.',
      pt: 'Idioma nativo (São Paulo, Brasil).',
    },
  },
  {
    language: {
      en: 'English',
      pt: 'Inglês',
    },
    level: {
      en: 'Full Professional / Fluent',
      pt: 'Profissional Completo / Fluente',
    },
    detail: {
      en: 'Extensive experience collaborating in global engineering teams and authoring technical documentation.',
      pt: 'Ampla experiência colaborando em times globais de engenharia e redigindo documentação técnica.',
    },
  },
];

export const UI_STRINGS = {
  en: {
    nav: {
      impact: 'Impact & Case Studies',
      experience: 'Experience',
      skills: 'Tech Stack',
      education: 'Education',
      contact: 'Contact',
      downloadPdf: 'Resume PDF',
      printResume: 'Print / Save PDF',
    },
    hero: {
      statusBadge: 'Open to Remote, Hybrid & Relocation Opportunities',
      systemStatus: 'SYS.TELEMETRY // PRODUCTION-GRADE ARCHITECTURE',
      ctaPrimary: 'Explore Engineering Impact',
      ctaCopyEmail: 'Copy Email',
      ctaCopied: 'Email Copied!',
      ctaWhatsApp: 'WhatsApp',
      ctaResume: 'Download CV (PDF)',
      quickMetricsTitle: 'Verified Production Impact',
    },
    impact: {
      eyebrow: '01 // VERIFIED PRODUCTION METRICS',
      title: 'Engineering Impact & Case Studies',
      subtitle:
        'Quantifiable latency reductions, FinOps cloud savings, and proprietary neural engines delivered in high-scale production environments.',
      pipelineLabel: 'Architecture Pipeline',
    },
    explorer: {
      eyebrow: '02 // INTERACTIVE ARCHITECTURE EXPLORER',
      title: 'Professional Experience & Technical Matrix',
      subtitle:
        'Filter Bruna’s 6+ years of backend, cloud, and AI/ML engineering by domain to inspect matching production systems, achievements, and skills.',
      filterLabel: 'Filter by Engineering Domain:',
      showingAll: 'Showing all 5 roles & 23 core technologies',
      showingFiltered: 'Filtered by domain — highlighting matching roles & skills',
      resetFilter: 'Reset Filter',
      experienceHeading: 'Career Trajectory',
      skillsHeading: 'Technical Skills & Architecture Matrix',
      matchesBadge: 'domain match',
      techStackLabel: 'Tech Stack:',
    },
    education: {
      eyebrow: '03 // ACADEMIC FOUNDATION & LANGUAGES',
      title: 'Education, Specializations & Global Fluency',
      subtitle:
        'Academic specialization in Software Engineering (USP/ESALQ), Artificial Intelligence, and Computer Science (Mackenzie).',
      degreesHeading: 'Academic Credentials',
      languagesHeading: 'Languages & Global Collaboration',
    },
    contact: {
      eyebrow: '04 // DIRECT TRANSMISSION',
      title: 'Ready to Architect High-Scale Systems Together?',
      subtitle:
        'Available for Senior Backend, Cloud Architecture, Platform Engineering, and Applied AI/ML roles (Remote, Hybrid in São Paulo, or International Relocation).',
      copyEmailBtn: 'Copy bgodoimachado@gmail.com',
      copiedToast: 'Copied bgodoimachado@gmail.com to clipboard!',
      whatsappBtn: 'Message on WhatsApp',
      linkedinBtn: 'Connect on LinkedIn',
      githubBtn: 'View GitHub Profile',
      downloadBtn: 'Download Printable Resume',
    },
    footer: {
      builtWith:
        'Built with Astro 7.3 • Vite 8.3 (Rolldown) • React 19.3 Compiler • Tailwind CSS 4.3',
      rights: 'All rights reserved.',
    },
  },
  pt: {
    nav: {
      impact: 'Impacto & Cases',
      experience: 'Experiência',
      skills: 'Competências',
      education: 'Formação',
      contact: 'Contato',
      downloadPdf: 'Currículo PDF',
      printResume: 'Imprimir / Salvar PDF',
    },
    hero: {
      statusBadge: 'Disponível para Oportunidades Remotas, Híbridas e Realocação',
      systemStatus: 'SYS.TELEMETRIA // ARQUITETURA DE ALTA ESCALA',
      ctaPrimary: 'Explorar Impacto Técnico',
      ctaCopyEmail: 'Copiar E-mail',
      ctaCopied: 'E-mail Copiado!',
      ctaWhatsApp: 'WhatsApp',
      ctaResume: 'Baixar Currículo (PDF)',
      quickMetricsTitle: 'Impacto Verificado em Produção',
    },
    impact: {
      eyebrow: '01 // MÉTRICAS VERIFICADAS EM PRODUÇÃO',
      title: 'Impacto de Engenharia & Estudos de Caso',
      subtitle:
        'Reduções reais de latência, governança FinOps com IA e motores neurais proprietários entregues em ambientes críticos de alta escala.',
      pipelineLabel: 'Pipeline de Arquitetura',
    },
    explorer: {
      eyebrow: '02 // EXPLORADOR INTERATIVO DE ARQUITETURA',
      title: 'Experiência Profissional & Matriz Técnica',
      subtitle:
        'Filtre os 6+ anos de engenharia backend, cloud e IA/ML da Bruna por domínio para inspecionar sistemas, conquistas e tecnologias correspondentes.',
      filterLabel: 'Filtrar por Domínio de Engenharia:',
      showingAll: 'Exibindo todas as 5 experiências e 23 tecnologias principais',
      showingFiltered: 'Filtrado por domínio — destacando cargos e competências',
      resetFilter: 'Limpar Filtro',
      experienceHeading: 'Trajetória Profissional',
      skillsHeading: 'Competências Técnicas & Matriz de Arquitetura',
      matchesBadge: 'relevante ao filtro',
      techStackLabel: 'Tecnologias:',
    },
    education: {
      eyebrow: '03 // FORMAÇÃO ACADÊMICA & IDIOMAS',
      title: 'Educação, Especializações & Fluência Global',
      subtitle:
        'Especialização acadêmica em Engenharia de Software (USP/ESALQ), Inteligência Artificial e Ciência da Computação (Mackenzie).',
      degreesHeading: 'Credenciais Acadêmicas',
      languagesHeading: 'Idiomas & Colaboração Global',
    },
    contact: {
      eyebrow: '04 // CONTATO DIRETO',
      title: 'Vamos Arquitetar Sistemas de Alta Escala?',
      subtitle:
        'Disponível para posições de Engenharia de Software Sênior, Arquitetura Backend/Cloud, Platform Engineering e IA/ML Aplicada (Remoto, Híbrido em SP ou Realocação).',
      copyEmailBtn: 'Copiar bgodoimachado@gmail.com',
      copiedToast: 'bgodoimachado@gmail.com copiado para a área de transferência!',
      whatsappBtn: 'Conversar no WhatsApp',
      linkedinBtn: 'Conectar no LinkedIn',
      githubBtn: 'Ver Perfil no GitHub',
      downloadBtn: 'Baixar Currículo para Impressão',
    },
    footer: {
      builtWith:
        'Desenvolvido com Astro 7.3 • Vite 8.3 (Rolldown) • React 19.3 Compiler • Tailwind CSS 4.3',
      rights: 'Todos os direitos reservados.',
    },
  },
} as const;
