#version 300 es

// CSCI 4611 Assignment 5: Artistic Rendering
// You should modify this fragment shader to implement a toon shading model
// As a starting point, you should copy and paste the shader code from
// phong.frag into this file. You can find it in the GopherGfx library.
// You can then modify it to use the diffuse and specular ramps. 

precision mediump float;

#define POINT_LIGHT 0
#define DIRECTIONAL_LIGHT 1

const int MAX_LIGHTS = 16;

uniform vec3 eyePosition;

uniform int numLights;
uniform int lightTypes[MAX_LIGHTS];
uniform vec3 lightPositions[MAX_LIGHTS];
uniform vec3 ambientIntensities[MAX_LIGHTS];
uniform vec3 diffuseIntensities[MAX_LIGHTS];
uniform vec3 specularIntensities[MAX_LIGHTS];

uniform vec3 kAmbient;
uniform vec3 kDiffuse;
uniform vec3 kSpecular;
uniform float shininess;

uniform int useTexture;
uniform sampler2D textureImage;

uniform sampler2D diffuseRamp;
uniform sampler2D specularRamp;

in vec3 vertPosition;
in vec3 vertNormal;
in vec4 vertColor;
in vec2 uv;

out vec4 fragColor;

void main() 
{
    // TO BE ADDED
    fragColor = vec4(0, 0, 0, 1);
}