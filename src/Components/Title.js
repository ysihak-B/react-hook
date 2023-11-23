import React from 'react'

function Title() {
    console.log('rendering title')
  return (
    <div>
        useCallback Hook
    </div>
  )
}

export default React.memo(Title)