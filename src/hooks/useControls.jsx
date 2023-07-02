const { useEffect } = require('react');

const useControls = ({ snakeDirection, setSnakeDirection }) => {
  useEffect(() => {
    const onKeyDown = e => {
      switch (e.key) {
        case 'ArrowUp':
          snakeDirection !== 'Down' && setSnakeDirection('Up');
          break;
        case 'ArrowDown':
          snakeDirection !== 'Up' && setSnakeDirection('Down');
          break;
        case 'ArrowLeft':
          snakeDirection !== 'Right' && setSnakeDirection('Left');
          break;
        case 'ArrowRight':
          snakeDirection !== 'Left' && setSnakeDirection('Right');
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [setSnakeDirection, snakeDirection]);
};

export default useControls;
