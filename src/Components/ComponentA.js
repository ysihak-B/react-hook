import React, {useContext} from 'react'
import { UserContext, ChannelContext } from '../App'

function ComponentA() {
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)
  return (
    <div>
      <div>User context value is {user}</div>
      <div>Channel context value is {channel}</div>
      {/* <UserContext.Consumer>
        {
          user => {
            return (
              <ChannelContext.Consumer>
                {
                  channel => {
                    return (
                      <div>
                        <div>User context value is {user}</div>
                        <div>Channel context value is {channel}</div>
                      </div>
                    ) 
                  }
                }
              </ChannelContext.Consumer>
            ) 
          }
        }
      </UserContext.Consumer> */}
    </div>
  )
}

export default ComponentA