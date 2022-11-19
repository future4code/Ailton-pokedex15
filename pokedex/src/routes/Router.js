import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import MyPokemon from '../pages/MyPokemon'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="mypokemon" element = {<MyPokemon />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
