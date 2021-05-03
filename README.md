# code-review-template
Template utilizado para avalização de code review na Hack GRRRL 2021 ✨👩‍💻✨


## Objetivo e Motivações
- Nosso objetivo com esse código era fazer uma página funcional o suficiente para que a Equipe do Hack Grrrl pudesse experimentar nossa solução e ter um sentimento mais real dela. Como desenvolvedoras nós, Sofia Diniz e Shellyda Barbosa, tínhamos como objetivo pôr em prática habilidade que ja possuíamos, aproveitar ao máximo nossa primeira experiência num hackaton, experimentar algumas coisas novas e tentar fazer um código simples, mas eficiente para nosso tempo e propósito.

## Que tecnologias vocês usaram no hackathon?
- Decidimos focar mais no Front-end, utilizando React.Js e Styled Components para tentar chegar o mais próximo possível do mockup elaborado por nossa designer. Já no backend, optamos pelo Keystone e Node.js, montando um banco de dados não-relacional e mais simples.

## Por que vocês escolheram essas tecnologias?
- Além dos motivos mencionados na pergunta acima, escolhemos fazer uma aplicação web com React.js e Styled Components por serem tecnologias que cumpriam bem as necessidades trazidas pelo mockup e com as quais amabas as desenvolvedoras já tem familiaridade. Essa união de fatores nos permitiu ter mais liberdade enquanto desenvolvíamos. Por outro lado, no backend utilizamos Keystone, que apesar de ambas já termos usado, não nos lembrávamos muito sobre, já que não usamos há um tempo. Isso acabou se tornando uma boa oportunidade 

## Qual foi a maior desafio (da parte de desenvolvimento) durante o hackathon? Como vocês resolveram?
- Nosso maior desafio foi adaptar o layout para que a responsividade não fosse comprometida. Tivemos algumas dificuldades com isso ao longo do Hackaton e para lidar com elas nós conversamos entre si para uma entender como a outra havia conseguido fazer certas coisas que estava tendo dificuldade e, dessa maneira, conseguirmos avançar juntas. Além disso, também conversamos muito com nossa Designer de UX/UI para fazer algumas adaptações que facilitassem isso.

## Qual foi o maior aprendizado (ou uma parte do código que vocês achem massa e estão orgulhosas)?
- Para Shellyda, a melhor parte do código foram as animações no front-end, enquanto que para Sofia a melhor parte foia seção de comparação do valor entre dois produtos, pois a fez refletir muito sobre responsividade

## Se vocês fossem participar de um hackathon semana que vem, fariam algo de diferente com relação às escolhas das tecnologias utilizadas?
- Acho que mudariamos a tecnologia do Back-end para TypeORM, que nos daria mais liberdade para criar relacionamentos

## example.env
```
    PORT=[PORT]
    MONGO_URI=[MONGO_URI]
    COOKIE_SECRET=[COOKIE_SECRET]
    CLOUDINARY_URL=[CLOUDINARY_URL]
```
Sendo:
- [PORT] porta em que o servidor vai rodar (utilizamos o 3001)
- [MONGO_URI] uri do MongoDB
- [COOKIE_SECRET] string aleatória de validação
- [CLOUDINARY_URL] is the url you got from [step 3.2](##3.-create-cloudinary-account)
