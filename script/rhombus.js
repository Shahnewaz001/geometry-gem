function calculaterhombusArea(){

    // get Rectangle width value
   const rhombusBaseInput=document.getElementById('rhombus-base');
   const rhombusBaseText= rhombusBaseInput.value;
   const base= parseFloat(rhombusBaseText);
   console.log(base);
   
//   get traingle height value 
   const rhombusHeightInput=document.getElementById('rhombus-height');
   const rhombusHeightText = rhombusHeightInput.value;
   const height= parseFloat(rhombusHeightText);
   console.log(height);

   const area1 = 0.5 * base * height;
   console.log("area of rhombus is:", area1);

    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = area1;

}