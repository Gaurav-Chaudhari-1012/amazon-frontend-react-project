import React from 'react'
import './NavbarBanner.css'
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { Link } from 'react-router-dom';

const NavbarBanner = () => {

  const options = [
    {"name": "Amazon Pay"}, {"name": "Amazon miniTV"}, {"name": "Sell"},
    {"name": "Gift Cards"}, {"name": "Buy Again"}, {"name": "AmazonBasics"},
    {"name": "Amazon Business"}, {"name": "Browsing History"}, {"name": "Helth, Household & Personl Care"},
    {"name": "Gift ideas"}, {"name": "Customer Service"}, {"name": "Books"},
    {"name": "Today's Deals"}
  ]

  return (
    <div className="navbarBanner">
      <div className="navbarBannerOptionsLeft">

          <div className="optionsNavbarBanner">
            <MenuIcon sx={{fontSize:"24px"}}/>
            <div className="allOptionsNavbarBanner">All</div>
          </div>

          {
            options.map((item,ind) => {
              return (
                <Link to={'/products'} className="optionsNavbarBanner" key={ind} >
                  <div className="allOptionsNavbarBanner">{item.name}

                    {(item.name === 'Amazon Business' || item.name === 'Browsing History') &&
                    (<ArrowDropDownOutlinedIcon sx={{fontSize:'20px'}}/>)}

                  </div>
                </Link>
              );
             })
          }



      </div>

    </div>
  )
}

export default NavbarBanner