import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

interface DefaultButtonProps {
  variant: 'text' | 'contained' | 'outlined';
  buttonText: string;
  navigationURL?: string;
  marginLeft?: '0px' | '16px';
  marginTop?: '0px' | '16px' | '32px';
}

function DefaultButton({
  variant,
  buttonText,
  navigationURL,
  marginLeft,
  marginTop,
}: DefaultButtonProps) {
  const navigate = useNavigate();
  return (
    <Button
      sx={{
        marginTop: `${marginTop}`,
        marginLeft: `${marginLeft}`,
        color: 'movitaPurple.light',
        borderColor: 'movitaPurple.dark',
        gap: '0.3rem',
      }}
      onClick={() => navigate(`${navigationURL}`)}
      variant={variant}
    >
      {buttonText}
      <KeyboardDoubleArrowRightIcon sx={{ fontSize: '1.6rem' }} />
    </Button>
  );
}

export default DefaultButton;
