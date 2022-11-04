import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faCompass, faHeart, faSquarePlus } from "@fortawesome/free-regular-svg-icons"
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons"

export default function Sidebar() {
    return (
        <div className="sidebar-container">
            <a href="/"><div className='logo'></div></a>
            <ul>
                <li><a href="/">
                    <div className="side-item">
                        <FontAwesomeIcon className='fa-ic' icon={faHouse} size="xl" />
                        <p>Trang chủ</p>
                    </div>
                </a></li>
                <li><a href="#">
                    <div className="side-item">
                        <FontAwesomeIcon className='fa-ic' icon={faMagnifyingGlass} size="xl" />
                        <p>Tìm kiếm</p>
                    </div>
                </a></li>
                <li><a href="/">
                    <div className="side-item">
                        <FontAwesomeIcon className='fa-ic' icon={faCompass} size="xl" />
                        <p>Khám phá</p>
                    </div>
                </a></li>
                <li><a href="/">
                    <div className="side-item">
                        <FontAwesomeIcon className='fa-ic' icon={faFacebookMessenger} size="xl" />
                        <p>Tin nhắn</p>
                    </div>
                </a></li>
                <li><a href="#">
                    <div className="side-item">
                        <FontAwesomeIcon className='fa-ic' icon={faHeart} size="xl" />
                        <p>Thông báo</p>
                    </div>
                </a></li>
                <li><a href="/">
                    <div className="side-item">
                        <FontAwesomeIcon className='fa-ic' icon={faSquarePlus} size="xl" />
                        <p>Tạo</p>
                    </div>
                </a></li>
                <li><a href="/">
                    <div className="side-item">
                        
                        <p>Trang cá nhân</p>
                    </div>
                </a></li>
                <li><a href="#">
                    <div className="side-item">
                        <div className="hamburger-menu fa-ic"></div>
                        <p>Xem thêm</p>
                    </div>
                </a></li>
            </ul>
        </div>
    )
}