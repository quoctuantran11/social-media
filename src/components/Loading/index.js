import load_logo from "../../assets/images/load-logo.png"
import load_footer from "../../assets/images/load-cpyright.png"

export default function Loading() {
    return(
        <div className="loading">
            <div className="loading-logo">
                <img src={load_logo} alt="loading" />
            </div>
            <div className="loading-footer">
                <img src={load_footer} alt="loading" width={70} height={35} />
            </div>
        </div>
    )
}