import { createContext } from 'react';
import { app } from '../firebase/firebase.init';
import {getAuth} from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)


const KitchenContexts = ({children}) => {
    const name = 'siam';
    const authInfo = {
        name
    }
    return (

       
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default KitchenContexts;