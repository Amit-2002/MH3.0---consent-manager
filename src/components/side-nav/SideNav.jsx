import styles from "./sideNav.module.css"
import logo from "../../assets/logo.svg";
import home from "../../assets/home.svg";
import application from "../../assets/application.svg";
import analytics from "../../assets/Analytics.svg";
import workflow from "../../assets/workflow.svg";
import devHub from "../../assets/Dev_hub.svg";
import account from "../../assets/account.svg";
import key from "../../assets/key.svg";

function SideNav()
{
  return (
    <div className={styles.sideContainer}>
        <div className={styles.logo}>
            <img src={logo} alt="logo" />
        </div>

        <div className={styles.navLinksContainer}>
            <div className={styles.home}>
                <div className={styles.image}>
                    <img src={home} alt="home-icon" />
                </div>
                <p>Home</p>
            </div>

            <div className={styles.application}>
                <div className={styles.image}>
                    <img src={application} alt="application-icon" />
                </div>
                <p>Applications</p>
            </div>

            <div className={styles.analytics}>
                <div className={styles.image}>
                    <img src={analytics} alt="analytics-icon" />
                </div>
                <p>Analytics</p>
            </div>

            <div className={styles.workflow}>
                <div className={styles.image}>
                    <img src={workflow} alt="workflow" />
                </div>
                <p>Workflow</p>
            </div>

            <div className={styles.devHub}>
                <div className={styles.image}>
                    <img src={devHub} alt="dev-hub-icon" />
                </div>
                <p>Dev Hub</p>
            </div>

            <div className={styles.account}>
                <div className={styles.image}>
                    <img src={account} alt="account-icon" />
                </div>
                <p>Accounts</p>
            </div>

            <div className={styles.key}>
                <div className={styles.image}>
                    <img src={key} alt="key-icon" />
                </div>
                <p>Consent Manager</p>
            </div>
        </div>
    </div>
  )
}

export default SideNav