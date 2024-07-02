import React from 'react'
import './NavbarBelt.css'
import amazon_logo from '../../../assets/amazon_logo.png'
import indian_flag from '../../../assets/indian_flag.png'
// import { CiLocationOn } from "react-icons/ci";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux'

const NavbarBelt = () => {

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="navbarBelt">

      <div className="leftNavBelt">
        <Link to={'/'} className="leftNavBeltLogo">
          <img src={amazon_logo} alt="amzonLogo" className="amzonLogoNavbar" />
          <span className="navbar_inLogo">.in</span>
        </Link>

        <div className="navbarBeltLocation">
          <div className="navbarBeltLocationImg">
          {/* <CiLocationOn /> */}
          <LocationOnOutlinedIcon className='navbarBeltLocationImgIcon' sx={{fontSize:'22px'}}/>
          </div>
          <div className="navbarBeltLocationpPlace">
            <div className="navbarBeltLocationTop">Delivering to pune</div>
            <div className="navbarBeltLocationBottom">Update Location</div>
          </div>
        </div>
      </div>

      <div className="navbarBeltSearchBox">
        <div className="navbarBeltSearchDiv">
          <div className="navbarBeltSearchBoxAll">
            <div className="navbarBeltSerchBoxAllText">All</div>
            <ArrowDropDownOutlinedIcon sx={{fontSize: '20px'}}/>
          </div>

          <input type="text" className='navbarBeltInputSearchBox' placeholder='Search Amazon.in' />
          <div className="searchIconNavbarBelt">
               <SearchIcon sx={{fontSize:'26px'}} className='searchIconNavbarBeltIcon'/>
          </div>

          </div>
      </div>

      <div className="rightSideNavbarBelt">
        <div className="indianFlagCode">
          <img className="indiaFlag" src={indian_flag}/>
          <div className="indiaCodeNavbarBelt">EN
            <ArrowDropDownOutlinedIcon sx={{fontSize:16,marginTop:1,marginLeft:-0.4}}
                className='indiaCodeNavbarBeltdrp'/> </div>
          </div>

          <div className="helloSignInNavbaeBelt">
            <div className="helloTopNavbarBelt">Hello, User</div>
            <div className="indiaCodeNavbarBelt">Accounts & Lists</div>
          </div>

          <div className="helloSignInNavbaeBelt">
            <div className="helloTopNavbarBelt">Returns</div>
            <div className="indiaCodeNavbarBelt">& Orders</div>
          </div>

          <Link to={'/cart'} className="helloSignInNavbaeBelt">
            <span className="cartItemNumberNavBarBelt">{cartItems.length}</span>
            <div className="indiaCodeNavbarBelt"><ShoppingCartOutlinedIcon/> <span className="cartTitle">Cart</span></div>
          </Link>

        
      </div>
        
    </div>
  )
}

export default NavbarBelt