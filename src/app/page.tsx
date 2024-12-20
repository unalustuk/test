"use client"

import Navbar from "./_components/navbar/Navbar"
import Main from "./_components/main/Main"

import axios from "axios"
import { useState, useEffect } from "react"
export default function Home() {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)

    const [values, setValues] = useState({
        price: 1,
        time: 1,
        size: 1,
        islandTour: false,
        landTour: false,
        safari: false,
        swimming: false,
        running: false,
        elephant: false,
        snorkel: false,
        yacht: false,
        speedboat: false,
        catamaran: false,
        speedCatamaran: false,
        transfer: false,
        halalFood: false,
        vegetarianFood: false,
    })

    const handleChange = ({
        name,
        value,
    }: {
        name: string
        value: number | number[] | boolean
    }) => {
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }))
    }

    const resetValues = () => {
        setValues({
            price: 1,
            time: 1,
            size: 1,
            islandTour: false,
            landTour: false,
            safari: false,
            swimming: false,
            running: false,
            elephant: false,
            snorkel: false,
            yacht: false,
            speedboat: false,
            catamaran: false,
            speedCatamaran: false,
            transfer: false,
            halalFood: false,
            vegetarianFood: false,
        })
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
    let filteredData = data
    const handleSearchChange = () => {
        filteredData = data?.filter((item: any) => {})
    }

    return (
        <>
            <Navbar
                handleChange={handleChange}
                values={values}
                resetValues={resetValues}
            />
            <Main isLoading={isLoading} data={data} />
        </>
    )
}
