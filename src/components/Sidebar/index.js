import { useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faCompass, faHeart, faSquarePlus } from "@fortawesome/free-regular-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons"
import { useAuth } from '../../context/authContext';

function SearchBox() {
    const [keyword, setKeyword] = useState(null)

    return(
        <div className="search-container">
            <h2>Tìm kiếm</h2>
            <form>
                <div className="search-box">
                    <input 
                    type="text" 
                    placeholder="Tìm kiếm" 
                    name="keyword"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)} />
                </div>
            </form>
            <hr/>
            <div className="search-history">
                <p>Gần đây</p>
            </div>
        </div>
    )
}

function NotificationBox() {

}

export default function Sidebar() {
    const [toggle, setToggle] = useState(false)
    const [item, setItem] = useState(null)

    const { loggedUser } = useAuth();

    const { t } = useTranslation();

    function toggleSidebar(itemName) {
        setToggle(toggle => !toggle)
        setItem(itemName)
    }

    return (
        <div className="sidebar-section">
            <div className={"sidebar-container " + (toggle && "short")}>
                <Link to="/" onClick={() => setToggle(false)} >
                    <div className={'logo ' + (toggle && "hidden")}></div>
                    <FontAwesomeIcon className={'logo-icon ' + (toggle && "appear")}
                        icon={faInstagram} size="xl" />
                </Link>
                <ul>
                    <li><Link to="/" onClick={() => setToggle(false)} >
                        <div className="side-item">
                            <FontAwesomeIcon className='fa-ic' icon={faHouse} size="xl" />
                            <div className="link-title">{t('sidebar.home')}</div>
                        </div>
                    </Link></li>
                    <li><Link to="/" onClick={() => toggleSidebar("search")} >
                        <div className={"side-item " + 
                        ((item == 'search' && toggle) ? 'active-item' : undefined)}>
                            <FontAwesomeIcon className='fa-ic' icon={faMagnifyingGlass} size="xl" />
                            <div className="link-title">{t('sidebar.search')}</div>
                        </div>
                    </Link></li>
                    <li><Link to="/explore" onClick={() => setToggle(false)}>
                        <div className="side-item">
                            <FontAwesomeIcon className='fa-ic' icon={faCompass} size="xl" />
                            <div className="link-title">{t('sidebar.explore')}</div>
                        </div>
                    </Link></li>
                    <li><Link to="/direct/inbox" onClick={() => setToggle(false)}>
                        <div className="side-item">
                            <FontAwesomeIcon className='fa-ic' icon={faFacebookMessenger} size="xl" />
                            <div className="link-title">{t('sidebar.messages')}</div>
                        </div>
                    </Link></li>
                    <li><Link to="/" onClick={() => toggleSidebar("noti")} >
                        <div className={"side-item " + 
                        ((item == 'noti' && toggle) ? 'active-item' : undefined)}>
                            <FontAwesomeIcon className='fa-ic' icon={faHeart} size="xl" />
                            <div className="link-title">{t('sidebar.notification')}</div>
                        </div>
                    </Link></li>
                    <li><Link to="/" >
                        <div className="side-item">
                            <FontAwesomeIcon className='fa-ic' icon={faSquarePlus} size="xl" />
                            <div className="link-title">{t('sidebar.create')}</div>
                        </div>
                    </Link></li>
                    <li><Link to={`/${loggedUser?.username}`} onClick={() => setToggle(false)}>
                        <div className="side-item">
                            <div className="avatar fa-ic"></div>
                            <div className="link-title">{t('sidebar.profile')}</div>
                        </div>
                    </Link></li>
                    <li><Link to="/" >
                        <div className="side-item">
                            <div className="hamburger-menu fa-ic"></div>
                            <div className="link-title">{t('sidebar.more')}</div>
                        </div>
                    </Link></li>
                </ul>
            </div>
        </div>
    )
}