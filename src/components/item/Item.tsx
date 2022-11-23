import styles from './item.module.css';

const Item = () => {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src="https://react-projects-5-menu.netlify.app/images/item-1.jpeg" alt="buttermilk pancakes"/>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.infoHeader}>
                   <p className={styles.title}>buttermilk pancakes</p>
                    <p className={styles.title+" "+styles.price}>$15</p>
                </div>
                <div className={styles.infoBody}>
                    <p className={styles.infoText}>I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed </p>
                </div>
            </div>
        </div>
    );
};
export default Item;