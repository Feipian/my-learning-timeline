import React from 'react';
import styles from './Channel.module.scss';
import AdsComponent from './AdSenseAd';

const Channel: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1>知識 Know How</h1>

            <div className={styles.channelSection}>
                <div className={styles.channelInfo}>
                    <a
                        href="https://youtube.com/@zhiziknowhow"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.channelLink}
                    >
                        Visit My YouTube Channel
                    </a>
                    <p>Learn about programming, web development, and more!</p>
                </div>

                {/* Google AdSense */}
                <AdsComponent dataAdSlot='9839242241' />

            </div>
        </div>
    );
};

export default Channel; 