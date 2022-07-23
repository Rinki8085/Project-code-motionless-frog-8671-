import {Box,Text,Image} from '@chakra-ui/react';
import {AppContext} from '../context/AppContextProvider';
import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import './navbar.css';

function LoggedIn(){
    const nav = useNavigate();
    const {logOut,fName,lName} = React.useContext(AppContext);
    const [isHovering, setIsHovering] = useState(false);
    const [showUserName,setShowUserName] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const handleOut=()=>{
        setShowUserName(false);
    }

    const handleIn=()=>{
        setShowUserName(true);
    }

    const handleLogout=()=>{
        logOut();
        nav('/logout')
    }

    return(
        <Box display='flex' p='5' flexDirection="row" gap='5' paddingRight='50px'>
            <Box width={{lg:"4rem"}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                <Image height='30px' src='https://www.kindmeal.my/images/icon_notice.png' alt=''/>
                <Box position='relative' left='5' bottom='5' color='white' cursor='pointer' >0</Box>
                {isHovering && <div className='notification'>
                    <center>
                        <Text>You cuurently have no notifications</Text>
                    </center>
                </div>}
            </Box>
            <Box >
                <Box display='flex' flexDirection='row' gap='4rem' height='60px' onMouseOver={handleIn} onMouseOut={handleOut}>
                    <Box display='flex' flexDirection='row' color='#666666'  >
                        <Text>{fName} {lName} </Text>&nbsp;&nbsp;<Text fontSize='0.8rem' pt='1'>▼</Text>
                    </Box>
                    <Box>
                        <Link to='/'>
                            <Image src='https://www.kindmeal.my/images/no_photo_header.png' alt='avatar'/>
                        </Link>
                    </Box>
                </Box>
                {showUserName && <div className='headerMenu-3' onMouseOver={handleIn} onMouseOut={handleOut}>
                    <Box>
                        My Coupons
                    </Box>
                    <Box>
                        My Recipes
                    </Box>
                    <Box>
                        My KindMeal Profile
                    </Box>
                    <Box>
                        Update Profile
                    </Box>
                    <Box>
                        Account Setting
                    </Box>
                    <Box onClick={handleLogout}>
                        Logout
                    </Box>
                </div>}
            </Box>
        </Box>
    )
}

//width: 30px;
// height: 30px;
// overflow: hidden;
// border: 1px solid #dddddd;
// background-color: #ffffff;
// border-radius: 0px;
export default LoggedIn;