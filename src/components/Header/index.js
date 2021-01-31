import React from 'react'
// useSelector é responsável por conectar o redux com os reducers
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import aeroplane from '../../assets/logo/aeroplane.png'
import './style.css'

export default function Header() {
    const reserveSize = useSelector(state => state.reserve.length)

    return (
        <header className="container">
            <Link to="/">
                <img className="logo" src={aeroplane} alt="Logo FullStackEletro" />
            </Link>

            <Link className="reserva" to ="/reservas">
                <div>
                    <strong>Minhas reservas</strong>
                    <span>{reserveSize} reservas</span>
                </div>
            </Link>
        </header>
    )
}