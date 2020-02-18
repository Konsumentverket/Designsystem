
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
        "midDark": "#717171",
        "mid": "#757575",
        "midLight": "#D5D3D3",
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
        "isabelline": "#F2F0F0",
        "grayDark": "#565656",
        "grayMid": "#D5D3D3",
        "grayLight": "#CDD1D4",
        "darkGreen": "#007A3E",
        "ligthGreen": "#76b82a",
        "geranium": "#E7342B",
        "cyan": "#92DCFA",
    }
}

const eccTheme = {
    theme1: {
        "xDark": "#162259",
        "dark": "#00345c",
        "midDark": 'red',
        "mid": 'red',
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
        "midDark": "#717171",
        "mid": "#757575",
        "midLight": "#D5D3D3",
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
        "isabelline": "#F2F0F0",
        "grayDark": "#565656",
        "grayMid": "#D5D3D3",
        "grayLight": "#CDD1D4",
        "darkGreen": "#007A3E",
        "ligthGreen": "#76b82a",
        "geranium": "#E7342B",
        "cyan": "#92DCFA",
    }
}

const colors = process.env.THEME === 'ecc' ? eccTheme : defaultTheme

export { colors }