import Item from '../item/Item';
import styles from './body.module.css';
import menu from '../../data';
import {useEffect, useState} from 'react';

type PropsBody = {
    filter: string | null;
}
const Body = ({filter}: PropsBody) => {
    const [filteredMenu, setFilteredMenu] = useState(() => {
        const newFilteredMenu = [...menu];
        if (filter) {
            return newFilteredMenu.filter((m) => m.category !== filter);
        }
        return newFilteredMenu;
    });
    useEffect(()=>{
      setFilteredMenu(() => {
          const newFilteredMenu = [...menu];
          if (filter) {
              return newFilteredMenu.filter((m) => m.category === filter);
          }
          return newFilteredMenu;
      })
    },[filter])
    return (
        <div className={styles.bodyContainer}>
            {filteredMenu.map((m, key) => <Item key={key} {...m}/>)}


        </div>
    );
};
export default Body;