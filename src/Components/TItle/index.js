
import React from 'react'
import classes from "./index.module.scss"
const Title = (props) => {
  return (
    <>
      <div className={`${classes.titleBox} ${props.custClass}`}>
      <h3 className={classes.title}>{props.title}</h3>
      {props.description? <p>{props.description}</p> :""}
      </div>
    </>
  )
}

export default Title