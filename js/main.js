
 anime({
    targets: '.st0',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: false
  });

  

  anime({
    targets: '.firstr',
    d: [
        {value: 'M1918.9,1080L1918.9,1080c-211.1-211.1-329.4-329.4-540.5-540.5v0C1589,328.8,1707.2,210.7,1917.8,0l1.1,0V1080z'}
    ],
    baseFrequency: 0,
    scale: 1,
    delay: 2000,
    loop: false,
    direction: 'alternate',
    easing: 'easeInOutExpo'
  });

  anime({
    targets: '.firstl',
    d: [
        {value: 'M0,0L0,0c211.1,211.1,329.4,329.4,540.5,540.5v0C329.9,751.2,211.7,869.3,1.1,1080H0V0z'}
    ],
    baseFrequency: 0,
    scale: 1,
    delay: 2000,
    loop: false,
    direction: 'alternate',
    easing: 'easeInOutExpo' 
  })

  anime({
    targets: '.thirdp',
    y: [
        {value: 0}
    ],
    baseFrequency: 0,
    scale: 1,
    delay: 3000,
    loop: false,
    direction: 'alternate',
    easing: 'easeInOutExpo' 
  })

  anime({
      targets: '.st0',
      scale: 0.2,
      duration: 1500,
      translateX: -250,
      translateY: -300,
      delay: 4000
  })

  anime({
    targets: '.title-border',
    x: "0",
    duration: 1500,
    delay: 4000,
    easing: 'easeInOutExpo'
})



var about = document.getElementById('about')
about.addEventListener('click', function() {
    var page = document.getElementById('page')
    page.style.display = 'block'; 
    page.style.zIndex = '4'
    
    

    var aboutBd = anime({
        targets: '.about-border',
        y: "0",
        duration: 500,
        easing: 'easeInOutExpo',
        loop: false
    })
    var aboutSp1 = anime({
        targets: '.about-sp',
        cy: "360",
        delay: 500,
        duration: 1000,
        easing: 'easeInOutExpo',
        loop: false
    })
    var aboutSp2 = anime({
        targets: '.about-sp',
        r: "2000",
        delay: 1500,
        duration: 1000,
        loop: false
    })
    


    window.setTimeout( function() { 
        var aboutContainer = document.getElementById('about-container');
        aboutContainer.style.display = 'block' 
     }, 1500 );
})

var backBtn = document.getElementById('back-btn')
backBtn.addEventListener('click', function() {
    var aboutContainer = document.getElementById('about-container');
    aboutContainer.style.display = "none"
    anime({
        targets: '.about-border',
        y: "-1920",
        duration: 100,
        easing: 'easeInOutExpo',
        loop: false
    })
    anime({
        targets: '.about-sp',
        cy: "-50",
        duration: 100,
        easing: 'easeInOutExpo',
        loop: false
    })
    anime({
        targets: '.about-sp',
        r: "50",
        duration: 1000,
        loop: false
    })

    var page = document.getElementById('page')
    page.style.zIndex = '2'; 

})

window.setTimeout( function() { 
    var fifth = document.getElementById('fifth');
    fifth.style.display = 'block'
 }, 5000 );



var works = document.getElementById('works')
works.addEventListener('click', function() {
    var page2 = document.getElementById('page2')
    page2.style.display = 'block'; 
    page2.style.zIndex = '4'
    
    

    var worksBd = anime({
        targets: '.works-border',
        y: "0",
        duration: 500,
        easing: 'easeInOutExpo',
        loop: false
    })
    var worksSp1 = anime({
        targets: '.works-sp',
        cy: "450",
        delay: 500,
        duration: 1000,
        easing: 'easeInOutExpo',
        loop: false
    })
    var worksSp2 = anime({
        targets: '.works-sp',
        r: "2000",
        delay: 1500,
        duration: 1000,
        loop: false
    })
    


    window.setTimeout( function() { 
        var worksContainer = document.getElementById('works-container');
        worksContainer.style.display = 'block' 
     }, 1500 );
})


var backBtn2 = document.getElementById('back-btn2')
backBtn2.addEventListener('click', function() {
    var worksContainer = document.getElementById('works-container');
    worksContainer.style.display = "none"
    anime({
        targets: '.works-border',
        y: "-1920",
        duration: 100,
        easing: 'easeInOutExpo',
        loop: false
    })
    anime({
        targets: '.works-sp',
        cy: "-50",
        duration: 100,
        easing: 'easeInOutExpo',
        loop: false
    })
    anime({
        targets: '.works-sp',
        r: "50",
        duration: 1000,
        loop: false
    })

    var page2 = document.getElementById('page2')
    page2.style.zIndex = '2'; 

})



var contact = document.getElementById('contact')
contact.addEventListener('click', function() {
    var page3 = document.getElementById('page3')
    page3.style.display = 'block'; 
    page3.style.zIndex = '4'
    
    

    var contactBd = anime({
        targets: '.contact-border',
        y: "0",
        duration: 500,
        easing: 'easeInOutExpo',
        loop: false
    })
    var contactSp1 = anime({
        targets: '.contact-sp',
        cy: "560",
        delay: 500,
        duration: 1000,
        easing: 'easeInOutExpo',
        loop: false
    })
    var contactSp2 = anime({
        targets: '.contact-sp',
        r: "2000",
        delay: 1500,
        duration: 1000,
        loop: false
    })
    


    window.setTimeout( function() { 
        var contactContainer = document.getElementById('contact-container');
        contactContainer.style.display = 'block' 
     }, 1500 );
})


var backBtn3 = document.getElementById('back-btn3')
backBtn3.addEventListener('click', function() {
    var contactContainer = document.getElementById('contact-container');
    contactContainer.style.display = "none"
    anime({
        targets: '.contact-border',
        y: "-1920",
        duration: 100,
        easing: 'easeInOutExpo',
        loop: false
    })
    anime({
        targets: '.contact-sp',
        cy: "-50",
        duration: 100,
        easing: 'easeInOutExpo',
        loop: false
    })
    anime({
        targets: '.contact-sp',
        r: "50",
        duration: 1000,
        loop: false
    })

    var page3 = document.getElementById('page3')
    page3.style.zIndex = '2'; 

})


 