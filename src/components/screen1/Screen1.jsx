import { useNavigate } from "react-router-dom"
import styles from "./screen1.module.css"

function Screen1() {
    const navigate = useNavigate()
  return (
    <div className={styles.mainContainer}>
        <div className={styles.formBox}>
            <div className={styles.heading}>
                <h1>Enter Consent Details</h1>
            </div>

            <div className={styles.inputCont}>
                <div className={styles.input}>
                    <div className={styles.formContent}>
                        <div className={styles.inputFields}>
                            <div>
                                <div className={styles.box}>
                                    <div className={styles.label}>
                                        <p>Customer ID</p>
                                    </div>
                                    <div className={styles.inptBox}>
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className={styles.box}>
                                    <div className={styles.label}>
                                        <p>Customer ID</p>
                                    </div>
                                    <div className={styles.inptBox}>
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className={styles.box}>
                                    <div className={styles.label}>
                                        <p>Customer ID</p>
                                    </div>
                                    <div className={styles.inptBox}>
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className={styles.box}>
                                    <div className={styles.label}>
                                        <p>Customer ID</p>
                                    </div>
                                    <div className={styles.inptBox}>
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className={styles.box}>
                                    <div className={styles.label}>
                                        <p>Customer ID</p>
                                    </div>
                                    <div className={styles.inptBox}>
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div className={styles.btnContainer}>
                            <button onClick={()=> navigate("/screen2")}><h3>Request Consent</h3></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Screen1