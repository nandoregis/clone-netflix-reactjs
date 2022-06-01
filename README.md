# Projeto Clone do Netflix com ReactJS :smiley: :computer:

Fiz esse projeto com video aula no youtube para entender da biblioteca ReactJS
e ter expêriencia e entende um pouco sobre a tecnologia.
<br/>
Entender sobre o que é componentes e como funciona os componentes e sobre os Hooks - useState e useEffect.

## Componentes o que entendi.

Em react componentes é como se fossem funções em javascript em que elas têm determiados trechos de códigos que façam alguma funcinalidade em que pode está retornando algumas tags HTML, em que aceitam um propriedade chamada 'props' e retornam um elemento React, JSX .
<br/>
<pre>
    Ex.: function Element(props) {
        return(
            &lt;div&gt;
                 &lt;h2&gt; {props.title} &lt;/h2&gt;
            &lt;/div&gt; 
        );
    }

    Ex.: export default () => {
        return(
            elementos html 
            &lt;div&gt; 
                &lt;Element title="Olá, mundo" /&gt; &lt;- Retorna a tag h2 com Olá, mundo
            &lt;/div&gt;
        );
    }
</pre>

## useState o que entendi.

O useState e usado para acaso queira está modificando algum valor variavel, em que posso esta criando uma constante com uma desestruturação com nome de uma variavel e um nome de uma função, que vai servir para modificar o valor desta variavel, e posso está atribuindo um valor inicial para esta variavel.
<br/>
<pre>
    Ex.: const [nome,setNome] = useState('nando');
</pre>

## useEffect o que entendi.

O useEffect ele e chamado depois da atualização do DOM eu posso está usando para esta modificando alguma valor ou fazer busca de dados, buscar uma dados de uma API, posso está criando funções dos tipos assíncronas e síncronas posso alterar o valor de um useState.
<br/>
Essa função recebe dois parâmentros o primeiro é uma função e a segunda um array, nesse array caso eu passar alguma variavel por exemplo " nome " todas vez que esse variavel sofrer alguma alteração useEffect sera executado, e posso também não passar nenhum valor no array e useEffect executara somente uma vez.
<br/>
<pre>
    Ex.: useEffect( ()=> {
        // código
    }, []);
</pre>

## O que foi usado no projeto

 - API de filmes do Themoviedb.org
 - ReactJs
 - React icons

### Por acaso você programador queira fazer o projeto do zero
:bulb: vídeo do Youtube: [Clone Netflix](https://www.youtube.com/watch?v=tBweoUiMsDg&ab_channel=BoniekyLacerda)

