import {Box} from '@chakra-ui/react';
import Slider from './Slider';
import MidPart1 from './MidPart1';
import MidPart2 from './MidPart2';
import Footer from '../Component/footer';


function Home(){
    return(
        <Box>
            <Slider/>
            <Box marginTop="40px" paddingBottom="55px" boxShadow="rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset">
                <MidPart1/>
            </Box>  
            <Box paddingTop='40px'>
                <MidPart2/>
            </Box>
            <Box>
                <Footer/>
            </Box>
        </Box>
    )
}

export default Home;