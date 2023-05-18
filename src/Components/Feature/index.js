import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import classes from "./index.module.scss"

const data = [
    {
        FeatureList: [
            { title: "KEYS AND FEATURES" },
            { text: "State of the art psychiatry treatment and rehabilitation facilities" },
            { text: "Working in the field of mental health on all age groups" },
            { text: "Pakistan's largest treatment and rehabilitation vicinity for female psychiatric" },
            { text: "Secured licenses of different Govt. departments & accreditations of multinational agencies." },
            { text: "Asia's largest Mental health institute running on local community contribution" },
            { text: "Customized Computerized E.R.P (hospital information management system 'HIMS')& SOON GOING TO be totally paperless environment inshahllah" },
            { text: "Systematic patient care procedures and protocols as per international psychiatric treatment manuals and practices" },
        ]
    },
    {
        FeatureList: [
            { title: "NEWS AND UPDATES" },
            {subHeading:"EID Miladul-Nabi Celebrations"},
            {para:"On 31 oct 2020 Jashny EID Miladul-Nabi was celebrated with the Members of Fountain House Lahore .All Members(Patients) Participated in this Holy Event."},
            {subHeading:"Irfan Butt Sahib Died of Heart Attack"},
            {para:"Irfan Butt, an executive member of Fountain House who died of a heart attack on August 20 at a local hospital in Islamabad. Justice (retd) Nasira Javed Iqbal, Dr Amjad Saqib and Dr Fareeha Paracha expressed regret. Executive Member Irfan Butt has been performing his duties at Fountain House Sargodha for many years."},
            {subHeading:"Painting competition held at Fountain House Lahore "},
            {para:"Painting competition held at Fountain House for children. MS Fountain House Dr. Syed Imran Murtaza, Dr. Afzal Javed, Dr. Izhar Hashmi inaugurated the exhibition with the children. The paintings displayed in the exhibition were highly appreciated by the participants. Special children were encouraged by the participants."}
        ]
    },
    {
        FeatureList: [
            { title: "MENTAL HEALTH TREATMENT AND REHABILITATION" },
            { text: " Interpersonal therapy" },
            { text: " Pharmacological Therapy" },
            { text: "Physcho-Socil Interventions" },
            { text: "Alcoholics anonymous 12 steps" },
            { text: "ACognative Behaviour Therapy" },
            { text: "Behaviour Therapy" },
            { text: "Recreational Therapies" },
            { text: "Physio therapy" },
            { text: "Agro based therapy" },
            { text: "Speech therapy" },
            { text: "Yoga" },
        ]
    },
]

const Feature = () => {
    return (
        <>
            <section className='py-5 my-4'>
                <Container>
                    <Row className={classes.featureList}>
                        {
                            data.map((data, ind) => {
                                return (
                                    <Col lg="4" md={6}>
                                        <ul className={classes.feature}>
                                            {data.FeatureList.map((list, ind) => {
                                                return (
                                                    <>
                                                        <li>{list.title?<h5>{list.title}</h5>:""} {list.text?<p style={{maxWidth:"260px"}}> {`> ${list.text}`}</p>:""} {list.para?<p className={classes.para}>{list.para}</p>:""} {list.subHeading? <a href="#">{list.subHeading}</a>:""}</li>
                                                    </>
                                                )
                                            })}
                                        </ul>
                                    </Col>
                                )

                            })
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Feature