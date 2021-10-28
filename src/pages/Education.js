import React, {Fragment} from "react"

export const Education = () => {
    return(
        <Fragment>
            <h1>Education</h1>
            <table className="table" style={{backgroundColor: 'lightgray', marginTop: '1em',marginBottom: '1em', paddingLeft: '1em',
                paddingRight: '1em', borderRadius: '1em'}}>
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Educational establishment</th>
                    <th scope="col">Specialty</th>
                    <th scope="col">Graduation</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Nikolaev economic lyceum №2</td>
                    <td>-</td>
                    <td>2019</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Lviv Polytechnic National University</td>
                    <td>Computer Science</td>
                    <td>2019-2023</td>
                </tr>
                </tbody>
            </table>
        </Fragment>
    )
}