"use client"

import Navbar from "./_components/navbar/Navbar"
import Main from "./_components/main/Main"

import axios from "axios"
import { useState, useEffect } from "react"
export default function Home() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [values, setValues] = useState({ price: 1 })

    const handleChange = ({
        name,
        value,
    }: {
        name: string
        value: number | number[]
    }) => {
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }))
    }
    console.log(values)
    useEffect(() => {
        axios
            .get("https://beta.tripkolic.com/api/v1/product/task/tours")
            .then(function (response) {
                // handle success
                console.log(response)
                setData(response.data)
                setLoading(false)
            })
            .catch(function (error) {
                // handle error
                console.log(error)
            })
            .finally(function () {
                // always executed
            })
    }, [])

    return (
        <>
            <Navbar handleChange={handleChange} />
            <Main isLoading={isLoading} data={data} />
        </>
    )
}
