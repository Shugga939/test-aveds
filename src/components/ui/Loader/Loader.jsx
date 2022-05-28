import React from "react"
import './Loader.css'

export default function Loader () {
  return (
    <React.Fragment>
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </React.Fragment>
  )
}

