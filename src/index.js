import ReactDom from 'react-dom';

import './index.css'

function Booklist(){
  return (
    <section className='booklist'>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image/>
      <Title/>
      <Author/>
    </article>
  )
}

const Image = () => {
  return <img className='cover' src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1647789287i/60177373.jpg" alt=""/>
}

const Title = () => {
  return <h2 className='title'>Fairy Tale: Stephen King</h2>
}

const Author = () => {
  return <h4 className='author'>Stephen King</h4>
}

ReactDom.render(<Booklist/>, document.getElementById('root'));