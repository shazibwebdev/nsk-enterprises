// tailwind.config.js
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                text: 'var(--text-primary)',
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                accent: 'var(--accent)',
                error: 'var(--error)',
                textSecondary: 'var(--text-secondary)',
                surface: 'var(--surface)',
                border: 'var(--border)',
            },
        },
    },
    plugins: [],
};
