import React, { useContext } from 'react'

const useFetch = () => {

  const fetchData = async () => {
    const response = await fetch('https://backend-laravel-production-3624.up.railway.app/api/admin-hotels/hotels');
    const data = await response.json();
    return data;
  }

  const fetchTypes = async () => {
    const response = await fetch('https://backend-laravel-production-3624.up.railway.app/api/admin-hotels/get-types-accommodation');
    const data = await response.json();
    return data;
  }

  const fetchCreateHotel = async (hotel) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Tipo de contenido del cuerpo de la solicitud
      },
      body: JSON.stringify(hotel), // Convierte los datos a formato JSON
    };
    const response = await fetch('https://backend-laravel-production-3624.up.railway.app/api/admin-hotels/create-hotel', requestOptions);
    const data = await response.json();
    return data;
  }


  const fetchDataInit = async () => {
      const resp = await Promise.all([fetchData(), fetchTypes()])
      return resp;
  }

  const fetchCreateRooms = async (rooms) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Tipo de contenido del cuerpo de la solicitud
      },
      body: JSON.stringify(rooms), // Convierte los datos a formato JSON
    };
    const response = await fetch('http://localhost/api/admin-hotels/add-rooms', requestOptions);
    const data = await response.json();
    return data;
  }

  return {
    fetchData,
    fetchCreateHotel,
    fetchTypes,
    fetchDataInit,
    fetchCreateRooms
  }
}

export default useFetch;