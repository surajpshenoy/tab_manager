import React, {useEffect, useState} from "react"
import { FaAngleDoubleRight } from 'react-icons/fa'

import Loading from "./Loading"
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState([]);
  const [value, setValue] = useState(0);

  const fetchUserInfo = async() => {
    setLoading(true);
    try{
      const response = await fetch(url);
      const info = await response.json();
      setUserInfo(info);
      setLoading(false);
    }
    catch(error){
      console.log(error.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchUserInfo();
  },[]);

  if(loading){
    return (<main>
      <Loading/>
      </main>);
  }

  return <h3> USER Info</h3>

}

export default App;
