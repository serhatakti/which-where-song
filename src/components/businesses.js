import React from 'react';
import styles from '@/styles/components/businesses.module.scss';

const Businesses = ({businesses}) => {
    return (
        <div className={styles.businesses}>
            <div className={styles.businessContainer}>
                {businesses?.map((business) => (
                    <div key={business.place_id} className={styles.businessCard}>
                        <h3>{business.name}</h3>
                        <p>{business.vicinity}</p>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Businesses;