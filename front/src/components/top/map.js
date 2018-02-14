import React from 'react'
import { connect } from 'react-redux'
import GoogleMap from 'google-map-react'

const Map = (props) => {
  return(
    <div className='map'>
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
      </GoogleMap>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {state: state.Map}
}

export default connect(mapStateToProps)(Map)
