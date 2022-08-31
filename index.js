
// 1 Probleam *****************
let x=" hello raju, nice to meet you raju, how are today raju?"
let y=x.indexOf("raju")
let z=x.indexOf("raju",y+1)

// first occurrence "raju" 
console.log(y)// index 7
// Second occurrence "raju" 
console.log(z)// index 30


// 2 Probleam *****************
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

  res.send({name:req.query.name,age:req.query.age})
//   query achive  localhost:3000?name=raju&age=26


})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




// 3 Probleam in React generaterQR component ***************** 
// your statement was how can udate imageUrl->so it will be udate by useEffect


const print=()=>{
    console.log(imagURL)
}



useEffect(()=>{
    print()
},
[])






/* Thanks and  Regards
Raju kumar
*/




