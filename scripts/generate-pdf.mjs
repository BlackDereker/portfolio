import fs from 'node:fs';
import path from 'node:path';

function escapePdfText(str) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)')
    .replace(/•/g, '-')
    .replace(/—/g, '--')
    .replace(/–/g, '-')
    .replace(/→/g, '->')
    .replace(/ã/g, 'a')
    .replace(/õ/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/é/g, 'e')
    .replace(/í/g, 'i')
    .replace(/ó/g, 'o')
    .replace(/ú/g, 'u')
    .replace(/á/g, 'a')
    .replace(/â/g, 'a')
    .replace(/ê/g, 'e');
}

const lines = [
  { text: 'BRUNA GODOI MACHADO', size: 16, bold: true, gap: 20 },
  { text: 'Senior Software Engineer | Backend & Cloud Architecture | Go - Python - Applied AI/ML', size: 10, bold: true, gap: 14 },
  { text: 'Sao Paulo, SP, Brazil (Available for Remote, Hybrid, and Relocation opportunities)', size: 9, bold: false, gap: 12 },
  { text: 'Email: bgodoimachado@gmail.com | Phone / WhatsApp: +55 (11) 95657-2790', size: 9, bold: false, gap: 12 },
  { text: 'Portfolio: brunagodoi.vercel.app | LinkedIn: linkedin.com/in/brunagodoimachado | GitHub: github.com/brunagodoimachado', size: 8.5, bold: false, gap: 18 },

  { text: 'PROFESSIONAL SUMMARY', size: 11, bold: true, gap: 14 },
  { text: 'Senior Software Engineer with 6+ years of experience architecting high-throughput, low-latency', size: 9, bold: false, gap: 11 },
  { text: 'microservices, scalable cloud infrastructure (AWS/GCP), and production-grade AI/ML pipelines.', size: 9, bold: false, gap: 11 },
  { text: 'Combines hands-on technical leadership with a strong FinOps discipline to optimize cloud costs and', size: 9, bold: false, gap: 11 },
  { text: 'resolve complex performance bottlenecks--ranging from legacy analytical database migrations to training', size: 9, bold: false, gap: 11 },
  { text: 'proprietary deep learning engines that eliminated recurring third-party vendor expenses.', size: 9, bold: false, gap: 16 },

  { text: 'TECHNICAL SKILLS', size: 11, bold: true, gap: 14 },
  { text: '- Languages: Go (Golang), Python (FastAPI, Django, Flask), TypeScript, JavaScript, SQL.', size: 9, bold: false, gap: 11 },
  { text: '- Cloud, DevOps & Observability: AWS (ECS, ECR, S3), GCP, Docker, Kubernetes, Terraform, ArgoCD, Datadog, CI/CD.', size: 9, bold: false, gap: 11 },
  { text: '- AI & Machine Learning: LLMs (Google Gemini), Deep Learning (CNN, LSTM, Transformers), NLP, PyTorch, TensorFlow, Keras.', size: 9, bold: false, gap: 11 },
  { text: '- Databases & Streaming: PostgreSQL, MySQL, MongoDB, Redis, Apache Kafka, RabbitMQ, Databricks.', size: 9, bold: false, gap: 11 },
  { text: '- Architecture & Engineering: High-Concurrency Microservices, REST & gRPC APIs, Platform Engineering (React), FinOps, TDD.', size: 9, bold: false, gap: 16 },

  { text: 'PROFESSIONAL EXPERIENCE', size: 11, bold: true, gap: 14 },
  { text: 'Wildlife Studios | L4 Backend Engineer (September 2025 - June 2026 | Sao Paulo, Brazil - Remote/Hybrid)', size: 9.5, bold: true, gap: 12 },
  { text: '- High-Concurrency Go Microservices: Low-latency Go services integrating React developer portals and Unity SDKs.', size: 8.5, bold: false, gap: 10.5 },
  { text: '- AI-Driven FinOps & Cost Optimization: Automated AI auditing across Databricks & Datadog ($24,000+/year saved).', size: 8.5, bold: false, gap: 10.5 },
  { text: '- Developer Experience (DX) & Reliability: Streamlined multi-studio deployment workflows with 99.99% uptime SLA.', size: 8.5, bold: false, gap: 13 },

  { text: 'Globo | Senior Software Engineer (November 2023 - August 2025 | Sao Paulo, Brazil)', size: 9.5, bold: true, gap: 12 },
  { text: '- AdTech Architecture & High Throughput: Scaled media ingestion & validation pipelines for millions of daily payloads.', size: 8.5, bold: false, gap: 10.5 },
  { text: '- Asynchronous Architecture: Refactored validation flows into event-driven async architecture (30s -> <500ms latency).', size: 8.5, bold: false, gap: 10.5 },
  { text: '- Multimodal AI & Brand Safety: Integrated Google Gemini multimodal models automating 95%+ of brand safety moderation.', size: 8.5, bold: false, gap: 10.5 },
  { text: '- Real-Time Distribution: High-availability distributed integrations linking live streaming with Google Ads API.', size: 8.5, bold: false, gap: 13 },

  { text: 'Idwall | Software Engineer II (April 2022 - October 2023 | Sao Paulo, Brazil)', size: 9.5, bold: true, gap: 12 },
  { text: '- Proprietary Deep Learning Engine: In-house CNN/LSTM CAPTCHA neural engine (90%+ accuracy, ~95% API cost cut).', size: 8.5, bold: false, gap: 10.5 },
  { text: '- Zero-Downtime Database Migration: Migrated critical user entity data from Databricks to PostgreSQL (<10ms lookups).', size: 8.5, bold: false, gap: 10.5 },
  { text: '- Anti-Fraud Backend Scalability: Optimized mission-critical Python microservices for digital identity verification.', size: 8.5, bold: false, gap: 13 },

  { text: 'Globant | Python Developer (October 2021 - April 2022 | Sao Paulo, Brazil)', size: 9.5, bold: true, gap: 12 },
  { text: '- Enterprise Backend Engineering & QA: Scalable Python microservices & CI/CD workflows (>85% unit test coverage).', size: 8.5, bold: false, gap: 13 },

  { text: 'Mutant | Software Developer (Promoted from Junior) (March 2020 - October 2021 | Sao Paulo, Brazil)', size: 9.5, bold: true, gap: 12 },
  { text: '- Scalable Web Services, NLP TTS Models (Docker/AWS/Azure) & Bitbucket CI/CD Automation (deploys from hours to <15m).', size: 8.5, bold: false, gap: 15 },

  { text: 'EDUCATION & LANGUAGES', size: 11, bold: true, gap: 13 },
  { text: '- MBA in Software Engineering | USP / ESALQ (2024 - 2026) - Enterprise Architecture & Distributed Systems', size: 8.5, bold: false, gap: 10.5 },
  { text: '- Postgraduate Specialization in Artificial Intelligence | Mackenzie Presbyterian University (2022 - 2023)', size: 8.5, bold: false, gap: 10.5 },
  { text: '- B.S. in Computer Science | Mackenzie Presbyterian University (2018 - 2021)', size: 8.5, bold: false, gap: 10.5 },
  { text: '- Languages: Portuguese (Native) | English (Full Professional / Fluent)', size: 8.5, bold: true, gap: 10.5 },
];

let y = 795;
const contentOps = ['BT'];
for (const line of lines) {
  const font = line.bold ? '/F2' : '/F1';
  contentOps.push(`${font} ${line.size} Tf`);
  contentOps.push(`1 0 0 1 42 ${y.toFixed(1)} Tm`);
  contentOps.push(`(${escapePdfText(line.text)}) Tj`);
  y -= line.gap;
}
contentOps.push('ET');
const streamContent = contentOps.join('\n');

const objects = [
  '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n',
  '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n',
  '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n',
  `4 0 obj\n<< /Length ${Buffer.byteLength(streamContent, 'utf8')} >>\nstream\n${streamContent}\nendstream\nendobj\n`,
  '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n',
  '6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n',
];

let pdf = '%PDF-1.4\n';
const offsets = [0];
for (const obj of objects) {
  offsets.push(Buffer.byteLength(pdf, 'utf8'));
  pdf += obj;
}
const xrefOffset = Buffer.byteLength(pdf, 'utf8');
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (let i = 1; i <= objects.length; i++) {
  pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

const outPath = path.resolve('public', 'Bruna_Godoi_Machado_Resume.pdf');
fs.writeFileSync(outPath, pdf, 'utf8');
console.log('Generated resume PDF at:', outPath);
