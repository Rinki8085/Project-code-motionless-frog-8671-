
import {
    Box,
    Text, 
    } from '@chakra-ui/react';
import './navbar.css'

function Footer(){
    return(
        <Box bgColor='green.500'>
            <Box>
                <ul className="footer-list">
                    <li>
                        <ul>
                            <li className="font-style-footer" style={{fontWeight:"bold",fontSize:"14px"}}>General</li>
                            <li className="font-style-footer">Home</li>
                            <li className="font-style-footer">Sign Up</li>
                            <li className="font-style-footer">Businesses / Restauranteurs</li>
                            <li className="font-style-footer">Advertising</li>
                            <li className="font-style-footer">About KindMeal.my</li>
                            <li className="font-style-footer">Help & FAQ</li>
                            <li className="font-style-footer">Terms & Conditions</li>
                            <li className="font-style-footer">Inspiring Partners</li>
                            <li className="font-style-footer">Lifestyle Ambassadors</li>
                            <li className="font-style-footer">Jobs & Careers</li>
                            <li className="font-style-footer">Contact Us</li>
                            
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li className="font-style-footer" style={{fontWeight:"bold",fontSize:"14px"}}>Features</li>
                            <li className="font-style-footer">Meat-Free Deals</li>
                            <li className="font-style-footer">Tasty Menus</li>
                            <li className="font-style-footer">Kind Moments</li>
                            <li className="font-style-footer">Meat-Free Recipes</li>
                            <li className="font-style-footer">Member Recommendations</li>
                            <li className="font-style-footer">Featured Restaurants</li>
                            <li className="font-style-footer">Vegetarian & Vegan Directory</li>
                            <li className="font-style-footer">Food Map</li>
                            <li className="font-style-footer">Become A Superhero</li>
                            <li className="font-style-footer">Vegan News & Vegeterian Articles</li>
                            <li className="font-style-footer">Latest Comments</li>
                        </ul> 
                    </li>
                    <li>
                        <ul>
                            <li className="font-style-footer" style={{fontWeight:"bold",fontSize:"14px"}}>Social Media</li>
                            <li className="font-style-footer">KindMeal Widget</li>
                            <li className="font-style-footer">Facebook</li>
                            <li className="font-style-footer">Twitter</li>
                            <li className="font-style-footer">Instagram</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li className="font-style-footer" style={{fontWeight:"bold",fontSize:"14px"}}>Mobile</li>
                            <li className="font-style-footer">iPhone & iPod App</li>
                            <li className="font-style-footer">Android App</li>
                        </ul> 
                        <ul style={{marginTop:"20px"}}>
                            <li className="font-style-footer" style={{fontWeight:"bold",fontSize:"14px"}}>Exciting Promos</li>
                            <li className="font-style-footer">Gandhi: Ending Mass Slaughter</li>
                            <li className="font-style-footer">Free Meals</li>
                            <li className="font-style-footer">Food Bloggers</li>
                            <li className="font-style-footer">Uber CHIRP</li>
                            <li className="font-style-footer">Jane Goodall Contest</li>
                            <li className="font-style-footer">Qin Digi iPhone 6</li>
                            <li className="font-style-footer">Feed The Poor</li>
                            <li className="font-style-footer">Win Superhero Gifts</li>
                            <li className="font-style-footer">Win an iPad Mini 3</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li className="font-style-footer" style={{fontWeight:"bold",fontSize:"14px"}}>PetFinder.my</li>
                            <li className="font-style-footer">Adopt A Pet</li>
                            <li className="font-style-footer">Smartphone Apps</li>
                            <li className="font-style-footer">WAGazine</li>
                            <li className="font-style-footer">Discussion Forum</li>
                            <li className="font-style-footer">Medical Fund</li>
                        </ul>
                    </li>
                </ul>
            </Box>
            <Box marginTop="30px" paddingBottom='1.5rem'>
                <center>
                    <Text fontSize="0.7rem" color='#eeeeee'>
                        Copyright © KindMeal.my, 2014 - 2022. All rights reserved.
                        <br/>
                        This website promotes compassionate, meat-free dining experience. Some food may contain eggs, dairy products or alcohol, please view individual listings for details.</Text>
                </center>
            </Box>
       </Box>

}

export default Footer;