const PlayIcon = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M7 4v16l13 -8z" />
		</svg>
	);
};

export default PlayIcon;
