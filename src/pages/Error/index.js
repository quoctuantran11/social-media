import Helmet from "../../components/Helmet"
import Footer from "../../components/Footer"

export default function ErrorPage() {
    return (
        <Helmet title="Không tìm thấy trang" constTitle="Instagram">
            <div className="error-container">
                <div className="error-content">
                    <h2>Rất tiếc, trang này hiện không khả dụng.</h2>
                    <p>Liên kết bạn theo dõi có thể bị hỏng hoặc trang này có thể đã bị gỡ. <a href="/">Quay lại Instagram.</a></p>
                </div>
            </div>
            <div className="footer-section">
                <Footer />
            </div>
        </Helmet>
    )
}