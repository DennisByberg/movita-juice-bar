import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

interface DefaultButtonProps {
  variant: 'text' | 'contained' | 'outlined';
  buttonText: string;
  navigationURL?: string;
}

function DefaultButton({
  variant,
  buttonText,
  navigationURL,
}: DefaultButtonProps) {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(`${navigationURL}`)} variant={variant}>
      {buttonText}
    </Button>
  );
}

export default DefaultButton;
