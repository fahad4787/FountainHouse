import React from 'react'
import { Col, Row } from 'react-bootstrap'
import classes from "./index.module.scss"
import project1 from "../../Images/project1.jpg";
import project2 from "../../Images/project2.jpg";
import project3 from "../../Images/project3.jpg";
import project4 from "../../Images/project4.jpg";
import project5 from "../../Images/project5.jpg";
import project6 from "../../Images/project6.jpg";
import Title from 'Components/TItle';

const Project = () => {
    const data = [
        {
            title: "FOUNTAIN HOUSE LAHORE",
            date: "Since 1971",
            para: "Fountain House Lahore is the second Fountain House of the world after Fountain House New York N.Y. (USA).Fountain House is about the power of community. It was created to relieve the loneliness and stigma that affect so many people who are living with serious mental illnesses.",
            img1: project1,
        },
        {
            title: "FOUNTAIN HOUSE FAROOQABAD",
            date: "Since 1983",
            para: "Fountain House Farm Farooqabad is another endeavor of Fountain House as the location of Fountain House in Lahore, the majority of the members comes from urban areas, whereas 70% of the population of Pakistan live in rural areas depending mostly on agriculture or agro-based activitie",
            img1: project2,
        },
        {
            title: "INSTITUTE FOR DISADVANTAGED CHILDREN",
            date: "Since 1981",
            para: "Institute for Disadvantaged Children is situated on (BaberiChowk) Jain Mandar Road it's a project of Fountain House with the collaboration of Punjab Welfare Trust and Amin Maktab School.",
            img1: project3,
        },
        {
            title: "FOUNTAIN HOUSE SARGODHA",
            date: "Since 2011",
            para: "Aiming to serve the humanity by providing state of the art mental health treatment & rehabilitation services for the deserving mentally and stressed members of Sargodha.",
            img1: project4,
        },
        {
            title: "AYESHA SADDIQ - HOME OF COMPASSION",
            date: "Since 2019",
            para: "Ayesha Siddiq Compassion Homes is the latest addition towards achieving Fountain house's aims for serving the humanity through its services.",
            img1: project5,
        },
        {
            title: "HAROON RASHID VOCATIONAL & REHABILITATION CENTER",
            date: "Since 2011",
            para: "Haroon Rashid Vocational & Rehabilitation center (HRVRC) is established to help intellectualy impaired individuals by providing them with vocational Training Male student aging 17 to 40 year",
            img1: project6,
        },
    ]
    return (
        <section className='p-0'>
            <Title title={"Our Projects"} />
            <Row >
                {
                    data.map((data, ind) => {
                        return (
                            <>
                                <Col lg={"6"}  className='p-0'>
                                    <div className={`${classes.flexBox} ${ind === 2 || ind === 3 ? classes.flexDirection : ""}`}>
                                        <div className={classes.textBox}>
                                            <h3>{data.title}</h3>
                                            <h4>{data.date}</h4>
                                            <p>{data.para}</p>
                                            <a href="#" className='btn btn-secondary'>
                                                Read More
                                            </a>
                                        </div>
                                        <div className={`${classes.imgBox} imgBox`}>
                                            <img src={data.img1} alt="" />
                                        </div>
                                    </div>
                                </Col>
                            </>
                        )
                    })
                }
            </Row>
        </section>
    )
}

export default Project