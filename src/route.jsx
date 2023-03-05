
import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/main";
import { Preview } from "./pages/preview";

export const AppRoutes = () => {

  
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/preview/:name" element={<Preview/>}/>
    </Routes>
  );
};

