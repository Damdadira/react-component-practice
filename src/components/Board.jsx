import PropTypes from 'prop-types';

const Board = ({articles}) => {
  return (
    <div>
      <h1>Board</h1>
      <ul>
        {articles.map(articles => (
          <li key={articles.id}>
            {articles.id} | {articles.title} | {articles.author}
          </li>
        ))}
      </ul>
    </div>
  )
}

Board.propTypes = {
  articles: PropTypes.array
}

export default Board;