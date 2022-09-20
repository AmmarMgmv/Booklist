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
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing 
          elit. Deserunt, excepturi? Libero exercitationem unde 
          rem aspernatur eius voluptatum saepe enim mollitia.
        </p>
      </Book>

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Suscipit sit aspernatur optio ut cum illum 
          expedita, et ipsa exercitationem corrupti?
        </p>
      </Book>

      <Book
        img={thirdBook.img}
        title={thirdBook.title}
        author={thirdBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Consequuntur ducimus ex eveniet placeat illo, nisi eum 
          cum quisquam culpa est.
        </p>
      </Book>
    </section>
  )
}

// const Book = ({img, title, author, children}) => {
//   return (
//     <article className='book'>
//       <img className='cover' src={img} alt="" />
//       <h2 className='title'>{title}</h2>
//       <h4 className='author'>{author}</h4>
//       {children}  
//     </article>
//   )
// }

const Book = (props) => {
  const {img, title, author, children} = props
  return (
    <article className='book'>
      <img className='cover' src={img} alt="" />
      <h2 className='title'>{title}</h2>
      <h4 className='author'>{author}</h4>
      {children}
    </article>
  )
}

// const Book = (props) => {
//   return (
//     <article className='book'>
//       <img className='cover' src={props.img} alt="" />
//       <h2 className='title'>{props.title}</h2>
//       <h4 className='author'>{props.author}</h4>
//     </article>
//   )
// }

ReactDom.render(<Booklist/>, document.getElementById('root'));