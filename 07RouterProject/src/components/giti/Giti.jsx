import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Giti() {
    const data = loaderFunc();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/syedwaseem07')
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github Followers : {data.followers}
    <img src={data.avatar_url} alt="Giti image" width={300}/></div>
  )
}

export default Giti

const loaderFunc = async () =>  {
    const response = await fetch('https://api.github.com/users/syedwaseem07');
    return response.json;
}