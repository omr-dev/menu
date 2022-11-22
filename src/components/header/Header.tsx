import styles from './header.module.css';
const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.titleBar}>
                <h1 className={styles.title}>Our Menu</h1>
                <div className={styles.underline}/>
            </div>
            <div className={styles.navbar}>
                <button className={styles.navbarButton}>All</button>
                <button className={styles.navbarButton}>Breakfast</button>
                <button className={styles.navbarButton}>Lunch</button>
                <button className={styles.navbarButton}>Shakes</button>
            </div>
        </div>);
};
export default Header;