import { FaSpinner } from 'react-icons/fa';

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <FaSpinner className="animate-spin text-primary-600 text-4xl" />
    </div>
  );
}

export default LoadingSpinner;