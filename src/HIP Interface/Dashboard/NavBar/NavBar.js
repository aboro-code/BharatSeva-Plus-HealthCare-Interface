import { Outlet, Link, NavLink } from "react-router-dom"
import "./NavBar.css"
import LefSideBar from "../LeftSide/LeftSideBar"

export default function NavBar({ toggleSideBar }) {

    function ToggleNotificationPopOver() {
        document.querySelector(".HealthCare_AccountPopOver").classList.add("DisplayNone")
        document.querySelector(".HealthCare_NotificationPopOver").classList.toggle("DisplayNone")
    }

    function HealthCare_ToggleAccountPopUp() {
        document.querySelector(".HealthCare_NotificationPopOver").classList.add("DisplayNone")
        document.querySelector(".HealthCare_AccountPopOver").classList.toggle("DisplayNone")
    }

    // This Will Get the Hopital Name
    const HealthCare = JSON.parse(sessionStorage.getItem("BharatSevahealthCare"))
    return (
        <>
            <div className="SideBarContainer">
                <div className="HomePageNavBarContainer DisplayFlexjustifyAlignitem">

                    <div className="LeftSideNavBar DisplayFlexjustifyAlignitem">
                        <i className="fa-solid fa-bars" onClick={() => toggleSideBar()}></i>
                        <p className="CompanyName">Bharat सेवा+</p>
                    </div>

                    <div className="LeftSideNavBar_NameTag DisplayFlexjustifyAlignitem">
                        <p className="HealthcareNameUser"><i className="fa-solid fa-user-doctor"></i> Health Care InterFace</p>
                    </div>

                    <div className="LeftSideNavBar_AccountAndNotification DisplayFlexjustifyAlignitem">
                        <p className="DisplayFlexjustifyAlignitem transition4OneSecond" onClick={ToggleNotificationPopOver}><i className="fa-regular fa-bell"></i> Notification
                        </p>
                        <div className="HealthCare_NotificationPopOver DisplayNone">
                            <ul>
                                <li>Welcome to Bharat Seva HealthCare Dashboard</li>
                                <li>This App is still Under-development :)</li>
                                <li>Star this project!</li>
                            </ul>
                        </div>

                        {/* Account Section Goes here */}
                        <p className="DisplayFlexjustifyAlignitem transition4OneSecond classACcountBharatseva" onClick={HealthCare_ToggleAccountPopUp}><i className="fa-solid fa-user"></i> Account</p>

                        <div className="HealthCare_AccountPopOver DisplayNone">
                            <ul>
                                <li style={{ color: "lime" }}>Signed In As</li>
                                <li className="HealthcareNameLableAccount">{HealthCare.name}</li>
                                <hr></hr>
                                <li>  <a target="__blank" href="https://github.com/CaptainTron/BharatSeva-User-Interface/discussions">Go to Discussion</a></li>
                                <li> <a target="__blank" href="https://github.com/CaptainTron/BharatSeva-HealthCare-Interface">Star this Project ⭐</a></li>
                                <li>API Integrations</li>
                                <li onClick={() => sessionStorage.clear()}><NavLink to='/healthcare/login' className="LogoutHealthcare" >Log Out</NavLink></li>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <Outlet />
        </>
    )
}