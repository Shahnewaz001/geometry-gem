function calculateRectangleArea(){

    // get Rectangle width value
   const rectangleWidthInput=document.getElementById('rectangle-width');
   const traingleWidthText= rectangleWidthInput.value;
   const width= parseFloat(traingleWidthText);
   console.log(width);
   
//   get traingle height value 
   const rectangleLengthInput=document.getElementById('rectangle-lenght');
   const rectangleLengthText = rectangleLengthInput.value;
   const length= parseFloat(rectangleLengthText);
   console.log(length);

   const area1 = width * length;
   console.log("area of rectangle is:", area1);

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area1;

}