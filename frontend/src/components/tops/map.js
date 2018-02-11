import React from 'react'
import { connect } from 'react-redux'

import GoogleMap from 'google-map-react'
import Marker from './marker'

const MapComponent = (props) => {
  return(
    <div className='p-map'>
      {getInstagramContent()}
      <GoogleMap
        bootstrapURLKeys={{
          key: 'AIzaSyAEaUM4truzWM4M4Ob8s9_oUdMrhmxnzcI'
        }}
        defaultCenter = {{
          lat: 34.663776,
          lng: 135.518523
        }}
        defaultZoom = {19}
      >

        {/* コンテンツのマッピング */}
        {/*}
        {getInstagramContent().map((content, idx) => {
          return(
            <Marker
              lat={content.location.latitude}
              lng={content.location.longitude}
              content={content}
              hideContent={this.state.hideContent}
              key={idx}
            />
          )
        })}
        */}
      </GoogleMap>
    </div>
  )
}

const getInstagramContent = () => {
  fetch('http://localhost:3000/index')
    .then((response) => {
      response.json().then((res) => {
        console.log(res)
      })
    })
}

const mapStateToProps = (state) => {
  return {state: state.map}
}

export default connect(mapStateToProps)(MapComponent)
