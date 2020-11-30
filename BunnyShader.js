var BunnyShader = {

	uniforms: {},

	vertexShader: [

		"varying vec4 vertex;",

		"void main() {",

		"	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
		"   vertex = vec4(gl_Position);",

		"}"

	].join("\n"),

	fragmentShader: [
		"varying vec4 vertex;",

		"void main() {",

		"	gl_FragColor = vertex;",

		"}"

	].join("\n")

};	