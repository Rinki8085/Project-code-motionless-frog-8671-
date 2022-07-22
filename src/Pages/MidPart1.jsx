import {Box,Spacer,Text,Image} from '@chakra-ui/react';
import {Link} from 'react-router-dom';


function MidPart1(){
    return(
        <Box>
            <Box style={{width:"85%",margin:"auto",padding:"15px",boxShadow:"rgba(17, 17, 26, 0.1) 0px 0px 16px"}}>
                <Box display="flex" flexDirection="row">
                    <Box>
                        <Text  color="#666666" fontSize={{lg:"1.6rem",sm:"1rem"}}>Latest News & Videos</Text>
                    </Box>
                    <Spacer/>
                    <Box display="flex" flexDirection="row" gap="3">
                        <Link to='/'><Text color="#2184ff" fontSize={{lg:"1.25rem",sm:"0.8rem"}}>Save Lives with Your Blog</Text></Link>.
                        <Link to='/'><Text color="#2184ff" fontSize={{lg:"1.25rem",sm:"0.8rem"}}>News & Articles</Text></Link>.
                        <Link to='/'><Text color="#2184ff" fontSize={{lg:"1.25rem",sm:"0.8rem"}}>Follow Our Facebook</Text></Link>
                    </Box>
                </Box>
                <Box display='flex' gap='4'>
                    <Box width='12.5rem'>
                        <Box>
                            <Image
                            src='https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/292745281_1082747175695504_110302981980322070_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=5_yVdW-VKbIAX-b6H16&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT97sryUkVxuWOGHCSDnbJQdtRST_vpnRay5MIWry0e8_A&oe=62DC55E6' 
                            alt='blogs'
                            width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                            height={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                            borderRadius="5px"
                            />
                        </Box>
                        <Box>
                            <Text fontSize="0.75rem" color='#888888' textAlign="center">Animals Adopting Other Animals</Text>
                        </Box>
                    </Box>
                    <Box>
                        <Box>
                            <Image
                            src='https://external-xsp1-2.xx.fbcdn.net/emg1/v/t13/4527024197553285358?url=https%3A%2F%2Fwww.aljazeera.com%2Fwp-content%2Fuploads%2F2022%2F07%2F000_32ET4KC.jpg%3Fresize%3D1200%252C630&fb_obo=1&utld=aljazeera.com&stp=c0.5000x0.5000f_dst-emg0_p630x630_q75&ccb=13-1&oh=00_AT9qZCMIWYRF4B60Z8GHSPdMLbDqt_ZZFZE2piUvyJzpZA&oe=62D8DA5C&_nc_sid=c504da' 
                            alt='blogs'
                            width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                            height={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                            borderRadius="5px"
                            />
                        </Box>
                        <Box width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}>
                            <Text fontSize="0.75rem" color='#888888' textAlign="center">Malaysia Seizes Elephant Tusks, Pangolin Scales In Major Bus..</Text>
                        </Box>
                    </Box>
                    <Box>
                        <Box>
                            <Image
                            src='https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/290389529_722462468872404_8153272933717469155_n.jpg?stp=dst-jpg_s720x720&_nc_cat=107&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=BXQsX1PfrFIAX-7JI2M&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT8nWp50cwGsbXLW7bPrH_WWU9Zvu43xm65wJ1JVbeKXeA&oe=62DBD1F2' 
                            alt='blogs'
                            width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                            height={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                            borderRadius="5px"
                            />
                        </Box>
                        <Box width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}>
                            <Text fontSize="0.75rem" color='#888888' textAlign="center">Lushy Nut Butter 🔥</Text>
                        </Box>
                    </Box>
                    <Box>
                        <Box>
                            <Image
                            src='https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/258283240_969139953960892_9020817108506674674_n.jpg?stp=dst-jpg_s720x720&_nc_cat=109&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=HS6udn0cEsYAX9fkImj&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT-19qwVHEh-2x-Y45rhq-bDeC2p5-ErlHKoFQ2AlehPNQ&oe=62DC6FFC' 
                            alt='blogs'
                            width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                            height={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                            borderRadius="5px"
                            />
                        </Box>
                        <Box width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}>
                            <Text fontSize="0.75rem" color='#888888' textAlign="center">Rescue Cow Didn''t Have Any Friends Until He Met A Dalmatian</Text>
                        </Box>
                    </Box>
                    <Box>
                        <Box>
                            <Image
                            src='https://external-xsp1-2.xx.fbcdn.net/emg1/v/t13/14374414952122747506?url=https%3A%2F%2Fichef.bbci.co.uk%2Fnews%2F1024%2Fbranded_news%2F13F40%2Fproduction%2F_125882718_p0clg9dj.jpg&fb_obo=1&utld=co.uk&stp=c0.5000x0.5000f_dst-emg0_p576x576_q75&ccb=13-1&oh=00_AT8II-t1NP-CZTIU3LsSUcLDfO9JvlKTfMBVeAR6r7le-w&oe=62D9542C&_nc_sid=c504da' 
                            alt='blogs'
                            width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                            height={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                            borderRadius="5px"
                            />
                        </Box>
                        <Box width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}>
                            <Text fontSize="0.75rem" color='#888888' textAlign="center">The Moment A Kangaroo Is Rescued From Flood Waters</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box marginTop="40px">
                <Box style={{width:"85%",margin:"auto",padding:"15px",boxShadow:"rgba(17, 17, 26, 0.1) 0px 0px 16px"}}>
                    <Box display="flex" flexDirection="row">
                        <Box>
                            <Text  color="#666666" fontSize={{lg:"1.6rem",sm:"1rem"}}>Yummylicious Moments</Text>
                        </Box>
                        <Spacer/>
                        <Box display="flex" flexDirection="row" gap="3">
                            <Link to='/'><Text color="#2184ff" fontSize={{lg:"1.25rem",sm:"0.8rem"}}>Secret Recipes</Text></Link>.
                            <Link to='/'><Text color="#2184ff" fontSize={{lg:"1.25rem",sm:"0.8rem"}}>Member Hot Picks</Text></Link>.
                            <Link to='/'><Text color="#2184ff" fontSize={{lg:"1.25rem",sm:"0.8rem"}}>Photo moments</Text></Link>
                        </Box>
                    </Box>
                    <Box display='flex' gap='4'>
                        <Box width='12.5rem'>
                            <Box>
                                <Image
                                src='https://www.kindmeal.my/photos/moment/24/24178-46248-s.jpg' 
                                alt='blogs'
                                width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                height={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                borderRadius="5px"
                                border='1px solid lightgrey'
                                />
                            </Box>
                            <Box>
                                <Text fontSize="1rem" color='#888888' textAlign="center">素时代 Veggie Century</Text>
                                <Text fontSize="0.75rem" color='#888888' textAlign="center">VyVian</Text>
                            </Box>
                        </Box>
                        <Box>
                            <Box  width='12.5rem'>
                                <Image
                                src='https://www.kindmeal.my/photos/moment/24/24177-46243-s.jpg' 
                                alt='blogs'
                                width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                height={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                borderRadius="5px"
                                border='1px solid lightgrey'
                                />
                            </Box>
                            <Box width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}>
                                <Text fontSize="1rem" color='#888888' textAlign="center">膳济素食点心楼</Text>
                                <Text fontSize="0.75rem" color='#888888' textAlign="center">MayNg</Text>
                            </Box>
                        </Box>
                        <Box>
                            <Box  width='12.5rem'>
                                <Image
                                src='https://www.kindmeal.my/photos/moment/24/24175-46239-s.jpg' 
                                alt='blogs'
                                width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                height={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                borderRadius="5px"
                                border='1px solid lightgrey'
                                />
                            </Box>
                            <Box width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}>
                                <Text fontSize="1rem" color='#888888' textAlign="center">Raw Chef Yin</Text>
                                <Text fontSize="0.75rem" color='#888888' textAlign="center">YinYinBoey</Text>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Image
                                src='https://www.kindmeal.my/photos/moment/24/24174-46238-s.jpg' 
                                alt='blogs'
                                width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                height={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                borderRadius="5px"
                                border='1px solid lightgrey'
                                />
                            </Box>
                            <Box width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}>
                                <Text fontSize="1rem" color='#888888' textAlign="center">Raw Chef Yin</Text>
                                <Text fontSize="0.75rem" color='#888888' textAlign="center">YinYinBoey</Text>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Image
                                src='https://www.kindmeal.my/photos/moment/24/24173-46236-s.jpg' 
                                alt='blogs'
                                width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                height={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                borderRadius="5px"
                                border='1px solid lightgrey'
                                />
                            </Box>
                            <Box width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}>
                                <Text fontSize="1rem" color='#888888' textAlign="center">Jujube Vegetarian House</Text>
                                <Text fontSize="0.75rem" color='#888888' textAlign="center">LimKongTiong</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box marginTop="40px">
                <Box style={{width:"85%",margin:"auto",padding:"15px",boxShadow:"rgba(0, 0, 0, 0.15) 0px 5px 15px 0px"}}>
                    <Box display="flex" flexDirection="row">
                        <Box>
                            <Text  color="#666666" fontSize={{lg:"1.6rem",sm:"1rem"}}>Discover Restaurants</Text>
                        </Box>
                        <Spacer/>
                        <Box display="flex" flexDirection="row" gap="3">
                            <Link to='/'><Text color="#2184ff" fontSize={{lg:"1.25rem",sm:"0.8rem"}}>Vegetarian Directory</Text></Link>.
                            <Link to='/'><Text color="#2184ff" fontSize={{lg:"1.25rem",sm:"0.8rem"}}>Restaurant Menu</Text></Link>.
                            <Link to='/'><Text color="#2184ff" fontSize={{lg:"1.25rem",sm:"0.8rem"}}>Food Map</Text></Link>
                        </Box>
                    </Box>
                    <Box display='flex' gap='4'>
                        <Box width='12.5rem'>
                            <Box>
                                <Image
                                src='https://www.kindmeal.my/photos/item/0/277-6641-s.jpg' 
                                alt='blogs'
                                width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                height={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                borderRadius="5px"
                                border='1px solid lightgrey'
                                />
                            </Box>
                            <Box>
                                <Text fontSize="0.9rem" color='#888888' textAlign="center">Cappuccino</Text>
                            </Box>
                        </Box>
                        <Box>
                            <Box >
                                <Image
                                src='https://www.kindmeal.my/photos/item/0/583-8129-s.jpg' 
                                alt='blogs'
                                width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                height={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                borderRadius="5px"
                                border='1px solid lightgrey'
                                />
                            </Box>
                            <Box width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}>
                                <Text fontSize="0.9rem" color='#888888' textAlign="center">Aglio e Olio with Beyond Sausage</Text>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Image
                                src='https://www.kindmeal.my/photos/item/0/491-5881-s.jpg' 
                                alt='blogs'
                                width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                height={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                borderRadius="5px"
                                border='1px solid lightgrey'
                                />
                            </Box>
                            <Box width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}>
                                <Text fontSize="0.9rem" color='#888888' textAlign="center">Bamboo Fungus Asparagus Roll Set Lunch (..</Text>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Image
                                src='https://www.kindmeal.my/photos/item/0/504-6125-s.jpg' 
                                alt='blogs'
                                width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                height={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                borderRadius="5px"
                                border='1px solid lightgrey'
                                />
                            </Box>
                            <Box width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}>
                                <Text fontSize="0.9rem" color='#888888' textAlign="center">GT Rojak</Text>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Image
                                src='https://www.kindmeal.my/photos/item/0/418-5750-s.jpg' 
                                alt='blogs'
                                width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                height={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                borderRadius="5px"
                                border='1px solid lightgrey'
                                />
                            </Box>
                            <Box width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}>
                                <Text fontSize="0.9rem" color='#888888' textAlign="center">Affogato</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box marginTop="40px">
                <Box style={{width:"85%",margin:"auto",padding:"15px",boxShadow:"rgba(17, 17, 26, 0.1) 0px 0px 16px"}}>
                    <Box display="flex" flexDirection="row">
                        <Box>
                            <Text  color="#666666" fontSize={{lg:"1.6rem",sm:"1rem"}}>Amazing Superheroes</Text>
                        </Box>
                        <Spacer/>
                        <Box display="flex" flexDirection="row" gap="3">
                            <Link to='/'><Text color="#2184ff" fontSize={{lg:"1.25rem",sm:"0.8rem"}}>Latest Buzz</Text></Link>.
                            <Link to='/'><Text color="#2184ff" fontSize={{lg:"1.25rem",sm:"0.8rem"}}>Lifestyle Ambassadors</Text></Link>.
                            <Link to='/'><Text color="rgb(197, 157, 95)" fontSize={{lg:"1.25rem",sm:"0.8rem"}}>Win Gifts</Text></Link>
                        </Box>
                    </Box>
                    <Box display='flex' gap='4'>
                        <Box width='12.5rem'>
                            <Box>
                                <Image
                                src='https://www.kindmeal.my/photos/member/13/13450-m.jpg' 
                                alt='blogs'
                                width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                height={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                borderRadius="5px"
                                border='1px solid lightgrey'
                                />
                            </Box>
                            <Box>
                                <Text fontSize="0.8rem" color='#888888' textAlign="center">ThamEllie</Text>
                            </Box>
                        </Box>
                        <Box>
                            <Box >
                                <Image
                                src='https://www.kindmeal.my/photos/member/41/41107-m.jpg' 
                                alt='blogs'
                                width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                height={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                borderRadius="5px"
                                border='1px solid lightgrey'
                                />
                            </Box>
                            <Box width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}>
                                <Text fontSize="0.8rem" color='#888888' textAlign="center">JoanneTang</Text>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Image
                                src='https://www.kindmeal.my/photos/member/40/40466-m.jpg' 
                                alt='blogs'
                                width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                height={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                borderRadius="5px"
                                border='1px solid lightgrey'
                                />
                            </Box>
                            <Box width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}>
                                <Text fontSize="0.8rem" color='#888888' textAlign="center">IveenHMTan</Text>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Image
                                src='https://www.kindmeal.my/photos/member/41/41401-m.jpg' 
                                alt='blogs'
                                width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                height={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                borderRadius="5px"
                                border='1px solid lightgrey'
                                />
                            </Box>
                            <Box width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}>
                                <Text fontSize="0.8rem" color='#888888' textAlign="center">JiaYing1</Text>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Image
                                src='https://www.kindmeal.my/photos/member/24/24824-m.jpg' 
                                alt='blogs'
                                width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                height={{lg:"12.5rem",md:"10rem",sm:"5rem"}}
                                borderRadius="5px"
                                border='1px solid lightgrey'
                                />
                            </Box>
                            <Box width={{lg:"12.5rem",md:"10rem",sm:"5rem"}}>
                                <Text fontSize="0.8rem" color='#888888' textAlign="center">YawPeyJiun</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default MidPart1;