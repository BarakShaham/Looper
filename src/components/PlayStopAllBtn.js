import React from 'react'

const PlayStopAllBtn = (props) => {

    const playAll = () => {
        let temp = [...props.isPlaying]
        temp.forEach((item, index, array) => {
            array[index] = true
        })
        props.setIsPlaying(temp)
    }
    const stopAll = () => {
        let temp = [...props.isPlaying]
        temp.forEach((item, index, array) => {
            array[index] = false
        })
        props.setIsPlaying(temp)
    }

    return (
        <div className='playStopAllBtnContainer'>
            <button className='playStopAllBtn' onClick={playAll}> Play all</button>
            <button className='playStopAllBtn' onClick={stopAll}> Stop all</button>
        </div>
    )
}

export default PlayStopAllBtn
