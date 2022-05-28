import React from "react"

export default function List ({items, renderItem}) {
  return (
    <React.Fragment>
      {items?.map(renderItem)}
    </React.Fragment>
  )
}