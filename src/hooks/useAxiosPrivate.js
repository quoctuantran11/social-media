import { useEffect } from 'react'
import axios from 'axios'
import useRefreshToken from './useRefreshToken'
import { useAuth } from '../context/authContext'

export default function useAxiosPrivate() {
    const refresh = useRefreshToken()
    const { loggedUser } = useAuth();

    const axiosPrivate = axios.create({
        baseURL: 'http://localhost:3001',
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
    })

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${loggedUser.token}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error.config;
                if (error.response.status === 403 && !prevRequest.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [refresh])

    return axiosPrivate
}