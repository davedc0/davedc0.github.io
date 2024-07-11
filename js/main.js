
const images=document.querySelectorAll(".imageenlarge , .carouselimage");
images.forEach((el)=>el.addEventListener("click", modalimagechange));

function modalimagechange(){
    console.log(this.id);
    if(this.classList.contains("videoimage"))
    {
        if(this.id!="tosrc"){
            document.querySelector(".modal-video").src=this.id
        }
        else{
            document.querySelector(".modal-video").src=this.src;
        }
    }
    else{
        if(this.id!="tosrc"){
            document.querySelector(".modal-img").src=this.id
        }
        else{
            document.querySelector(".modal-img").src=this.src;
        }
    }
   
    
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



