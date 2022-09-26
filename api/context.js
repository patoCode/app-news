import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { getNewsAPI, getSourceAPI } from './api'

export const NewsContext = createContext()

const Context = ({ children }) => {

    const [news, setNews] = useState([])
    const [category, setCategory] = useState('general')
    const [index, setIndex] = useState(1)
    const [source, setSources] = useState('cnn')

    const getDataApi = async (reset = category) => {
        const { data } = await axios.get(getNewsAPI(reset))
        setNews(data)
        setIndex(1)
    }

    const getDataBySource = async () => {
        try {
            const { data } = await axios.get(getSourceAPI(source))
            setNews(data)
            console.log('-GET SOURCE-', data)
            setIndex(1)
        } catch (e) {
            alert('Ups! Something is wrong! :( ')
            console.log(e, source)
        }
    }

    useEffect(() => {
        getDataBySource()
    }, [source])

    useEffect(() => {
        getDataApi()
    }, [category])


    return (
        <NewsContext.Provider
            value={{
                news,
                index,
                setIndex,
                getDataApi,
                category,
                setCategory,
                setSources
            }}
        >
            {children}
        </NewsContext.Provider>
    )
}

export default Context