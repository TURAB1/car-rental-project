import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routers from '../../routers/Routers'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
const Layout = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
            </div>
            <div className='inner-body'>
                <Routers />
            </div>
            <div>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default Layout
