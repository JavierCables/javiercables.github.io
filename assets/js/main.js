/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    //When the scroll is greater than 50 veiwport height, and the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== LANGUAGE SWITCHER ===============*/
var btn = document.getElementById("btn")

function leftClick(){
    btn.style.left = 0;
}

function rightClick(){
    //Aplico el margen
    var textStyle = btn.offsetWidth + "px";
    console.log("textStyle: " + textStyle);
    console.log("btn.style.left: " + btn.style.left);
    
    
    btn.style.left = "" + textStyle;
    console.log("btn.style.left: " + btn.style.left);
}

/*=============== CONTACT ===============*/
const contactForm = document.getElementById('contact_form'),
    contactName = document.getElementById('contact_name'),
    contactEmail = document.getElementById('contact_email'),
    contactContent = document.getElementById('contact_content'),
    contactMessage = document.getElementById('contact_message')

const sendEmail = (e) =>{
    e.preventDefault()

    if(contactName.value === '' || contactEmail.value === '' || contactContent.value === ''){
        contactMessage.classList.remove('color-brown')
        contactMessage.classList.add('color-red')

        contactMessage.textContent = 'Write all the input fields'
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_nnynubu', 'template_dum4lqm', '#contact_form', '2zowwh09_jfVpnJh3')
            .then(() =>{
                contactMessage.classList.add('color-brown')
                contactMessage.textContent = 'Message sent!'

                setTimeout(() =>{
                    contactMessage.textContent = ''
                }, 5000)
            }, (error) =>{
                alert('Something has failed...', error)
            })

        contactName.value = ''
        contactEmail.value = ''
        contactContent.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail)


/*=============== QUALIFICATION TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*=============== PORTFOLIO ===============*/
let swiper = new Swiper(".mySwiper", {
    cssMode: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
//const selectedTheme = localStorage.getItem('selected-theme')
//const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
/*if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}*/

document.body.classList.toggle(lightTheme)
themeButton.classList.toggle(iconTheme)
localStorage.setItem('selected-theme', getCurrentTheme())
localStorage.setItem('selected-icon', getCurrentIcon())
if(lightTheme == "dark")
{
    changeDayNight();
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, {delay: 700})
sr.reveal(`.home__social, .home__scroll`, {delay: 900, origin:'bottom'})