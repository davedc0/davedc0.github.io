function update() {
 
  const elem = document.querySelectorAll('.purplehide');
  
  for (i = 0; i < elem.length; i++) {
    const rect = elem[i].getBoundingClientRect();
    if (rect.top<window.innerHeight) {
      elem[i].classList.toggle("purplehide");
    }
  }
 const elem2 = document.querySelectorAll('.whitehide');
  
  for (i = 0; i < elem2.length; i++) {
    const rect = elem2[i].getBoundingClientRect();
    if (rect.top<window.innerHeight) {
      elem2[i].classList.toggle("whitehide");
    }
  }
  
}

document.addEventListener('load', update);
document.addEventListener('scroll', update);
update();