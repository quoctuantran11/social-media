import { useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../../components/Footer';

const HomeContainer = () => {

}

const NotAuthorized = () => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const[isHidden, setIsHidden] = useState(true);

    const handleInput = (e) => {
        setUser(prevUser => ({
            ...prevUser,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <>
            <div className="notauth-container">
                <div className="cover-img split"></div>
                <div className='container-divider'></div>
                <div className="login-section split">
                    <div className='login-form'>
                        <div className='title'></div>
                        <form>
                            <label className={user.username != "" ? "filled" : null}>
                                <span>
                                    Số điện thoại, tên người dùng hoặc email
                                </span>
                                <input 
                                autoComplete='off'
                                aria-label='Số điện thoại, tên người dùng hoặc email'
                                type="text" 
                                id="username" 
                                name="username" 
                                value={user.username} 
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