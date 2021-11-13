/** @format */

import React from "react";
import styled from "styled-components";

import ReactDOM from "react-dom";

const BackDrop = (props) => {
	return ReactDOM.createPortal(
		<BackdropWrapper>{props.children}</BackdropWrapper>,
		document.getElementById("backdrop--root"),
	);
};

export default BackDrop;

const BackdropWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 200;
	background: rgba(0, 0, 0, 0.75);
`;

// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/portals/

// https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAJQKYEMDG8BmUIjgcilQ3wFgAoUSWOAbzjSJRiQAVoYUAbOAXzmy4CTDAFoAJrjLkKAellwUAZyUBXEMAB2Aczha4ATwiqocABYwQPTMC5JzyxXHHAAbnADuwGGb3iCIBDi3KI4EDD4ANwUFGgQmkrwALJB3ABciMQwAHQAYgDCADy0vAB8cAC8cAAU9GhmtuJEmnwAlJXltBRwcPJwAKIgqlzM9j72aCMqDLiQmkiaEUp6CZyaaPauKFDAKABGdp7evihwRJjdM6twSDxVyOg5qkpIyJjVkmjqCzmMqCz9OwgH7VABELlcoNarWiMnIPQeGGyzyQ-UwmCQGGq1XaFU6lx6fQA6vZlGpgXAAAaBYJcBAQcKUm4AD2AiWWXh8BAAhNIej04tcadx6eFKs4IF9gYtsgBHVRIKAGADKt0xMGgYIAxMKuKEGTAoYplgAJAAqSQAMoCkNKYLD+XBdaKYNzsigwGAFuJ8g0uOJqrdsl8oM0YDCCWckDATC0cR04K4IMB-M6DW6iIFXEhfY1A1xgyYwxH4XwADRwADaAF0S5c+gBJVaofwQTBU26UivjK6cLSKvTLHuU86F0M-SmXIgxqAtP6jdiwbjVeqNZoVoMh4uw3iwuQKZ4obRIGLkTCqdYwYDxOAAQU98a6pcFiSrSjMEA8KVpFZeMGVH5fqkXDVuKiJPC8yqcCw1SYNwLwlj006xjUkaFBCpSRoSChGKoDAoC08EQHAYCqPAPhsishjGKYiTMMAaDmJY1i2CepaOuhbh+BUoK6vq4SgqUhSyBhWF0O+n7ftwcAAGQyah7GOnAhRSVwmGKUpykQmJmmJAYdgVLQT6aSZzhsmAIwGBkoLaDs4igmWOkmRZ6BIA2LAgEo1kbIsioOU5mlmEgwDaBY1kAIwAAyRa4Zj+RpplHOIPgZPgUUxWY+COQlpl7OgADWtnGJo4jWVA2h5dUkVltVtXZOFrTxYlSkAF5NuISDMhkACc3XZc1PS8LwAVwOpA1wA2+B4KcurcrQoJwKCw05UphR7GRGotHpBlGXlaCFTgF6lYtYAegYKAeA0YBLfw8T5FwDH5YZ8Z4nAf4AZJwGwfBSCtGUkwQC8wnrTAm1jYlwmiStwmqeDjp-WJa0bTed0Pftz24uU72Aap1QwFACp-aUEkeHAqnA8jmhw-yfREK+bbUSYiiemhIluODrQULwQA
