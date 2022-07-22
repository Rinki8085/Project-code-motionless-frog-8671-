import React,{useState} from "react";

export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
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
    //console.log(fname,lname,email1,reemail,pswrd,userName,mon,dat,yer,cntry,states,gndr,trm,term);
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
    setTerm(true);
    if(fName!==''){
      if(lName!==''){
        if(email!==''){
          if(reEmail!=='' && reEmail.length===email.length){
            if(password!==''){
              if(username!==''){
                if(month!==''){
                  if(date!==0){
                    if(year!==0){
                      if(country!==''){
                        if(state!==''){
                          if(gender!==''){
                            if(trm){
                              setIsAuth(true);
                              setShowForm(false);
                              setSuccess(true);
                            }else{
                              alert("Please confirm term and condition")
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
        alert('Please enternvalid lname')
      }
    }else{
      alert('please enter fname')
    }
    setToken(Date.now() + username);
  };

  const value = 
  { isAuth, token, handleLogin,
    success,showForm,fName,
    lName,email,reEmail,
    password,username,month,
    date,year,country,
    state,gender,term
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
