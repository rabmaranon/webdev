import React from 'react'

// heres is the child component
const Grid = props => {
    console.log(props)
    return (
        <div className={"Grid"} style={{backgroundColor:props.state===true?"black":"white" }} onClick={e=>props.updateCount(props.name)} >
            
        </div>
    )
}



export default Grid
