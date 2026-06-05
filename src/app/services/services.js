export const services = [
  {
    id: 'social-media-management',
    slug: 'social-media-management',
    icon: 'Share2',
    title: 'Social Media Management',
    shortDesc: 'Full-service management of your Instagram, TikTok, LinkedIn & more.',
    description:
      'We handle everything — from content strategy and creation to scheduling, community management, and growth hacking. Your brand stays active and engaging 24/7.',
    features: ['Content Calendar', 'Daily Posting', 'Community Management', 'Analytics Reports'],
    color: 'from-blue-600 to-blue-400',
    // ── THEME for individual service page ──────────────────────────────────
    theme: {
      gradient: 'from-blue-900/60 via-dark-900 to-dark-900',
      accent: 'blue',
      glowColor: 'bg-blue-600/10',
      badgeText: 'text-blue-400',
      badgeBorder: 'border-blue-500/30',
      btnGradient: 'from-blue-600 to-blue-400',
      iconBg: 'bg-blue-600/10',
      iconText: 'text-blue-400',
      statColor: 'text-blue-400',
    },
    heroStats: [
      { value: '10x', label: 'Average Follower Growth' },
      { value: '8.4%', label: 'Avg Engagement Rate' },
      { value: '24/7', label: 'Account Monitoring' },
    ],
    // ── Detailed features with video placeholders ──────────────────────────
    detailedFeatures: [
      {
        title: 'Content Calendar',
        desc: 'We build a 30-day content calendar tailored to your brand — the right mix of educational, promotional, and entertaining posts strategically planned to maximize reach and engagement.',
        videoId: 'PLACEHOLDER', // ← Replace with your YouTube video ID
        videoTitle: 'How we build your Content Calendar',
        points: ['Monthly planning', 'Theme & campaign alignment', 'Trend integration', 'Approval workflow'],
      },
      {
        title: 'Daily Posting',
        desc: 'Consistent daily posts crafted with on-brand visuals, compelling captions, and platform-optimized formats. We handle everything from creation to scheduling and publishing.',
        videoId: 'PLACEHOLDER',
        videoTitle: 'Our daily posting workflow',
        points: ['Platform-native formats', 'Optimal timing', 'Hashtag strategy', 'Caption copywriting'],
      },
      {
        title: 'Community Management',
        desc: 'We monitor and engage with your audience daily — responding to comments, DMs, and mentions within hours. Building relationships that turn followers into loyal customers.',
        videoId: 'PLACEHOLDER',
        videoTitle: 'How we manage your community',
        points: ['Comment replies', 'DM management', 'Competitor monitoring', 'Brand sentiment tracking'],
      },
      {
        title: 'Analytics & Reporting',
        desc: 'Monthly deep-dive reports covering follower growth