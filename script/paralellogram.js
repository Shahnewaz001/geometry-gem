function calculateParalellogramArea(){
    // console.log('connected')
    // get Rectangle width value
   const paralellogramBaseInput=document.getElementById('parallelogram-base');
   const parallelogrambaseText= paralellogramBaseInput.value;
   const base= parseFloat(parallelogrambaseText);
   console.log(base);
   
//   get traingle height value 
   const parallelogramHeightInput=document.getElementById('parallelogram-height');
   const parallelogramheightText = parallelogramHeightInput.value;
   const height= parseFloat(parallelogramheightText);
   console.log(height);

   const area2 = base * height;
   console.log("area of paralellogram is:", area2);

    const paralellogramAreaSpan = document.getElementById('parallelogram-area');
    paralellogramAreaSpan.innerText = area2;
}