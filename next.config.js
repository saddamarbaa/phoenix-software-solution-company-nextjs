/** @format */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			reactStrictMode: true,
			env: {
				NEXT_PUBLIC_MAP_BOX_ACCESS_TOKEN:
					process.env.NEXT_PUBLIC_MAP_BOX_ACCESS_TOKEN,
			},
		};
	}

	return {
		reactStrictMode: true,
		env: {
			NEXT_PUBLIC_MAP_BOX_ACCESS_TOKEN:
				process.env.NEXT_PUBLIC_MAP_BOX_ACCESS_TOKEN,
		},
	};
};
