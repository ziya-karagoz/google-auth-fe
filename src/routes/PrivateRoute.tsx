import React from "react";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
    children: React.ReactNode;
};
const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
    console.log(currentUser);
    if (Object.keys(currentUser).length !== 0) {
        return <>{children}</>;
    } else {
        return <Navigate to="/" />;
    }
};

export default PrivateRoute;
