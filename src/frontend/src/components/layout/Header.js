import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../../images/common/logo.png';
//import guest_avatar from '../../../images/common/guest-avatar.png';

//mui
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import EmailIcon from '@material-ui/icons/Email';
import CreateIcon from '@material-ui/icons/Create';
import Tooltip from '@material-ui/core/Tooltip';

const Header = () => {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const user = useSelector((state) => state.auth.user);

	const [ anchorEl, setAnchorEl ] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<Tooltip title="Home" arrow>
						<IconButton aria-label="menu">
							<Link to="/">
								<img src={logo} width="40" height="40" />
							</Link>
						</IconButton>
					</Tooltip>
					{isAuthenticated ? (
						<div className="authButton">
							<Tooltip title="Create New Project" arrow>
								<IconButton>
									<Link to="/create">
										<CreateIcon />
									</Link>
								</IconButton>
							</Tooltip>
							<IconButton>
								<EmailIcon />
							</IconButton>
							<IconButton>
								{user ? (
									<Avatar
										src=""
										aria-label="account of current user"
										aria-controls="menu-appbar"
										aria-haspopup="true"
										onClick={handleMenu}
										color="inherit"
									/>
								) : (
									<Avatar alt={user.username} />
								)}
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right'
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right'
								}}
								open={open}
								onClose={handleClose}
							>
								<MenuItem>
									<Link to="/profile" className="link-decoration-none">Profile</Link>
								</MenuItem>
								<MenuItem onClick={() => dispatch(logout())}>Logout</MenuItem>
							</Menu>
						</div>
					) : (
						<Button className="authButton">
							<Link to="/login">Login</Link>
						</Button>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
