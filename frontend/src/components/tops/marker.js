import React from 'react'
import Content from './content'

export default class Marker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      hideContent: false
    }
    console.log(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      hideContent: (this.state.hideContent ? false : true)
    })
  }

  render() {
    return(
      <div className='p-marker' >
        <img src={this.props.content.imageLink} className='p-marker__img' onClick={this.handleClick} />
        <img src='./images/Arrow.png' className='p-marker__arrow' />
        {
          this.state.hideContent ? 
          <Content content={this.props.content} handleClick={this.handleClick} /> :
          null
        }
      </div>
    )
  }
}
