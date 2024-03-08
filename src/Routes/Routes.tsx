import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./appRoutes";

export function Routes(){
  return(
    <BrowserRouter>
      {true ? <AppRoutes/> : <></>}
    </BrowserRouter>
  )
}
