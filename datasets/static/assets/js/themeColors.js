const handleThemeUpdate = (cssVars) => {
    const root = document.querySelector(':root');
    const keys = Object.keys(cssVars);
    keys.forEach(key => {
        root.style.setProperty(key, cssVars[key]);
    });
}

function dynamicPrimaryColor(primaryColor) {
    'use strict'
    
    primaryColor.forEach((item) => {
        item.addEventListener('input', (e) => {
            const cssPropName = `--primary-${e.target.getAttribute('data-id')}`;
            const cssPropName1 = `--primary-${e.target.getAttribute('data-id1')}`;
            const cssPropName2 = `--primary-${e.target.getAttribute('data-id2')}`;
            handleThemeUpdate({
                [cssPropName]: e.target.value,
                // 95 is used as the opacity 0.95  
                [cssPropName1]: e.target.value + 95,
                [cssPropName2]: e.target.value,
            });
        });
    });
}

function dynamicPrimaryBackground(bgColor) {
    bgColor.forEach((item) => {
        item.addEventListener('input', (e) => {
            const cssPropName3 = `--dark-${e.target.getAttribute('data-id3')}`;
            const cssPropName4 = `--dark-${e.target.getAttribute('data-id4')}`;
            handleThemeUpdate({
                [cssPropName3]: e.target.value+ 'dd',
                [cssPropName4]: e.target.value,
            });
        });
    });
}

(function() {
    'use strict'

    // Light theme color picker 
    const dynamicPrimaryLight = document.querySelectorAll('input.color-primary-light');
    
    const dynamicBackground = document.querySelectorAll('input.background-primary-light');

    // themeSwitch(LightThemeSwitchers);
    dynamicPrimaryColor(dynamicPrimaryLight);
    dynamicPrimaryBackground(dynamicBackground);
    localStorageBackup();
        
})();

function localStorageBackup() {
    "use strict";

    // if there is a value stored, update color picker and background color
    // Used to retrive the data from local storage
    if (localStorage.azeaprimaryColor) {
        // document.getElementById('colorID').value = localStorage.azeaprimaryColor;
        document.querySelector('html').style.setProperty('--primary-bg-color', localStorage.azeaprimaryColor);
        document.querySelector('html').style.setProperty('--primary-bg-hover', localStorage.azeaprimaryHoverColor);
        document.querySelector('html').style.setProperty('--primary-bg-border', localStorage.azeaprimaryBorderColor);
    }

    if (localStorage.azeabgColor) {
        // document.getElementById('bgID').value = localStorage.azeabgColor;
        document.querySelector('html').style.setProperty('--dark-body', localStorage.azeabgColor);
        document.querySelector('html').style.setProperty('--dark-theme', localStorage.azeathemeColor);
        document.querySelector('body').classList.remove('light-mode');
        document.querySelector('body').classList.add('dark-mode');
    }

    if (localStorage.azealightMode) {
        document.querySelector('body')?.classList.add('light-mode');
        document.querySelector('body')?.classList.remove('dark-mode');
    }

    if (localStorage.azeadarkMode) {
        document.querySelector('body')?.classList.remove('light-mode');
        document.querySelector('body')?.classList.add('dark-mode');
        $('#myonoffswitch2').prop('checked', true);
        $('#myonoffswitch5').prop('checked', true);
        $('#myonoffswitch8').prop('checked', true);
    }

    if(localStorage.azeahorizontal){
        document.querySelector('body').classList.add('horizontal')
    }

    if(localStorage.azeahorizontalHover){
        document.querySelector('body').classList.add('horizontal-hover')
    }

    if(localStorage.azeartl){
        document.querySelector('body').classList.add('rtl');
    }

    if(localStorage.azeadefaultmenu){
        document.querySelector('body').classList.add('default-menu')
    }

    if(localStorage.azeaclosedmenu){
        document.querySelector('body').classList.add('closed-menu')
    }

    if(localStorage.azeaicontextmenu){
        document.querySelector('body').classList.add('icontext-menu')
    }

    if(localStorage.azeaiconoverlay){
        document.querySelector('body').classList.add('icon-overlay')
    }

    if(localStorage.azeahoversubmenu){
        document.querySelector('body').classList.add('hover-submenu')
    }

    if(localStorage.azeahoversubmenu1){
        document.querySelector('body').classList.add('hover-submenu1')
    }

    if(localStorage.azeadoublemenu){
        document.querySelector('body').classList.add('double-menu')
    }

    if(localStorage.azeadoublemenutabs){
        document.body.classList.add('double-menu-tabs')
    }

    if(localStorage.azeadefaultlogo){
        document.querySelector('body').classList.add('default-logo')
    }

    if(localStorage.azeacenterlogo){
        document.querySelector('body').classList.add('center-logo')
    }

    if(localStorage.azeaboxedwidth){
        document.querySelector('body').classList.add('layout-boxed')
        $("#myonoffswitch10").prop("checked", true);
    }

    if(localStorage.azeascrollable){
        document.querySelector('body').classList.add('scrollable-layout')
    }

    // MENUS

    // LIGHT MENU
    if (localStorage.azeaLightmenu) {
        document.querySelector("body")?.classList.add("light-menu");
    }

    // COLOR MENU
    if (localStorage.azeaColormenu) {
        document.querySelector("body")?.classList.add("color-menu");
    }

    // DARK MENU
    if (localStorage.azeaDarkmenu) {
        document.querySelector("body")?.classList.add("dark-menu");
    }

    // GRADIENT MENU
    if (localStorage.azeaGradientmenu) {
        document.querySelector("body")?.classList.add("gradient-menu");
    }

    // HEADERS

    // LIGHT HEADER
    if (localStorage.azeaLightheader) {
        document.querySelector("body")?.classList.add("light-header");
    }

    // COLOR HEADER
    if (localStorage.azeaColorheader) {
        document.querySelector("body")?.classList.add("color-header");
    }

    // DARK HEADER
    if (localStorage.azeaDarkheader) {
        document.querySelector("body")?.classList.add("dark-header");
    }

    // GRADIENT HEADER
    if (localStorage.azeaGradientheader) {
        document.querySelector("body")?.classList.add("gradient-header");
    }

}

