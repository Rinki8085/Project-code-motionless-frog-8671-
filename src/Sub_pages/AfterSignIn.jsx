import {Box,HStack,Image,Text} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
import React from 'react';
import {AppContext} from '../context/AppContextProvider';

export default function AfterSignIn(){
    let navigate = useNavigate();
    const {userLogin,email} = React.useContext(AppContext);

    const handleClick=()=>{
        navigate('/deals.htm');
        userLogin();
    }

    return(
        <Box m='4'>
            <HStack pl='5'>
                <Image width='80px' height='80px' src='https://www.kindmeal.my/images/icon_tick.png' alt='success'/>
                <Text pl='5' fontSize='1.9rem' color='#444444'>Sign Up Successful</Text>
                
            </HStack>
            <Box pl='5'>
                <Text fontSize='1.1rem' color='#666666'>  
                   <br/>
                    <br/>         
                    Congratulations Wd, you're now ready to get started on KindMeal.my.
                    <br/>
                    <br/>
                    A verification email has been sent to <b>{email}</b>
                    . Please click on the link there to activate your account and begin redeeming coupons.
                    <br/>
                    <br/>
                    Yummy meals are waiting for you!
                </Text>
            </Box>
            <Box p='5'>
                <Box 
                mt='5' 
                bgColor='red.500' 
                width={{lg:"15rem",sm:"9rem"}} 
                height={{lg:"2.4rem",sm:"3.7rem"}} 
                color='white' 
                fontWeight='bold' 
                p='1' 
                align='center' 
                borderRadius='5px'
                cursor='pointer'
                onClick={handleClick}
                >
                    Login to account
                </Box>
            </Box>
        </Box>
    )
}
