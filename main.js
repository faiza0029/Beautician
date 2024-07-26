const nav = document.querySelector('.nav-menu');
const toggle = document.querySelector('.nav-toggle');
toggle.onclick = function(){
    nav.classList.toggle('show-nav')
}
//remove NavBar
 const  navlink = document.querySelectorAll('.nav-link')

 function linkAction(){
    const  navMenu = document.querySelectorAll('.nav-menu')
    navMenu.classList.remove('show-nav')
 }
 navlink.forEach(n => n.addEventListener('click',linkAction))

//change active color
const  navcolor = document.querySelectorAll('.nav-link')
function colorLink(){
    if(linkColor){
        linkColor.foreach(L => L.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(L => L.addEventListener('click',colorLink))