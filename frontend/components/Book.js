import styles from '../styles/Book.module.css';
import { useState } from 'react';

function Book(props) {

    const [selector, setSelector] = useState('')

    const selectBook = () => {
        if (selector = '') {
            setSelector('X')
        } else { selector = setSelector('') }
    }

    return (
        <div>
            <main className={styles.main}>

                <div>{props.order}</div>
                <div><h1>{props.name}</h1></div>
                <div>{props.date}</div>

                <div className={styles.selecteur} onClick={() => { selectBook }}>{selector}</div>
                <div></div>


                <h1 className={styles.title}>
                </h1>
            </main>
        </div>
    );
}

export default Book;
