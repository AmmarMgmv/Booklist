import ReactDom from 'react-dom/client';

import './index.css';

import {books} from './books';
import Book from './Book';

function Booklist(){
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Booklist></Booklist>)