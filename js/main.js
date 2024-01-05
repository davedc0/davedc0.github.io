

const observer= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            observer.unobserve(entry.target)
        }
        else {
            if(entry.boundingClientRect.bottom<0){
                entry.target.classList.remove('show');
            }
            
        }
        console.log("asd")
        
    });
},{threshold:0.2});

const hiddenitemsdown= document.querySelectorAll(".hidden-down");
hiddenitemsdown.forEach((el)=>observer.observe(el));

const hiddenitemsright= document.querySelectorAll(".hidden-right");
hiddenitemsright.forEach((el)=>observer.observe(el));
const hiddenitemsleft= document.querySelectorAll(".hidden-left");
hiddenitemsleft.forEach((el)=>observer.observe(el));


function myFunction(pageId) {
    
    page=document.getElementById(pageId);
    if(page.classList.contains("expand")){
        page.classList.remove('expand');
    }
    else{
        
        page.classList.add('expand');
    }
}

const observer2= new IntersectionObserver((entries )=>{
    entries.forEach((entry)=>{
       
        if(entry.isIntersecting){
            entry.target.classList.add('pagesectionHighlight');
            if( entry.target.querySelector(".topsection")!==null){
                entry.target.querySelector(".topsection").classList.add('show');
                entry.target.querySelector(".bottomsection").classList.add('show');
            }
            
        }
        else {

            entry.target.classList.remove('pagesectionHighlight');
            if( entry.target.querySelector(".topsection")!==null){
                entry.target.querySelector(".topsection").classList.remove('show');
                entry.target.querySelector(".bottomsection").classList.remove('show');
            }
           
            
            
        }
    });
},{threshold:0,  rootMargin: '-40% 0% -40% 0%'});
const pagesection= document.querySelectorAll(".pagesection");
pagesection.forEach((el)=>observer2.observe(el));

const images=document.querySelectorAll(".imageenlarge , .carouselimage");
images.forEach((el)=>el.addEventListener("click", modalimagechange));

function modalimagechange(){
    console.log("clicked");
    document.querySelector(".modal-img").src=this.src;
}

class carousel{
    
    constructor(items){
        this.carouselarray=[...items];
    }

    updateGallery(){
        this.carouselarray.forEach((element,i) => {
            element.classList.remove("carouselimage-1");
            element.classList.remove("carouselimage-2");
            element.classList.remove("carouselimage-3");
            element.classList.remove("carouselimage-4");
            element.classList.remove("carouselimage-5");
            
            element.classList.remove("carouselimage-hidden");
            if(i==0){
                element.classList.add("carouselimage-1");
            }
            else if(i==1){
                element.classList.add("carouselimage-2");
            }
            else if(i==2){
                element.classList.add("carouselimage-3");
            }
            else if(i==3){
                element.classList.add("carouselimage-4");
            }
            else if(i==4){
                element.classList.add("carouselimage-5");
            }
            else{
                element.classList.add("carouselimage-hidden");
            }
        });



    }
    carouselslide(x){
        
        console.log(x)
        if(x==1){
            this.carouselarray.unshift(this.carouselarray.pop());
        }
        else if(x==-1){
            
            this.carouselarray.push(this.carouselarray.shift());
        }
        this.updateGallery();
    }
}

const carimg=document.querySelectorAll(".carouselimage");

if(carimg.length>0){
    const carou=new carousel(carimg);
    const nextcar=document.querySelector(".carousel-next");
   

    if(nextcar!==null){
        nextcar.addEventListener("click", nextslide);
    }
    const prevcar=document.querySelector(".carousel-prev");
    if(prevcar!==null){
        prevcar.addEventListener("click", prevslide);
    }
    function nextslide(){
        carou.carouselslide(-1);
    }
    function prevslide(){
        carou.carouselslide(1);
    }
}



