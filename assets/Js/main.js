// Tax Book
const BtnOne = document.querySelector('#btnOne');
const BtnTwo = document.querySelector('#btnTwo');
const BtnThree = document.querySelector('#btnThree');
const BtnFour = document.querySelector('#btnFour');
const oneImg = document.querySelector('.oneImg');
const twoImg = document.querySelector('.twoImg');
const threeImg = document.querySelector('.threeImg');
const fourImg = document.querySelector('.fourImg');

const featureBtn = document.getElementsByClassName("featureBtn");


for (let i = 0; i < featureBtn.length; i++) {
    featureBtn[i].onclick =function() {
        let fea = featureBtn[0];
        while (fea) {

            if (fea.tagName === "DIV") {
                fea.classList.remove("activce-feature");
            }

            fea = fea.nextSibling;
        }

        this.classList.add("activce-feature");

    };
    
}


BtnOne.addEventListener('click',()=>{
    oneImg.classList.remove('hidden');
    twoImg.classList.add('hidden');
    threeImg.classList.add('hidden');
    fourImg.classList.add('hidden');
})

BtnTwo.addEventListener('click',()=>{
    twoImg.classList.remove('hidden');
    oneImg.classList.add('hidden');
    threeImg.classList.add('hidden');
    fourImg.classList.add('hidden');
})
BtnThree.addEventListener('click',()=>{
    threeImg.classList.remove('hidden');
    oneImg.classList.add('hidden');
    twoImg.classList.add('hidden');
    fourImg.classList.add('hidden');
})
BtnFour.addEventListener('click',()=>{
    fourImg.classList.remove('hidden');
    oneImg.classList.add('hidden');
    threeImg.classList.add('hidden');
    twoImg.classList.add('hidden');
})


// For Card
const CardOne = document.querySelector('#cardOne');
const CardTwo = document.querySelector('#cardTwo');
const CardThree = document.querySelector('#cardThree');
const cardOneImg = document.querySelector('.cardOneImg');
const cardTwoImg = document.querySelector('.cardTwoImg');
const cardThreeImg = document.querySelector('.cardThreeImg');

CardOne.addEventListener('click',()=>{
    cardOneImg.classList.remove('hidden');
    cardTwoImg.classList.add('hidden');
    cardThreeImg.classList.add('hidden');
    
})

CardTwo.addEventListener('click',()=>{
    cardTwoImg.classList.remove('hidden');
    cardOneImg.classList.add('hidden');
    cardThreeImg.classList.add('hidden');
    
})

CardThree.addEventListener('click',()=>{
    cardThreeImg.classList.remove('hidden');
    cardOneImg.classList.add('hidden');
    cardTwoImg.classList.add('hidden');
    
})

// Mobile Menu Slide
const menuSlideOpen= document.querySelector('.menu-slide-open');
const mobileSlide= document.querySelector('#mobile-slide');
const mobileSlideClose = document.querySelector('#mobile-slide-close');

menuSlideOpen.addEventListener('click',()=>{
    mobileSlide.style.left="0px";
})

mobileSlideClose.addEventListener('click',()=>{
    mobileSlide.style.left="-100%";
})

// Waypoint for Scroll Section Navbar
const navControl=document.querySelector('.nav-control');

var waypoint = new Waypoint({
    element: document.getElementById('feature'),
    handler: function(direction) {
      if(direction === 'down'){
        navControl.classList.add('fixed', 'w-full','z-30','shadow-lg','animate__fadeInDown','duration-300');
      }else{
        navControl.classList.remove('fixed', 'w-full','z-30','shadow-lg','animate__fadeInDown','duration-300');
        
      }
    },
    offset: '75%'
  })

// Scroll Reveal
ScrollReveal().reveal('.headline',{
    delay: 400,
    origin: 'bottom',
    distance: '50px',
    interval: 300,
    scale: 0.85,
    reset: true
});
  
ScrollReveal().reveal('.midline',{
    delay: 500,
    origin: 'top',
    distance: '50px',
    interval: 300,
    scale: 0.9,
    reset: true
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// Document ထဲမှာရှိသမျှ section အားလုံးကို select လုပ်ထားပါတယ်။
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    // Browser ကို Scroll ဆွဲလိုက်တဲ့အခါ Scroll ရောက်နေတဲ့ Height ကိုရရှိနေမှာဖြစ်ပါတယ်။
    const scrollY = window.pageYOffset;           // scroll height

    // forEach နဲ့ ရှိသမျှ section အကုန်လုံးကို loop လုပ်လိုက်တာဖြစ်ပါတယ်။
    // current.offsetHeight လက်ရှိရောက်နေတဲ့ section ရဲ့ Height ကို ရယူလိုက်တာပါ။
    // current.offsetTop - 58 လက်ရှိရောက်နေတဲ့ section ရဲ့ Top ကို ရယူလိုက်တာပါ။
    // current.getAttribute("id") လက်ရှိရောက်နေတဲ့ section ရဲ့ id ကို ရယူလိုက်တာပါ။
    sections.forEach((current) => {
    const sectionHeight = current.offsetHeight, // get current height
        sectionTop = current.offsetTop - 58,      // get current section of height
        sectionId = current.getAttribute("id");   // get current section id

    // scrollyY သည် sectionTop ထက်ကြီးနေတယ်ဆိုရင် True အနေနဲ့ သတ်မှတ်မှာဖြစ်ပြီး
    // လက်ရှိရောက်နေတဲ့ section ရဲ့ Top နဲ့ လက်ရှိရောက်နေတဲ့ section ရဲ့ Height နှစ်ခုကိုပေါင်းပြီး
    // scrollyY သည် ငယ်နေတယ်(သို့) ညီနေတယ်ဆိုရင် True ကိုရရှိမှာပါ။
    // && သည် Comparsion Operator ဖြစ်ပြီး နှင်းယှဉ်ထားတဲ့ တန်ဖိုးနှစ်ခုလုံး True && True ဖြစ်မှသာ
    // if statement ကိုအလုပ်လုပ်မှာဖြစ်ပါတယ်။ နှိုင်းယှဉ်လိုက်တဲ့ တန်ဖိုးက false ဖြစ်နေလျှင် else ကို အလုပ်လုပ်သွားမှာဖြစ်ပါတယ်။
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
        .querySelector("a[href*=" + sectionId + "]").classList.add("active-link");
    } else {
        document
        .querySelector("a[href*=" + sectionId + "]").classList.remove("active-link");
    }
    });
}
// function သည် ကြေညာလိုက်ရုံနဲ့ အလုပ်မလုပ်ပါဘူး။
// သူ့ကို ပြန်ခေါ်သုံးမှသာ အလုပ်လုပ်တာဖြစ်ပါတယ်။
// ဒါကြောင့် Browser ကို Scroll လုပ်လိုက်လျှင် scrollActive ကို အလုပ်လုပ်ပေးပါလို့ပြောလိုက်ခြင်းဖြစ်ပါတယ်။
window.addEventListener("scroll", scrollActive);


// for link
const mobileMenuLink=document.querySelectorAll('.mobile_menu_link');

for(let i=0; i<mobileMenuLink.length; i++){
 

  mobileMenuLink[i].addEventListener('click',()=>{
    mobileSlide.style.left='-100%';
  })

}