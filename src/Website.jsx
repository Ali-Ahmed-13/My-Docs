import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";

const Website = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Website;
