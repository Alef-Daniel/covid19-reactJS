import React, { useEffect, useState } from 'react'
import './style.css'
import api from '../../service/api'

export default function Select({setValue}) {
  
    const [paises, setPaises] = useState(null)

    useEffect(()=>{
        api.get().then(({data})=>{
            setPaises(data)
        })
    })

    return (
    <div>
        <select onChange={(event)=> setValue(event.target.value)}>
            {paises?.map((pais)=>(
                <option key={pais.country} value={pais.country}>{pais.country}</option>
            ))}
        </select>  
    </div>
  )
}
