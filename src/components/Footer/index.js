import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t, i18n } = useTranslation()

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className='footer-container'>
            <div className='footer-nav'>
                <ul>
                    <li>
                        <a href='#'>{t('footer.meta')}</a>
                    </li>
                    <li>
                        <a href='#'>{t('footer.intro')}</a>
                    </li>
                    <li>
                        <a href='#'>{t('footer.blog')}</a>
                    </li>
                    <li>
                        <a href='#'>{t('footer.job')}</a>
                    </li>
                    <li>
                        <a href='#'>{t('footer.help')}</a>
                    </li>
                    <li>
                        <a href='#'>{t('footer.api')}</a>
                    </li>
                    <li>
                        <a href='#'>{t('footer.privacy')}</a>
                    </li>
                    <li>
                        <a href='#'>{t('footer.policy')}</a>
                    </li>
                    <li>
                        <a href='#'>{t('footer.relative')}</a>
                    </li>
                    <li>
                        <a href='#'>{t('footer.hashtag')}</a>
                    </li>
                    <li>
                        <a href='#'>{t('footer.location')}</a>
                    </li>
                    <li>
                        <a href='#'>{t('footer.lite')}</a>
                    </li>
                    <li>
                        <a href='#'>{t('footer.upload')}</a>
                    </li>
                </ul>
            </div>
            <div className='copyright'>
                <select>
                    <option onClick={() => changeLanguage('vi')}>Tiếng Việt</option>
                    <option onClick={() => changeLanguage('en')}>English</option>
                </select>
                <div>&copy; 2022 Instagram from Meta</div>
            </div>
        </div>
    )
}