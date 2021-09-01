/** @format */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			reactStrictMode: true,
			env: {
				MONGODB_USERNAME: process.env.MONGODB_USERNAME,
				MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
				MONGODB_CLUSTER_NAME: process.env.MONGODB_CLUSTER_NAME,
				MONGODB_DATABASE: process.env.MONGODB_DATABASE_DEV,
			},
		};
	}

	return {
		reactStrictMode: true,
		env: {
			MONGODB_USERNAME: process.env.MONGODB_USERNAME,
			MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
			MONGODB_CLUSTER_NAME: process.env.MONGODB_CLUSTER_NAME,
			MONGODB_DATABASE: process.env.MONGODB_DATABASE_PROD,
		},
	};
};
