import { useEffect } from "react";


const ScrollToTop = () => {
  
  const location=window.location.pathname
console.log(window.location.pathname,"pad")
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};
export default ScrollToTop 