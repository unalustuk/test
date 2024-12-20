"use client"

import Navbar from "./_components/navbar/Navbar"
import Main from "./_components/main/Main"

import axios from "axios"
import { useState, useEffect } from "react"
export default function Home() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [filteredData, setFilteredData] = useState(null)
    const [values, setValues] = useState({
        price: 1,
        time: 1,
        size: 1,
        islandTour: false,
        landTour: false,
        safari: true,
        swimming: false,
        running: false,
        elephant: false,
        snorkel: false,
        yacht: false,
        speedboat: false,
        catamaran: true,
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
            safari: true,
            swimming: false,
            running: false,
            elephant: false,
            snorkel: false,
            yacht: false,
            speedboat: false,
            catamaran: true,
            speedCatamaran: false,
            transfer: false,
            halalFood: false,
            vegetarianFood: false,
        })
        setFilteredData(data)
    }

    console.log(values)
    useEffect(() => {
        axios
            .get("https://beta.tripkolic.com/api/v1/product/task/tours")
            .then(function (response) {
                // handle success
                console.log(response)
                setData(response.data?.products)
                setFilteredData(response.data?.products)
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

    const handleSearchChange = () => {
        let filtered = data?.filter((item: any) => {
            if (
                values.price <= item.price.adultPrice &&
                values.size <= item.routes[0].groupSize &&
                ((values.safari && item.tourCategory.id === 2) ||
                    (values.landTour && item.tourCategory.id === 1) ||
                    (values.islandTour && item.tourCategory.id === 3)) &&
                ((values.catamaran && item.vehicle.id == 5) ||
                    (values.yacht && item.vehicle.id == 1) ||
                    (values.speedCatamaran && item.vehicle.id == 6) ||
                    (values.speedboat && item.vehicle.id == 7))
            ) {
                return item
            } else {
                null
            }
        })
        console.log("filtered")
        console.log(filtered)
        setFilteredData(filtered)
    }
    console.log("filter")
    console.log(filteredData)

    return (
        <>
            <Navbar
                handleChange={handleChange}
                values={values}
                resetValues={resetValues}
                handleSearchChange={handleSearchChange}
            />
            <Main isLoading={isLoading} data={filteredData} />
        </>
    )
}
