import { useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer";

export const LoginForm = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const [isHidden, setIsHidden] = useState(true);

    const handleInput = (e) => {
        setUser(prevUser => ({
            ...prevUser,
            [e.target.name]: e.target.value
        }))
    }

    const submitForm = (event) => {
        event.preventDefault();
        console.log(user);
        axios.post("http://localhost:3001/login", user)
            .then(res => {
                console.log(res.data)
                setLoggedUser(res.data.email)
            })
            .catch(err => console.log(err.response))
    }

    return (
        <div className="login-section split">
            <div className='login-form'>
                <div className='title'></div>
                <form onSubmit={submitForm} action="/">
                    <label className={user.email != "" ? "filled" : null}>
                        <span>
                            Số điện thoại, tên người dùng hoặc email
                        </span>
                        <input
                            autoComplete='off'
                            aria-label='Số điện thoại, tên người dùng hoặc email'
                            type="text"
                            id="username"
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
                    <button
                        className={user.password.length >= 6 ? null : "disabled"}
                        type="submit"
                        disabled={user.password.length < 6}>Đăng nhập</button>
                </form>
                <hr />
                <a href="#">Quên mật khẩu?</a>
            </div>
            <div className='signup-link'>
                Bạn chưa có tài khoản ư? <span><a href="#">Đăng ký</a></span>
            </div>
        </div>
    )
}

export function Login() {
    return (
        <>
            <div className="login-container">
                <LoginForm />
            </div>
            <Footer />
        </>
    )
}