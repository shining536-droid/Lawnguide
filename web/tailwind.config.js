/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        navy: {
          50: '#f0f3f8',
          100: '#dce3ef',
          200: '#b8c7df',
          300: '#8da5c9',
          400: '#6383b3',
          500: '#3d5f96',
          600: '#2e4a78',
          700: '#1B2A4A',
          800: '#162240',
          900: '#111a33',
          950: '#0b1122',
        },
        // 2026-11 모바일 리디자인 토큰 (가이드/홈 카테고리 카드·헤더·하단 내비)
        brand: {
          navy: '#1B3155',
          accent: '#3165D8',
          surface: '#F7F9FC',
          line: '#E5EAF1',
          muted: '#5F6E82', // 제안값 #68778B 보다 한 단계 어둡게 — surface(#F7F9FC) 위 본문 4.5:1 AA 충족
        },
      },
    },
  },
  plugins: [],
};
