import React from 'react'
import Banner from '../component/Banner'
import serviceBanner from "../assets/service_banner.jpg"
import Services from '../component/Services'

const Service = () => {
  return (
    <div>
        <Banner
          bgImage={serviceBanner}
          title="Service"
          page="SERVICES"
        />
        <Services />
    </div>
  )
}


export default Service