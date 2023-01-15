
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/Sibedar/index";
import { Container } from "./styles";

import logoImg from '../../assets/logo.svg'
import { Header } from "../../components/Header";

export  function Main() {
  return (
    <Container>
      <Sidebar/>
      <section>
        <Header/>
        <Outlet />
      </section>
    </Container>
  )
}
