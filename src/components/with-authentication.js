import React from 'react'

const withAuthentication = Page => {
  return class extends React.Component {
    state = {
      auth: {
        authenticated: true
      }
    }
  
    render() {
      return (
        <Page {...this.state} {...this.props} />
       )
    }
  }
}

export default withAuthentication
