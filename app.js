let grid=document.querySelector('.grid')

let squares=[]
alert("enter size, try to do with size 10 for better visualisation")
var size=prompt()

let timeout=1000

for(let i=0;i<size;i++){
  let square=document.createElement('div');
  square.setAttribute('id',i)
  alert("enter element")
  var x=prompt();
  square.innerHTML=x;
  grid.append(square)
  squares.push(square)
}


function bubble_sort(){
  for(let i=0;i<size-1;i++){
    for(let j=0;j<(squares.length-i-1);j++){
      setTimeout(()=> {
        if(parseInt(squares[j].innerHTML)> parseInt(squares[j+1].innerHTML)){
          if(j>0){
            //here we remove a class from two current cells of array(j,j-1). so that we can add red colour to them for visualisation
            squares[j-1].classList.remove('exchange')
            squares[j].classList.remove('exchange')
          }

          //here we add a class to two current cells of array. so that we can add red colour to them for visualisation
          squares[j].classList.add('exchange')
          squares[j+1].classList.add('exchange')

          //seting a timeout for swaps
          setTimeout(()=>{
            let temp=squares[j].innerHTML;
            squares[j].innerHTML=squares[j+1].innerHTML
            squares[j+1].innerHTML=temp;
          },1000)
          //seting the timeout for removal for classes
          if(j===squares.length-i-2){
            setTimeout(()=>{
              squares[j].classList.remove('exchange')
              squares[j+1].classList.remove('exchange')
            },2000)
          }
        }
      },timeout)
      timeout+=2000;
    }
  }

}
bubble_sort();

// function finishing(){
//   for(var i=0;i<squares.length;i++){
//     squares[i].classList.add('green')
//   }
// }
//
// finishing();
