import { Container } from "./styles";
import { GrFormAdd } from "react-icons/gr"
export function Button({title, loading = false, ...rest }) {
 return(
   <Container 
    type="button"
    disabled={loading}
    {...rest}
   >
    <div className="icone">
     <GrFormAdd/>
    </div>
    {loading? "Loading..." : title}
   </Container>
  
  )
}