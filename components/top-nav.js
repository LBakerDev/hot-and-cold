import React from 'react';

//import './top-nav.css';

export default class TopNav extends React.Component {
    onNewGame(event) {
        event.preventDefault();
        if (this.props.onNewGame) {
            this.props.onNewGame();
        }

    }

    onInfo(event) {
        event.preventDefault();
        if(this.props.onInfo) {
            this.props.onInfo();
        }
    }

    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" href="#" onClick={event => this.onInfo(event)}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#" onClick={event => this.onNewGame(event)}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};