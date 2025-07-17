import axios from 'axios';
import React, { useEffect, useState } from 'react'
//import cardsData from '../data/ProductCardsData'

const Cards = () => {

    const [cardsData, setCardsData] = useState([]);

    const fetchCardApi = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            console.log(response.data);
            setCardsData(response.data);
        }
        catch(e) {
            console.log('Error:', e);
        }
    }

    useEffect(() => {
        fetchCardApi();
    }, []);
    return (
        <>
            <div className='cards-container grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 md:p-20 p-10'>
                {cardsData.slice(0, 3).map((cardData) => (
                    <div className='card border border-blue-300 shadow-lg hover:scale-105 transition-transform ease-in-out duration-300' key={cardData.id}>
                        <div className='card-img'>
                            <img className='h-[30vh] w-[100%] object-contain' src={cardData.image} alt="" />
                        </div>
                        <div className='card-text p-3'>
                            <div className='flex justify-between items-center relative'>
                                <h2 className='w-[80%] text-lg font-bold'>{cardData.title}</h2>
                                
                                    <svg className='size-7 opacity-100 fill-red-500 hover:opacity-0 transition-opacity ease-in-out duration-300 absolute right-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path></svg>
                             
                                <svg className='size-7 fill-red-500 opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-300 absolute right-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path></svg>


                            </div>

                            <p className='text-sm'>{cardData.description.substring(0, 50) + "..."}</p>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}

export default Cards