import { Container, Profile } from "./styles";
import { Input } from "../Input"
export function Header(){
 return(
   <Container>

    <div className="logo">Rocketmovies</div>
      <Input placeholder="Search For Movie" />
     <Profile>
       <div>
         <strong>Rodrigo Santos</strong>
         <a> Exit </a>
       </div>

      <img src="https://github.com/rodrigosantos0660.png"
      alt="img user"
      />


     </Profile>
   </Container>
  )
}