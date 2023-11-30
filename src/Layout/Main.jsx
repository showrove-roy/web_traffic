import { Outlet } from "react-router-dom";
import { NavBar } from "../Components/NavBar/NavBar";
import { Footer } from "../Components/Footer/Footer";

export const Main = () => {
  return (
    < >
      <NavBar />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};
