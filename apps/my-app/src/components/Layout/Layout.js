import React from 'react';
import Aux from '../../hoc/Aux';
import './layout.css';

const Layout = props => (
	<Aux>
		<div />
		<main className="content">{props.children}</main>
	</Aux>
);

export default Layout;
