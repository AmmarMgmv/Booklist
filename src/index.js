import ReactDom from 'react-dom/client';

import './index.css'

const books = [
  {
    id:1,
    img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1647789287i/60177373.jpg',
    title: 'Fairy Tale',
    author: 'Stephen King',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis deserunt expedita aperiam inventore reiciendis rerum delectus!'
  },
  
  {
    id:2,
    img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1373903563i/11566.jpg',
    title: 'The Green Mile',
    author: 'Stephen King',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum fugiat asperiores magni laudantium dolorum! Pariatur necessitatibus?'
  },

  {
    id:3,
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
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  )
}

const Book = (props) => {
  const {img, title, author, desc} = props

  const clickHandler =() => {
    alert('Hello World');
  }
  const complexExample = (author) => {
console.log(author);
  }

  return (
    <article className='book' onMouseOver={() => {console.log(title)}}>
      <img className='cover' src={img} alt="" />
      <h2 onClick={() => console.log(title)} className='title'>{title}</h2>
      <h4 className='author'>{author}</h4>
      <p className='description'>{desc}</p>
      <button type="button" onClick={clickHandler}>Reference Example</button>
      <button type="button" onClick={() => complexExample(author)}>More Complex Example</button>
    </article>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Booklist></Booklist>)