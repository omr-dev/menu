import Item from '../item/Item';
import styles from './body.module.css';
import menu, {MenuItem} from '../../data';
import {useEffect, useState} from 'react';

type PropsBody = {
    filter: string ;
}
const createFilteredMenu=(menu:MenuItem[],filter:string)=>{
    const newFilteredMenu = [...menu];
    if(filter==="all") return newFilteredMenu;

    return newFilteredMenu.filter((m) => m.category === filter);

}
const Body = ({filter}: PropsBody) => {
    const [filteredMenu, setFilteredMenu] = useState(createFilteredMenu(menu,filter));
    useEffect(()=>{
      setFilteredMenu(createFilteredMenu(menu,filter))
    },[filter])
    return (
        <div className={styles.bodyContainer}>
            {filteredMenu.map((m, key) => <Item key={key} {...m}/>)}


        </div>
    );
};
export default Body;