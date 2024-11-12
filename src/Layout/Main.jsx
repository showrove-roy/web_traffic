import { Outlet } from "react-router-dom";
import { NavBar } from "../Components/NavBar/NavBar";
import { Footer } from "../Components/Footer/Footer";
import CustomCursor from "../Pages/CustomCursor";

export const Main = () => {
  return (
    < >
      <NavBar />
      <CustomCursor />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};
