import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { register } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {
	const dispatch = useDispatch();
	const [ username, setUsername ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ password2, setPassword2 ] = useState('');

	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	const onSubmit = (e) => {
		e.preventDefault();
		if (password !== password2) {
			alert('Passwords do not match');
		} else {
			const newUser = {
				username,
				password,
				email
			};
			dispatch(register(newUser));
		}
	};

	return isAuthenticated ? (
		<Redirect to="/" />
	) : (
		<div className="col-md-6 m-auto">
			<div className="card card-body mt-5">
				<h2 className="text-center">Register</h2>
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<label>Username</label>
						<input
							type="text"
							className="form-control"
							name="username"
							onChange={(e) => setUsername(e.target.value)}
							value={username}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" className="form-control" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
					</div>
					<div className="form-group">
						<label>Password</label>
						<input
							type="password"
							className="form-control"
							name="password"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						/>
					</div>
					<div className="form-group">
						<label>Confirm Password</label>
						<input
							type="password"
							className="form-control"
							name="password2"
							onChange={(e) => setPassword2(e.target.value)}
							value={password2}
						/>
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-primary">
							Register
						</button>
					</div>
					<p>
						Already have an account? <Link to="/login">Login</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Register;
