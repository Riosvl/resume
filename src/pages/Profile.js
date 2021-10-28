import React from "react"

export const Profile = () => {
    return(
        <>
            <h1>Vladyslav Hlushchenko</h1>
            <div>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-envelope" fill="currentColor"
                 xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
            </svg>
            <span style={{margin: '1em'}}>vladislavglushchenko07@gmail.com</span>

        </div>
        <div>
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-phone" fill="currentColor"
                 xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                <path fill-rule="evenodd" d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
            </svg>
                <span style={{margin: '1em'}}>+(380) 67 118 8488</span>
        </div>
            <button onClick={() => window.open('https://github.com/Riosvl')} style={{marginTop: '1em'}} type="button" className="btn btn-primary">
                Git
            </button>
            <button onClick={() => window.open('https://bitbucket.org/riosvl/')} style={{marginTop: '1em', marginLeft: '5px'}} type="button" className="btn btn-primary">
                Bitbucket
            </button>
            <div style={{backgroundColor: 'lightgray', marginTop: '1em',marginBottom: '1em', paddingLeft: '1em',
                paddingRight: '1em', borderRadius: '1em'}} className="jumbotron jumbotron-fluid">
                <div className="container">
                    <p className="lead">I am trainee React developer. I am learning basic JavaScript, React and their features.
                        Also I tried a little bit Node, React
                        Native, TypeScript. I know basic Java and C++ syntax, that I went through at university. In addition, my English
                        level is Upper-Intermediate, but I keep improving it.  I found front-end completely stunning.
                        Confines depends only on your imagination.
                    </p>
                </div>
            </div>
        </>
    )
}