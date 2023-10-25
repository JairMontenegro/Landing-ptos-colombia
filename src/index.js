// const barsButton = document.getElementById("bars-button")
// const xButton = document.getElementById("close-button")
// const openMenu = document.getElementById("mobile-menu")



// barsButton.addEventListener('click', ()=> {
//     barsButton.classList.replace('max-sm:block','max-sm:hidden')
//     xButton.classList.replace('max-sm:hidden', 'max-sm:block')
//     openMenu.classList.remove('max-sm:hidden')
//     openMenu.classList.add('bg-white')

// })

// xButton.addEventListener('click', () => {
//     xButton.classList.replace('max-sm:block' , 'max-sm:hidden')
//     barsButton.classList.replace( 'max-sm:hidden' , 'max-sm:block')
//     openMenu.classList.add('max-sm:hidden')
// })

// navbar

const barsButton = document.getElementById("bars-button");
const xButton = document.getElementById("close-button");
const openMenu = document.getElementById("mobile-menu");
barsButton.addEventListener('click', toggleMenu);
xButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    barsButton.classList.toggle('max-sm:block');
    barsButton.classList.toggle('max-sm:hidden');
    xButton.classList.toggle('max-sm:block');
    xButton.classList.toggle('max-sm:hidden');
    openMenu.classList.toggle('max-sm:hidden');
    openMenu.classList.toggle('bg-white');
}



// swipper autoplayer


// const progressCircle = document.querySelector(".autoplay-progress svg");
//     const progressContent = document.querySelector(".autoplay-progress span");
//     var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false
//     		},
//       	pagination: {
//         	el: ".swiper-pagination",
//         	clickable: true
//         },
//       	on: {
//         autoplayTimeLeft(s, time, progress) {
//         progressCircle.style.setProperty("--progress", 1 - progress);
//         progressContent.textContent = `${Math.ceil(time / 1000)}s`;
//         }
//     }
//     });

          const progressCircle = document.querySelector(".autoplay-progress svg");
          const progressContent = document.querySelector(".autoplay-progress span");
          let swiper = new Swiper(".mySwiper", {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true
            },
            on: {
              autoplayTimeLeft(s, time, progress) {
                progressCircle.style.setProperty("--progress", 1 - progress);
                progressContent.textContent = `${Math.ceil(time / 1000)}s`;
              }
  }
});



    // modal
      const openModalButton = document.getElementById("open-modal");
      const closeModalButton = document.getElementById("close-modal-button");
      const modal = document.getElementById("myModal");
      openModalButton.addEventListener("click", () => toggleModal(true));
      closeModalButton.addEventListener("click", () => toggleModal(false));

      function toggleModal(open) {
        modal.style.display = open ? "block" : "none";
        toggleBodyScroll(!open);
      }

      function toggleBodyScroll(scrollable) {
        document.body.classList.toggle("no-scroll", !scrollable);
      }




      // swiper 2
      var swiper1 = new Swiper(".mySwiper-1", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });


