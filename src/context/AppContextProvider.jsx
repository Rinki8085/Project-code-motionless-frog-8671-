import React,{useState} from "react";

export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [showUser,setShowUser] = useState(false);
  const [isAuth, setIsAuth] = React.useState(false);
  const [showForm,setShowForm] = React.useState(true);
  const [success, setSuccess] = React.useState(false);
  const [token, setToken] = React.useState("abcdef");
  const [fName,setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email,setEmail] = useState('');
  const [reEmail,setReEmail] = useState("");
  const [password,setPassword] = useState('');
  const [username,setUsername] = useState('');
  const [month, setMonth] = useState('');
  const [date,setDate]  = useState(0);
  const [year,setYear] = useState(0);
  const [country,setCountry] = useState('');
  const [state,setState] = useState('');
  const [gender,setGender] = useState('');
  const [term,setTerm] = useState(false);


  const handleLogin = (fname,lname,email1,reemail,pswrd,userName,mon,dat,yer,cntry,states,gndr,trm) => {
    
    setFName(fname);
    setLName(lname);
    setEmail(email1);
    setReEmail(reemail);
    setPassword(pswrd);
    setUsername(userName);
    setMonth(mon);
    setDate(dat);
    setYear(yer);
    setCountry(cntry);
    setState(states);
    setGender(gndr);
    setTerm(trm);
    if(fname!==''){
      if(lname!==''){
        if(email1!==''){
          if(reemail!=='' && reemail.length===email1.length){
            if(pswrd!==''){
              if(userName!==''){
                if(mon!==''){
                  if(dat!==0){
                    if(yer!==0){
                      if(cntry!==''){
                        if(states!==''){
                          if(gndr!==''){
                            if(trm){
                              setIsAuth(true);
                              setShowForm(false);
                              setSuccess(true);
                                                        
                             }
                          }else{
                            alert("Please enter gender")
                          }
                        }else{
                          alert("please enter a State")
                        }
                      }
                    }else{
                      alert("Please enter a valid year")
                    }
                  }else{
                    alert("Please enter a valid date")
                  }
                }else{
                  alert("Please enter a valid month")
                }
              }else{
                alert("Please enter a username")
              }
            }else{
              alert("please enter valid password")
            }
          }else{
            alert("please enter re-email")
          }
        }else{
          alert('please enter valid email')
        }
      }else{
        alert('Please enter valid lname')
      }
    }
    // }else{
    //   alert('please enter fname')
    // }
    setToken(Date.now() + username);
  };

  const userLogin=(x)=>{
    setFName(x);
    setShowUser(true);
  }

  const logOut = ()=>{
    setShowUser(false);
  }



  const value = 
  { isAuth, token, handleLogin,
    success,showForm,fName,
    lName,email,reEmail,
    password,username,month,
    date,year,country,
    state,gender,term,userLogin,showUser,logOut
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContextProvider };

// 1. AppContextProvider component
// 2. created context
// 3. Provider, passed required value into provider
// 4. wrapped the context provider around app.js,
// and passed the entire app as children
// 5. consuming the context in required componetns
// 6. useContext( Context )
// 7. we were able to update state on the context api, it reflected changes in all other components
