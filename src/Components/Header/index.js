import React from 'react'
import TopHeader from './TopHeader'
import { Container } from 'react-bootstrap'
import classes from "./index.module.scss"
import Navigation from 'Components/Navigation'
const Header = () => {
    return (
        <>
            <div id={classes.header}>
                <Container>
                    <div className="clearfix">
                        <TopHeader />
                        <Navigation/>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Header