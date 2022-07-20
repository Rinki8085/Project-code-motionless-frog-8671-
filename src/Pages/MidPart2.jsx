import {Box,Text,Flex,Image,Stack,Heading} from '@chakra-ui/react';

function MidPart2(){
    return(
        <Box border='1px solid teal'>
            <Box marginTop="50px">
                <Heading fontWeight='normal' color="#666666" textAlign="center">Introducing The World's 1st Meat-Free Lifestyle Platform</Heading>
                <center>
                    <Flex justifyContent="center" p='5'>
                        <Text p='5' color="#666666" fontSize={{lg:'1.2rem',md:"0.9rem",sm:"0.75rem"}}> Brought to you by</Text>
                        <Image width={{lg:'19rem',md:"12rem",sm:"9rem"}} src="https://www.kindmeal.my/images/logo-petfinder.png" alt="image-skils"/>
                    </Flex>
                </center>
                <Box marginBottom='40px' marginTop='10px'>
                    <Text textAlign='center' fontSize='1.6rem' color='#888888'>
                        Instant coupon & dining. No upfront coupon payment, booking or printing.
                    </Text>
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="center" gap='5' paddingTop='2.6rem'>
                    <Box border='1px solid blue' width={{lg:"14.7rem",md:""}} height={{lg:"235px"}}></Box>
                    <Box border='1px solid blue' width={{lg:"14.7rem"}} height={{lg:"235px"}}></Box>
                    <Box border='1px solid blue' width={{lg:"14.7rem"}} height={{lg:"235px"}}></Box>
                    <Box border='1px solid blue' width={{lg:"14.7rem"}} height={{lg:"235px"}}></Box>
                </Box>
            </Box>
        </Box>
    )
}

export default MidPart2;