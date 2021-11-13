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
					{/* // for add Portal */}
					<div id='backdrop--root'></div>
					<div id='modal--overlay--root'></div>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
