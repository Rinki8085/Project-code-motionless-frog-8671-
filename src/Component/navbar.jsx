import {Link} from 'react-router-dom';
import {HStack,Spacer,Flex,Button,Image,Box,Modal,Text,
    Input,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import './navbar.css';

const link = [
    {
        to:"/",
        title:"Home"
    },
    {
        to:"/Meal-Deals",
        title:"Meal Deals"
    },
    {
        to:"/KindMoments",
        title:"KindMoments"
    },
    {
        to:"/Hot-Picks",
        title:"Hot Picks"
    },
    {
        to:"/Recipes",
        title:"Recipes"
    },
    {
        to:"/Directory",
        title:"Directory"
    },
    {
        to:"/Articles",
        title:"Articles"
    },
    {
        to:"/Help",
        title:"Help"
    }
]
function Navbar(){
    const { isOpen: isEditOpen , onOpen: onEditOpen, onClose: onEditClose } = useDisclosure();
    const { isOpen: isDeleteOpen , onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();
    return(
        <Box>
            <Box>
                <Flex height="90px" paddingLeft="30px" paddingRight="30px">
                    <Box pl='5' >
                        <Link to='/'>
                        <Image width='360px' height='80px' src="https://www.kindmeal.my/images/logo-kindmeal.png"/>
                        </Link>
                    </Box>
                    <Spacer/>
                    <Box display='flex' p='5' flexDirection="row" gap='5'>
                        <Box>
                            <Link to='/'>
                                <Image width="40px" height="40px" src="https://www.kindmeal.my/images/follow_blog_grey.png"/>
                            </Link>
                        </Box>
                        <Box>
                            <Link to='/'>
                                <Image width="40px" height="40px" src="https://www.kindmeal.my/images/follow_facebook_grey.png"/>
                            </Link>
                        </Box>
                        <Box>
                            <Link to='/'>
                                <Image width="40px" height="40px" src="https://www.kindmeal.my/images/follow_twitter_grey.png"/>
                            </Link>
                        </Box>
                    </Box>
                    <Spacer/>
                    <Box display='flex' p='5' flexDirection="row">
                        <Box p='3' mt='1' fontSize="12px" color="#444444">Login </Box>
                        <Box pt='3' display='flex' flexDirection="row">
                            <Button p='2' width="80px" height="26px" bgColor="#35619f" color="white" fontWeight="bold" fontSize="13px">Facebook</Button>&nbsp;&nbsp;
                            <Button p='2' width="80px" height="26px" bgColor="#666666" color="white" fontWeight="bold" fontSize="13px" onClick={onDeleteOpen}>Email</Button>
                            <Modal isOpen={isDeleteOpen} onClose={onDeleteClose} id="mymodals">
                                <ModalOverlay />
                                <ModalContent pt='5'>
                                    <center>
                                    <Image textAlign='center' src="https://www.kindmeal.my/images/logo-kindmeal.png"/>
                                    </center>
                                    <ModalBody>
                                        <center>
                                            <Text>Memory Login</Text>
                                            <Box width="322px" height="74px" mt='4'>
                                                <Input placeholder='Your Email'/>
                                                <br/>
                                                <br/>
                                                <Input placeholder="Your Password"/>
                                            </Box>
                                            <br/>
                                            <br/>
                                            <Button mt='2' fontSize="1.4rem" fontWeight="bold" width="220px" bgColor="green.300">Login</Button>
                                            <br/>
                                            <br/>
                                            <hr/>
                                            <Button mt='5' fontWeight="bold" width="300px" bgColor="#35619f">Login With Facebook</Button>
                                            <Flex mt='4'>
                                            <Text>Forgot Password?</Text>
                                            <Spacer/>
                                            <Text>Not a member? Signup FREE</Text>
                                        </Flex>
                                        </center>
                                    </ModalBody>
                                </ModalContent>
                            </Modal>
                        </Box>
                        <Box m='3' 
                            borderLeft="1px solid grey" 
                            pl='2' pt='1' 
                            fontSize="12px" 
                            color="#444444" 
                            cursor='pointer' 
                            onClick={onEditOpen}
                        >
                            Signup
                        </Box>
                        <Modal width='550px' isOpen={isEditOpen} onClose={onEditClose} id='mymodal'>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader >
                                    <center>
                                    <Image textAlign='center' src="https://www.kindmeal.my/images/logo-kindmeal.png"/>
                                    </center>
                                </ModalHeader>
                                <ModalBody color="#666666" fontFamily="Arial">
                                    <center>
                                        <Box>
                                            <Text fontSize='1.2rem' fontWeight="bold">Join KindMeal For FREE Now</Text>
                                            <Text fontSize='0.9rem'>Please select the type of membership to proceed</Text>
                                        </Box>
                                        <Link to='/Signup'>
                                            <Flex mt='5' p='5' border="1px solid lightgrey" borderRadius='10'>
                                                <Image width="170px" height="129px" src="https://www.kindmeal.my/images/join_normal.png"/>
                                                <Box pl='1'>
                                                    <Text textAlign="left" fontSize='1rem' fontWeight="bold">Food Lover</Text>
                                                    <Text textAlign="justify">
                                                    Join FREE to enjoy yummy deals, share reviews & meet our community of compassionate food lovers.
                                                    </Text>
                                                </Box>
                                            </Flex>
                                        </Link>
                                        <Link to='/Signup'>
                                            <Flex mt='5' p='5' border="1px solid lightgrey" borderRadius='10'>
                                                <Image width="140px" height="129px" src="https://www.kindmeal.my/images/join_shop.png"/>
                                                <Box pl='1'>
                                                    <Text textAlign="left" fontSize='1rem' fontWeight="bold">Restaurant / Shop Owner</Text>
                                                    <Text textAlign="justify">
                                                    List your food outlet, create exciting vegetarian deals & showcase your delicious menu for FREE. Enjoy our yummy deals, share reviews & meet food lovers too.
                                                    </Text>
                                                </Box>
                                            </Flex>
                                        </Link>
                                        <Flex mt='4'>
                                            <Text>Member Login</Text>
                                            <Spacer/>
                                            <Text>Forgot Password?</Text>
                                        </Flex>
                                    </center>
                                </ModalBody>
                            </ModalContent>
                        </Modal>
                    </Box>
                </Flex>
            </Box>
            <Box>
                <Box display="flex" bgColor="green.500" color='white' height="40px"pl='5em' pr='5rem'>
                    {link.map((item)=>
                        <Link to={`${item.to}`}>
                            <Box fontSize="1.2rem" p='1' width="8.7rem" textAlign="center">{item.title}</Box>
                        </Link> 
                    )}
                </Box>
            </Box>
        </Box>
    )
}

export default Navbar;