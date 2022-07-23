import {Box,Grid, GridItem,Text,
    Image,
    ListItem,
    UnorderedList,} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import React from 'react';
import Form from './form';
import {AppContext} from '../context/AppContextProvider';
import AfterSignIn from '../Sub_pages/AfterSignIn';
import './signUp.css';

function JoinHtm(){
    const {success,showForm} = React.useContext(AppContext);

    return(
        <div>
            <div className="signUp">
            <Grid
                templateAreas={`
                                "aside main"
                                `}
                gridTemplateRows={'1fr'}
                gridTemplateColumns={'300px 1fr'}
                h='200px'
                >
                <GridItem area={'aside'}>
                   <Box borderRadius='10px' width={{lg:"14rem",md:"10rem",sm:"8rem"}} border='1px solid grey' height={{lg:"14rem",md:"15rem",sm:"16rem"}} align='center' p='5'>
                        <Link to='/join.htm'>
                        <Image width='150px' height='150px' src='https://www.kindmeal.my/images/join_normal.png' alt='image'/>
                        </Link>
                        <Text mt='5'>Food Lover Sign Up</Text>
                   </Box>
                   <Box borderRadius='10px' width={{lg:"14rem",md:"10rem",sm:"8rem"}} border='1px solid lightgrey' height={{lg:"14rem",md:"15rem",sm:"16rem"}} align='center' p='5' mt='2.8rem'>
                        <Link to='/joinShop.htm'>
                        <Image width='150px' height='150px' src='https://www.kindmeal.my/images/join_shop.png' alt='image'/>
                        </Link>
                        <Text mt='5'>Food Lover Sign Up</Text>
                   </Box>
                   <Box borderRadius='10px' width={{lg:"14rem",md:"10rem",sm:"8rem"}} border='1px solid lightgrey' height={{lg:"15rem",md:"10rem",sm:"18rem"}} align='center' p='5' mt='2.8rem'>
                        <Text color='#444444' fontSize={{lg:"1.3rem",sm:"1rem"}}>Why KindMeal?</Text>
                        <UnorderedList fontSize={{lg:'0.8rem',sm:"0.5rem"}} color='#888888' align='left'>
                            <ListItem>Exclusive meat-free deals</ListItem>
                            <ListItem>Share yummy food moments</ListItem>
                            <ListItem>Meet friendly food lovers</ListItem>
                            <ListItem>Discover cool restaurants</ListItem>
                            <ListItem>Email updates on tasty deals</ListItem>
                            <ListItem>Instant coupons & dinning</ListItem>
                            <ListItem>No upfront payment, booking or printing</ListItem>
                        </UnorderedList>
                        <Box>
                            <Link to='/join.htm'><Text fontSize='0.8rem' mt='1' color='#444444'>More about KindMeal »</Text></Link>
                        </Box>
                   </Box>
                </GridItem>
                <GridItem area={'main'}>
                   {showForm && <Form/>}
                   {success && <AfterSignIn/>}
                   {/* <AfterSignIn/> */}
                </GridItem>
            </Grid>
            </div>
        </div>
    )
}

//;
export default JoinHtm;