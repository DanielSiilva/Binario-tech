import { useEffect, useState } from "react"
import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { SnackTitle } from "../../../components/SnackTitle"
import { getKeyboard } from "../../../services/api"


export function Keyboard() {
    const [keyboard, setKeyboard] = useState([])

    useEffect(() => {
        ;(async () => {
          const pizzaskeyboard = await getKeyboard()
    
          setKeyboard(pizzaskeyboard.data)

          console.log(keyboard)
        })()
      }, [])

    return(
        <>
            <Head title='keyboard' />
            <SnackTitle>Teclados</SnackTitle>
            <Snacks snacks={keyboard}></Snacks>
        </>
    )
}