import React from 'react'
import './Footer.css'
import amazon_logo from '../../assets/amazon_logo.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footerContent">

        <div className="footerCont1">
            <div className="contentFooterTitle">Get To Know Us</div>
            <div className="contentFooterSubTitlediv">
                <div className="contentFooterSubTitleCont">About Us</div>
                <div className="contentFooterSubTitleCont">Careers</div>
                <div className="contentFooterSubTitleCont">Press Releases</div>
                <div className="contentFooterSubTitleCont">Amazon Science</div>
            </div>
        </div>

        <div className="footerCont1">
            <div className="contentFooterTitle">Connect with Us</div>
            <div className="contentFooterSubTitlediv">
                <div className="contentFooterSubTitleCont">Instagram</div>
                <div className="contentFooterSubTitleCont">Twitter</div>
                <div className="contentFooterSubTitleCont">Facebook</div>
            </div>
        </div>

        <div className="footerCont1">
            <div className="contentFooterTitle">Make Money With Us</div>
            <div className="contentFooterSubTitlediv">
                <div className="contentFooterSubTitleCont">Sell on Amazon</div>
                <div className="contentFooterSubTitleCont">Sell underAmazon Accelerator</div>
                <div className="contentFooterSubTitleCont">Protect and Build Your Brand</div>
                <div className="contentFooterSubTitleCont">Amazon Global Selling</div>
                <div className="contentFooterSubTitleCont">Become an Affiliate</div>
                <div className="contentFooterSubTitleCont">Fulfilment by Amazon</div>
            </div>
        </div>

        <div className="footerCont1">
            <div className="contentFooterTitle">Let Us Help You</div>
            <div className="contentFooterSubTitlediv">
                <div className="contentFooterSubTitleCont">COVID-19 and Amazon</div>
                <div className="contentFooterSubTitleCont">Your Account</div>
                <div className="contentFooterSubTitleCont">Returns Centre</div>
                <div className="contentFooterSubTitleCont">Recalls and Product Safety Alerts</div>
                <div className="contentFooterSubTitleCont">100% Purchase Protection</div>
                <div className="contentFooterSubTitleCont">Amazon App Download</div>
            </div>
        </div>


        </div>
        <div className="amazonImg">
            <img className='amazonImgFooter' src={amazon_logo}/>
        </div>
    </div>
  )
}

export default Footer