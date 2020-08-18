import React, { useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useAlert } from 'react-alert';

const Alerts = () => {
	const alert = useAlert();
	const message = useSelector((state) => state.errors.msg);

	useEffect(
		() => {
            for (let key in message){
                alert.show(message[key])
            }
		},
		[ message ]
	);

	return <Fragment />;
};

export default Alerts;
