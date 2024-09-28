import { useState, useEffect } from 'react'

import { api1 } from "./api"
//import Postal from './Components/Postal'


function App() {
  const [value, setValue] = useState("")

  const [postOffices, setPostOffices] = useState([]);
  const [error, setError] = useState("")



  const HandleFetch = async () => {
    const data = await fetch(`https://api.postalpincode.in/pincode/${value}`)


    const abc = await data.json()


    setPostOffices(abc[0].PostOffice)

  }



  console.log(postOffices)

  return (
    <div>
      <h1>Enter Pincode</h1>
      <input onChange={(e) =>
        setValue(e.target.value)
      }
        type="text" placeholder="place" />

      <div>
        <button onClick={HandleFetch}> Lookup</button >


        {
          postOffices.length > 0 && postOffices.map((val, index) => {
            return (
              <div className='abcsd' key={index}>
                <p>{val.Name}</p>
              </div>
            )
          })
        }



      </div>
    </div >

  )

}

export default App
