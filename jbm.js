
function pay() {
    let change = document.getElementById("change");
    change.style.display = "block";
    change.style.zIndex = 1;
    change.style.pointerEvents = "fill";


}

function closing() {
    let close = document.getElementById("change");
    close.style.opacity = 0;
    close.style.pointerEvents = "none";
}

function closingg(){
    let hamclose = document.getElementById("hammenucontent")
    hamclose.style.visibility="hidden";
}

function myfunc() {
    let fun = document.getElementById("studentf");
    let blm = document.getElementById("blm");
    fun.style.opacity = 1;
    fun.style.zIndex = 1
    fun.style.filter = "brightness(100%)";
    fun.style.pointerEvents = "fill";
    // blm.style.filter = "blur(10px)";
    // fun.style.boxshadow = "(0 0 200px red)";
    // blm.style.filter= "grayscale(100%)"

}


function openham(){
    let openham = document.getElementById("hammenucontent")
        openham.style.visibility = "visible"; 
        openham.style.backgroundColor = "white"; 

    
}


function closing2() {
    let close = document.getElementById("studentf");
    close.style.opacity = 0;
    close.style.pointerEvents = "none";
    let blm = document.getElementById("blm");
    // blm.style.opacity = "100%";



}
function whatsapp() {
    let Student_name = document.getElementById("name").value;
    let Fathers_name = document.getElementById("fname").value;
    let Mothers_name = document.getElementById("Mname").value;
    let Email = document.getElementById("emailf").value;
    let Phone_no = document.getElementById("phonef").value;
    let School_name = document.getElementById("sclname").value;
    let Address = document.getElementById("address").value;
    let Gender = document.getElementById("gender").value;

    let url1 = "https://wa.me/7000877684?text=" +
        "Name: " + encodeURIComponent(Student_name) + "%0a" +
        "Father's Name: " + encodeURIComponent(Fathers_name) + "%0a" +
        "Mother's name: " + encodeURIComponent(Mothers_name) + "%0a" +
        "Email: " + encodeURIComponent(Email) + "%0a" +
        "Phone no: " + encodeURIComponent(Phone_no) + "%0a" +
        "Previous School: " + encodeURIComponent(School_name) + "%0a" +
        "Address: " + encodeURIComponent(Address)
    "Gender: " + encodeURIComponent(Gender);

    window.open(url1, '_blank').focus();
}


// Show the back to top button when the user scrolls down 20px from the top
window.onscroll = function () {
    showBackToTopButton();
};

function showBackToTopButton() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

function scrooltotop(){
    window.scrollTo(0,0)
}




