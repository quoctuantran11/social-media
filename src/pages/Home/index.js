import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment, faHeart, faPaperPlane, faBookmark, faFaceSmile } from "@fortawesome/free-regular-svg-icons"
import axios from 'axios';
import Sidebar from '../../components/Sidebar';
import { LoginForm } from '../Login';
import Footer from '../../components/Footer';
import { useAuth } from '../../context/authContext';
import test_pic from "../../assets/images/test.png";

const HomeContainer = () => {
    const [lang, setLang] = useState("");
    const [comment, setComment] = useState("");

    return (
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
                        <div className='post'>
                            <div className='author-section'>
                                <div className='author-link'>
                                    <a href='#'><div className='avatar'></div></a>
                                    <a href='#'>username</a>
                                </div>
                                <div className='other-interact'>
                                    <div className='boundary'>
                                        <div className='interpunct'>•</div>
                                    </div>
                                </div>
                            </div>
                            <div className='posted-content'>
                                <img src={test_pic} alt="pic" />
                            </div>
                            <div className='post-infomation'>
                                <div className='reaction-section'>
                                    <FontAwesomeIcon className='heart-btn' icon={faHeart} size="xl" />
                                    <FontAwesomeIcon className='comment-btn' icon={faComment} size="xl" flip='horizontal' />
                                    <FontAwesomeIcon className='share-btn' icon={faPaperPlane} size="xl" />
                                    <FontAwesomeIcon className='bookmark-btn' icon={faBookmark} size="xl" />
                                </div>
                                <div className='reaction-count'>
                                    <p><b>Nhiều người khác</b> đã thích</p>
                                </div>
                                <div className='post-title'>
                                    <a href='#'>username</a>
                                    <p>This is the title of the above post</p>
                                </div>
                                <div className='timestamp'>
                                    <p>1 NGÀY TRƯỚC <span><b>Xem bản dịch</b></span></p>
                                </div>
                            </div>
                            <div className='comment-section'>
                                <FontAwesomeIcon className='emo-btn' icon={faFaceSmile} size="xl" />
                                <input type="text"
                                    placeholder='Thêm bình luận...'
                                    onChange={(e) => setComment(e.target.value)}
                                    value={comment}
                                />
                                <div className={'submit-comment ' + (comment != "" ? "has-comment" : null)}>Đăng</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right-section'>
                <div className='profile-link'>
                    <div className='link-content left-area'>
                        <a href='#'><div className='avatar'></div></a>
                        <div className='profile-short'>
                            <a href='#'>username</a>
                            <p>Account 1</p>
                        </div>
                    </div>
                    <div className='link-content right-area'>
                        <a href="#">Chuyển</a>
                    </div>
                </div>
                <div className='footer-nav'>
                    <ul>
                        <li>
                            <a href='#'>Giới thiệu</a>
                        </li>
                        <li>&#xB7;</li>
                        <li>
                            <a href='#'>Trợ giúp</a>
                        </li>
                        <li>&#xB7;</li>
                        <li>
                            <a href='#'>Báo chí</a>
                        </li>
                        <li>&#xB7;</li>
                        <li>
                            <a href='#'>API</a>
                        </li>
                        <li>&#xB7;</li>
                        <li>
                            <a href='#'>Việc làm</a>
                        </li>
                        <li>&#xB7;</li>
                        <li>
                            <a href='#'>Quyền riêng tư</a>
                        </li>
                        <li>&#xB7;</li>
                        <li>
                            <a href='#'>Điều khoản</a>
                        </li>
                        <li>&#xB7;</li>
                        <li>
                            <a href='#'>Vị trí</a>
                        </li>
                        <li>&#xB7;</li>
                        <li>
                            <select defaultValue={lang} onChange={(e) => setLang(e.target.value)}>
                                <option value="" hidden>Ngôn ngữ</option>
                                <option onClick={() => changeLanguage('vi')}
                                    value="vi">Tiếng Việt</option>
                                <option onClick={() => changeLanguage('en')}
                                    value="en">English</option>
                            </select>
                        </li>
                    </ul>
                </div>
                <div className='copyright'>
                    &copy; 2022 INSTAGRAM FROM META
                </div>
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