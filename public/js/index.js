import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import MainContainer from './component/main-container';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
//import Style from './components/style';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isBeginning: false,
			chooseStory: false,
			storyStarted: false,
			storyInfo: null,
			whereAmI: null,
		};
	};
	chooseStory () {
		this.setState({chooseStory: true})
	}
	populateStory (res) {
		this.setState({storyInfo: res}) // Tells me which story to query the DB
	}
	readStory (res) {
		this.setState({storyStarted: true}) // Shows the story
	}
	whereAmI () {
		this.setState({tree: res})
	}
	render() {
		return (
			<div className='main-container'>
				<Header />
				<Body  {...this.state} //takes in all of App object
					chooseStoryFn={this.chooseStory.bind(this)}/>
				<Footer />
			</div>
		);
	};
}

ReactDOM.render(<App />, document.querySelector('#app'))