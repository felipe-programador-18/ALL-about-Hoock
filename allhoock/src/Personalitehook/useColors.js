import React, {useContext} from "react"
import { AddinSeveralColor } from "../hoock/color"

export const useVerifyColor  = () => {
    const authColor = useContext(AddinSeveralColor)
    if(!authColor){
        return console.log("error in created context!!",)
    }
    return authColor

}
