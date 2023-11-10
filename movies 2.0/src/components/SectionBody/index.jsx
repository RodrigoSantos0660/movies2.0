import { Container } from "./styles";
import { Button } from "../Button"
import { GrFormAdd } from "react-icons/gr"
import { ShowMovies } from "../ShowMovies";



export function SectionBody(){
 return(
   <Container>
    <div>
     <h1>My movies</h1>
     <Button
      title = "+ add movie"
      

     />
    
    </div>
    <ShowMovies/>
    <ShowMovies/>
    <ShowMovies/>
    <ShowMovies/>

   </Container>
  )

}