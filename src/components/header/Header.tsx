import styles from './header.module.css';
type PropsHeader={
    filter:string|null;
    setFilter:(filter:string|null)=>void;
}
const Header = ({setFilter,filter}:PropsHeader) => {
    return (
        <div className={styles.header}>
            <div className={styles.titleBar}>
                <h1 className={styles.title}>Our Menu</h1>
                <div className={styles.underline}/>
            </div>
            <div className={styles.navbar}>
                <button className={`${styles.navbarButton} ${filter===null&& styles.active}`} onClick={()=>{setFilter(null)}}>All</button>
                <button className={`${styles.navbarButton} ${filter==='breakfast'&& styles.active}`} onClick={()=>{setFilter("breakfast")}}>Breakfast</button>
                <button className={`${styles.navbarButton} ${filter==='lunch'&& styles.active}`} onClick={()=>{setFilter("lunch")}}>Lunch</button>
                <button className={`${styles.navbarButton} ${filter==='shakes'&& styles.active}`} onClick={()=>{setFilter("shakes")}}>Shakes</button>
            </div>
        </div>);
};
export default Header;