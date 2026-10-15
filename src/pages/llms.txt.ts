import type { APIRoute } from 'astro';
import {
  PROFILE,
  EXPERIENCES,
  SKILL_GROUPS,
  EDUCATION,
  LANGUAGES,
  SITE_URL,
} from '../data/portfolio';

export const GET: APIRoute = () => {
  const lines: string[] = [
    `# ${PROFILE.name}`,
    `> ${PROFILE.headline.en}`,
    '',
    `- **Location:** ${PROFILE.location.en} (${PROFILE.availability.en})`,
    `- **Email:** ${PROFILE.email}`,
    `- **Phone / WhatsApp:** ${PROFILE.phoneDisplay} (${PROFILE.whatsappUrl})`,
    `- **LinkedIn:** ${PROFILE.linkedinUrl}`,
    `- **GitHub:** ${PROFILE.githubUrl}`,
    `- **Canonical Website:** ${SITE_URL}`,
    '',
    '## Professional Summary',
    ...PROFILE.summary.en,
    '',
    '## Technical Skills',
    ...SKILL_GROUPS.map(
      (g) =>
        `- **${g.category.en}:** ${g.skills.map((s) => s.name).join(', ')}`
    ),
    '',
    '## Professional Experience',
    ...EXPERIENCES.flatMap((exp) => [
      `### ${exp.company} | ${exp.role.en}`,
      `*${exp.period.en} | ${exp.location.en}${exp.workMode ? ` (${exp.workMode.en})` : ''}*`,
      ...exp.bullets.map(
        (b) => `- **${b.title.en}:** ${b.description.en}`
      ),
      `- *Tech Stack:* ${exp.techStack.join(', ')}`,
      '',
    ]),
    '## Education & Specializations',
    ...EDUCATION.map(
      (edu) =>
        `- **${edu.degree.en}** | *${edu.institution}* (${edu.period})${
          edu.focus ? ` — Focus: ${edu.focus.en}` : ''
        }`
    ),
    '',
    '## Languages',
    ...LANGUAGES.map(
      (l) => `- **${l.language.en}:** ${l.level.en} — ${l.detail?.en || ''}`
    ),
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
