#version 450 core
in vec3 ourColor;
in vec2 TexCoord;

out vec4 color;

// Texture sampler
uniform sampler2D ourTexture;

void main()
{
	float k = 0.5;
    color = texture(ourTexture, TexCoord);// * vec4(ourColor, 1.0);

	float media = color.r * 0.2125 + color.g * 0.7154 + color.b * 0.0721;
	color = vec4(media, media, media, 1.0);
	
	if (media >= k){
		color = vec4(1.0, 1.0, 1.0, 1.0);
	}else{
		color = vec4(0.0, 0.0, 0.0, 1.0);
	}
}