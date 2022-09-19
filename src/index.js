import ReactDom from 'react-dom';

function Booklist(){
  return (
    <section>
      <Book/>
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image/>
      <Title/>
      <Author/>
    </article>
  )
}

const Image = () => {
  return <img src="https://images-eu.ssl-images-amazon.com/images/I/612BYerla-L._AC_UL600_SR600,400_.jpg" alt="" />
}

const Title = () => {
  return <h2>Fairy Tale: Stephen King</h2>
}

const Author = () => {
  return <h4>Stephen King</h4>
}

ReactDom.render(<Booklist/>, document.getElementById('root'));