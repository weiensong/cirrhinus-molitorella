// ==UserScript==
// @name         bilibiliDarkTheme
// @namespace    https://github.com/touero/cirrhinus-molitorella
// @version      0.1
// @description  bilibili黑色主题
// @author       touero
// @match        *://*.bilibili.com/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function (window) {
  "use strict";
  function genThemeStyle() {
    const style = document.createElement("style");
    style.id = "ldlDarkStyle";

    style.innerHTML = `:root {
      --Ga0: #0d0d0e;
      --Ga0_s: #1e2022;
      --Ga0_t: #1e2022;
      --Ga1: #000000;
      --Ga1_s: #232527;
      --Ga1_t: #232527;
      --Ga1_e: #232527;
      --Ga2: #2f3134;
      --Ga2_t: #2f3134;
      --Ga3: #46494d;
      --Ga3_t: #46494d;
      --Ga4: #5e6267;
      --Ga4_t: #5e6267;
      --Ga5: #757a81;
      --Ga5_t: #757a81;
      --Ga6: #8b9097;
      --Ga6_t: #8b9097;
      --Ga7: #a2a7ae;
      --Ga7_t: #a2a7ae;
      --Ga8: #b9bdc2;
      --Ga8_t: #b9bdc2;
      --Ga9: #d0d3d7;
      --Ga9_t: #d0d3d7;
      --Ga10: #e7e9eb;
      --Ga10_t: #e7e9eb;
      --Ga11: #242628;
      --Ga12: #1f2022;
      --Wh0: #17181a;
      --Wh0_t: #17181a;
      --Ba0: #000000;
      --Ba0_s: #ffffff;
      --Ba0_t: #000000;
      --Pi0: #26161c;
      --Pi1: #2f1a22;
      --Pi2: #472030;
      --Pi3: #76304b;
      --Pi4: #a73e65;
      --Pi5: #d44e7d;
      --Pi5_t: #d44e7d;
      --Pi6: #dc6d94;
      --Pi7: #e38caa;
      --Pi8: #ebabc1;
      --Pi9: #f2cad8;
      --Pi10: #fae9ef;
      --Ma0: #261525;
      --Ma1: #2e182d;
      --Ma2: #461c43;
      --Ma3: #72296c;
      --Ma4: #a13396;
      --Ma5: #cb41bb;
      --Ma6: #d462c7;
      --Ma7: #dd83d3;
      --Ma8: #e6a4de;
      --Ma9: #efc5ea;
      --Ma10: #f8e6f6;
      --Re0: #261314;
      --Re1: #2e1617;
      --Re2: #471a1c;
      --Re3: #742728;
      --Re4: #a63131;
      --Re5: #d1403e;
      --Re6: #d9615f;
      --Re7: #e18281;
      --Re8: #e9a3a2;
      --Re9: #f1c5c4;
      --Re10: #f9e5e5;
      --Or0: #28180f;
      --Or1: #301b10;
      --Or2: #4a230e;
      --Or3: #783610;
      --Or4: #a9490d;
      --Or5: #d66011;
      --Or6: #dd7c3a;
      --Or7: #e49764;
      --Or8: #ebb38d;
      --Or9: #f2ceb6;
      --Or10: #faeadf;
      --Ye0: #2a1e0f;
      --Ye1: #342410;
      --Ye2: #4d300b;
      --Ye3: #7c4c08;
      --Ye4: #ad6800;
      --Ye5: #db8700;
      --Ye6: #e19c2c;
      --Ye7: #e7b158;
      --Ye8: #eec584;
      --Ye9: #f4dab1;
      --Ye10: #faefdd;
      --Ly0: #2a2310;
      --Ly1: #332a11;
      --Ly2: #49390c;
      --Ly3: #745909;
      --Ly4: #a27c00;
      --Ly5: #cca000;
      --Ly6: #d5b02c;
      --Ly7: #dec158;
      --Ly8: #e7d184;
      --Ly9: #efe2b1;
      --Ly10: #f8f2dd;
      --Lg0: #19220f;
      --Lg1: #1e2911;
      --Lg2: #273c0e;
      --Lg3: #3c600f;
      --Lg4: #50840b;
      --Lg5: #67a70e;
      --Lg6: #81b638;
      --Lg7: #9cc562;
      --Lg8: #b6d58b;
      --Lg9: #d0e4b5;
      --Lg10: #ebf3df;
      --Gr0: #102017;
      --Gr1: #11271b;
      --Gr2: #123923;
      --Gr3: #175c34;
      --Gr4: #198042;
      --Gr5: #1fa251;
      --Gr6: #46b26f;
      --Gr7: #6dc28d;
      --Gr8: #93d2ab;
      --Gr9: #bae2c9;
      --Gr10: #e1f3e8;
      --Cy0: #0c1f20;
      --Cy1: #0d2627;
      --Cy2: #093739;
      --Cy3: #085b5c;
      --Cy4: #028080;
      --Cy5: #03a29f;
      --Cy6: #2fb2b0;
      --Cy7: #5ac2c0;
      --Cy8: #86d2d1;
      --Cy9: #b2e2e1;
      --Cy10: #ddf3f3;
      --Lb0: #0a1b23;
      --Lb1: #0b202a;
      --Lb2: #082d40;
      --Lb3: #064a69;
      --Lb4: #006996;
      --Lb5: #0087bd;
      --Lb6: #2c9cc8;
      --Lb7: #58b1d4;
      --Lb8: #84c5df;
      --Lb9: #b1dbeb;
      --Lb10: #ddeff6;
      --Bl0: #151826;
      --Bl1: #181c2f;
      --Bl2: #1f2748;
      --Bl3: #2e3c76;
      --Bl4: #3b53a8;
      --Bl5: #4b6bd4;
      --Bl6: #6a85db;
      --Bl7: #899ee3;
      --Bl8: #a9b8ea;
      --Bl9: #c8d2f2;
      --Bl10: #e7ebf9;
      --Pu0: #1d1628;
      --Pu1: #221a31;
      --Pu2: #31214c;
      --Pu3: #4e317d;
      --Pu4: #6d3fb1;
      --Pu5: #8c50e0;
      --Pu6: #a06ee5;
      --Pu7: #b48deb;
      --Pu8: #c8abf0;
      --Pu9: #dbc9f5;
      --Pu10: #f0e8fb;
      --Br0: #211d1b;
      --Br1: #282320;
      --Br2: #382f2a;
      --Br3: #59483f;
      --Br4: #7a6154;
      --Br5: #9a7c6a;
      --Br6: #ac9384;
      --Br7: #bda99e;
      --Br8: #cebfb7;
      --Br9: #e0d7d1;
      --Br10: #f2eeeb;
      --Si0: #212325;
      --Si1: #27292c;
      --Si2: #36393f;
      --Si3: #535962;
      --Si4: #6f7987;
      --Si5: #8c99aa;
      --Si6: #a0abb9;
      --Si7: #b4bcc7;
      --Si8: #c8ced6;
      --Si9: #dce0e5;
      --Si10: #f0f2f4;
    }
    `;

    return style;
  }
    const head = document.head || document.getElementsByTagName("head")[0];
    const existingStyle = document.getElementById("ldlDarkStyle");

    if (existingStyle) {
        existingStyle.parentNode.removeChild(existingStyle);
    }

    head.appendChild(genThemeStyle());
})(window);
