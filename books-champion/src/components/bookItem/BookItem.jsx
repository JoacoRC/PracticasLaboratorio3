const BookItem = ({title,author,pageCount,rating}) => {

  return ( <div>
    <h2>{title}</h2>
    <h2>{author}</h2>
    <h2>{pageCount}</h2>
    <div>{rating.length} estrellas</div>
    </div>
  )
}

  BookItem.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pageCount: PropTypes.number,
    rating: PropTypes.array,
  };


export default BookItem;
