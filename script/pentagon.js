function calculatePentagonArea(){

    // get Rectangle width value
   const pentagonPerimeterInput=document.getElementById('pentagon-perimeter');
   const pentagonPerimeterText= pentagonPerimeterInput.value;
   const Perimeter= parseFloat(pentagonPerimeterText);
   console.log(Perimeter);
   
//   get traingle height value 
   const pentagonApothemInput=document.getElementById('pentagon-apothem');
   const pentagonApothemText = pentagonApothemInput.value;
   const Apothem= parseFloat(pentagonApothemText);
   console.log(Apothem);

   const area1 = 0.5 * Perimeter * Apothem;
   console.log("area of rhombus is:", area1);

    const PentagonAarea = document.getElementById('Pentagon-area');
    PentagonAarea.innerText = area1;
}