import ReactDom from 'react-dom';

import './index.css'

const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1647789287i/60177373.jpg',
  title: 'Fairy Tale',
  author: 'Stephen King'
}

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1373903563i/11566.jpg',
  title: 'The Green Mile',
  author: 'Stephen King'
}

const thirdBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1213131305i/149267.jpg',
  title: 'The Stand',
  author: 'Stephen King'
}

function Booklist(){
  return (
    <section className='booklist'>
      <Book 
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book
        img={thirdBook.img}
        title={thirdBook.title}
        author={thirdBook.author}
      />
    </section>
  )
}

const Book = (props) => {
  return (
    <article className='book'>
      <img className='cover' src={props.img} alt="" />
      <h2 className='title'>{props.title}</h2>
      <h4 className='author'>{props.author}</h4>
    </article>
  )
}

ReactDom.render(<Booklist/>, document.getElementById('root'));