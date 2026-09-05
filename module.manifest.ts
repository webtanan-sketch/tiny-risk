export const moduleManifest = {
  id: 'tiny-risk',
  version: '0.1.0-foundation',
  name: { fa: 'مدیریت ریسک', en: 'Risk' },
  description: {
    fa: 'ثبت ریسک و ارزیابی احتمال × اثر با Heatmap مدیریتی.',
    en: 'Track risks with probability × impact scoring and a heatmap.',
  },
  icon: 'TriangleAlert',
  route: '/modules/risk',
  repository: 'https://github.com/webtanan-sketch/tiny-risk',
  category: 'insight',
  maturity: 'foundation',
  capabilities: {
    dashboardWidget: true,
    globalSearch: false,
    exportData: true,
    sharedPeople: true,
    sharedProjects: true,
    notifications: true,
  },
} as const;

export default moduleManifest;
