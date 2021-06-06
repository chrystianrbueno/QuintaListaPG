#version 450 core
in vec3 ourColor;
in vec2 TexCoord;

out vec4 color;

// Texture sampler
uniform sampler2D ourTexture;
uniform vec3 modifier = vec3(0.0,0.0,0.5);

void main()
{
    color = texture(ourTexture, TexCoord);// * vec4(ourColor, 1.0);

    color = vec4(1 - color.r, 1 - color.g, 1 - color.b, 1.0);

    color = vec4(color.r + modifier.r, color.g + modifier.g, color.b + modifier.b, 1.0);
}