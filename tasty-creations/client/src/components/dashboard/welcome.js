import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Welcome = () => {

    const [authenticated, setAuthenticated] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setAuthenticated(loggedInUser);
        }
    });
    if(!authenticated) {
        navigate("/login");
    }else {
        return (
            <div className="welcomeUser">
              <h2>Welcome User</h2>
            </div>
        )    
    }
    
};
export default Welcome;