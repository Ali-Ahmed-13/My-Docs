// import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Website from "./Website.jsx";
import ReactCode from "./Pages/ReactCode.jsx";
import ReactComp from "./Pages/ReactComp.jsx";
import Redux from "./Pages/Redux.jsx";
let App = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Website />}>
          <Route path="/react" element={<ReactCode />} />
          <Route path="/react-comp" element={<ReactComp />} />
          <Route path="/redux" element={<Redux />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
