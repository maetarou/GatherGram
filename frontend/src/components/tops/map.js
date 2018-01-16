import React from 'react'
import GoogleMap from 'google-map-react'
import request from 'superagent'

import Marker from './marker'

export default class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }

    this.getContentsData()
  }

  getContentsData() {
    return fetch('https://gathergram.herokuapp.com/index')
             .then((response) => {
               response.json().then((res) => {
                 this.setState({data: res.contents})
               })
             })
  }

  render() {
    return(
      <div className='p-map'>
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
          {this.state.data.map((content) => {
            return(
              <Marker
                lat={content.location.latitude}
                lng={content.location.longitude}
                content={content}
                hideContent={this.state.hideContent}
                key={content.caption}
              />
            )
          })}
        </GoogleMap>
      </div>
    )
  }
}
