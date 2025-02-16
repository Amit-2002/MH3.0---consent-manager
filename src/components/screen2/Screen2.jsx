import styles from "./screen2.module.css";
import angel from "../../assets/angel.svg"
import hv from "../../assets/hv.svg"

function Screen2() {
  return (
    <main className={styles.main}>
        <section className={styles.mainContainer}>

            <div className={styles.details}>

                <div className={styles.logoMail}>

                    <div className={styles.logoCont}>
                        <img src={hv} alt="hv" />
                        <img src={angel} alt="angel" />
                    </div>

                    <div className={styles.mailCont}>
                        <h2>Johndoe@gmail.com</h2>
                        <p>&lt;Policy Version&gt;</p>
                    </div>

                </div>

                <section className={styles.warningSection}>

                    <div className={styles.warningCont}>

                        <div className={styles.collectedInfoCont}>

                            <div className={styles.warnHeading}>
                                <h2>The following details will be collected from you by &lt;XYZ_name&gt;</h2>
                            </div>

                            <div className={styles.detailsChecks}>
                                <div>
                                    <input type="checkbox" />
                                    <p>Facial Scan</p>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <p>Location access</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.purposeCont}>
                            <div>
                                <h3>Purpose</h3>
                            </div>
                            <div>
                                <p>Fraud prevention and compliance checks</p>
                            </div>
                            <div>
                                <p>Fraud prevention and compliance checks</p>
                            </div>
                        </div>
                    </div>

                </section>

                <section className={styles.termsPolicySection}>

                    <div className={styles.tpStatement}>
                        <p>By clicking Allow, you allow the app to use your information in accordance to their respective <span>terms of serve</span> and <span>privacy policies</span>.</p>
                    </div>

                    <div className={styles.buttonsCont}>
                        <button><h4>Deny</h4></button>
                        <button className={styles.btnBlue}><h4>Allow</h4></button>
                    </div>

                </section>

            </div>

            <div className={styles.version}>SDK Version &lt;VX&gt;</div>

        </section>
    </main>
  )
}

export default Screen2
