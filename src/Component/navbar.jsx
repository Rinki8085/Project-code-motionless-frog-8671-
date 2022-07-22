import {Link} from 'react-router-dom';
import {Spacer,Flex,Image,Box} from '@chakra-ui/react';
//import { useDisclosure } from '@chakra-ui/react';
import LoginSignUp from './loginSignUp.jsx';
import './navbar.css';

const link = [
    {
        to:"/",
        title:"Home"
    },
    {
        to:"/deals.htm",
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

// const activeStyle = {
//     bgColor:"green.800",
//     textDecoration: "none"
//   };
  
// const baseStyle = {
//     color: "black",
//     textDecoration: "none"
//  };
  

function Navbar(){

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
                    <Box>
                        <LoginSignUp/>
                    </Box>
                </Flex>
            </Box>
            <Box>
                <Box display="flex" bgColor="green.500" color='white' height="40px"pl='5em' pr='5rem'>
                    {link.map((item)=>
                        <Link to={`${item.to}`} id={item.to}>
                            <Box  fontSize="1.2rem" p='1' width="8.7rem" textAlign="center" id={item.title}>{item.title}</Box>
                        </Link> 
                    )}
                </Box>
            </Box>
        </Box>
    )
}

export default Navbar;