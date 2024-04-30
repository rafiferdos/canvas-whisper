import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";


// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {
    const location = useLocation()

    const { user, loading } = useContext(AuthContext)

    if (loading)
        return <div className="min-h-screen flex items-center justify-center"><span className="loading loading-infinity loading-lg text-primary"></span></div>

    if (!user)
        return <Navigate to='/login' state={location?.pathname || '/'} />
    return children
};

export default PrivateRoutes;