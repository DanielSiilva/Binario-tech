import { useEffect, useState } from "react"
import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { SnackTitle } from "../../../components/SnackTitle"
import { getKeyboard } from "../../../services/api"


export function Keyboard() {
    const [keyboard, setKeyboard] = useState([])

    useEffect(() => {
        ;(async () => {
          const pizzasRequest = await getKeyboard()
    
          setKeyboard(pizzasRequest.data)

          console.log(keyboard)
        })()
      }, [])

    return(
        <>
            <Head title='Pizzas' />
            <SnackTitle>Teclados</SnackTitle>
            <Snacks snacks={keyboard}></Snacks>
        </>
    )
}