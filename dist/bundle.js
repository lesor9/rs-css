(()=>{"use strict";var n={866:(n,r,e)=>{e.d(r,{Z:()=>i});var t=e(645),o=e.n(t)()((function(n){return n[1]}));o.push([n.id,"/*\n\nDracula Theme v1.2.0\n\nhttps://github.com/zenorocha/dracula-theme\n\nCopyright 2015, All rights reserved\n\nCode licensed under the MIT license\nhttp://zenorocha.mit-license.org\n\n@author Éverton Ribeiro <nuxlli@gmail.com>\n@author Zeno Rocha <hi@zenorocha.com>\n\n*/\n\n.css_game-html_editor_block .hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #282a36;\n}\n\n.css_game-html_editor_block .hljs-keyword,\n.css_game-html_editor_block .hljs-selector-tag,\n.css_game-html_editor_block .hljs-literal,\n.css_game-html_editor_block .hljs-section,\n.css_game-html_editor_block .hljs-link {\n  color: #8be9fd;\n}\n\n.css_game-html_editor_block .hljs-function .hljs-keyword {\n  color: #ff79c6;\n}\n\n.css_game-html_editor_block .hljs,\n.css_game-html_editor_block .hljs-subst {\n  color: #f8f8f2;\n}\n\n.css_game-html_editor_block .hljs-string,\n.css_game-html_editor_block .hljs-title,\n.css_game-html_editor_block .hljs-name,\n.css_game-html_editor_block .hljs-type,\n.css_game-html_editor_block .hljs-attribute,\n.css_game-html_editor_block .hljs-symbol,\n.css_game-html_editor_block .hljs-bullet,\n.css_game-html_editor_block .hljs-addition,\n.css_game-html_editor_block .hljs-variable,\n.css_game-html_editor_block .hljs-template-tag,\n.css_game-html_editor_block .hljs-template-variable {\n  color: #f1fa8c;\n}\n\n.css_game-html_editor_block .hljs-comment,\n.css_game-html_editor_block .hljs-quote,\n.css_game-html_editor_block .hljs-deletion,\n.css_game-html_editor_block .hljs-meta {\n  color: #6272a4;\n}\n\n.css_game-html_editor_block .hljs-keyword,\n.css_game-html_editor_block .hljs-selector-tag,\n.css_game-html_editor_block .hljs-literal,\n.css_game-html_editor_block .hljs-title,\n.css_game-html_editor_block .hljs-section,\n.css_game-html_editor_block .hljs-doctag,\n.css_game-html_editor_block .hljs-type,\n.css_game-html_editor_block .hljs-name,\n.css_game-html_editor_block .hljs-strong {\n  font-weight: bold;\n}\n\n.css_game-html_editor_block .hljs-emphasis {\n  font-style: italic;\n}",""]);const i=o},538:(n,r,e)=>{e.d(r,{Z:()=>i});var t=e(645),o=e.n(t)()((function(n){return n[1]}));o.push([n.id,'/* http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0-modified | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n\r\n/* make sure to set some focus styles for accessibility */\r\n:focus {\r\n    outline: 0;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\n\r\nbody {\r\n\tline-height: 1;\r\n}\r\n\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\n\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: \'\';\r\n\tcontent: none;\r\n}\r\n\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\ninput[type=search]::-webkit-search-cancel-button,\r\ninput[type=search]::-webkit-search-decoration,\r\ninput[type=search]::-webkit-search-results-button,\r\ninput[type=search]::-webkit-search-results-decoration {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n}\r\n\r\ninput[type=search] {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    -webkit-box-sizing: content-box;\r\n    -moz-box-sizing: content-box;\r\n    box-sizing: content-box;\r\n}\r\n\r\ntextarea {\r\n    overflow: auto;\r\n    vertical-align: top;\r\n    resize: vertical;\r\n}\r\n\r\n/**\r\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\r\n */\r\n\r\naudio,\r\ncanvas,\r\nvideo {\r\n    display: inline-block;\r\n    *display: inline;\r\n    *zoom: 1;\r\n    max-width: 100%;\r\n}\r\n\r\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\r\n\r\naudio:not([controls]) {\r\n    display: none;\r\n    height: 0;\r\n}\r\n\r\n/**\r\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\r\n * Known issue: no IE 6 support.\r\n */\r\n\r\n[hidden] {\r\n    display: none;\r\n}\r\n\r\n/**\r\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\r\n *    `em` units.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\r\n\r\nhtml {\r\n    font-size: 100%; /* 1 */\r\n    -webkit-text-size-adjust: 100%; /* 2 */\r\n    -ms-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/**\r\n * Address `outline` inconsistency between Chrome and other browsers.\r\n */\r\n\r\na:focus {\r\n    outline: thin dotted;\r\n}\r\n\r\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\r\n\r\na:active,\r\na:hover {\r\n    outline: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\r\n * 2. Improve image quality when scaled in IE 7.\r\n */\r\n\r\nimg {\r\n    border: 0; /* 1 */\r\n    -ms-interpolation-mode: bicubic; /* 2 */\r\n}\r\n\r\n/**\r\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\r\n */\r\n\r\nfigure {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Correct margin displayed oddly in IE 6/7.\r\n */\r\n\r\nform {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Define consistent border, margin, and padding.\r\n */\r\n\r\nfieldset {\r\n    border: 1px solid #c0c0c0;\r\n    margin: 0 2px;\r\n    padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n/**\r\n * 1. Correct color not being inherited in IE 6/7/8/9.\r\n * 2. Correct text not wrapping in Firefox 3.\r\n * 3. Correct alignment displayed oddly in IE 6/7.\r\n */\r\n\r\nlegend {\r\n    border: 0; /* 1 */\r\n    padding: 0;\r\n    white-space: normal; /* 2 */\r\n    *margin-left: -7px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Correct font size not being inherited in all browsers.\r\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\r\n *    and Chrome.\r\n * 3. Improve appearance and consistency in all browsers.\r\n */\r\n\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    font-size: 100%; /* 1 */\r\n    margin: 0; /* 2 */\r\n    vertical-align: baseline; /* 3 */\r\n    *vertical-align: middle; /* 3 */\r\n}\r\n\r\n/**\r\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\r\n\r\nbutton,\r\ninput {\r\n    line-height: normal;\r\n}\r\n\r\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\r\n * Correct `select` style inheritance in Firefox 4+ and Opera.\r\n */\r\n\r\nbutton,\r\nselect {\r\n    text-transform: none;\r\n}\r\n\r\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\r\n *    Known issue: inner spacing remains in IE 6.\r\n */\r\n\r\nbutton,\r\nhtml input[type="button"], /* 1 */\r\ninput[type="reset"],\r\ninput[type="submit"] {\r\n    -webkit-appearance: button; /* 2 */\r\n    cursor: pointer; /* 3 */\r\n    *overflow: visible;  /* 4 */\r\n}\r\n\r\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\r\n\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n    cursor: default;\r\n}\r\n\r\n/**\r\n * 1. Address box sizing set to content-box in IE 8/9.\r\n * 2. Remove excess padding in IE 8/9.\r\n * 3. Remove excess padding in IE 7.\r\n *    Known issue: excess padding remains in IE 6.\r\n */\r\n\r\ninput[type="checkbox"],\r\ninput[type="radio"] {\r\n    box-sizing: border-box; /* 1 */\r\n    padding: 0; /* 2 */\r\n    *height: 13px; /* 3 */\r\n    *width: 13px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\r\n\r\ninput[type="search"] {\r\n    -webkit-appearance: textfield; /* 1 */\r\n    -moz-box-sizing: content-box;\r\n    -webkit-box-sizing: content-box; /* 2 */\r\n    box-sizing: content-box;\r\n}\r\n\r\n/**\r\n * Remove inner padding and search cancel button in Safari 5 and Chrome\r\n * on OS X.\r\n */\r\n\r\ninput[type="search"]::-webkit-search-cancel-button,\r\ninput[type="search"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * Remove inner padding and border in Firefox 3+.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n    border: 0;\r\n    padding: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\r\n * 2. Improve readability and alignment in all browsers.\r\n */\r\n\r\ntextarea {\r\n    overflow: auto; /* 1 */\r\n    vertical-align: top; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove most spacing between table cells.\r\n */\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    color: #222;\r\n}\r\n\r\n\r\n::-moz-selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\n::selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\nimg {\r\n    vertical-align: middle;\r\n}\r\n\r\nfieldset {\r\n    border: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\ntextarea {\r\n    resize: vertical;\r\n}\r\n\r\n.chromeframe {\r\n    margin: 0.2em 0;\r\n    background: #ccc;\r\n    color: #000;\r\n    padding: 0.2em 0;\r\n}',""]);const i=o},402:(n,r,e)=>{e.d(r,{Z:()=>d});var t=e(645),o=e.n(t),i=e(667),a=e.n(i),s=e(527),l=o()((function(n){return n[1]})),c=a()(s.Z);l.push([n.id,"@font-face {\r\n    font-family: 'Mark';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    src: url("+c+") format(\"truetype\");\r\n}\r\n\r\n.body {\r\n    font-family: 'Mark';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    background-color: #08162B;\r\n    color: white;\r\n}\r\n\r\n.header {\r\n    padding: 51px 70px 30px 70px;\r\n}\r\n\r\n.header-content {\r\n    max-width: 1920px;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.header-logo_name {\r\n    margin-left: 10px;\r\n}\r\n\r\n.header-task {\r\n    font-family: \"Mark\";\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    font-size: 60px;\r\n    line-height: 91px;\r\n}\r\n\r\n.burger-wrapper {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    width: 152px;\r\n    z-index: 1000;\r\n}\r\n\r\n.burger-btn {\r\n    height: 48px;\r\n    width: 44px;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.burger-menu {\r\n    border-radius: 5px;\r\n    width: 44px;\r\n    height: 6px;\r\n    background: white;\r\n}\r\n\r\n.burger-menu::before,\r\n.burger-menu::after {\r\n    content: '';\r\n    position: absolute;\r\n    border-radius: 5px;\r\n    width: 44px;\r\n    height: 6px;\r\n    background: white;\r\n    transition: 0.5s;\r\n}\r\n\r\n.burger-menu::before {\r\n    transform: translateY(-15px);\r\n}\r\n\r\n.burger-menu::after {\r\n    transform: translateY(15px);\r\n}\r\n\r\n\r\n/* Animation */\r\n.burger-open .burger-menu {\r\n    background: transparent;\r\n}\r\n\r\n.burger-open .burger-menu::before {\r\n    transform: rotate(45deg);\r\n}\r\n\r\n.burger-open .burger-menu::after {\r\n    transform: rotate(-45deg);\r\n}\r\n\r\n.burger-list {\r\n    z-index: 800;\r\n    position: fixed;\r\n    top: 0;\r\n    right: -450px;\r\n    width: 450px;\r\n    height: 100%;\r\n    background-color: black;\r\n    transition: 1s;\r\n}\r\n\r\n.burger-open .burger-list {\r\n    right: 0px;\r\n}\r\n\r\n.burger-list__chooser {\r\n    font-size: 40px;\r\n    line-height: 51px;\r\n    padding: 68px 0px 19px 36px;\r\n}\r\n\r\n.burger-list__level {\r\n    font-size: 30px;\r\n    line-height: 38px;\r\n    padding-left: 77px;\r\n    /* margin-bottom: 18px; */\r\n    display: block;\r\n    background: transparent;\r\n    border: none;\r\n    color: white;\r\n    text-align: left;\r\n    width: 100%;\r\n}   \r\n\r\n.burger-list__level:hover {\r\n    background-color: rgb(45, 46, 49);\r\n}\r\n\r\n.burger-list__level_solved {\r\n    color: #00FF47;\r\n}\r\n\r\n.burger-list__level_solved-with-help {\r\n    color: #FFB801;\r\n}\r\n\r\n.burger-list__level-current_task {\r\n    background-color: rgb(29, 31, 61);\r\n    width: 100%;\r\n}\r\n\r\n.burger-list__level-current_task:hover {\r\n    background-color: rgb(26, 29, 77);\r\n}\r\n\r\n.resetButton {\r\n    font-size: 30px;\r\n    line-height: 38px;\r\n    padding-left: 60px;\r\n    background: transparent;\r\n    border: none;\r\n    color: white;\r\n    text-align: left;\r\n    width: 100%;\r\n    margin-top: 20px;\r\n}\r\n\r\n.resetButton:hover {\r\n    background-color: rgb(148, 48, 148);\r\n}\r\n\r\n.css-game-info {\r\n    display: flex;\r\n    max-width: 1302px;\r\n    width: 68%;\r\n    margin: 0 auto;\r\n    justify-content: space-between;\r\n}\r\n\r\n.css_game-cards {\r\n    width: 47%;\r\n    margin-bottom: 41px;\r\n    height: 170px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: .5s;\r\n    align-items: flex-end;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.css_game-task_description {\r\n    width: 47%;\r\n}\r\n\r\n.css_game-content {\r\n    margin: 0 auto;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    max-width: 1302px;\r\n    width: 68%;\r\n}\r\n.css_game-left_part {\r\n    width: 47%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.imgContent {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n\r\n.img-card {\r\n    margin: 5px;\r\n    padding: 5px;\r\n}\r\n\r\n.imgUnderline {\r\n    width: 100%;\r\n    height: 1px;\r\n    background: white;\r\n    margin: 0;\r\n    margin-top: 10px;\r\n}\r\n\r\n.css_game-css_editor_name {\r\n    height: 70px;\r\n    border-radius: 41px 41px 0 0;\r\n    background-color: #2B3544;\r\n    text-align: center;\r\n    line-height: 70px;\r\n    font-weight: 800;\r\n    font-size: 30px;\r\n    user-select: none;\r\n    position: relative;\r\n    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\r\n}\r\n\r\n.css_game-hint {\r\n    position: absolute;\r\n    right: 35px;\r\n    cursor: pointer;\r\n}\r\n\r\n.css_game-css_editor_block {\r\n    border-radius: 0 0 41px 41px;\r\n    background-color: #f0f0f0;\r\n    color: #444;\r\n    height: 450px;\r\n    width: 100%;\r\n    border: none;\r\n    padding: 0;\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n.css_game-textarea {\r\n    border: none;\r\n    padding: 8px;\r\n    padding-top: 15px;\r\n    \r\n}\r\n\r\n.css_editor__default-text {\r\n    padding-left: 9px;\r\n}\r\n\r\n.css_editor__default-text-text {\r\n    display: block;\r\n    padding-left: 30px;\r\n}\r\n\r\n.css_game-right_part {\r\n    width: 47%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.css_game-task_description {\r\n    margin-bottom: 41px;\r\n    height: 170px;\r\n    font-weight: 800;\r\n    font-size: 40px;\r\n    line-height: 51px;\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.css_game-html_editor_name {\r\n    height: 70px;\r\n    border-radius: 41px 41px 0 0;\r\n    background-color: #2B3544;\r\n    text-align: center;\r\n    line-height: 70px;\r\n    font-weight: 800;\r\n    font-size: 30px;\r\n    user-select: none;\r\n    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\r\n}\r\n\r\n.css_game-html_editor_block {\r\n    border-radius: 0 0 41px 41px;\r\n    background-color: #282a36;\r\n    height: 450px;\r\n    width: 100%;\r\n    border: none;\r\n    padding: 0;\r\n}\r\n\r\n.footer {\r\n    padding: 27px;\r\n    padding-top: 46px;\r\n    margin: 0 auto;\r\n    max-width: 1500px;\r\n    width: 80%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.footer__year {\r\n    font-weight: 800;\r\n    font-size: 30px;\r\n    line-height: 38px;\r\n    width: 129px;\r\n    text-align: right;\r\n    line-height: 49px;\r\n}\r\n\r\n.overlay {\r\n    display: none;\r\n    position: fixed;\r\n    z-index: 500;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background: rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.burger-open .overlay {\r\n    cursor: pointer;\r\n    display: block;\r\n}\r\n\r\n.wrongSelector {\r\n    animation: wrongAnswer 1s linear;\r\n}\r\n\r\n@keyframes wrongAnswer {\r\n    10% {\r\n        transform: translateX(10px) scaleX(0.98);\r\n    }\r\n    30% {\r\n        transform: translateX(-10px) scaleX(0.98);\r\n    }\r\n    50% {\r\n        transform: translateX(10px) scaleX(0.98);\r\n    }\r\n    70% {\r\n        transform: translateX(-10px) scaleX(0.98);\r\n    }\r\n    90% {\r\n        transform: translateX(10px) scaleX(0.98);\r\n    }\r\n}\r\n\r\n.target {\r\n    animation: target 1000ms ease infinite;\r\n}\r\n\r\n@keyframes target {\r\n    0% {\r\n        transform: scale(1.1, 0.9);\r\n    }\r\n    \r\n    20% {\r\n        transform: scale(0.85, 1.15);\r\n    }\r\n\r\n    70% {\r\n        transform: translateY(-0.5vmin);\r\n    }\r\n\r\n    100% {\r\n        transform: scale(1.1, 0.9);\r\n    }\r\n}\r\n\r\n.border {\r\n    animation: border 1000ms ease;\r\n}\r\n\r\n@keyframes border {\r\n    0% {\r\n        background-color: seagreen;\r\n        border-radius: 10%;\r\n    }\r\n\r\n    100% {\r\n        background-color: transparent;\r\n        border-radius: 10%;\r\n    }\r\n}\r\n\r\n.card-completed {\r\n    animation: spin 1s linear;\r\n}\r\n\r\n@keyframes spin {\r\n    100% {\r\n        transform:rotate(360deg);\r\n        width: 0;\r\n        height: 0;\r\n    }\r\n}\r\n\r\n.imageSelectedViaHTML {\r\n    background: beige;\r\n    border-radius: 10%;\r\n}\r\n\r\n.html > span {\r\n    line-height: 25px;\r\n}\r\n\r\n.htmlElemOver {\r\n    display: flex;\r\n    height: 25px;\r\n    line-height: 25px;\r\n    padding-left: 23px;\r\n}\r\n\r\n.htmlElemOver:hover,\r\n.htmlElemOver:hover > .hljs-tag > .hljs-name {\r\n    color: #214a97;\r\n    cursor: pointer;\r\n};\r\n\r\n@media (max-width: 950px) {\r\n    .css_game-task_description {\r\n        font-size: 32px;\r\n    }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n    .header {\r\n        padding: 51px 20px 30px 20px;\r\n    }\r\n\r\n    .header-task_number {\r\n        font-size: 40px;\r\n    }\r\n\r\n    .burger-list {\r\n        width: 400px;\r\n    }\r\n\r\n    .header-logo_name {\r\n        display: none;\r\n    }\r\n\r\n    .burger-wrapper {\r\n        width: 56px;\r\n    }\r\n\r\n    .css-game-info {\r\n        width: 90%;\r\n    }\r\n\r\n    .css_game-task_description {\r\n        font-size: 32px;\r\n    }\r\n    \r\n    .img-card {\r\n        width: 40%;\r\n    }\r\n\r\n    .css_game-content {\r\n        width: 90%;\r\n    }\r\n\r\n    .css_game-css_editor_name {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .css_game-html_editor_name {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .css_game-task_description {\r\n        font-size: 30px;\r\n    }\r\n}",""]);const d=l},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);t&&o[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),r.push(l))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},527:(n,r,e)=>{e.d(r,{Z:()=>t});const t=e.p+"assets/fonts/Mark-Regular.ttf"},379:(n,r,e)=>{var t,o=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),i=[];function a(n){for(var r=-1,e=0;e<i.length;e++)if(i[e].identifier===n){r=e;break}return r}function s(n,r){for(var e={},t=[],o=0;o<n.length;o++){var s=n[o],l=r.base?s[0]+r.base:s[0],c=e[l]||0,d="".concat(l," ").concat(c);e[l]=c+1;var m=a(d),u={css:s[1],media:s[2],sourceMap:s[3]};-1!==m?(i[m].references++,i[m].updater(u)):i.push({identifier:d,updater:p(u,r),references:1}),t.push(d)}return t}function l(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var i=e.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var c,d=(c=[],function(n,r){return c[n]=r,c.filter(Boolean).join("\n")});function m(n,r,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=d(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}function u(n,r,e){var t=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var g=null,h=0;function p(n,r){var e,t,o;if(r.singleton){var i=h++;e=g||(g=l(r)),t=m.bind(null,e,i,!1),o=m.bind(null,e,i,!0)}else e=l(r),t=u.bind(null,e,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=s(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var o=a(e[t]);i[o].references--}for(var l=s(n,r),c=0;c<e.length;c++){var d=a(e[c]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}e=l}}}}},r={};function e(t){if(r[t])return r[t].exports;var o=r[t]={id:t,exports:{}};return n[t](o,o.exports,e),o.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{var n=e(379),r=e.n(n),t=e(538);r()(t.Z,{insert:"head",singleton:!1}),t.Z.locals;var o=e(402);r()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var i=e(866);r()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;const a=[{level:1,name:"tag",elements:["dragon","wizard","castle"],description:"Choose a dragon",target:["dragon"],hint:"dragon"},{level:2,name:".class",elements:["princess","goblin","goblin"],description:"Save the princess from the goblins by killing them",target:["goblin"],hint:"123456789"},{level:3,name:"#id",elements:["unicorn","cyclops","king","king"],description:"Kill cyclop",target:["cyclops","king"],hint:"123456789"}],s=()=>{[...document.querySelectorAll(".burger-list__level")].forEach((n=>{n.classList.remove("burger-list__level_solved"),n.classList.remove("burger-list__level_solved-with-help"),n.classList.remove("burger-list__level-current_task")})),localStorage.clear(),h("reset"),document.body.classList.toggle("burger-open")},l=()=>{document.body.classList.toggle("burger-open")},c=n=>{document.querySelector(`[data-level="${n}"]`).classList.toggle("burger-list__level-current_task")},d=n=>{n.target.closest(".htmlElemOver");const r=(n=>{const r=n.target.closest(".htmlElemOver"),e=document.querySelector(".html").childNodes;let t=0;for(const n of e)if("DIV"===n.tagName){if(n===r)return t;t+=1}return null})(n);document.querySelector(".imgContent").childNodes[r].classList.add("imageSelectedViaHTML")},m=()=>{Array.from(document.querySelector(".imgContent").childNodes).forEach((n=>{n.classList.remove("imageSelectedViaHTML")}))};let u=!1;async function g(n){if(u)return;u=!0,document.querySelector(".css_game-hint").removeEventListener("click",(()=>g(n))),n=n.split("");const r=document.querySelector(".css");r.innerText="",await async function(n,r){for(let e=0;e<n.length;e++)await r(n[e])}(n,(async n=>{r.innerText+=n,await new Promise((n=>setTimeout(n,250)))})),(()=>{let n=localStorage.getItem("lastLevel");document.querySelector(`[data-level="${n}"]`).classList.add("burger-list__level_solved-with-help")})(),u=!1}const h=(n=!1)=>{n||(document.querySelector(".overlay").addEventListener("click",l),(()=>{const n=document.querySelector(".burger-list");a.forEach((r=>{const e=document.createElement("button");e.classList.add("burger-list__level"),e.setAttribute("data-level",r.level),e.innerHTML=`Level ${r.level}`,n.appendChild(e)}));const r=document.createElement("button");r.innerText="Reset progress",r.classList.add("resetButton"),r.addEventListener("click",s),n.appendChild(r)})());let r=localStorage.getItem("lastLevel");var e,t,o;if(r||(r=1,localStorage.setItem("lastLevel",1)),e=r,t=a.length,document.querySelector(".header-task_number").innerHTML=`Task ${e}/${t}`,(n=>{const r=document.querySelector(".css_game-cards");r.innerHTML="";const e=document.createElement("div");e.classList.add("imgContent"),n.elements.forEach((r=>{const t=document.createElement("img");t.src=`./assets/images/fairy_tale/${r}.png`,t.alt="img",t.style.width=80/n.elements.length+"%",t.classList.add("img-card"),t.setAttribute("data-tag",r),-1!==n.target.indexOf(r)&&t.classList.add("target"),e.appendChild(t)})),r.appendChild(e);const t=document.createElement("hr");t.classList.add("imgUnderline"),r.appendChild(t)})(a[r-1]),(n=>{const r=document.querySelector(".css_game-task_description");r.innerHTML="";const e=document.createElement("p");e.innerHTML=n.description,r.appendChild(e)})(a[r-1]),(n=>{const r=document.querySelector(".html");r.innerHTML="",r.innerText+="<fairytale>",n.elements.forEach((n=>{r.innerText+=`\t<${n}>`,r.innerText+=`</${n}>`})),r.innerText+="</fairytale>"})(a[r-1]),(n=>{const r=document.querySelector(".css_game-html_editor"),e=document.querySelector("fairytale");e&&e.remove();const t=document.createElement("fairytale");t.style.display="none",t.classList.add("pseudoCode"),n.elements.forEach((n=>{const r=document.createElement(n);t.appendChild(r)})),r.appendChild(t)})(a[r-1]),c(r),document.querySelector(".css").innerHTML="Type selector here..",o=a[r-1].hint,document.querySelector(".css_game-hint").addEventListener("click",(()=>g(o))),"right-selector"===n){const n=document.querySelector(".css");n.innerText="",n.focus()}const i=document.querySelector(".html");hljs.highlightBlock(i),(()=>{const n=document.querySelector(".html"),r=document.querySelectorAll(".hljs-tag");for(let e=1;e<r.length-1;e+=2){const t=document.createElement("div");t.appendChild(r[e]),t.appendChild(r[e+1]),t.classList.add("htmlElemOver"),t.addEventListener("mouseover",d),t.addEventListener("mouseout",m),n.appendChild(t)}n.appendChild(r[r.length-1])})()},p=()=>{document.querySelector(".imgContent").childNodes.forEach((n=>{n.classList.add("card-completed"),setTimeout((()=>{n.classList.remove("card-completed")}),1e3)}))},b=n=>{const r=n.target.getAttribute("data-level");c(Number(localStorage.getItem("lastLevel"))),localStorage.setItem("lastLevel",r),h("burger");const e=document.querySelector(".html");hljs.highlightBlock(e),l()};let f=!1;const x=n=>{document.querySelectorAll(".withSelector").forEach((n=>{n.remove()}));const r=document.createElement("style");if(r.classList.add("withSelector"),r.innerHTML=`fairytale ${n} { content: "marked"; }`,document.getElementsByTagName("head")[0].appendChild(r),(()=>{const n=document.querySelector("fairytale").childNodes,r=document.querySelector(".imgContent").childNodes;for(let e=0;e<n.length;e+=1)if('"marked"'===getComputedStyle(n[e]).content!==r[e].classList.contains("target"))return!1;return!0})()){const n=Number(localStorage.getItem("lastLevel"));if(document.querySelector(`[data-level="${n}"]`).classList.add("burger-list__level_solved"),(()=>{let n=!1;return document.querySelectorAll(".burger-list__level").forEach((r=>{const e=r.classList.contains("burger-list__level_solved"),t=r.classList.contains("burger-list__level_solved-with-help");!1===e&&!1===t&&(n=!0)})),!n})()&&!f)return f=!0,p(),void setTimeout((()=>{}),1e3);if(a.length!==n){e=Number(localStorage.getItem("lastLevel")),document.querySelector(`[data-level="${e}"]`).classList.toggle("burger-list__level-current_task"),localStorage.setItem("lastLevel",n+1),p(),setTimeout((()=>{h("right-selector")}),1e3);const r=document.querySelector(".html");hljs.highlightBlock(r)}}else(()=>{const n=document.querySelector("fairytale").childNodes,r=document.querySelector(".imgContent").childNodes;let e=!1;for(let t=0;t<r.length;t+=1)'"marked"'===getComputedStyle(n[t]).content&&(r[t].classList.add("border"),e=!0,setTimeout((()=>{r[t].classList.remove("border")}),1e3));if(!e){const n=document.querySelector(".imgContent");n.classList.add("wrongSelector"),setTimeout((()=>{n.classList.remove("wrongSelector")}),1e3)}})();var e},_=n=>{const r=n.target;hljs.highlightBlock(r),x(n.target.innerText)},y=n=>{const r=n.target;"Type selector here.."===r.innerText&&(r.innerText="")},v=n=>{const r=n.target;if("Enter"===n.key){_(n);const e=document.querySelector(".css_game-textarea");e.removeEventListener("blur",_),r.blur(),e.addEventListener("blur",_)}},k=()=>{document.body.classList.toggle("burger-open")};h(),(()=>{hljs.configure({languages:["css"]}),document.querySelector(".burger-btn").addEventListener("click",k);const n=document.querySelector(".css_game-textarea");n.addEventListener("click",y),n.addEventListener("blur",_),n.addEventListener("keypress",v)})(),document.querySelectorAll(".burger-list__level").forEach((n=>{n.addEventListener("click",b)}))})()})();