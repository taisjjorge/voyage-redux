import React, { useState, useEffect } from 'react'
//useDispatch é responsável por disparar uma ação pro Redux
import { useDispatch } from 'react-redux'
import { MdFlightTakeoff } from 'react-icons/md'

import { addReserve } from '../../store/modules/reserve/actions'
import api from '../../services/api'
import './style.css'

export default function Home() {
    const dispatch = useDispatch()
    const [trips, setTrips] = useState([]);

    useEffect(()=>{
        async function loadApi(){
            const response = await api.get('trips')
            setTrips(response.data);
        }

        loadApi();

    }, [])

    function handleAdd(trip) {
        // parâmetro obrigatório necessário para disparar uma ação é um type
        //na sequência vem o que se quer passar para o redux
        dispatch(addReserve(trip))
    }

    return (
        <div>
            <div className="box">
                {trips.map(trip => (
                    <li key={trip.id}>
                        <img src={trip.image} alt={trip.title} />
                        <strong>{trip.title}</strong>
                        {/* se o status for true(?) então estará disponível, senão(:) estará indisponível */}
                        <span>Status: {trip.status ? 'Disponível' : 'Indisponível' }</span>
                    
                    <button type="button"
                    // criar uma função para passar o dispatch
                    onClick={()=> handleAdd(trip)}>
                        <div>
                            < MdFlightTakeoff size={16} color="fff" />
                        </div>
                        <span>Solicitar reserva</span>
                    </button>
                    </li>
                ))}
            </div>
        </div>
    )
}
