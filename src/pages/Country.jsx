import React from 'react'
import { useEffect, useState } from 'react';
import { Oval } from  'react-loader-spinner'
import axios from 'axios';
import { motion } from 'framer-motion';
const Country = () => {
    const baseURL = "https://restcountries.com/v3.1/all";

    // handles states for data 
    const [countries, showCountries] = useState([]);

    // handles state for preloader 
    const [loading, setLoading] = useState(true);

    // handles state for error 
    const [error, setError] = useState(null)



    // handles get request from Countries API  
    useEffect(()=> {
                try {axios.get(baseURL)
                        .then((response => {
                            const data  = response.data
                            showCountries(data)
                            setLoading(false)
                        }))
                }catch(err) {
                    const err_msg = err.AxiosError.message;
                        setError(err_msg);
                    }
        }, [])

        // shows in console if Error appears
        if (error !== null){
            console.log(error)
        }
        

  return (
    <>
        { loading ? <div className='flex justify-center mt-48'>
            <Oval
                height={80}
                width={80}
                color="#007FFF"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#fffff"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
            </div> : 

            <div className='grid grid-cols-3 gap-y-12 my-10'>
                {countries.map((country,id) => (
                        <motion.div 
                            key={id}
                            initial={{opacity:0 ,translateX:-50, translateY:-50}} 
                            animate={{opacity:1 , translateX:0 , translateY:0}} 
                            transition={{duration: 0.2}}
                            className="w-80 h rounded border-1 border-white text-left">
                                <img className='w-full h-48 object-cover rounded ' src={country.flags.png} alt={country.name.common} />
                                <h1 className='flex text-2xl font-bold mt-2'>{country.name.common}</h1>
                                <div className='flex'><h3 className='text-lg font-medium leading-normal mr-3'>Continent:</h3> <p className="leading-7 inline">{country.continents}</p></div>
                                <div className='flex'><h3 className='text-lg font-medium leading-normal mr-3'>Capital:</h3> <p className="leading-7 inline">{country.capital}</p></div>
                                <div className='flex'><h3 className='text-lg font-medium leading-normal mr-3'>Total Population:</h3> <p >{country.population}</p></div>
                                <a className=" pb-2  text-azure-blue transition-all delay-300 ease-in hover:border-b-2 hover:border-azure-blue"href={country.maps.openStreetMaps} >Map view</a>
                            
                        </motion.div> ))}
            </div>  }
    </>
  )
}

export default Country
