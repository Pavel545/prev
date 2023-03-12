
import { Route, Routes,Router } from "react-router-dom";
import ErrorPage from "./pages/erroe/error";
import { Main } from "./pages/main";
import { Preview } from "./pages/preview";

export const AppRoutes = () => {

  
  return (
    // <Router>
    //   <Route exact path="/" component={Main} />
    //   <Route path="/preview/:name" component={Preview} />

    // </Router>
    <Routes>
      <Route path="/"  element={<Main />} />
      <Route path="/preview/:name" element={<Preview/>}/>
      <Route path="*" element={<ErrorPage/>}/>

    </Routes>
  );
};

