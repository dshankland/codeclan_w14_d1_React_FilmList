import React from 'react';

const Film = (props) => {

  return (
    <div>
      <h4><a href={props.url}>{props.name}</a></h4>
    </div>
  );

}

export default Film;