import React from 'react'
import { Container } from 'react-bootstrap'
import classes from "./index.module.scss"


const Join = (data) => {
    return (
        <section className={`${classes.textBox} ${data.custClass}`}>
              <Container>
              <h3>{data.data[0].title}</h3>
                <p>{data.data[0].description}</p>
              </Container>
        </section>
    )
}

export default Join