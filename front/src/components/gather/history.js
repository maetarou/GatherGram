import React from 'react'
import { connect } from 'react-redux'

const url = document.location.hostname == 'localhost' ?
            'http://localhost:3000/user/gather_history' :
            'https://gathergram.herokuapp.com/user/gather_history'

class GalleryHistory extends React.Component {
  constructor(props) {
    super(props)

    this.fetchHistory()
  }

  fetchHistory() {
    fetch(url)
      .then((response) => {
        response.json().then((res) => {
          this.props.dispatch({
            type: 'GET_HISTORY',
            value: res
          })
        })
      })
  }

  render() {
    return(
      <div className='gather_history'>
      {console.log(this.props.state.gatherHistory)}
      {
        this.props.state.gatherHistory.map((history, idx) => {
          return(
            <div
              className='gather_history__list'
              key={idx}
            >
              <div>{history.got_gather} gather</div>
              <div>{history.caption}</div>
              <div><a href={history.link}>{history.link}</a></div>
            </div>
          )
        })
      }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {state: state.GatherHistory}
}

export default connect(mapStateToProps)(GalleryHistory)
