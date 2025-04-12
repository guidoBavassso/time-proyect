import { useState, useCallback } from 'react';
import { useLocation } from 'wouter';

export const usePageNavigation = () => {
	const [location, navigate] = useLocation();
	const [page, setPage] = useState(true);
	const [navigationPage, setNavigationPage] = useState('');

	const animationClass = page ? 'enterPage' : 'outPage';

	const handleAnimationEnd = useCallback(() => {
		if (!page) {
			setTimeout(() => navigate(navigationPage), 100);
		}
	}, [page, navigate, navigationPage]);

	const clickNavigate = useCallback((e) => {
		e.preventDefault();
		setPage(false);
		const cadenaCortada = e.currentTarget.getAttribute("href").replace("/time-proyect", "");
		setNavigationPage(cadenaCortada);
	}, []);

	return {
		animationClass,
		handleAnimationEnd,
		clickNavigate,
	};
};
