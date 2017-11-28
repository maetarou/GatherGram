import React from 'react'
import ReactDOM from 'react-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar, MenuItem, Drawer } from 'material-ui'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render() {
    return(
      // <div className='header'>
      //   <h1>OIC::Gather</h1>
      //   <ul>
      //     <li>Gather投稿</li>
      //     <li>通知</li>
      //     <li>アイコン</li>
      //   </ul>
      // </div>

      <MuiThemeProvider>
        <div>
          <Drawer
            docked={false}
            width={200}
            open={this.props.open}
            onRequestChange={() => this.props.onToggle()}
          >
            <MenuItem>React</MenuItem>
            <MenuItem>Redux</MenuItem>
            <MenuItem>React Router</MenuItem>
            <MenuItem>Material UI</MenuItem>
            <MenuItem>Electron</MenuItem>
          </Drawer>
          <AppBar
            title="React Study"
            onLeftIconButtonTouchTap={ () => this.props.onToggle()}
          />
        </div>
      </MuiThemeProvider>
    )
  }
}
