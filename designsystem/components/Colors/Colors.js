
const defaultTheme = {
    theme1: {
        "xDark": "#162259",
        "dark": "#00345c",
        "midDark": "#00518f",
        "mid": "#0061c2",
        "midLight": "#ddf1fd",
        "light": "#ebf6fd",
        "xLight": "#ebf6fd"
    },
    theme2: {
        "xDark": "#8C002D",
        "dark": "#8C002D",
        "midDark": "#A10042",
        "mid": "#B50156",
        "midLight": "#B50156",
        "light": "#F6E1EB",
        "xLight": "#F6E1EB"
    },
    theme3: {
        "xDark": "#161616",
        "dark": "#4D4D4D",
        "midDark": "#6B6B6B",
        "mid": "#6B6B6B",
        "midLight": "#D0D0D0",
        "light": "#D0D0D0",
        "xLight": "#F2F0F0"
    },
    states: {
        "visited": "#800080",
        "visitedInverted": "#FFC7C2",
        "focus": "#F59C00"
    },
    common: {
        "white": "#ffffff",
        "black": "#000000",
        "warning": "#E7342B",
        "success": "#007A3E",
        "cyan": "#92DCFA"
    }
}

const eccTheme = {
    theme1: {
        "dark": "#4663a9",
        "xDark": "#4663a9",
        "midDark": "#4663a9",
        "xDark": "#1C2742",
        "midDark": "#314575",
        "mid": "#4663a9",
        "midLight": "#eaeae9",
    },
    theme2: {
        "light": "#d7e6ed"
    },
    theme3: {
        "xLight": "#d7e6ed"
    }
}

const colors = process.env.THEME === 'ecc'
    ? Object.assign({}, defaultTheme, eccTheme)
    : defaultTheme


export { colors }