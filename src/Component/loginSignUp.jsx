import {Link} from 'react-router-dom';
import {Spacer,Flex,Button,Image,Box,Modal,Text,
    Input,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import {useState} from 'react';
import React,{useContext} from 'react';
import {AppContext} from '../context/AppContextProvider';
import './navbar.css';

export default function LoginSignUp(){
    const {userLogin} = React.useContext(AppContext);
    const [text,setText] = useState('');
    const [fName,setFName] = useState('');
    const [lName,setLName] = useState('');
    const { isOpen: isEditOpen , onOpen: onEditOpen, onClose: onEditClose } = useDisclosure();
    const { isOpen: isDeleteOpen , onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();
    const [email,setemail] = useState('');
    const  [pswrd,setPswrd] = useState('');
    let data = JSON.parse(localStorage.getItem('data'));
    
    const handleClick = ()=>{
        let count = 0;
        let cnt = 0;
        for(let i=0; i<data.length; i++){
            if(email===data[i].email){
                setFName(data[i].fname);
                setLName(data[i].lname);
                count++;
            }
            if(pswrd===data[i].password){
                cnt++;
            }
        }
        if(count>0 && cnt>0){
            console.log(fName,lName)
            userLogin(fName);
        }else if(count===0){
            setText('please enter a valid value for email')
        }else if(cnt===0){
            setText("Please enter a valid value for password")
        }else{
            setText("Please enter valid value for email and password")
        }
    }

    return(
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
                                    <Text color='red' fontSize='0.8rem' p='2'>{text}</Text>
                                    <Input placeholder='Your Email' value={email} onChange={(e)=>setemail(e.target.value)} />
                                    <br/>
                                    <br/>
                                    <Input placeholder="Your Password" value={pswrd} onChange={(e)=>setPswrd(e.target.value)} />
                                    <br/>
                                </Box>
                                <br/>
                                <br/>
                                <Button mt='2' fontSize="1.4rem" fontWeight="bold" width="220px" bgColor="green.300" onClick={handleClick}>Login</Button>
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
                            <Link to='/join.htm'>
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
                            <Link to='/joinShop.htm'>
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
    )
}