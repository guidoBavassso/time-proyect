import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link } from 'wouter';

const Header = forwardRef(({}, ref) => {
	const aList = JSON.parse(localStorage.getItem('timeProyect')) || [];

	return (
		<header ref={ref}>
			{aList.length > 0 && (
				<ul>
					{aList.map((data, index) => (
						<Link key={index} to={'/proyectos/' + data.projectName}>
							<li>
								<span style={{ color: '#fff' }}>{data.projectName}</span>
							</li>
						</Link>
					))}
				</ul>
			)}
		</header>
	);
});

Header.displayName = 'Header';

Header.propTypes = {};

export default Header;
