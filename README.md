## Tienda Online React

### Deploy

[Tienda React](https://proyecto-final-seven-lovat.vercel.app/)

### Descripción
E-Commerce desarrollada con React para explorar, buscar y comprar productos.

### Construido
- React
- Firebase

### Dependencias
- Chakra
- React icons
- React router dom
- React spinners
- React toastify
- SweetAlert2

### Intalación

- Clonar repositorio
    - git clone https://github.com/lucascardozoo/ProyectoFinal.git
- Moverse a la carpeta del proyecto
    - cd ProyectoFinal
- Intalamos las dependencias
    - npm install
- Compilamos
    - npm run dev

### Estructura del proyecto
#### NavBar
- Logo: El logotipo de la tienda que tambien nos lleva de vuelta a la página de inicio.
- Menu de categorías: Opciones de navegación para diferentes categorías de productos.
- Icono de carrito: Un ícono que muestra el número de artículos en el carrito y permite el acceso rápido al carrito.

#### Body
- Lista de productos: Una vista en forma de cuadrícula o lista que muestra todos los productos disponibles, incluyendo su imagen, nombre, stock y precio.
- Detalle del producto: Vista detallada de un producto específico que incluye una imagen, el nombre, la descripción, stock, opciones de cantidad y botón de agregar al carrito.

#### Navegación
- Enrutamiento: Manejo de rutas para la navegación entre las diferentes vistas de la aplicación, como la página de inicio, páginas de categorías, detalles del producto, carrito y página de checkout.

#### Carrito
- Vista del carrito de compras: Muestra los productos agregados al carrito, permite modificar las cantidades y eliminar productos. Incluye la visualización del total de la compra.

#### Checkout
- Formulario de Checkout: Formulario que recoge los datos del usuario necesarios para completar la compra.