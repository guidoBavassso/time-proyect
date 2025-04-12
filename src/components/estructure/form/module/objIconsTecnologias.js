import { lazy, memo } from 'react';

const objIconsTecnologias = memo({
	javascript: lazy(() => import('../../components/icons/tecnologias/javascript')),
	css: lazy(() => import('../../components/icons/tecnologias/css')),
	electronjs: lazy(() => import('../../components/icons/tecnologias/electronjs')),
	mysql: lazy(() => import('../../components/icons/tecnologias/mysql')),
	nodejs: lazy(() => import('../../components/icons/tecnologias/nodejs')),
	reactjs: lazy(() => import('../../components/icons/tecnologias/reactjs')),
	tailwind: lazy(() => import('../../components/icons/tecnologias/tailwind')),
});

export default objIconsTecnologias;
