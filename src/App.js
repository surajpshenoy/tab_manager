import React, {useEffect, useState} from "react"
import { FaAngleDoubleRight } from 'react-icons/fa'

import Loading from "./Loading"
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

  },[])
  return (
    <>
    <Loading/>
    </>
  );
}

export default App;
