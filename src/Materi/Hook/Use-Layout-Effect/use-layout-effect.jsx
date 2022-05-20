import React, { useEffect, useLayoutEffect, useRef } from 'react'

const UseLayoutEffect = () => {
    const inputRef = useRef(null)

    //useEffect its only call after render the page
    useEffect(() => {
        //when useEffect is call change value of input form RANDY to HALLO
        //just a second text will flashing change the text
        inputRef.current.value = "HELLO"
    },[])


    //useLayoutEffect its call before the page render
    useLayoutEffect(()=>{
        //when log the value of input still RANDY/original value
        //because useLayoutEffect is call first before the page render
        //before the changing value happen
        console.log(inputRef.current.value);
    },[])

  return (
    <div><input ref={inputRef} value="RANDY"/></div>
  )
}

export default UseLayoutEffect