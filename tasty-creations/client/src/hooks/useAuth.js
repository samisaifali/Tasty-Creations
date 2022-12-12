import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { isUserAuthenticated as checkIfUserAuthenticated } from "../utils/auth";

export default function useAuth(loginRequired = false) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const goToLogin = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  useEffect(() => {
    setIsAuthenticated(checkIfUserAuthenticated());
  }, []);

  useEffect(() => {
    if (loginRequired && !isAuthenticated) {
      goToLogin();
    }
  }, [isAuthenticated, goToLogin, loginRequired]);

  return {
    isAuthenticated,
    goToLogin,
  };
}
