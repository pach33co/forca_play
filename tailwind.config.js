const { styles } = require('./src/shared/styles/Styles');


/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all files that contain Nativewind classes.
    content: ["./src/**/*.{ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                background: styles.colors.background,
                paper: styles.colors.paper,
                text: styles.colors.text,
                primary: styles.colors.primary,
                alert: styles.colors.alert,
                primaryText: styles.colors.primaryText,
                correct: styles.colors.correct,
                wrong: styles.colors.wrong,
            },
            borderRadius: {
                sm: styles.corner.small,
                DEFAULT: styles.corner.normal,
                lg: styles.corner.large
            },
            fontFamily: {
                bold: styles.fonts.family.bold,
                regular: styles.fonts.family.regular,
                italic: styles.fonts.family.italic
            },
            fontSize: {
                sm: styles.fonts.sizes.small,
                base: styles.fonts.sizes.body,
                lg: styles.fonts.sizes.large,
                xl: styles.fonts.sizes.extraLarge
            }
        },
    },
    plugins: [],
}