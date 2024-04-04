function calculateTraingleArea(){

    // get traingle base value
   const traingleBaseInput=document.getElementById('traingle-base');
   const traingleBaseText= traingleBaseInput.value;
   const base= parseFloat(traingleBaseText);
   console.log(base);
   
//   get traingle height value 
   const traingleHeightInput=document.getElementById('traingle-height');
   const traingleHeightText= traingleHeightInput.value;
   const height= parseFloat(traingleHeightText);
   console.log(height);

   const area = 0.5 * base * height;
   console.log("area of traingle is:", area);

    const traingleAreaSpan = document.getElementById('triangle-area');
    traingleAreaSpan.innerText = area;

}