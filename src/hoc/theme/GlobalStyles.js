import { injectGlobal } from "styled-components";
import media from "./media";

injectGlobal`
    @font-face {
        font-family: 'Futura Bold Italic';
        src: url('assets/fonts/FuturaBoldItalic.ttf');
    }
    
    body {
        font-family: 'Futura Bold Italic', sans-serif;
    }
    
    `;
