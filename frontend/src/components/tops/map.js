import React from 'react'
import GoogleMap from 'google-map-react'
import request from 'superagent'

import Marker from './marker'

export default class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contents: []
    }

    this.getContentsData()
  }

  getContentsData() {
    return fetch('http://localhost:3000/index')
             .then((response) => {
               response.json().then((res) => {
                 this.setState({contents: res.contents})
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
          {this.state.contents.map((content, idx) => {
            return(
              <Marker
                lat={content.media.latitude}
                lng={content.media.longitude}
                content={content}
                hideContent={this.state.hideContent}
                key={idx}
              />
            )
          })}
        </GoogleMap>
      </div>
    )
  }
}
