import { injectGlobal } from "styled-components";
import media from "./media";

injectGlobal`
@font-face {
    font-family: 'Futura Bold Italic';
    src: url('fonts/FuturaBoldItalic.ttf') format('truetype');
}
    
    body {
        font-family: noto-sans;
        font-size: 13px;
        line-height: 1.42857143;
        color: #5e5e5e;
        background-color: #edecec;
        margin: 0;

        &:before{
            content: '';
            height: 265px;
            width: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background-color: black;
        }
    }

    #main {
        padding: 0 40px 30px 270px;
        position: relative;
        display: block;
    }
    
    `;
