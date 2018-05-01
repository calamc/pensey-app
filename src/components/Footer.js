import React from 'react';

export const Footer = ({ userProvider }) => (
        <footer className="footer">
            <div className="content">
                <div className="footer__content">
                    <span className="footer__text">
                    Using your {' '}
                    {userProvider.providerId == 'google.com' ? 'Google Account: ' : 'Facebook Info: '}
                    {userProvider.displayName} &nbsp; Email:&nbsp;{userProvider.email}
                    </span>
                    <img src={userProvider.photoURL} alt="Avatar" />
                </div>
            </div>
        </footer>
);

export default Footer;