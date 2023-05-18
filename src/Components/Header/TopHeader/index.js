import React from 'react'
import classes from "../index.module.scss"
import Logo from 'Components/Logo'
import SocialLink from 'Components/SocialLink'

const TopHeader = () => {
    return (
        <>
            <Logo />
            <div className={classes.rightSideHeader}>
                <ul className={classes.socialAddress}>
                    <li className='me-3'><i className="fas fa-mobile-android-alt"></i>+ (92) 42-37110798-9</li>
                    <li><a href="#"><i className="far fa-envelope"></i>info@fountainhouse.com.pk</a></li>
                </ul>
                <SocialLink />
            </div>
        </>
    )
}

export default TopHeader