var BunnyShader = {
	vertexShader: [
		"varying vec4 colour;",
		"void main() {",
		"	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
		"   colour = vec4(gl_Position);",
		"}"

	].join("\n"),

	fragmentShader: [
		"varying vec4 colour;",
		"uniform float time_factor;",
		"void main() {",
		"	vec4 resultant_colour = colour * time_factor;",
		"	gl_FragColor = resultant_colour;",
		"}"

	].join("\n")
};	