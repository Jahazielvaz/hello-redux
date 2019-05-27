import React from 'react';

import './App.css';

const ButtonGroup = ({technologies}) => {
  return(
    <div>
      {technologies.map((tech, i) => (
        <button data-tech={tech} key={`btn-${i}`} className="buttons">
          {tech}
        </button>
      ))}
    </div>
  )
}

export default ButtonGroup;
