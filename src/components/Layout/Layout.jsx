import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routers from '../../routers/Routers'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import UserContext from '../../UI/UserContext'
import "../../styles/layout.css"
const Layout = () => {
    return (
        <BrowserRouter>
        <UserContext >
            <div>
                <Header />
            </div>
            <div className='inner-body'>
                <Routers />
            </div>
            <div>
                <Footer />
            </div>
            </UserContext>   
        </BrowserRouter>
    )
}

export default Layout
