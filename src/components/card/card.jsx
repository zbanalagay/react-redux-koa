import React, { PropTypes } from 'react';


function card(props) {
  return (
      <article className="col-md-4">
        <img src={ props.imagecdn } className="img-fluid img-rounded" />
        <div>
          <p>

          </p>
        </div>
      </article>
    );
}

card.propTypes = {
  imagecdn: PropTypes.string.isRequired
};

export default card;
