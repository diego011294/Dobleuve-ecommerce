<h1>DOBLEUVE ECOMMERCE</h1>
<img src="Dobleuve-frontend/public/img/Logo VV.svg" alt="Logo" />
<h3>- BACKEND:</h3>
<p>Desarrollado con Spring Boot atacando a una base de datos MySql, es necesario insertar el data.sql en la ruta src/main/resources para poder realizar los inserts de los productos.
Dejo en una carpeta Scripts el archivo creado para que sea solo copiar y pegar. Debemos de crear la base de datos en phpMyAdmin o en Workbench con el siguiente nombre: <strong>"dobleuve_db".</strong></p>
<p>Por lo tanto asi deberian de quedar los properties del archivo: </br>
spring.datasource.url=jdbc:mysql://localhost:3306/dobleuve_db </br>
spring.datasource.username=root </br>
spring.datasource.password= </br>
spring.sql.init.encoding=UTF-8 </br>
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver </br>
spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect </br>
spring.jpa.show-sql=true </br>
spring.jpa.hibernate.ddl-auto=update </br>
logging.level.org.hibernate.SQL=debug </br>
spring.output.ansi.enabled=always

</p>
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
Si todo salió bien ejecutamos el programa dandole al play y deberia de salirnos por consola un mensaje como este <strong>"2024-03-13T16:15:32.968+01:00  INFO 748 --- [  restartedMain] c.e.Dobleuve.DobleuveApplication         : Started DobleuveApplication in 5.419 seconds (process running for 6.248)".</strong></p>

<p>Para el sistema del registro y entrada se ha optado por utilizar los servicios que ofrece <a href="https://firebase.google.com/">Google Firebase</a> ya que encajaba bien en la implementación y nos permite usar la cuenta de Google.</p>

<h3>- FRONTEND:</h3>
<p>La parte del front se ha dessarrollado con React + Vite para hacer una web más dinámica y reactiva. La lógica a seguir es la de un ecommerce tradicional con una función que permita añadir productos al carrito de compra y un sistema de registro y entrada con correo electrónico o cuenta de Google. Debemos de tener instaladas las siguientes dependencias en nuestro proyecto usando por terminal "npm install":</p>

<h4>DEPENDENCIAS: </h4>
<p>"dependencies": { </br>
    "bootstrap": "^5.3.3", </br>
    "bootstrap-icons": "^1.11.3", </br>
    "firebase": "^10.8.1", </br>
    "popper.js": "^1.16.1", </br>
    "react": "^18.2.0", </br>
    "react-bootstrap": "^2.9.0-beta.1", </br>
    "react-dom": "^18.2.0", </br>
    "react-router-dom": "^6.22.2" </br>
  }, </p>
<p>Para poder desplegar nuestro proyecto en local desde un navegador es importante que utilicemos el siguiente comando por consola <strong>"npm run dev".</strong>. Y asi poder acceder al localhost que nos proporciona. </p>
<p>Como se puede apreciar en las dependecias se ha utilizado <a href="https://getbootstrap.com/">Bootstrap</a> para darle estilos a la web y conseguir una interface mucho más responsiva en todo tipo de dispositivos y resoluciones.</p>

<h4>SCREENSHOTS: </h4>

