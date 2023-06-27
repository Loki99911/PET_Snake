const { useEffect } = require("react");

const useControls = setSnakeDirection => {
  useEffect(() => {
    const onKeyDown = e => {
      switch (e.key) {
          case 'ArrowUp':
          setSnakeDirection('Up');
          break;
        case 'ArrowDown':
          setSnakeDirection('Down');
          break;
        case 'ArrowLeft':
          setSnakeDirection('Left');
          break;
        case 'ArrowRight':
          setSnakeDirection('Right');
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [setSnakeDirection]);
};

export default useControls;