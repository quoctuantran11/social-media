import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';
import { LoginForm } from '../Login';
import Footer from '../../components/Footer';
import { useAuth } from '../../context/authContext';

const HomeContainer = () => {
    return(
        <div className='home-container'>
            <div className='sidebar-section'>
                <Sidebar />
            </div>
            <div className='content-section'>
                <div className='stories-section'>
                    <div className='stories-container'>
                        <div className='swipe-btn prev-btn'>
                            <div className='swipe-ic prev-ic'></div>
                        </div>
                        <div className='swipe-btn next-btn'>
                            <div className='swipe-ic next-ic'></div>
                        </div>
                        <div className='story'>
                            <div className='avatar-frame str-active'>
                                <div className='avatar'></div>
                            </div>
                            <p>username</p>
                        </div>
                    </div>
                </div>
                <div className='posts-section'>
                    <div className='posts-container'>
                        <div className='post'></div>
                    </div>
                </div>
            </div>
            <div className='right-section'>
                right
            </div>
        </div>
    )
}

const NotAuthorized = () => {
    return (
        <>
            <div className="notauth-container">
                <div className="cover-img split"></div>
                <div className='container-divider'></div>
                <LoginForm />
            </div>
            <Footer />
        </>
    )
}


export default function Home() {
    const { t } = useTranslation()
    const { authenticated } = useAuth();

    return (
        // !authenticated ? <NotAuthorized /> : 
        <HomeContainer />
    )
}