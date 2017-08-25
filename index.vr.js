import React from 'react';
import {
	AppRegistry,
	asset,
	Pano,
	Text,
	View,
	VrButton,
	Image,
} from 'react-vr';
import {VrLinks} from './src/links/vr-links.vr';
import Textbox from './src/links/textbox';
import * as api from './api';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			textColor: 'white',
			backgroundColor: 'rgb(59,28,82)',
			links: [],
		};
	}
	componentDidMount = () => {
		console.log('here');
		this.getContent();
	}

  getContent = () => {
	api.getLinks().then( ({links}) => {
	  this.setState({links})
	})
  }
	onAdd = () => {
		console.log('Hello world!');
	};

	render() {
		return (
			<View>
				<Pano source={asset('chess-world.jpg')}/>
				<VrLinks
					backgroundColor={this.state.backgroundColor}
					color={this.state.textColor}
					links={this.state.links}
				/>
        <Textbox />
				<VrButton
					style={{width: 0.7}}
					onClick={this.onAdd}>
					<Image
						style={{
							width: 25,
							height: 25,
							transform: [{translate: [20, 0, -100]}],
						}}
						source={asset('plus-button.png')}
						inset={[0.2, 0.2, 0.2, 0.2]}
						insetSize={[0.05, 0.45, 0.55, 0.15]}
					>
					</Image>
				</VrButton>
			</View>
		);
	}
};

AppRegistry.registerComponent('App', () => App);
