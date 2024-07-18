function loadElementsHome(){
    loadHeader("home");
    panelSlides(0);
    loadFooter("home");
}
function loadElementsAbout(){
    loadHeader("about");
    loadFooter("about");
}
totalSlide = 12;

function loadHeader(pageName) {
    document.getElementById('header-place').innerHTML = (`
        <div class="logo">
            <p>by</p>
            <img class="button" src="img/logo.svg" alt="logo image" onclick="window.open('https://github.com/ClaraGRibeiro', '_blank')" title="GitHub">
        </div>
        <p class="code">&lt;${pageName}&gt;</p>
        <nav class="buttons">
            <img class="button" src="img/home.svg" alt="home image" onclick="window.open('index.html', '_self')" title="Home">
            <img class="button" src="img/code.svg" alt="code image" onclick="window.open('https://github.com/ClaraGRibeiro/PlayingWithCSS', '_blank')" title="Code">
            <img class="button" src="img/about.svg" alt="about image" onclick="window.open('about.html', '_self')" title="About">
        </nav>
    `);
}
function loadFooter(pageName) {
    document.getElementById('footer-place').innerHTML = (`
        <div class="logo">
            <p>by</p>
            <img class="button" src="img/logo.svg" alt="logo image" onclick="window.open('https://github.com/ClaraGRibeiro', '_blank')" title="GitHub">
        </div>
        <p class="code">&lt;/${pageName}&gt;</p>
        <nav class="buttons">
            <img class="button" src="img/github.svg" alt="github image" onclick="window.open('https://github.com/ClaraGRibeiro', '_blank')" title="GitHub">
            <img class="button" src="img/linkedin.svg" alt="linkedin image" onclick="window.open('https://www.linkedin.com/in/clara-gon%C3%A7alves-ribeiro-66b07a213/', '_blank')" title="LinkedIn">
            <img class="button" src="img/email.svg" alt="email image" onclick="window.open('https://mail.google.com/mail/u/0/?fs=1&to=clara2020flor@gmail.com&su=FeedBack+for+%27Playing+With+CSS%27&body=Hi,+my+name+is+%5BNAME%5D+and+I+am+from+%5BCOUNTRY%5D.%0D%0AI+found+a+mistake:+%5BMISTAKE+EXPLAINED%5D.%0D%0A%0D%0A%0D%0A...&tf=cm', '_blank')" title="Send me a feedback">
        </nav>
    `);
}


slideCount = 0;
function previous(){
    if(slideCount > 1){
        slideCount--;
    } else{
        slideCount = totalSlide;
    }
    panelSlides(slideCount);
}
function next(){
    if(slideCount < totalSlide){
        slideCount++;
    } else{
        slideCount = 1;
    }
    panelSlides(slideCount);
}
function panelSlides(number){
    slideCount = number;
    slideFile = 'slides/slide' + number + '.html';
    previousButton = (`
        <img src="img/next.svg" alt="previous image" id="previous" title="previous" onclick="previous()">
        <div class="elements">
    `);
    nextButton = (`
        </div>
        <img src="img/next.svg" alt="next image" id="next" title="next" onclick="next()">`
    );
    fetch(slideFile)
        .then(response => {
            if (!response.ok) {
                throw new Error('Slide not found');
            }
            return response.text();
        })
        .then(html => {
            if(slideCount == 0){
                document.getElementById('slide').innerHTML = html;
            } else{
                document.getElementById('slide').innerHTML = previousButton + html + nextButton;
            }
        })
        .catch(error => {
            console.error('Error loading slide:', error);
            document.getElementById('slide').innerHTML = '<p>Slide not found</p>';
        })
    ;
}





//SLIDE1
function color(colorChange){
    document.getElementById('change').style.color = (colorChange);
}

//SLIDE2
function background_color(background_colorChange, colorChange){
    document.getElementById('change').style.backgroundColor = (background_colorChange);
    document.getElementById('change').style.color = (colorChange);
}

//SLIDE3
function font_style(font_styleChange){
    document.getElementById('change').style.fontStyle = (font_styleChange);
}

//SLIDE4
function font_size(font_sizeChange){
    document.getElementById('change').style.fontSize = (font_sizeChange);
}

//SLIDE5
function text_decoration(text_decorationChange){
    document.getElementById('change').style.textDecoration = (text_decorationChange);
}

//SLIDE6
function border(borderChange){
    document.getElementById('change').style.border = (borderChange);
}

//SLIDE7
function border_radius(border_radiusChange){
    document.getElementById('change').style.borderRadius = (border_radiusChange);
}

//SLIDE8
function opacity(opacityChange){
    document.getElementById('change').style.opacity = (opacityChange);
}

//SLIDE9
function width(widthChange){
    document.getElementById('change').style.width = (widthChange);
}

//SLIDE10
function justify_content(justify_contentChange){
    document.getElementById('change').style.justifyContent = (justify_contentChange);
}

//SLIDE11
function align_itens(align_itensChange){
    document.getElementById('change').style.alignItems = (align_itensChange);
}

//SLIDE12
function gap(gapChange){
    document.getElementById('change').style.gap = (gapChange);
}