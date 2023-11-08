import { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Protected = ({ children, authentication = true }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const authStatus = useSelector((state) => state.user.status);

  useEffect(() => {
    // if (AuthStatus == true) {
    //   navigate("/");
    // } else if (AuthStatus == false) {
    //   navigate("/signin");
    // }

    if (authentication && authStatus !== authentication) {
      navigate("/signin");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }

    setLoading(false);
  }, [authStatus, navigate,authentication]);

  return loading ? <h1>Loading...</h1> : <>{children}</>;
};

export default Protected;
