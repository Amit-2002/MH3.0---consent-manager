import styles from "./sideOptions.module.css"
import demo from "../../assets/demo.svg"
import configuration from "../../assets/configuration.svg"
import search from "../../assets/search.svg"

function SideOptions() {
  return (
    <div className={styles.container}>
        <div className={styles.heading}>
            <h1>Consent Manager</h1>
        </div>   

        <div className={styles.options}>
            <div className={styles.option}>
                <div className={styles.cont}>
                    <img src={demo} alt="demo" id='demo'/>
                    <p>Demo</p>
                </div>
            </div>
            <div className={styles.option}>
                <div className={styles.cont}>
                    <img src={configuration} alt="confg" />
                    <p>Configurations</p>
                </div>
            </div>
            <div className={styles.option}>
                <div className={styles.cont}>
                    <img src={search} alt="search" />
                    <p>Search</p>
                </div>
            </div>
        </div>     
    </div>
  )
}

export default SideOptions