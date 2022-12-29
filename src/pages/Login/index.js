import { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from '../../context/authContext';
import Footer from "../../components/Footer";
import Helmet from "../../components/Helmet";
import { t } from "i18next";

export const LoginForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"

    const { setAuthenticated, setLoggedUser, setLoading } = useAuth();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const [isHidden, setIsHidden] = useState(true);
    const warningText = useRef();

    const handleInput = (e) => {
        setUser(prevUser => ({
            ...prevUser,
            [e.target.name]: e.target.value
        }))
    }

    const submitForm = (event) => {
        event.preventDefault();
        setLoading(true);
        axios({
            method: 'post',
            url: 'http://localhost:3001/login',
            data: user,
            withCredentials: true
        }).then(res => {
                console.log(res.data)
                setLoggedUser(res.data)
                localStorage.setItem("user", JSON.stringify(res.data))
                setAuthenticated(true)
                setLoading(false);
                navigate(from, { replace: true });
            })
            .catch(() => warningText.current.hidden = false)
    }

    const disablingButton = () => {
        return user.password.length >= 6 && user.email != "";
    }

    return (
        <div className="login-section split">
            <div className='login-form'>
                <div className='title'></div>
                <form onSubmit={submitForm} action="/">
                    <label className={user.email != "" ? "filled" : null}>
                        <span>
                            Số điện thoại hoặc email
                        </span>
                        <input
                            autoComplete='off'
                            aria-label='Số điện thoại hoặc email'
                            type="text"
                            id="email"
                            name="email"
                            value={user.email}
                            onChange={handleInput} />
                    </label>
                    <label className={user.password != "" ? "filled" : null}>
                        <span>Mật khẩu</span>
                        <input
                            autoComplete='off'
                            aria-label='Mật khẩu'
                            type={isHidden ? "password" : "text"}
                            id="password"
                            name="password"
                            value={user.password}
                            onChange={handleInput} />
                        {user.password != "" ?
                            <div
                                className='reveal-password'
                                onClick={() => setIsHidden(isHidden => !isHidden)}>
                                {isHidden ? "Hiển thị" : "Ẩn"}
                            </div>
                            : null}
                    </label>
                    <div>
                        {/* {loading ? <Loading /> : null} */}
                        <button
                            className={disablingButton() ? null : "disabled"}
                            type="submit"
                            disabled={!disablingButton()}>Đăng nhập</button>
                    </div>
                </form>
                <hr />
                <p hidden ref={warningText} className="warning-text">Rất tiếc, mật khẩu của bạn không đúng.<br /> Vui lòng kiểm tra lại mật khẩu.</p>
                <a href="#">Quên mật khẩu?</a>
            </div>
            <div className='signup-link'>
                Bạn chưa có tài khoản ư? <span><a href="/register">Đăng ký</a></span>
            </div>
        </div>
    )
}

export function Login() {
    return (
        <Helmet title="Đăng nhập" constTitle="Instagram">
            <div className="login-container">
                <LoginForm />
            </div>
            <Footer />
        </Helmet>
    )
}