// ===============================
// Back To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", ()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// ซ่อนปุ่มตอนเปิดเว็บ
topBtn.style.display = "none";


// ===============================
// Navbar Shadow
// ===============================

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        nav.style.background = "rgba(255,255,255,.95)";
        nav.style.boxShadow = "0 10px 25px rgba(0,0,0,.1)";

    }else{

        nav.style.background = "rgba(255,255,255,.85)";
        nav.style.boxShadow = "none";

    }

});


// ===============================
// Portfolio Image Click
// ===============================

const images = document.querySelectorAll(".card img");

const popup = document.createElement("div");

popup.classList.add("popup");

popup.innerHTML = `

<div class="popup-content">

<span class="close">&times;</span>

<img src="" id="popup-img">

</div>

`;

document.body.appendChild(popup);

const popupImg = document.getElementById("popup-img");

const close = document.querySelector(".close");

images.forEach(img=>{

    img.addEventListener("click",()=>{

        popup.style.display="flex";

        popupImg.src=img.src;

    });

});

close.onclick=()=>{

    popup.style.display="none";

}

popup.onclick=(e)=>{

    if(e.target===popup){

        popup.style.display="none";

    }

}


// ===============================
// Fade In Animation
// ===============================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(sec=>{

    sec.classList.add("hidden");

    observer.observe(sec);

});


// ===============================
// Active Menu
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-120;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});


// ===============================
// Smooth Hover Effect
// ===============================

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const x=e.offsetX;
        const y=e.offsetY;

        card.style.transform=
        `rotateX(${-(y-150)/30}deg)
         rotateY(${(x-150)/30}deg)
         scale(1.03)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="rotateX(0) rotateY(0) scale(1)";

    });

});
