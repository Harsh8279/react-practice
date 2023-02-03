import React from 'react'

function NameList() {
    const names = ["Harsh", "Swayam", "Hetarth"]
    const nameList = names.map(name => <h2>{name} from Surat</h2>)
    return <div>{nameList}</div>
}

export default NameList
