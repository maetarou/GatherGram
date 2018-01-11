import React from 'react'
import GoogleMap from 'google-map-react'
import request from 'superagent'

const MarkerComponent = ({content}) => {
  return(
    <div className='p-marker'>
      <img src={content.imageLink} className='p-marker__img' />
    </div>
  )
}

export default class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.getData()
    }

    this.getData = this.getData.bind(this)
  }

  getData() {
    request
      .get('http://localhost:3000/index')
      .end(function(err, res) {
      })

    return(<div />)
  }

  render() {
    return(
      <div className='p-map'>
        {console.log(this.state)}
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

          {testData.map((content) => {
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

const testData = 
  [
    {
        "caption": null, 
        "imageLink": "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/25013709_1702304773160676_2010666811950891008_n.jpg", 
        "link": "https://www.instagram.com/p/Bcb57QJnK2c/", 
        "location": {
            "id": 360369503, 
            "latitude": 34.663698386286, 
            "longitude": 135.51853980151, 
            "name": "大阪情報コンピュータ専門学校"
        }, 
        "username": "gathergram3203"
    }, 
    {
        "caption": "ゲロ可愛い", 
        "imageLink": "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/24331821_149468235685752_4414169010879332352_n.jpg", 
        "link": "https://www.instagram.com/p/Bcbu2WAnix-/", 
        "location": {
            "id": 1032309971, 
            "latitude": 34.6779594, 
            "longitude": 135.4979939, 
            "name": "ことりカフェ心斎橋"
        }, 
        "username": "gathergram3203"
    }, 
  ]
