import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { LoginForm } from '../Login';
import Footer from '../../components/Footer';
import { useAuth } from '../../context/authContext';

const HomeContainer = () => {

}

const NotAuthorized = () => {
    const { setLoggedUser } = useAuth();

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

    return (
        <NotAuthorized />
    )
}