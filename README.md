# 3D Animated Solar System

This project demonstrates a 3D animated solar system using the following technologies:

- [THREE.js](https://threejs.org/)
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber)
- [React Three Drei](https://github.com/pmndrs/drei)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## Description

This example project showcases a 3D animated solar system. It can be further enhanced depending on your PC specifications, such as having a higher-end graphics card. If you find this project useful, please give it a star. Your support is appreciated!

## Requirements

- Node.js v20

## Getting Started

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/solarsystem.git
   cd solarsystem
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

### Building for Production

To create a production build, run:

```sh
npm run build
```

This will generate the production-ready files in the `dist` directory.

### Previewing the Production Build

To preview the production build locally, run:

```sh
npm run preview
```

## Project Structure

- `src/`: Contains the source code for the project.
  - `scene/`: Contains the 3D scene components like `Earth`, `Moon`, `Sun`, and `ISS`.
  - `AnimatedStars.jsx`: Component for animated stars in the background.
  - `App.jsx`: Main application component.
  - `MainContainer.jsx`: Container for the main 3D scene.
  - `main.jsx`: Entry point for the React application.
- `public/`: Contains static assets like the ISS model.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
