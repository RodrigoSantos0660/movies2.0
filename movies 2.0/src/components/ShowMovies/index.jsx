import { Container } from "./styles";
import {AiFillStar } from"react-icons/ai";
export function ShowMovies({title, ...rest}){
 return(
   <Container>
    {title="Interestelar"}
    <div>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam exercitationem totam voluptatum sed fuga. Doloremque et quas ipsam tempora unde commodi, eum possimus natus consequuntur. Id odit reiciendis fugit voluptatum.</p>
    <div>
      <p>notes example</p>
    </div>
     

   </Container>
  )
}