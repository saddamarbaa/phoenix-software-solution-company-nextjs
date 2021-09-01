/** @format */

// this file allow us to add general structure of the page

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head />
				<body>
					<Main />
					<NextScript />
					<div id='notifications'></div> {/* // for add Portal */}
				</body>
			</Html>
		);
	}
}

export default MyDocument;
