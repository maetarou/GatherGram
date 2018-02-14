import React from 'react'
import { connect } from 'react-redux'
import GoogleMap from 'google-map-react'

import configureStore from '../../store/configureStore'
import Content from './content'

const store = configureStore()

class Map extends React.Component {
  constructor(props) {
    super(props)

    this.fetchContents()
  }

  fetchContents() {
    fetch('http://localhost:3000/index')
      .then((response) => {
        response.json().then((res) => {
          this.props.dispatch({
            type: 'GET_CONTENTS',
            value: res.contents
          })
        })
    })
  }

  render() {
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
          {console.log(this.props)}
          {/* コンテンツのマッピング */}
          {this.props.state.contents.map((content, idx) => {
            return(
              <Marker
                lat={34.663776}
                lng={135.518523}
                key={idx}
                content={content}
              />
            )
          })}
        </GoogleMap>
      </div>
    )
  }
}



const Marker = (props) => {
  return(
    <div className='map__marker'>
      <img
        src={props.content.media.image_link}
      />
      <Content />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {state: state.Map}
}

export default connect(mapStateToProps)(Map)
