Nome: Chrystian Gregory Bueno da Rocha

Decidi fazer todo a lista 5 em apenas um projeto.
Coloquei 7 imagens cada uma com o filtro pedido.

Alterações feitas
SceneManager.h

Foi criado um vetor de Shader
	chamado objShader.



SceneManager.cpp

addShader()
Os Shader's são criados e adicionados ao vetor Shader (objShader)
	Utilizando push_back.

	
setupScene()
Criadas as imagens
Colocadas lado a lado
Setado cada shader com um determinado objShader do vetor
Imagens colocadas no vetor de imagens

setupCamera2d()
Criado um loop para chamada o shader do vetor do shader objShader
for (Shader* shaders : objShader)
para cada shader é chamado o método 
	shaders-> Use()
	e passado o identificador da matriz
	Envia a matriz de projeção ao shader

Adicionado a pasta Shaders
os filtros 
transformations
	Imagem sem filtro

myFilter
	Primeiro coloquei um filtro de inversao na imagem
	Depois fiz uma colorização (0.5) na camada azul da imagem
	
binarizacao
bluerender
colorizacao
grayScale
inversao

