import { useContext, useState } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/SetCountdownBar.module.css';

export function SetCountdownBar() {
    const [degRotation, setDegRotation] = useState("rotate(0deg)");
    const [transformBar, setTransformBar] = useState("translate(-50%, 30%)");
    const { setInitialTime, setTime } = useContext(CountdownContext);

    function toggleVisibilityBar() {
        if (degRotation === "rotate(0deg)") {
            setDegRotation("rotate(180deg)");
            setTransformBar("translateX(-50%)");
        } else {
            setDegRotation("rotate(0deg)");
            setTransformBar("translate(-50%, 30%)");
        }
    }
    
    return(
        <div
            className={styles.setCountdownBarContainer}
            style={{transform: transformBar}}
        >
            <div className={styles.arrowWrapper} onClick={toggleVisibilityBar}>
                <img 
                    src="icons/arrow.png"
                    alt="Arrow" 
                    style={{transform: degRotation}}
                />
            </div>
            <div className={styles.settingsWrapper}>
                <span>Tempo de duração do sprint: </span>
                <select 
                    onChange={
                        (e) => {
                            setInitialTime(e.target.value);
                            setTime(e.target.value);
                        }
                    }
                >
                    <option value={3} selected>3 segundos</option>
                    <option value={900}>15 minutos</option>
                    <option value={1500}>25 minutos</option>
                    <option value={2400}>40 minutos</option>
                    <option value={3600}>60 minutos</option>
                </select>
            </div>
        </div>
    );
}