// triggers on changing the color picker
function changePrimaryColor() {
    "use strict";

    var userColor = document.getElementById('colorID').value;
    localStorage.setItem('azeaprimaryColor', userColor);
    // to store value as opacity 0.95 we use 95
    localStorage.setItem('azeaprimaryHoverColor', userColor + 95);
    localStorage.setItem('azeaprimaryBorderColor', userColor);
    names()

}

function changeBackgroundColor() {

    var userColor = document.getElementById('bgID').value;
    localStorage.setItem('azeabgColor', userColor + 'dd');
    localStorage.setItem('azeathemeColor', userColor);
    names();

    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    $('#myonoffswitch2').prop('checked', true);
    $('#myonoffswitch5').prop('checked', true);
    $('#myonoffswitch8').prop('checked', true);

    localStorage.setItem("azeadarkMode", true);
}

// to check the value is hexa or not


const isValidHex = (hexValue) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue)

const getChunksFromString = (st, chunkSize) => st.match(new RegExp(`.{${chunkSize}}`, "g"))
// convert hex value to 256
const convertHexUnitTo256 = (hexStr) => parseInt(hexStr.repeat(2 / hexStr.length), 16)
// get alpha value is equla to 1 if there was no value is asigned to alpha in function
const getAlphafloat = (a, alpha) => {
    if (typeof a !== "undefined") { return a / 255 }
    if ((typeof alpha != "number") || alpha < 0 || alpha > 1) {
        return 1
    }
    return alpha
}
// convertion of hex code to rgba code 
function hexToRgba(hexValue, alpha) {
    if (!isValidHex(hexValue)) { return null }
    const chunkSize = Math.floor((hexValue.length - 1) / 3)
    const hexArr = getChunksFromString(hexValue.slice(1), chunkSize)
    const [r, g, b, a] = hexArr.map(convertHexUnitTo256)
    return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)})`
}


let myVarVal, myVarVal1, myVarVal2, myVarVal3

function names() {
    "use strict";

    let primaryColorVal = getComputedStyle(document.documentElement).getPropertyValue('--primary-bg-color').trim();

    //get variable
    myVarVal = localStorage.getItem("azeaprimaryColor") || localStorage.getItem("azeadarkPrimary") || localStorage.getItem("azeatransparentPrimary") || localStorage.getItem("azeatransparentBgImgPrimary") || primaryColorVal;

    if (document.querySelector('#statistics') !== null) {
        sales();
    }

    let colorData = hexToRgba(myVarVal || primaryColorVal, 0.1)
    document.querySelector('html').style.setProperty('--primary01', colorData);

    let colorData1 = hexToRgba(myVarVal || primaryColorVal, 0.2)
    document.querySelector('html').style.setProperty('--primary02', colorData1);

    let colorData2 = hexToRgba(myVarVal || primaryColorVal, 0.3)
    document.querySelector('html').style.setProperty('--primary03', colorData2);

    let colorData3 = hexToRgba(myVarVal || primaryColorVal, 0.4)
    document.querySelector('html').style.setProperty('--primary04', colorData3);

    let colorData4 = hexToRgba(myVarVal || primaryColorVal, 0.5)
    document.querySelector('html').style.setProperty('--primary05', colorData4);

    let colorData5 = hexToRgba(myVarVal || primaryColorVal, 0.6)
    document.querySelector('html').style.setProperty('--primary06', colorData5);

    let colorData6 = hexToRgba(myVarVal || primaryColorVal, 0.7)
    document.querySelector('html').style.setProperty('--primary07', colorData6);

    let colorData7 = hexToRgba(myVarVal || primaryColorVal, 0.8)
    document.querySelector('html').style.setProperty('--primary08', colorData7);

    let colorData8 = hexToRgba(myVarVal || primaryColorVal, 0.9)
    document.querySelector('html').style.setProperty('--primary09', colorData8);

}
names()
