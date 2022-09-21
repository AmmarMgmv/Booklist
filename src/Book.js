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
};

export default Book;