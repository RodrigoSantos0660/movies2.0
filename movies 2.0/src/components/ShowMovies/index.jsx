import { Container } from "./styles";
import { Tags } from "../Tags";
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
      <Tags title="test"/>
      <Tags title="test 2"/>
      <Tags title="test 100" />
    </div>
     

   </Container>
  )
}