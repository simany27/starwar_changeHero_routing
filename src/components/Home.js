import React from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import {friends} from "../utils/Constants";
import ErrorPage from "./ErrorPage";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const key = this.props.match.params.hero || 'luke';
        if (friends.includes(key)) {
            this.props.changeHero(key);
            this.setState({hero: key});
        }
    }

    render() {
        if (!friends.includes(this.state.hero)) {
            return <ErrorPage/>
        } else {
            return (
                <div>
                    {(this.state.hero) &&
                    <main className="clearfix">
                        <Hero hero={this.state.hero}/>
                        <DreamTeam hero={this.state.hero}/>
                        <FarGalaxy/>
                    </main>
                    }
                </div>
            );
        }
     }
};

export default Home;