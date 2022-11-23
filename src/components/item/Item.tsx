import styles from './item.module.css';
type PropsItem={
    title:string;
    id:number;
    category:string;
    price:number;
    img:string;
    desc:string;
}

const Item = ({title,id,category,price,img,desc}:PropsItem) => {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={img} alt={title}/>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.infoHeader}>
                   <p className={styles.title}>{title}</p>
                    <p className={styles.title+" "+styles.price}>${price}</p>
                </div>
                <div className={styles.infoBody}>
                    <p className={styles.infoText}>{desc}</p>
                </div>
            </div>
        </div>
    );
};
export default Item;