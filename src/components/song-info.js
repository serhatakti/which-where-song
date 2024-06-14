import React from 'react';
import styles from '@/styles/components/song-info.module.scss';

const SongInfo = (props) => {
    return (
        <div className={styles.container}>
            {props?.spotify?.album?.images[0] && <img src={props?.spotify?.album?.images[0].url} alt={`${props.title} cover`} className={styles.image}/>}
            <h2 className={styles.title}>{props.title}</h2>
            <p className={styles.artist}>Sanatçı: {props.artist}</p>
            <p className={styles.album}>Albüm: {props.album}</p>
        </div>
    );
};

export default SongInfo;