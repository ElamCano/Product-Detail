# MyApp

![cover](/public/coverHero.png)

Puedes acceder al sitio deployado en el siguiente: [Link](https://myapp-nine-delta.vercel.app/)

## Autor

- [Elam Cano](https://www.linkedin.com/in/elam-cano-bb0419239/)

## Tecnologías utilizadas

**Client**: ViteJS, ReactJS, TailWindCSS, Pure CSS

---

## Funcionalidades extra

- Animaciones de onScroll (Framer motion) [Link](https://www.framer.com/motion/?utm_source=motion-readme-docs)
- Material Tailwind [Link](https://www.material-tailwind.com/)

## Detalle de Presentación

Se utilizó el hook useEffect para simular el request del producto, en este caso pidiendo los datos a un json en la carpeta "public", el cual proporciona todo lo que se imprime en pantalla (nombre, precio, sku, etc). Aunque en este caso se muestra solo un producto los componentes utilizan las props para recibir los datos a renderizar, por lo que facilmente se puede adaptar a una lista larga de productos.
