import React from 'react';
import classes from './Input.module.css';
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

// <input {...props.input}/> -- this is a nice little trick
// This ensures that all the key value pairs in this input object which we recieve on props.input
// are added as props to input
// So if input object here is an object that for example has {type: 'text'} then this code {...props.input}
// would make sure that type equals text if being added
// This is how that works
// It's simply a convenient way of making this input HIGHLY CONFIGURABLE from outside this component

export default Input;
