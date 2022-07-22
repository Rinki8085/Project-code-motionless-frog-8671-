import {Box,Text,Flex,Image,Stack,Heading} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

function MidPart2(){
    return(
        <Box>
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
                <Box display="flex" flexDirection="row" justifyContent="center" gap='5' paddingTop='2.6rem' color='#888888' marginBottom="40px">
                    <Box borderRadius='10px' width={{lg:"15.7rem",md:"10rem"}} height={{lg:"235px"}} padding='1rem' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px">
                        <center>
                            <Link to='/'>
                                <Image src="https://www.kindmeal.my/images/intro_deal.png" alt="instant coupon" mb='5'/>
                            </Link>
                            <Text fontSize='1.2rem' fontWeight="500">Get Great Deals</Text>
                            <Text fontSize='0.9rem'>Show our FREE digital coupons to instantly enjoy exciting deals</Text>
                        </center>
                        
                    </Box>
                    <Box borderRadius='10px' width={{lg:"15.7rem",md:"10rem"}} height={{lg:"235px"}} padding='1rem' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px">
                        <center>
                            <Link to='/'>
                                <Image src="https://www.kindmeal.my/images/intro_kindmoment.png" alt="instant coupon" mb='5'/>
                            </Link>
                            <Text fontSize='1.2rem' fontWeight="500">Share KindMoments</Text>
                            <Text fontSize='0.9rem'>Spread the joy by sharing your yummy dinning moments</Text>
                        </center>
                    </Box>
                    <Box borderRadius='10px' width={{lg:"15.7rem",md:"10rem"}} height={{lg:"235px"}} padding='1rem' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px">
                        <center>
                            <Link to='/'>
                                <Image src="https://www.kindmeal.my/images/intro_menu.png" alt="instant coupon" mb='5'/>
                            </Link>
                            <Text fontSize='1.2rem' fontWeight="500">Discover Delicious Food</Text>
                            <Text fontSize='0.9rem'>Explore the exquisite offering and creative menus</Text>
                        </center>
                    </Box>
                    <Box borderRadius='10px' width={{lg:"15.7rem",md:"10rem"}} height={{lg:"235px"}} padding='1rem' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px">
                        <center>
                            <Link to='/'>
                                <Image src="https://www.kindmeal.my/images/intro_friends.png" alt="instant coupon" mb='5'/>
                            </Link>
                            <Text fontSize='1.2rem' fontWeight="500">Meet Food Lovers</Text>
                            <Text fontSize='0.9rem'>Make new, compassionate friends and share great good food tips</Text>
                        </center>
                    </Box>        
                </Box>
                <Box mt={{lg:"5rem",md:"3rem",sm:"1rem"}} fontSize='1.2rem' color='#888888' mb={{lg:"5rem",md:"3rem",sm:"1rem"}}>
                    <center>    
                    Any restaurant or cafe can join KindMeal, vegetarian or not, as long as the deals and menu featured are meat-free.
                    <br/>
                    Enjoy a great meat-free dining experience. Easily save animal lives, health, environment and money now!
                    </center>
                </Box>
                <Box marginBottom="40px">
                    <center>
                        <Link to='/'>
                            <Box bgColor='red.500' borderRadius="10px" color='white' textAlign='center' width={{lg:"28rem"}} height={{lg:"5.9rem"}} >
                                <Text fontSize={{lg:"2.5rem"}} fontWeight='bold'>Join KindMeal Now</Text>
                                <Text fontSize='1rem' lineHeight='10px'>Your tasty journey begins here</Text>
                            </Box>
                        </Link>
                    </center>
                </Box>
                <center>
                    <Text fontSize={{lg:"1.5rem"}} color='#888888'>
                        As Featured In
                    </Text>
                </center>
                <Box >
                    <Image src="https://www.kindmeal.my/images/media-feature2.png" alt='featured' width='100%'/>
                </Box>
                <Box bgColor='lightgrey' mt='2.5rem'>
                    <Image src="https://www.kindmeal.my/images/banner_whykindmeal.png" alt='featured' width='100%'/>
                </Box>
            </Box>
            <Box>
            </Box>
        </Box>
    )
}

//
export default MidPart2;