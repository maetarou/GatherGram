import React from 'react'
import Content from './content'

const ContentLink = (props) => {
  return(
    <div onClick={() => foo()}>
      {console.log(props.props.content.media.image_link)}
      <img src={props.props.content.media.image_link} className='p-marker__img' />
      <img src='./images/Arrow.png' className='p-marker__arrow' />
    </div>
  )
}

const foo = () => {
  console.log('foo')
}

export default class Marker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hideContent: false
    }

    this.handleClick = this.handleClick.bind(this)
    this.foo = this.foo.bind(this)
  }

  handleClick() {
    console.log('click')
    this.setState({
      hideContent: true
    })
  }
  
  foo() {
    console.log('foo')
  }

  render() {
    return(
      <div className='p-marker'>
        {
          this.state.hideContent ? 
          <Content content={this.props.content} /> :
          <ContentLink props={this.props} />
        }
      </div>
    )
  }
}
