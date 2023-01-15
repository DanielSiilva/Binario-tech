
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/Sibedar/index";
import { Container } from "./styles";

import logoImg from '../../assets/logo.svg'

export  function Main() {
  return (
    <Container>
      <Sidebar/>
      <section>
        
        <Outlet />
      </section>
    </Container>
  )
}
