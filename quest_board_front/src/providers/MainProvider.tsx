import React from 'react';
import {AuthProvider} from "./AuthProvider"
import { JobProvider } from './JobProvider';
import { UserProvider } from './UserProvider';

const MainProvider = ({children} : {children : JSX.Element}) => {
    return (
        <AuthProvider>
            <JobProvider>
                <UserProvider>
                    {children}
                </UserProvider>
            </JobProvider>
        </AuthProvider>
    )
}

export default MainProvider;