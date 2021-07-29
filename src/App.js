import React, {useEffect, useState} from "react"
import { FaAngleDoubleRight } from 'react-icons/fa'

import Loading from "./Loading"
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState([]);

  const fetchUserInfo = async() => {
    setLoading(true);
    try{
      const response = await fetch(url);
      const info = await response.json();
      setUserInfo(info);
      setLoading(false)
      console.log(info)
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

}

export default App;
