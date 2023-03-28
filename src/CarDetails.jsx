import { useEffect, useRef } from "react"

export function CarDetails({initialData}){
    const model = useRef();
    const year = useRef();
    const color = useRef();
    useEffect(() =>{
        model.current.value = initialData.model;
        year.current.value = initialData.year;
        color.current.value = initialData.color;
    },[initialData])

    return(
        <form>
            <input ref={model} type="text" name="model"/>
            <input ref= {year} type="text" name="year"/>
            <input ref={color} type="text" name="color"/>
        </form>
    )
}