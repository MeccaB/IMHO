import type { Config } from 'tailwindcss';
export default { content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'], theme: { extend: { colors: { ink:'#17212b', brand:'#e85d3f', cream:'#fffaf5', sage:'#dce9df' } } }, plugins: [] } satisfies Config;
