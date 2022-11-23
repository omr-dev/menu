import styles from './header.module.css';
import menu from '../../data';
type PropsHeader={
    filter:string;
    setFilter:(filter:string)=>void;
}
const Header = ({setFilter,filter}:PropsHeader) => {
    const categories=(()=>{
        let _categories:string[]=["all"];
        menu.map((m)=>{
            if(!_categories.includes(m.category)) _categories.push(m.category);

        });
        return _categories;
    })();
    return (
        <div className={styles.header}>
            <div className={styles.titleBar}>
                <h1 className={styles.title}>Our Menu</h1>
                <div className={styles.underline}/>
            </div>

            <div className={styles.navbar}>
                {categories.map((c,key)=><button key={key} className={`${styles.navbarButton} ${filter===c&& styles.active}`} onClick={()=>{setFilter(c)}}>{c}</button>)}
                </div>
        </div>);
};
export default Header;