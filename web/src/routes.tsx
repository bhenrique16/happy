import React from "react";
import {BrowserRouter,Route,Routes as Rts} from 'react-router-dom';
import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";

function Routes() {
  return (
    <BrowserRouter>
      <Rts>
      <Route path="/"  element={<Landing/>}/>
      <Route path="/app"  element={<OrphanagesMap/>}/>
      </Rts>
    </BrowserRouter>
  );
}
 
export default Routes;
