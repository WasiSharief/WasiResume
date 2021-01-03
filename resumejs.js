// var Home = document.getElementById('home');
// var about = document.getElementById('about-nav');
// var skills = document.getElementById('skills-nav');
// var education = document.getElementById('education-nav');
// var portfolio = document.getElementById('portfolio-nav');
// var contact = document.getElementById('contact-nav');
// var hamhome = document.getElementById('ham-home');
// var point=0;
// hamhome.addEventListener('click',function(){
//     point=700;
//     smoothscr();
// });
// about.addEventListener('click',function(){
//     point=300;
//     smoothscr();
// });
// skills.addEventListener('click',function(){
//     point=725;
//     smoothscr();
// });
// education.addEventListener('click',function(){
//     point=1200;
//     smoothscr();
// });
// portfolio.addEventListener('click',function(){
//     point=1950;
//     smoothscr();
// });
// contact.addEventListener('click',function(){
//     point=2650;
//     smoothscr();
// });

// function smoothscr(){
//     var targetpoint=point;
//     var current=25;    
//     var id = setInterval(function(){
//         window.scrollBy(0,25);
//         current +=25;
    
//         if(current>=targetpoint)
//         {
//         clearInterval(id);
//         }
//             },5);
//     }
//-----------------------smoothscroll of navigation-----------------------------
var interval;
var navbarListitemstag = document.querySelectorAll('.top-anchro');
for(var i=0;i<navbarListitemstag.length;i++)
{
    navbarListitemstag[i].addEventListener('click',function(){
        var targetsectionID =this.textContent.trim().toLowerCase();
        var targetsection = document.getElementById(targetsectionID);
        

         interval= setInterval(verticalscroll,6,targetsection);
    });
}

function verticalscroll(targetsection){
    var coordinates = targetsection.getBoundingClientRect();
    if(coordinates.top <=110){
        clearInterval(interval);
        
    }
    window.scrollBy(0,50);
}
//----------------------------------skill progress bar auto fill--------------------------------
var fillskillprogress =document.getElementById('skills')
var skillSecCords = fillskillprogress.getBoundingClientRect();
var skillzeroclass=document.querySelectorAll('.auto-fill');
var id=setInterval(function(){

    if(document.documentElement.scrollTop <= 0){
       
       
        for(var i=0;i<skillzeroclass.length;i++){
        skillzeroclass[i].style.width="0%";
        }
    }    
   
if(document.documentElement.scrollTop >= 200){
    
    for(let i=0;i<skillzeroclass.length;i++){
  
        setInterval(function(){
      var allbars =skillzeroclass[i].getBoundingClientRect();
      var skillspercnt=  skillzeroclass[i].getAttribute('data-value');

      if(allbars.top<=window.innerHeight){
        fillbar();    
      }
      
      function fillbar(){
    skillzeroclass[i].style.width=skillspercnt;
    skillzeroclass[i].style.transition="width 0.5s ease-in-out";
                        }

                    },200);
    
    }
    
}
   
 },200);


//---------------------------------------------------------------------------
// setInterval(function(){
// var edu = document.getElementById('education');
// var coor =edu.getBoundingClientRect();
// if (coor.top<=window.innerHeight)
// {
// edu.style.backgroundColor="red";
// }
// else if(coor.top>=window.innerHeight)
// {
//     edu.style.backgroundColor="white";
// }
// },500);



