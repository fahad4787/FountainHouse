import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import classes from "./index.module.scss"
import img from "../../Images/footerLogo.png"

const data =[
  {
    footerList: [
      { title: "NAVIGATION" },
      { text: "Home" },
      { text: "About" },
      { text: "Projects" },
      { text: "What We Do" },
      { text: "Contact" },
  ]
  },
  {
    footerList: [
      { title: "Our Programs" },
      { text: "Fountain House Lahore" },
      { text: "Fountain House Farroqabad" },
      { text: "Fountain House Sargodha" },
      { text: "Ayesha Saddiqa Home of Compassion" },
      { text: "HRVRC" },
  ]
  },
  {
    footerList: [
      { title: "GET IN TOUCH" },
      { text: "Office # 37,Lower Mall" },
      {text:"Near Session Court Lahore, Pakistan"},
      { text: "+92 42-37110798-9" },
      { text: "+92 42-37352803-05" },
      { text: "UAN:+92 42-346-873" },
      { text: "www.fountainhouse.com.pk" },
  ]
  },
  {
    footerList: [
      { img: img },
      {copyright: "© 2021 Fountain House Lahore."},
      
  ]
  },
]

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container>
        <Row>
          {data.map((data, ind) => {
            return (
              <Col lg={3} md={6}>
                <ul className={classes.footerList}>
                  {
                    data.footerList.map((list, ind) => {
                      return (
                        <li>
                          {list.title ? <h6>{list.title}</h6> : ""}
                          {list.text ? <a href='#'>{list.text}</a> : ""}
                          {list.img? <a href='#'><img src={list.img} alt="img" /></a> : ""}
                          {list.copyright? <p>{list.copyright}</p>: ""}
                        </li>
                      )
                    })
                  }
                </ul>
              </Col>
            )
          })}
        </Row>
      </Container>
    </footer>
  )
}

export default Footer