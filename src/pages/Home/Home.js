import { Typography } from '@mui/material';
import React,{useEffect} from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import {login} from '../../store/actions/authAction'


const Home = () => {

    const dispatch = useDispatch();
    const authentication = useSelector(state => state.Authentication.user);


    useEffect(() => {
        dispatch(login("hehe@gmail.com","1"));
    }, [])
    useEffect(() => {
        //console.log('authen: ', authentication);
    }, [authentication])

    return (
        <div>
            <Typography style={{minHeight: '100vh', fontSize: '3rem'}}>Home</Typography>
        </div>
    )
}

export default Home
