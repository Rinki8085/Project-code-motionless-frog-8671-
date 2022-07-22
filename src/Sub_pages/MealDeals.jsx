import {Box,Heading,Text,HStack,VStack,Input,Select,Image} from '@chakra-ui/react';
import MealList from './MealsList';
import './mealdeals.css';

function MealDeals(){
    return(
        <Box>
            <Box bgColor='#f0f0f0'>
                <Box paddingLeft='20px' paddingRight="30px" width='84%' margin='auto'>
                    <HStack fontSize='1.8rem' pt='2'>
                        <Text color='#444444'>Meat-Free Deals </Text><Text paddingLeft='10px' paddingRight="10px" color='#888888'> | </Text><Text color='#888888'>Restaurants In Malaysia</Text>
                    </HStack>
                    <br/>
                    <Box fontSize='0.95rem' color='black'>
                        <Text>
                        Browse delicious meat-free, vegetarian deals from top restaurants and cafes! Just click on "Get Free Coupon" to obtain instant discounts and dine at the restaurants. No upfront payment, booking or printing is needed. If you share it on social media, you'll even DOUBLE your discount!
                        </Text>
                        <br/>
                        <Text>Download our <span style={{color:"blue"}}>Mobile app</span> now to easily get coupons and start dining in a few seconds. Effortlessly save lives, health, environment and money now!
                        </Text>
                    </Box>
                    <HStack gap='2' pt='4' pb='35px'>
                        <Box>
                            <Input bgColor='white' placeholder="Search Shop or Deal Name" width={{lg:"230px",sm:"180px"}}/>
                        </Box>
                        <Box>
                            <Select placeholder='All Categories' width='160px' bgColor='white'>
                                <option value='Pasta'>Pasta</option>
                                <option value='Burger'>Burger</option>
                                <option value='Breakfast'>Breakfast</option>
                                <option value="Salad">Salad</option>
                                <option value="Tea & Dessert">Tea & Dessert</option>
                                <option value="Bakery">Bakery</option>
                                <option value="Local Delights">Local Delights</option>
                                <option value="Jap & Korean">Jap & Korean</option>
                                <option value="Chinese">Chinese</option>
                                <option value="Indian">Indian</option>
                            </Select>
                        </Box>
                        <Box>
                        <Select placeholder='All Locations' width='200px' bgColor='white'>
                                <option value='Sunai Buloh, Selangor'>Sunai Buloh, Selangor</option>
                                <option value='Kuala Lumpur, Wilayah Persekutuan'>Kuala Lumpur, Wilayah Persekutuan</option>
                                <option value='Kepong, Kuala Lumpur'>Kepong, Kuala Lumpur</option>
                                <option value="Seri Kembangan, Selangor">Seri Kembangan, Selangor</option>
                                <option value="Tea & Dessert">Tea & Dessert</option>
                                <option value="Mont Kiara, Kuala Lumpur">Mont Kiara, Kuala Lumpur</option>
                                <option value="Petaling Jaya, Selangor">Petaling Jaya, Selangor</option>
                                <option value="Puchong, Selangor">Puchong, Selangor</option>
                                <option value="Petaling Jaya, Selangor">Petaling Jaya, Selangor</option>
                            </Select>
                        </Box>
                        <Box>
                            <button className='deals'>Search Deals</button>
                        </Box>
                        <Box>
                            <button className='restaurant'>Browse Restaurant</button>
                        </Box>
                    </HStack>
                </Box>
            </Box>
            <Box margin='auto' width="84%" mt='5'>
                <Box marginTop="50px">
                    <Image src='https://www.kindmeal.my/images/ads/banner_janegoodall_message.jpg' alt='showStopper'/>
                </Box>
                <Box marginTop='50px'>
                    <MealList/>
                </Box>
            </Box>
        </Box>
    )
}

export default MealDeals;