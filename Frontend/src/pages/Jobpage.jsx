import {useEffect, useState} from 'react'
import Jobs from '../components/Jobs'


const Jobpage = () => {
   const [data , setData] = useState("no data")
   const [loading , setloading] = useState(true)
   const [error , setError] = useState(null)

   useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:3001/')
        console.log(response)
       
        const data = await response.json()
    
        setData(data)
        setloading(false)
      } catch (error) {
        setError(error)
        setloading(false)
      }
    }
    fetchJobs()

   }, [])

   if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Something went wrong</h1>

 
  return (
    <>
    <Jobs isHome={false}  />
  
    </>
  )
}

export default Jobpage
