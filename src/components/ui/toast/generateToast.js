import toast from 'react-hot-toast';

export const generateToast = ({ typeStatus, msg }) => {
	toast(msg, {
		duration: 20000,
		position: 'top-center',
		className: 'toast ' + typeStatus,
	});
};
