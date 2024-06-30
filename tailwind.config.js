/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        "./resources/**/*.vue",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#0DB1D5",

                    "primary-content": "#000616",

                    secondary: "#0080ff",

                    "secondary-content": "#000616",

                    accent: "#00b8ff",

                    "accent-content": "#000c16",

                    neutral: "#0c0806",

                    "neutral-content": "#c7c6c5",

                    "base-100": "#000000",

                    "base-200": "#0f202e",

                    "base-300": "#132636",

                    "base-content": "#cacfd3",

                    info: "#00ffff",

                    "info-content": "#001616",

                    success: "#00ff7b",

                    "success-content": "#001605",

                    warning: "#ff8200",

                    "warning-content": "#160600",

                    error: "#ff536b",

                    "error-content": "#160204",
                },
            },
        ],
    },
    plugins: [require("daisyui"), require("tailwindcss-animated")],
};
