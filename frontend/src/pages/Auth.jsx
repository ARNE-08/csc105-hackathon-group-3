import React, { useContext } from 'react'
import './Auth.css'
import Login from '../components/Login'
import Register from '../components/Register'
import SnackBarMessage from '../share/SnackBarMessage'
import { Box, Snackbar } from '@mui/material'
import { useState, useMemo } from 'react'
import GlobalContext from '../share/GlobalContext'

function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const { user, setUser } = useContext(GlobalContext)
    const { status, setStatus } = useContext(GlobalContext)

    const generatekey = () => {
        return Math.random();
    };

    return (
        // <GlobalContext.Provider value={globalContextValue}>
        <Box class="UserAuthPage">
            {isLogin ? (
                <Login setIsLogin={setIsLogin} />
            ) : (
                <Register setIsLogin={setIsLogin} setStatus={setStatus}/>
            )}
            {/* {status ? (
                <SnackBarMessage key={generatekey()} open={status.open} severity={status.severity} message={status.msg} />
            ) : null} */}
        </Box>
    )
}

export default Auth