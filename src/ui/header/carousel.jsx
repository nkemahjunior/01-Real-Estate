import { useState } from "react"

function Carousel() {

  const test = [
    "img0","img1","img2","img3"
  ]

  const [cur,SetCur] = useState(0)


  function handleNext(){

    
    if(cur < test.length - 1)
    SetCur((cur) => cur + 1)
  }

  function handlePrev(){
    if(cur > 0 ) 
    SetCur((cur) => cur - 1)
  }



  return (
    <div>
     <button onClick={handleNext}>next</button>
     <button onClick={handlePrev}>prev</button>


     <p>{test[cur]}</p><p>  cur = {cur} </p>
    </div>
  )
}

export default Carousel
