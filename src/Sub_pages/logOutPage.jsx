import JoinHtm from '../Pages/JoinHtm';
import {Box,HStack,Image,Text} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';

export default function Logout(){
    let navigate = useNavigate();

    const handleClick=()=>{
        navigate('/')
    }

    return(
        <Box mt='4rem' ml='7rem' mb='4rem' >
            <HStack pl='5'>
                <Image width='80px' height='80px' src='https://www.kindmeal.my/images/icon_tick.png' alt='success'/>
                <Text pl='5' fontSize='1.9rem' color='#444444'>Log Out Successful</Text>
                
            </HStack>
            <Box pl='5' >
                <Text fontSize='1.1rem' color='#666666'>  
                   <br/>
                    <br/>         
                    You have successfully logged out of KindMeal.my
                    <br/>
                    <br/>
                    Whenever you hunger for absolutely delicious and irresistible vegetarian food, we're here to satisfy your deepest cravings. So, do visit us again!
                    <br/>
                    <br/>
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
                    Return to main page
                </Box>
            </Box>
        </Box>
    )
}