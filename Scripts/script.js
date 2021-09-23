const navMenuVisible = function(visible){
    const getNavMenu = document.querySelector('.menu-list');
    const getButtons = document.querySelectorAll('button');
    if (visible){
        getNavMenu.style.height = "280px";
        getNavMenu.style.visibility = "visible";
        getNavMenu.style.opacity = "1";
        for(let i = 0; i < getButtons.length; i++){
            getButtons[i].style.height = "100%";
            getButtons[i].style.visibility = "visible";
            getButtons[i].style.opacity = "1";
            getButtons[i].style.transitionDuration = "0.75s";
        };
    } else {
        for(let i = 0; i < getButtons.length; i++){
            getButtons[i].style.visibility = "hidden";
            getButtons[i].style.height = "0";
            getButtons[i].style.opacity = "0";
            getButtons[i].style.transitionDuration = "0.1s";
        };
        getNavMenu.style.height = "0";
        getNavMenu.style.visibility = "hidden";
        getNavMenu.style.opacity = "0";
    }
};

const toggleNavMenu = function(){
    const getNavMenu = document.querySelector('.menu-list');
    const getButtons = document.querySelectorAll('button');
    if(getNavMenu.style.visibility != "visible"){
        navMenuVisible(true);
    } else {
        navMenuVisible(false);
    };
};

const toggleBodyColor = function(color){
    const getBodyColor = document.querySelector('color');
    const getBackgroundBodyColor = document.querySelector('body');
    getBodyColor.innerHTML = color;
    getBackgroundBodyColor.classList = (color);
};

let mouseOverMenuButton = document.querySelector('.btn-toggle-nav-menu');
mouseOverMenuButton.addEventListener('pointerenter', function(){navMenuVisible(true);});

let mouseLeaveMenu = document.querySelector('.nav-menu');
mouseLeaveMenu.addEventListener('pointerleave', function(){navMenuVisible(false)});

let getNavButton = document.querySelector('.btn-toggle-nav-menu');
getNavButton.addEventListener('click', toggleNavMenu);

let getHomeButton = document.querySelector('.lightgray');
getHomeButton.addEventListener('click', function(){toggleBodyColor("lightgray"); toggleNavMenu()});

let getPurpleButton = document.querySelector('.purple');
getPurpleButton.addEventListener('click', function(){toggleBodyColor("purple"); toggleNavMenu()});

let getBlueButton = document.querySelector('.blue');
getBlueButton.addEventListener('click', function(){toggleBodyColor("blue"); toggleNavMenu()});

let getGreenButton = document.querySelector('.green');
getGreenButton.addEventListener('click', function(){toggleBodyColor("green"); toggleNavMenu()});

let getPlinkButton = document.querySelector('.pink');
getPlinkButton.addEventListener('click', function(){toggleBodyColor("pink"); toggleNavMenu()});

let getYellowButton = document.querySelector('.yellow');
getYellowButton.addEventListener('click', function(){toggleBodyColor("yellow"); toggleNavMenu()});

let getOrangeButton = document.querySelector('.orange');
getOrangeButton.addEventListener('click', function(){toggleBodyColor("orange"); toggleNavMenu()});

window.addEventListener('keydown', function (e) {
    if(e.key == 1){toggleBodyColor("lightgray"); navMenuVisible(false);};
    if(e.key == 2){toggleBodyColor("purple"); navMenuVisible(false);};
    if(e.key == 3){toggleBodyColor("blue"); navMenuVisible(false);};
    if(e.key == 4){toggleBodyColor("green"); navMenuVisible(false);};
    if(e.key == 5){toggleBodyColor("pink"); navMenuVisible(false);};
    if(e.key == 6){toggleBodyColor("yellow"); navMenuVisible(false);};
    if(e.key == 7){toggleBodyColor("orange"); navMenuVisible(false);};
}, false);