import {Box,Text,FormControl,
    FormLabel,
    Input,
    Select,
    RadioGroup,
    HStack,
    Radio} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import React from 'react';
import {AppContext} from '../context/AppContextProvider';
import './signUp.css';

function Form(){
    const {handleLogin} = React.useContext(AppContext);
    const [fName,setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email,setEmail] = useState('');
    const [reEmail,setReEmail] = useState("");
    const [password,setPassword] = useState('');
    const [username,setUsername] = useState('Username');
    const [mon, setMon] = useState('');
    const [dat,setDat]  = useState(0);
    const [yer,setYer] = useState(0);
    const [cntry,setCntry] = useState('');
    const [states,setStates] = useState('');
    const [gndr,setGndr] = useState('');
    const [trm,setTrm] = useState(false);
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        let trms = document.getElementById('terms').checked;
        setTrm(trms);
        handleLogin(fName,lName,email,reEmail,password,username,mon,dat,yer,cntry,states,gndr,trm);
        // console.log(fName,lName,email,reEmail,password,username,mon,dat,yer,cntry,states,gndr,trm);
    }

    return(
        <Box>
            <Text fontSize='1.6rem'>Food Lover? Sign Up Now or <Link to='/join.htm'>Login With Facebook</Link></Text>
                   <Box mt='4' mb='4'>
                    <Text fontSize='0.9rem' fontWeight='500'>
                    Discover tasty meat-free meals and dine instantly — no coupon payment, booking or printing is required.
                    <br/>
                    <br/>       
                    KindMeal is a fun, exciting and cool new way for you to show your compassion towards animals. We collaborate with kind restaurants and cafes across the nation
                    to bring you delicious meat-free foods that will not only help save precious animal lives, but improve your health and save your money at the same time!
                    </Text>
                   </Box>
                   <Box mt='2rem'>
                        <FormControl>
                            <Box display='flex'>
                                <Box pt='1.5rem' fontSize='0.9rem' color='#444444' width='7rem'>Your Name</Box>
                                <Box>
                                    <FormLabel color='#888888' fontSize='0.8rem' fontWeight='normal'>First name</FormLabel>
                                    <Input id='fname' value={fName} type='text' onChange={(e)=>setFName(e.target.value)} />
                                </Box>
                                <Box pl='5'>
                                    <FormLabel color='#888888' fontSize='0.8rem' fontWeight='normal'>Last name</FormLabel>
                                    <Input id='lname' value={lName} type='text' onChange={(e)=>setLName(e.target.value)}/>
                                </Box>
                            </Box>
                            <Box display='flex'>
                                <Box pt='1.5rem' fontSize='0.9rem' color='#444444' width='7rem'>Email</Box>
                                <Box width='73.5%'>
                                    <FormLabel color='#888888' fontSize='0.8rem' fontWeight='normal'>Your email must be correct to receive activation email</FormLabel>
                                    <Input       
                                        id='email' 
                                        type='email'
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                    />
                                </Box>
                            </Box>
                            <Box display='flex' mt='2'>
                                <Box pt='2' fontSize='0.9rem' color='#444444' width='7rem'>Re-Enter Email:</Box>
                                <Box width='73.5%'>
                                    <Input        
                                        id='re-email'
                                        type='email'
                                        value={reEmail}
                                        onChange={(e)=>setReEmail(e.target.value)}
                                    />
                                </Box>
                            </Box>
                            <Box display='flex' mt='2'>
                                <Box pt='2' fontSize='0.9rem' color='#444444' width='7rem'>Password</Box>
                                <Box width='73.5%'>
                                    <Input        
                                    id='password'
                                        type='password'
                                        value={password}
                                        onChange={(e)=>setPassword(e.target.value)}
                                    />
                                </Box>
                            </Box>
                            <Box display='flex'>
                                <Box pt='2.5rem' fontSize='0.9rem' color='#444444' width='7rem'>Username</Box>
                                <Box width='73.5%'>
                                    <FormLabel color='#888888' fontSize='0.8rem' fontWeight='normal'>	
                                    Choose a cool username for your Personal Profile page, comments & reviews</FormLabel>
                                    <FormLabel color='#2184ff' fontSize='1rem' fontWeight='normal'>http://KindMeal.my/<b>{username}</b></FormLabel>
                                    <Input    
                                        id='username'    
                                        type='text'
                                        value={username}
                                        onChange={(e)=>setUsername(e.target.value)}
                                    />
                                </Box>
                            </Box>
                            <Box display='flex'>
                                <Box pt='1.5rem' fontSize='0.9rem' color='#444444' width='7rem'>Birth Date</Box>
                                <Box width='73.5%'>
                                <FormLabel color='#888888' fontSize='0.8rem' fontWeight='normal'>Only your age will be publicly visible</FormLabel>
                                <Box display='flex' gap='3'>
                                <Select placeholder='Month' width='100px' size='sm' onChange={(e)=>setMon(e.target.value)}>
                                    <option value='Jan'>January</option>
                                    <option value='Feb'>February</option>
                                    <option value='Mar'>March</option>
                                    <option value='Apr'>April</option>
                                    <option value='May'>May</option>
                                    <option value='June'>June</option>
                                    <option value='July'>July</option>
                                    <option value='Sept'>September</option>
                                    <option value='Oct'>October</option>
                                    <option value='Nov'>November</option>
                                    <option value='Dec'>December</option>
                                </Select>
                                <Select placeholder='Day' width='100px' size='sm' onChange={(e)=>setDat(e.target.value)}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </Select>
                                <Select placeholder='Year' width='100px' size='sm' onChange={(e)=>setYer(e.target.value)}>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                </Select>
                                </Box>
                                </Box>
                            </Box>
                            <Box display='flex'>
                                <Box pt='0.8rem' fontSize='0.9rem' color='#444444' width='7rem'>Country</Box>
                                <Box width='73.5%' pt='2'>
                                <Select placeholder='Your country' width='20.3rem' size='sm' onChange={(e)=>setCntry(e.target.value)}>
                                    <option value='United Arab Emirates'>United Arab Emirates</option>
                                    <option value='Nigeria'>Nigeria</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Iran">Iran</option>
                                    <option value="Irelan">Ireland</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Jordan">Jordan</option>
                                    <option value="Kazakhstan">Kazakhstan</option>
                                </Select>
                                </Box>
                            </Box>
                            <Box display='flex'>
                                <Box pt='0.8rem' fontSize='0.9rem' color='#444444' width='7rem'>State</Box>
                                <Box width='73.5%' pt='2'>
                                <Select placeholder='Select State' width='20.3rem' size='sm' onChange={(e)=>setStates(e.target.value)}>
                                    <option value='UP'>U.P.</option>
                                    <option vlaue='keral'>Keral</option>
                                    <option value="Tamilnadu">Tamilnadu</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Lucknow">Lucknow</option>
                                    <option value="Gujrat">Gujrat</option>
                                    <option value="Indore">Indore</option>
                                </Select>
                                </Box>
                            </Box>
                            <Box display='flex'>
                                <Box pt='0.8rem' fontSize='0.9rem' color='#444444' width='7rem'>Gender</Box>
                                <Box width='73.5%' pt='2'>
                                    <RadioGroup>
                                        <HStack spacing='24px' onChange={(e)=>setGndr(e.target.value)}>
                                            <Radio value='M' >Male</Radio>
                                            <Radio value='F'>Female</Radio>
                                        </HStack>
                                    </RadioGroup> 
                                </Box>
                            </Box>
                            <Box display='flex'>
                                <Box pt='0.8rem' fontSize='0.9rem' color='#444444' width='7rem'>Profile Photo</Box>
                                <Box width='73.5%' pt='2'>
                                <input type='file' placeholder='Select Photo' id='term'/>
                                </Box>
                            </Box>
                            <Box mt='4'>
                                <input type='checkbox' id='terms'/> &nbsp; I agree to KindMeal.my's <Link to='/join.htm'>Terms & Conditions</Link>
                            </Box>
                            <Box mt='6' ml='4' color='white' fontWeight='bold' fontSize='1.4rem'>
                                <Box bgColor='red.500' width='11.5rem' height='3.4rem' p='2' borderRadius='10px' onClick={handleSubmit} cursor='pointer'><center>Join now</center></Box>
                            </Box>
                        </FormControl>
                   </Box>
        </Box>
    )
}

export default Form;