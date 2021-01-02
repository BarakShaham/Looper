import React, {useState} from 'react'
import {playlist} from "../tracks/Playlist";
import LoopPad from "./LoopPad";

// bootstrap
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import {Container, Row, Col} from "react-bootstrap";

import Recorder from "./Recorder";
import PlayStopAllBtn from "./PlayStopAllBtn";


function LoopPlayer() {

    // states for all LoopPad children elements
    const [isPlaying, setIsPlaying] = useState([false, false, false, false, false, false, false, false, false]);

    // changes the state of the pad which was clicked
    const reset = (id) => {
        let temp = [...isPlaying]
        temp[id] = !temp[id]
        setIsPlaying(temp)
    }

    return (
        <div>

            <Container className='loopPadContainer'>

                <Row className='loopPads'>

                    {['leftPads', 'middlePads', 'rightPads'].map((col, index) => {
                        return (
                            <Col className={col}>
                                {[0, 1, 2].map((val) => {
                                    const padIndex = index * 3 + val
                                    return (
                                        <LoopPad id={playlist[padIndex].id}
                                                 src={playlist[padIndex].src}
                                                 title={playlist[padIndex].title}
                                                 isPlaying={isPlaying[padIndex]}
                                                 setIsPlaying={reset}
                                        />
                                    )
                                })}
                            </Col>
                        )
                    })}

                </Row>

            </Container>
            <div className='recAndPlayBtn'>
                <Recorder/>
                <PlayStopAllBtn isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
            </div>

        </div>

    )
}

export default LoopPlayer;
