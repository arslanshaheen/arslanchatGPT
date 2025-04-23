import { useEffect } from "react"
import { checkHeading } from "../helper"

const Answer=({ans,key})=>{
    // console.log(ans,key)

    useEffect(()=>{
         console.log(ans,checkHeading(ans))
       


    },[])

     function checkHeading(str){
        return /^(\*)(\*)|(.*)\*$/.test(str)
    }
    return (

        <>{ans}</>
    )
}

export default Answer