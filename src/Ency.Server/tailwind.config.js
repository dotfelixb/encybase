/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./Views/**/*.{html,cshtml}",
        "./Shared/**/*.{html,cshtml}",
        "./ViewComponents/**/*.{html,cshtml}",
        "./Areas/Admin/Views/**/*.{html,cshtml}",
        "../Ency.UIComponents/Views/Shared/**/*.{html,cshtml}",
        "../Ency.UIComponents/ViewComponents/**/*.{html,cshtml}"
    ],
    safelist: [
        "border-social-100",
        "border-social-200",
        "border-social-300",
        "border-social-400",
        "border-social-900",
        "border-transparent"
       ],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    'Segoe UI',
                    'Calibri',
                    'Helvetica',
                    ...defaultTheme.fontFamily.sans
                ],
            },
        },
        colors: {
            ...colors,
            "social": {
                100: "#637BAD", /** button*/
                200: "#EBEEF4", /** command bar*/
                300: "#D8DFEA", /** menu */
                400: "#EDEFF4", /** header */
                500: "#3B5998", /** app bar */
                600: "#F2F2F2", /** info */
                900: "#313d56", /** button border */
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}