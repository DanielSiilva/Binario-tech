import { useEffect, useState } from "react"
import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { SnackTitle } from "../../../components/SnackTitle"
import { getEarphones } from "../../../services/api"


export function Earphone(){
    const [earphone, setEarphone] = useState([])

    useEffect(() => {
        ;(async () => {
          const earphoneRequest = await getEarphones()
    
          setEarphone(earphoneRequest.data)

        })()
      }, [])

    return(

        <>
            <Head title='Fones' />
            <SnackTitle>Fones</SnackTitle>
            <Snacks snacks={earphone}></Snacks>
        </>
    )
}