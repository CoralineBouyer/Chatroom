import PropTypes from 'prop-types';

function Message({ author, content }) {
  return (
    <article className="message">
      <h2 className="message-author">{author}</h2>
      <p className="message-content">{content}</p>
    </article>
  );
}

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Message;
