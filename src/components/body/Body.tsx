import Item from '../item/Item';
import styles from './body.module.css';

const Body = () => {
    return (
        <div className={styles.bodyContainer}>
            <Item/>
            <Item/>
            <Item/>

        </div>
    );
};
export default Body;