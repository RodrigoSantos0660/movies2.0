import { Container, Form, Background  } from "./styles";
import { Input } from"../../components/Input";
import { FiMail, FiLock} from "react-icons/fi"
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function Signin () {
 return(
   <Container>
     <Form>
      <h1>Movies 2.0</h1>
      <p>App for searching your best movies</p>
      <h2>Make your login</h2>

      <Input 
       placeholder="email"
       type="text"
       icon={FiMail}
      />
      
      <Input 
       placeholder="Password"
       type="Password"
       icon={FiLock}
      />

      <Button title="text"/>
     
     <div class ="buttontext">
      < ButtonText title="create your account"/>
    </div>
      
     </Form>

     <Background/>

   
   </Container>
  
  )
};