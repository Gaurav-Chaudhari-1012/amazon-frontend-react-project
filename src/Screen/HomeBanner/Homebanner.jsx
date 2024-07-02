import React from 'react'
import './Homebanner.css'
import homeBannerItemProduct from '../../homeproduct.json'

const Homebanner = () => {
  return (
    <div className="homeBanner">
      <img className='homeBannerimg' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg" />
      <div className="grayBackgroundHomeBanner"></div>

      <div className="homeBannerItemDiv">

        {
          homeBannerItemProduct.product.map((item, ind) => {
            return (
              <div className="homeBannerItemDivCard">
                <div className="homeBannerItemDivCardTitle">{item.itemTitle}</div>
                <div className="imgHomeBannerItemDivCard">

                  {
                    item.imgs.map((it, ind) => {
                      return (
                        <div className="imgBannerHomeDiv">
                          <img className='imgBannerHomeDivImg' src={it} />
                          <div className="imgBannerImgName">Figurines, vases & more</div>
                        </div>
                      );
                    })
                  }

                </div>

                <div className="seeMoreHomeBanner">See More</div>

              </div>
            );
          })
        }

      </div>

    </div>
    
  )
}


export default Homebanner