import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import classes from "./index.module.scss"
import img1 from "../../Images/about1.png"
import img2 from "../../Images/about2.png"


const data = [
    {
        title: "Fountain House",
        description: "Fountain House Pakistan is Unique among all Fountain Houses In World",
        paragraph: "Fountain house institute for mental health is working for the patients with psychiatric illness coming from less privileged sections of society. Lahore Mental Health Association (LMHA) was established in 1963. It was registered under the voluntary Social Welfare Agencies (Registration and Control) Ordinance, 1961 (XLVI of 1961) .Prof Dr Rasheed Chaudhry and his companions started the project for the rehabilitation of patients (members) with schizophrenia. For first three years it was supported by Mr. John H. Beard, executive director Fountain House New York. Since then it kept on increasing its services for mental health in Pakistan with the help of community. Alhamdulillah, making it 'home of happiness'. It has further extended its services for the treatment of members(patients) with substance use disorders, day school programs for the education and training of children with intellectual disabilities and support program for Khwajasira.",
        icon1: img1,
        icon2: img2,
        IconTitle:"Vision",
        IconTitle2:"Mission",
        IconPara:"People suffering with mental illnesses should receive psychiatric treatment and psycho-social rehabilitation facilities with all their self-esteem, so that they could achieve their potential and be respected as relatives, neighbors, friends, workers and members of society.",
        iconPara2:"Treatment and rehabilitation of mentally ill patients.",
    }
]

const AboutUs = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col md="6">
                        <div className={classes.title}>
                            <h3>{data[0].title}</h3>
                            <p>{data[0].description}</p>
                        </div>
                        <p align="justify" className='my-3'>{data[0].paragraph}</p>
                    </Col>
                    <Col md="3" className=' position-relative'>
                        <div className={classes.borderCircle}>
                        <span class="fa fa-arrow-circle-right" aria-hidden="true"></span>
                        </div>
                        <div className={classes.iconBox}>
                            <img className='img-fluid rounded-circle' src={data[0].icon1} alt="img" />
                        </div>
                        <div className={classes.textBox}>
                            <h4>{data[0].IconTitle}</h4>
                            <p align="justify">{data[0].IconPara}</p>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className={classes.iconBox}>
                            <img className='img-fluid rounded-circle' src={data[0].icon2} alt="img" />
                        </div>
                        <div className={classes.textBox}>
                            <h4>{data[0].IconTitle2}</h4>
                            <p align="justify">{data[0].iconPara2}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutUs