document.addEventListener("DOMContentLoaded", function (){
    let menuAccount = document.getElementById("menu-account");
    let homeModal = document.getElementById("home-modal");
    let accountIcon = document.getElementById("account-icon");
    let closeIcon = document.getElementById("close-icon1");

    menuAccount.addEventListener("click", function (){
        homeModal.classList.toggle("active");
        if(homeModal.classList.contains("active")){
            accountIcon.style.display = "none";
            closeIcon.style.display = "block";
        }else{
            accountIcon.style.display = "block";
            closeIcon.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", function (){
    let menuToggle = document.getElementById("menu-toggle");
    let mobileNav = document.getElementById("mobile-nav");
    let barsIcon = document.getElementById("bars-icon");
    let closeIcon = document.getElementById("close-icon");

    menuToggle.addEventListener("click", function (){
        mobileNav.classList.toggle("active");
        if(mobileNav.classList.contains("active")){
            barsIcon.style.display = "none";
            closeIcon.style.display = "block";
            
        }else{
            barsIcon.style.display = "block";
            closeIcon.style.display = "none";
        }
    });
});