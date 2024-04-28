import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";


// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({children}) => {
    const location = useLocation()

    const {user} = useContext(AuthContext)
    
    if (!user)
        return <Navigate to='/login' state={location?.pathname || '/'} />
    return children
};

export default PrivateRoutes;