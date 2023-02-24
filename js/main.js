document.addEventListener('DOMContentLoaded', () => {

  // SWIPER
  let swiper = new Swiper(".services-swiper", {
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // show contact-modal
  const contactBtn = document.getElementById("contact-btn");
  const contactModal = document.getElementById("contact-modal")


  function showContactModal() {
    if (contactModal.classList.contains("contact-modal_active")) {
      contactModal.classList.remove("contact-modal_active");
    }
    else {
      contactModal.classList.add("contact-modal_active");
    }
  }

  contactBtn.addEventListener('click', showContactModal);

  // show acide

  const asideFirstBtn = document.getElementById("aside-btn-first");
  const asideSecondBtn = document.getElementById("aside-btn-second");
  const asideAccordion = document.getElementById("aside-accordion");
  const asideRightBlock = document.getElementById("aside-box-right");


  if (asideFirstBtn) {
    asideFirstBtn.addEventListener('click', () => {
      asideFirstBtn.classList.add("aside__tumblers-btn_active")
      asideAccordion.classList.add("aside_active")
      asideSecondBtn.classList.remove("aside__tumblers-btn_active")
      asideRightBlock.classList.remove("aside_active")
    })
  }

  if (asideSecondBtn) {
    asideSecondBtn.addEventListener('click', () => {
      asideSecondBtn.classList.add("aside__tumblers-btn_active")
      asideRightBlock.classList.add("aside_active")
      asideFirstBtn.classList.remove("aside__tumblers-btn_active")
      asideAccordion.classList.remove("aside_active")
    })
  }
});