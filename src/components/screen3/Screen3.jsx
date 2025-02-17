import styles from "./screen3.module.css";
import vector from "../../assets/vector.svg";
import { useState } from "react";

function Screen3() {
    const [validBtn, setValidBtn] = useState(false);
    
    function handleClick(btn){
        // console.log(validBtn);

        setValidBtn((pre)=>{
            const newValidBtn = !pre;
            // console.log(newValidBtn);
            return newValidBtn;
        });
    }

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
                    <button onClick={()=>handleClick(validBtn)}><p>Validate Token</p></button>
                </div>
                
            </section>

            <section className={styles.bottomSection} id="bottomSection" 
            style={
                {display: validBtn ? "flex":"none",
                    borderTop : validBtn ? "1px solid rgba(5, 5, 82, 0.1)":"none"
                }
                }>

                <div className={styles.status}>
                    <h3>Consent Details</h3>

                        <div className={styles.acceptedCont}>
                            <div className={styles.box}>
                                <div className={styles.imgCont}>
                                    <img src={vector} alt="vector-img" />
                                </div>
                                <p>Accepted</p>
                            </div>
                        </div>
                </div>

                <section className={styles.consentDetails}>

                    <h3 className={styles.heading}>Consent Details</h3>

                    <div className={styles.detailsCont}>
                        
                        <div className={styles.deviceId}>
                            <h3>Device ID</h3>
                            <p>b9f8e2d4-9c3a-4571-ae84-3c9df20297a1</p>
                        </div>

                        <div className={styles.hashedUserId}>
                            <h3>hashedUserId</h3>
                            <p>e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</p>
                        </div>

                        <div className={styles.timestamp}>
                            <h3>timestamp</h3>
                            <p>2024-06-12T14:35:22Z</p>
                        </div>

                        <div className={styles.ipAddress}>
                            <h3>ipAddress</h3>
                            <p>192.168.1.15</p>
                        </div>

                        <div className={styles.scope}>
                            <h3>Scope</h3>
                            <p>facial scan, Location Access1</p>
                        </div>

                        <div className={styles.purpose}>
                            <h3>Purpose</h3>
                            <div>
                                <p>User onboarding and identity verification</p>
                                <p>Fraud prevention and compliance checks</p>
                            </div>
                        </div>

                        <div>
                            <h3>browserVersion</h3>
                            <p>124.0.6367.119</p>
                        </div>

                        <div>
                            <h3>operatingSystem</h3>
                            <p>Windows 11</p>
                        </div>

                        <div>
                            <h3>deviceType</h3>
                            <p>Desktop</p>
                        </div>

                    </div>
                </section>

                <section className={styles.tenure2Main}>
                    <h2>Tenure</h2>

                    <div className={styles.tenure2Details}>
                        <div>
                            <p>humanReadable</p>
                            <h3>2025-06-12T14:35:22Z</h3>
                        </div>

                        <div>
                            <p>machineTimestamp</p>
                            <h3>1755022522</h3>
                        </div>
                    </div>
                
                </section>

                <section className={styles.sdk}>
                    <h2>SDK Version</h2>

                    <div className={styles.sdkDetails}>
                        <div>
                            <p>Version</p>
                            <h3>v1.2.3</h3>
                        </div>

                        <div className={styles.link}>
                            <p>link</p>
                            <h3>https://example.com/sdk/releases/v1.3.2</h3>
                        </div>
                    </div>
                </section>

                <section className={styles.policyMain}>
                    <h2>Privacy Policy</h2>
                    <div className={styles.policyDetails}>
                        <div>
                            <p>privacyPolicy</p>
                            <h3>https://example.com/privacy/v1.3.2</h3>
                        </div>
                        <div>
                            <p>User Action</p>
                            <h3>accept</h3>
                        </div>
                        <div>
                            <p>actionTimestamp</p>
                            <h3>2024-06-12T14:35:22Z</h3>
                        </div>
                    </div>
                </section>

            </section>

        </div>
    </main>
  )
}

export default Screen3;