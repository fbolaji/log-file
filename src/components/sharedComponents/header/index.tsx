import React from 'react';

interface headerProps {
	title?: string;
}

const HeaderComponent = ({ title = '' }: headerProps) => {
	return (
		<header className="mainTitle">
			<h2>{title}</h2>
		</header>
	);
};

export default HeaderComponent;

