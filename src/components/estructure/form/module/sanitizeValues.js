const sanitizeValues = (data) => {
	const sanitizedData = {};
	for (const key in data) {
		if (Object.prototype.hasOwnProperty.call(data, key)) {
			sanitizedData[key] = String(data[key])
				.trim()
				.replace(/[<>]/g, '')
				.replace(/[^a-zA-Z0-9\s@.-]/g, '');
		}
	}
	return sanitizedData;
};

export {sanitizeValues};