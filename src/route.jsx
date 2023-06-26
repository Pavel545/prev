
import { Route, Routes, HashRouter,Router } from "react-router-dom";
import ErrorPage from "./pages/erroe/error";
import { Main } from "./pages/main";
import { Preview } from "./pages/preview";
export const AppRoutes = () => {
 
   
  return (
    
    <HashRouter>
      <Routes >
        <Route path="/" element={<Main />}></Route>
        <Route path="/preview/:id" element={<Preview />} />
        <Route path="*" element={<ErrorPage/>} />
        
      </Routes>
  </HashRouter>
    
    
  );
};
