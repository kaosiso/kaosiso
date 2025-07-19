import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // Import NProgress CSS
import "../../src/index.css"
NProgress.configure({ showSpinner: false }); // Optional

const RouteProgress = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    setTimeout(() => {
      NProgress.done();
    }, 400); // Simulate loading time
  }, [location]);

  return null;
};

export default RouteProgress;
