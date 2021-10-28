import React from "react"
import "../index.scss"

export const Skills = () => {
    return (
        <div>
            <div style={{backgroundColor: 'lightgray', borderRadius: '1em', padding: '1em', marginBottom: '1em'}} className="jumbotron jumbotron-fluid">
                <h1 className="display-4" style={{alignContent:'center'}} >Technical skills </h1>
                <ul className="list-rectangle">
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Upper-intermediate English</li>
                </ul>
            </div>
            <div style={{backgroundColor: 'lightgray', borderRadius: '1em', padding: '1em'}} className="jumbotron jumbotron-fluid">
                <h1 className="display-4">Soft Skills</h1>
                <ul className="list-rectangle">
                    <li>Perform interesting tasks</li>
                    <li>Communicable</li>
                    <li>Fast learner</li>
                    <li>Flexible</li>
                    <li>Ambitious</li>
                </ul>
            </div>
        </div>
    )
}
