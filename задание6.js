let arr = [1, 2, 1, 1, 1]
let a = true
for(let i = 1 ; i < arr.length ; i++){
   const element = arr[i]
   if ( element != arr[0]){
     console.log(false)
     a = false
     break
   }
}
 if (a === true){ 
   console.log(true)
    }
