import styles from "./screen3.module.css";

function Screen3() {
  return (
    <main className={styles.main}>
        <div className={styles.mainCont}>

            <section className={styles.topSection}>

                <div className={styles.tokenField}>

                    <label htmlFor="token">
                        <p>Token</p>
                    </label>

                    <div className={styles.inputCont}>
                        <input type="text" id="token" value="<Token Value>"/>
                    </div>
                </div>

                <div className={styles.tokenBtnCont}>
                    <button><p>Validate Token</p></button>
                </div>
                
            </section>

            <section className={styles.bottomSection}></section>

        </div>
    </main>
  )
}

export default Screen3;