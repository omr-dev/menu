import Item from '../item/Item';
import styles from './body.module.css';
import menu from '../../data';

const Body = () => {
    return (
        <div className={styles.bodyContainer}>
            {menu.map((m)=><Item {...m}/>)}


        </div>
    );
};
export default Body;