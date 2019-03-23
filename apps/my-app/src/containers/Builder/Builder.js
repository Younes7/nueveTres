import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class Builder extends Component {
	render() {
		return (
			<Aux>
				<Burger />
				<div>menu Burger</div>
			</Aux>
		);
	}
}

export default Builder;
