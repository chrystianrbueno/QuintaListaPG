#version 450 core
in vec3 ourColor;
in vec2 TexCoord;

out vec4 color;
uniform vec3 modifier = vec3(1.0,0.0,0.0);

// Texture sampler
uniform sampler2D ourTexture;

void main()
{
	color = texture(ourTexture, TexCoord);// * vec4(ourColor, 1.0);

    color = vec4(color.r + modifier.r, color.g + modifier.g, color.b + modifier.b, 1.0);
}