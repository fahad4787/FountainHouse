import React from 'react'
import classNamees from "./index.module.scss"

const SocialLink = () => {
    return (
        <ul className={classNamees.socialLink}>
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fas fa-wifi"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="#"><i className="fab fa-skype me-5"></i></a></li>
        </ul>
    )
}

export default SocialLink