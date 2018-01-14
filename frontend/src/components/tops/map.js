import React from 'react'
import GoogleMap from 'google-map-react'
import request from 'superagent'

const MarkerComponent = ({content}) => {
  return(
    <div className='p-marker'>
      <img src={content.imageLink} className='p-marker__img' />
      <img src='./images/Arrow.png' className='p-marker__arrow' />
    </div>
  )
}

export default class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }

    this.getContentsData()
  }

  getContentsData() {
    return fetch('http://localhost:3000/index')
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
          {this.state.data.map((content) => {
            return(
              <MarkerComponent
                lat={content.location.latitude}
                lng={content.location.longitude}
                content={content}
                key={content.caption}
              />
            )
          })}
        </GoogleMap>
      </div>
    )
  }
}
