import { useNavigate } from 'react-router-dom';

const usePageMove = () => {
  const nav = useNavigate();

  return (path, replace, message) => {
    if (window.confirm(message)) {
      nav(path, { replace: replace });
    }
  };
};

export default usePageMove;
