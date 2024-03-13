import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import Spinner from '../components/Spinner.jsx'
import ErrorContainer from '../components/ErrorContainer.jsx'
import WeatherCard from '../components/WeatherCard.jsx'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


export default function DisplayTable() {
    //get json data from /tablelist
    const [ formData, setFormData ] = useState({})
    // Table and DB
    const [ selectedTable, setSelectedTable ] = useState("")

    async function sendGet() {
        const res = await fetch(
            "http://localhost:8080/tablelist",
            {
                method: "GET",
                headers: {"Accept": "application/json"},
            }
        )
        const resBody = await res.json()
        console.log("== resBody", resBody)
        setFormData(resBody)
    }

    useEffect(() => {
        sendGet()
    }, [])

    function handleTableSelect(tableName) {
        setSelectedTable(tableName);
    }

    return (
        <div>
            <div>
                {formData.tables && formData.tables.map((tableName, index) => (
                    <button key={index} onClick={() => handleTableSelect(tableName)}>
                        {tableName}
                    </button>
                ))}
            </div>
            <h2>Selected Table: {selectedTable}</h2>
        </div>
    );
}