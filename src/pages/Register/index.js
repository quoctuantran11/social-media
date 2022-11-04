import { useState } from "react";
import axios from "axios";
import Helmet from "../../components/Helmet";
import Footer from "../../components/Footer";

export default function Register() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const [profile, setProfile] = useState({
        fullName: "",
        username: ""
    })
    const [isHidden, setIsHidden] = useState(true);

    const handleInput = (e) => {
        if (e.target.name == 'email' || e.target.name == 'password') {
            setUser(prevUser => ({
                ...prevUser,
                [e.target.name]: e.target.value
            }))
        }
        else {
            setProfile(prevProfile => ({
                ...prevProfile,
                [e.target.name]: e.target.value
            }))
        }
    }

    const submitForm = (event) => {
        event.preventDefault();
        console.log({ user, profile });
        axios.post("http://localhost:3001/register", { user, profile })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err.response))
    }

    const disablingButton = () => {
        return user.password.length >= 6 && user.email != "" && profile.fullName != ""
            && profile.username != "";
    }

    return (
        <Helmet title="Đăng ký" constTitle="Instagram">
            <div className="register-container">
                <div className="register-section split">
                    <div className='register-form'>
                        <div className='title'></div>
                        <h2>Đăng ký để xem ảnh và video từ bạn bè.</h2>
                        <hr />
                        <form onSubmit={submitForm}>
                            <label className={user.email != "" ? "filled" : null}>
                                <span>
                                    Số điện thoại, tên người dùng hoặc email
                                </span>
                                <input
                                    autoComplete='off'
                                    aria-label='Số điện thoại, tên người dùng hoặc email'
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleInput} />
                            </label>
                            <label className={profile.fullName != "" ? "filled" : null}>
                                <span>
                                    Tên đầy đủ
                                </span>
                                <input
                                    autoComplete='off'
                                    aria-label='Tên đầy đủ'
                                    type="text"
                                    id="fullname"
                                    name="fullName"
                                    value={profile.fullName}
                                    onChange={handleInput} />
                            </label>
                            <label className={profile.username != "" ? "filled" : null}>
                                <span>
                                    Tên người dùng
                                </span>
                                <input
                                    autoComplete='off'
                                    aria-label='Tên người dùng'
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={profile.username}
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
                            <p>
                                Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ
                                của bạn lên Instagram. <a href="#">Tìm hiểu thêm</a>
                            </p>
                            <p>
                                Bằng cách đăng ký, bạn đồng ý với <a href="#">Điều khoản, Chính sách quyền riêng tư</a> và <a href="#">Chính sách cookie</a> của chúng tôi.
                            </p>
                            <button
                                className={disablingButton() ? null : "disabled"}
                                type="submit"
                                disabled={!disablingButton()}>Đăng ký</button>
                        </form>
                    </div>
                    <div className='login-link'>
                        Bạn có tài khoản? <span><a href="/login">Đăng nhập</a></span>
                    </div>
                </div>
            </div>
            <Footer />
        </Helmet>
    )
}