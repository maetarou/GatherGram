import React from 'react'
import ReactDOM from 'react-dom'
import GoogleMap from 'google-map-react'

const MarkerComponent = ({text}) => {
  return(
    <div className='p-marker'>
    {text}
      <img src='../../images/marker.png'></img>
    </div>
  )
}



export default class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render() {
    return(
      <div className='p-map'>
        <GoogleMap
          defaultCenter = {{
            lat: 34.663776,
            lng: 135.518523
          }}
          defaultZoom = {19}
        >
          <MarkerComponent
            lat={34.663776}
            lng={135.518523}
          />
        </GoogleMap>
      </div>
    )
  }
}
