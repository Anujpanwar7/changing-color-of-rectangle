const rect = document.querySelector("#rectangle");
rect.addEventListener("mousemove",function(details){
  const rectangleLocation = rect.getBoundingClientRect();
  let insideRectangle = details.clientX - rectangleLocation.left;

  if(insideRectangle < rectangleLocation.width/2){
    let redColor = gsap.utils.mapRange(0,rectangleLocation.width/2,255,0,insideRectangle);
    gsap.to(rect,{
        backgroundColor:`rgb( ${redColor}, 0, 0)`, ease: 'power4' ,
    })
  }
  else{
    let blueColor = gsap.utils.mapRange(rectangleLocation.width/2 ,rectangleLocation.width, 0, 255, insideRectangle)
    gsap.to(rect,{
        backgroundColor:`rgb(0, 0, ${blueColor})`
    })
  }
})

rect.addEventListener("mouseleave", function(){
   gsap.to(rect,{
    backgroundColor:"white"
   })
})
