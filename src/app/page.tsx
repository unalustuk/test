"use client"

import Navbar from "./_components/navbar/Navbar"
import Main from "./_components/main/Main"

import axios from "axios"
import { useState, useEffect } from "react"
export default function Home() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

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
            <Navbar />
            <Main isLoading={isLoading} data={data} />
        </>
    )
}
