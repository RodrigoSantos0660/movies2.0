import { Container } from "./styles";
import { Button } from "../Button"
import { ShowMovies } from "../ShowMovies";



export function SectionBody(){
 return(
   <Container>
    <div>
     <h1>My movies</h1>
     <Button title="Add Movie" />
    </div>
    <ShowMovies/>
    <ShowMovies/>
    <ShowMovies/>
    <ShowMovies/>

   </Container>
  )

}