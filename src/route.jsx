
import { Route, Routes, HashRouter } from "react-router-dom";
import ErrorPage from "./pages/erroe/error";
import { Main } from "./pages/main";
import { Preview } from "./pages/preview";
export const AppRoutes = () => {
 
   
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route exact path="/" component={Main} />
    //     <Route path="/preview/:name" component={Preview} />

    //   </Routes>
    // </BrowserRouter>
    <HashRouter>
      <Routes >
        <Route path="/" element={<Main />}></Route>
          <Route path="/preview/:name" element={<Preview />} />
          <Route path="*" element={<ErrorPage/>} />
        
      </Routes>
  </HashRouter>
    
    
  );
};
// export const router = createBrowserRouter(
//   createRoutesFromElements(
//       <Route history={unstable_HistoryRouter}  basename="/index">
//         <Route path="/"  element={<Main />} />
//         <Route path="/preview/:name" element={<Preview/>}/>
//         <Route path="*" element={<ErrorPage/>}/>
//       </Route>
//   )
// );
// export const rout = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main />,
//     children: [
//       {
//         path: "/preview/:name",
//         element: <Preview />,
//       },
//     ],
//   },
// ])
// createBrowserRouter(rout, {
//   basename: "/app",
// });
