import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!
// const redBlock=document.querySelector('div');
// window.addEventListener('load',(event)=>{
//     setTimeout(a)=>({
//         redBlock.style.display='none';

//     },3000)
   
// })
const images=document.querySelectorAll('img');
images.forEach((image)=>{
image.addEventListener('click',(event)=>{
    image.style.filter="grayscale(100%)";
})
})

images.forEach((image)=>{
    image.addEventListener('dblclick',(event)=>{
        image.style.filter="unset";
})

})
const navElement=document.querySelectorAll('.main-navigation .container nav-container');
navElement.addEventListener('mouseover',(event)=>{
    event.target.style.color='pink';
})
const foto=document.querySelectorAll('img');
foto[1].addEventListener('dblclick',(event)=>{
    event.target.sytle.height='64px';
    event.target.style.width='64px';
})
const h2=document.querySelectorAll('.intro h2');
h2.addEventListener('mouseDown',(event)=>{
event.target.style.color='red';
})
h2.addEventListener('mouseUp',(event)=>{
    event.target.style.color='blue';
    })

    //  *`keydown`
   const keyDown=document.querySelectorAll("input .myFunction()")
keyDown.addEventListener('keyDown',function myFunction(){
    alert("you pressed a key inside the input field")

})
const form=document.getElementById("myForm")
function myFunction() {
    document.getElementById("myForm").submit(); //??
  }

   
  
   



    //wheel
    const divDes=document.querySelectorAll('.destination h4');
   divDes.addEventListener("wheel",myFunc);
   function myFunc(){
    this.style.fontSize='50px';
    this.style.backgroundColor='yellow;'
    
   }

    //load
//focus
const foc=document.querySelectorAll('#myForm');
foc.addEventListener('focus',(event)=>{
    event.target.style.backgroundColor='pink';
})
foc.addEventListener('blur', (event) => {
    event.target.style.background = '';
  });

//resize`
function displayWindowSize(){
    var w=document.documentElement.clientWidth;
    var h=document.documentElement.clientHeight;
    document.getElementByClass("destination").innerHTML = "Width: " + w + ", " + "Height: " + h;
}
window.addEventListener('resize',displayWindowSize);
displayWindowSize();

//`scroll`

//`select`
function myFunction() {
    var x = document.getElementById("mySelect").length;
    document.getElementById("demo").innerHTML = x;
  }


//`dblclick`
//`drag / drop`