import { Button } from "../../components/Button";
import { Container } from "./styles";
import { Header } from "../../components/Header";
export function Home(){
  return(
    < Container>
      <Header />
     <Button title="Add Movie" />
   </ Container> 
  )
}