import React from 'react';

interface NotifyProps {
	type?: string;
	message?: string;
}

const Notification = ({ type = '', message = '' }: NotifyProps) => {
	return (
		<>
		{message &&
			<div className={type ? `notification ${type}` : ''}>
				<p dangerouslySetInnerHTML={{__html: message}}></p>
			</div>
		}</>
	);
};

export default Notification;
