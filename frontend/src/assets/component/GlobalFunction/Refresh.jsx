import React from 'react'

function Refresh() {
    window.onresize = () => {
        location.reload()
    }
}

export default Refresh
