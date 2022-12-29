import axios from 'axios'
import { useAuth } from "../context/authContext";

export default function useRefreshToken() {
    const { setAuthenticated } = useAuth();

    const refresh = async () => {
        const res = await axios.get('http://localhost:3001/refresh', {
            withCredentials: true
        })

        setAuthenticated(true)

        console.log(res.data.token)

        return res.data.token
    }

    return refresh;
}