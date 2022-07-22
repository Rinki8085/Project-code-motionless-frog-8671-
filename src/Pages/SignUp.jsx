import JoinHtm from './JoinHtm';
import {Box,Image} from '@chakra-ui/react';


function Signup(){
    return(
        <Box>
            <Box mb='48rem'>
            <JoinHtm/>
            </Box>
            <Box bgColor='lightgrey' mt='2.5rem'>
                <Image src="https://www.kindmeal.my/images/banner_whykindmeal.png" alt='featured' width='100%'/>
            </Box>
        </Box>
    )
}

export default Signup;