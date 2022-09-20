import ReactDom from 'react-dom/client';

import './index.css'

const books = [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1647789287i/60177373.jpg',
    title: 'Fairy Tale',
    author: 'Stephen King',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis deserunt expedita aperiam inventore reiciendis rerum delectus!'
  },
  
  {
    img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1373903563i/11566.jpg',
    title: 'The Green Mile',
    author: 'Stephen King',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum fugiat asperiores magni laudantium dolorum! Pariatur necessitatibus?'
  },

  {
    img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1213131305i/149267.jpg',
    title: 'The Stand',
    author: 'Stephen King',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ut cumque nobis ab. Rerum modi laudantium ex itaque facilis odio.'
  }
]

function Booklist(){
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book book={book}></Book>;
      })}
    </section>
  )
}

const Book = (props) => {
  const {img, title, author, desc} = props.book
  return (
    <article className='book'>
      <img className='cover' src={img} alt="" />
      <h2 className='title'>{title}</h2>
      <h4 className='author'>{author}</h4>
      <p className='description'>{desc}</p>
    </article>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Booklist></Booklist>)