import { createGlobalStyle } from 'styled-components'


const size = {
    mobile: "425px",
    tablet: "768px",
    computer: "1024px"
}

export const device = {
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    computer: `(min-widtj: ${size.computer})`
}

const GlobalStyle= createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        background-color: rgb(255, 133, 133);
        color: white;
        font-family: "'Simplifica', "Ubuntu"";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: white;
        width: 100vw;
        height: 100vh;
        background-position: center;
        background-attatchment: scroll;
        background-color: rgb(20 30 34);
    }
    * {
        box-sizing: border-box;
    }
`;

const breakpoint = {
    mobile: "600px",
    tabletPortrait: "900px",
    tabletLandscape: "1200px",
    desktop: "1800px",
    desktopLarge: "2100px"
};
export const media = {
    mobile: `(max-width: ${breakpoint.mobile})`,
    tabletPortrait: `(min-width: ${breakpoint.mobile})`,
    tabletLandscape: `(min-width: ${breakpoint.portrait})`,
    desktop: `(min-width: ${breakpoint.desktop})`,
    desktopLarge: `(min-width: ${breakpoint.desktopLarge})`
}

export default GlobalStyle