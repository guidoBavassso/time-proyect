import { useRef, useEffect } from 'react';

export const usePageLayout = ({ headerOpen }) => {
	const refHeader = useRef(null);
	const refMain = useRef(null);

	useEffect(() => {
		if (refHeader) {
			if (headerOpen) {
				refHeader.current.classList.add('headerVisual');
				refMain.current.classList.add('mainColapse');
			}

			if (!headerOpen) {
				refHeader.current.classList.remove('headerVisual');
				refMain.current.classList.remove('mainColapse');
			}
		}
	}, [headerOpen]);

	return { refHeader, refMain };
};
