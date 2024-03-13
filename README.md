<h1>DOBLEUVE ECOMMERCE</h1>
<img src="Dobleuve-frontend/public/img/Logo VV.svg" alt="Logo" />
<h3>- BACKEND:</h3>
<p>Desarrollado con Spring Boot atacando a una base de datos MySql, es necesario insertar el data.sql en la ruta src/main/resources para poder realizar los inserts de los productos.
Dejo en una carpeta Scripts el archivo creado para que sea solo copiar y pegar.</p>
<h4>INSERTS: </h4>
<p>
INSERT INTO `productos` (`id`, `cantidad_disponible`, `descripcion`, `image_url`, `nombre`, `precio`) VALUES </br>
(NULL, '1', 'Un elegante diseño inspirado en la naturaleza, con líneas suaves y formas fluidas que evocan la tranquilidad de las aguas del río Miño. Perfecto para un estilo delicado y refinado.', 'https://res.cloudinary.com/dmjx8kaku/image/upload/v1708449992/samples/dobleuve/wdwkaotihp5x82giajsg.png', 'MIÑO', '15'), </br>
(NULL, '1', 'Los pendientes Dubra están influenciados por la riqueza cultural y la artesanía tradicional. Con detalles ornamentales, estos pendientes encarnan la elegancia clásica y son un complemento perfecto para cualquier ocasión.', 'https://res.cloudinary.com/dmjx8kaku/image/upload/v1708449990/samples/dobleuve/lvn6oihl0wcjxak82euh.png', 'DUBRA', '15'), </br>
(NULL, '1', 'Un diseño moderno y vanguardista que incorpora la forma de la letra de nuestra marca. Los pendientes Dobleuve son símbolo de estilo audaz y originalidad, ideales para quienes buscan destacar en la moda contemporánea.', 'https://res.cloudinary.com/dmjx8kaku/image/upload/v1708449989/samples/dobleuve/sjlc40joic2sn25qlyqd.png', 'DOBLEUVE', '10'), </br> 
(NULL, '1', 'Inspirados en la diosa Deva, estos pendientes desprenden gracia y encanto. Con formas que recuerdan a elementos místicos, son una elección perfecta para aquellos que buscan un toque espiritual en su estilo.', 'https://res.cloudinary.com/dmjx8kaku/image/upload/v1708449989/samples/dobleuve/frkbqzkbgrjfvt5xqzjh.png', 'DEVA', '15'), </br>
(NULL, '1', 'Inspirados por la belleza del río Sarela, estos pendientes evocan la serenidad y la armonía. Con líneas suaves y detalles naturales, son ideales para quienes buscan piezas que transmitan calma y estilo.', 'https://res.cloudinary.com/dmjx8kaku/image/upload/v1708449990/samples/dobleuve/jstesewdr61yvwxdwa1f.png', 'SARELA', '10'), </br>
(NULL, '1', 'Los pendientes Anllóns presentan un diseño ovalado y contemporáneo. Inspirados en la arquitectura moderna, estos pendientes son la elección perfecta para quienes buscan un toque vanguardista y estructurado en su estilo.', 'https://res.cloudinary.com/dmjx8kaku/image/upload/v1708449993/samples/dobleuve/eud8uffx9uzlnzb06bcn.png', 'ANLLÓNS', '12');
</p>
<p>Referente a las imágenes estan alojadas en un servidor llamado <a href="https://cloudinary.com/users/register_free">Cloudinary</a> si dan problemas las isertadas en el srcipt podeis subirlas al servidor las que estan clasificadas en la carpeta img/products.
Si todo salió bien ejecutamos el programa dandole al play y deberia de salirnos por consola un mensaje como este <strong>"2024-03-13T16:15:32.968+01:00  INFO 748 --- [  restartedMain] c.e.Dobleuve.DobleuveApplication         : Started DobleuveApplication in 5.419 seconds (process running for 6.248)"</strong></p>
