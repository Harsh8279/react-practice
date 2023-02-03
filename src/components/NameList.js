import React from 'react'

function NameList() {
    const names = ["Harsh","Swayam","Hetarth"]
  return (
    <div>
      {
        names.map(name => <h2>{name} from Surat</h2>)
      }
    </div>
  )
}

export default NameList
