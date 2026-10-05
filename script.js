document.addEventListener("DOMContentLoaded",()=>{
  const menu=document.getElementById("menuToggle"), nav=document.getElementById("navLinks");
  if(menu&&nav) menu.addEventListener("click",()=>nav.classList.toggle("open"));
  const langBtn=document.getElementById("langBtn");
  let lang=localStorage.getItem("sla_lang") || "en";

  function applyLanguage(){
    document.querySelectorAll("[data-en][data-hi]").forEach(el=>{
      const value = lang === "hi" ? el.getAttribute("data-hi") : el.getAttribute("data-en");
      if(value !== null) el.textContent = value;
    });
    document.documentElement.setAttribute("lang", lang);
    if(langBtn){
      langBtn.textContent = lang === "hi" ? "English" : "हिन्दी";
      langBtn.setAttribute("aria-label", lang === "hi" ? "Switch to English" : "हिंदी में बदलें");
    }
    try { localStorage.setItem("sla_lang", lang); } catch(e) {}
  }

  if(langBtn){
    langBtn.type = "button";
    langBtn.addEventListener("click", function(ev){
      ev.preventDefault();
      ev.stopPropagation();
      lang = lang === "en" ? "hi" : "en";
      applyLanguage();
    });
    applyLanguage();
  }
  const year=document.getElementById("year"); if(year) year.textContent=new Date().getFullYear();

  const forms=document.querySelectorAll("#whatsappForm");
  forms.forEach(form=>form.addEventListener("submit",e=>{
    e.preventDefault();
    const whatsappNumber="+917599456641";
    const data=new FormData(form);
    const msg=`Legal Enquiry - Sonbhadra Law Advisor\n\nName: ${data.get("name")||""}\nMobile: ${data.get("phone")||""}\nMatter: ${data.get("matter")||""}\nLocation: ${data.get("location")||""}\nDetails: ${data.get("message")||""}`;
    const url=`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.location.href=url;
  }));
});

/* Shared header scroll effect */
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (header) header.classList.toggle("scrolled", window.scrollY > 50);
});

/* Shared reveal animation */
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("active");
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

/* Compatibility helpers for existing inline buttons */
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  if (nav) nav.classList.toggle("active");
}

