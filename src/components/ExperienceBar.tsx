import styles from '../styles/components/ExperienceBar.module.css';

import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export default function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
    const percentToNextLevel = Number(Math.round(currentExperience * 100) / experienceToNextLevel);

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width: `${percentToNextLevel || 0}%`}}></div>
                <span className={styles.currentExperience} style={{left: `${percentToNextLevel || 0}%`}}>
                    {`${currentExperience} xp`}
                </span>
            </div>
            <span>{`${experienceToNextLevel} xp`}</span>
        </header>
    );
}