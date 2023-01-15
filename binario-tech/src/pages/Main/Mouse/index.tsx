import { useEffect, useState } from "react"
import { Head } from "../../../components/Head";
import { Snacks } from "../../../components/Snacks";
import { SnackTitle } from "../../../components/SnackTitle";
import { getMouses } from "../../../services/api";


export function Mouse (){
    const [mouses, setMouses] = useState([]);

    useEffect(() => {
        ;(async () => {
          const mousesRequest = await getMouses()
    
          setMouses(mousesRequest.data)

        })()
      }, [])


    return(
        <>
            
            <Head title='Mouses' />
            <SnackTitle>Mouses</SnackTitle>
            <Snacks snacks={mouses}></Snacks>
        </>
    )
}