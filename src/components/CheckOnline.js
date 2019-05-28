import React, { Component } from 'react'
import OnlineItem from './OnlineItem'

class CheckOnline extends Component {
  renderUserList() {
    return (
      <ul>
        {this.props.users.map((user, index) => {
          if (user.id === this.props.currentUser.id) {
            return (
              <OnlineItem key={index} presenceState="online">
                {user.name} (Me)
              </OnlineItem>
            )
          }
          return (
            <OnlineItem key={index} presenceState={user.presence.state}>
              {user.name}
            </OnlineItem>
          )
        })}
      </ul>
    )
  }

  render() {
    if (this.props.users) {
      return this.renderUserList()
    } else {
      return <p> No One Home?? </p>
    }
  }

}
export default CheckOnline;