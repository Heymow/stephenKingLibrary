import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react'
import Book from './Book'

function Home() {

  const [booksList, setBooksList] = useState([]);
  const selectedBooks = [];

  useEffect(() => {
    const books = []
    const start = async () => {
      const fetchedBooks = await fetch(`https://stephen-king-api.onrender.com/api/books`);
      books = await fetchedBooks.json();
      setBooksList(books.data);
    }
    start();
  }, [])


  //   // allbooks JSX
  //   let allBooksJSX = [];
  //   allBooksJSX = booksList.map(book => {
  //     let name = book.Title;
  //     let date = book.Year;
  //     let order = book.id;
  //     return <Book name={name} date={date} order={order} />
  //   })


  //select books
  for (let i = 0; i < 5; i++) {
    selectedBooks.push(booksList[i]);
  }

  // // //construct display JSX
  const displayedBooks = selectedBooks.map((book) => {
    if (book) {
      console.log(book);
      let name = book.Title;
      let date = book.Year;
      let order = book.id;
      return <Book name={name} date={date} order={order} />
    }
  })


  return (
    <div>


      <div className={styles.header}>
        <h1 className={styles.title}>
          Stephen King Library
        </h1>
      </div>


      <main className={styles.main}>
        <div className={styles.container}>
          {displayedBooks}
        </div>


      </main>
    </div>
  );
}

export default Home;
