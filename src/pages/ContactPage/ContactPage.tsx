import { Box } from '@mui/material';
import ContactForm from '../../components/ContactForm/ContactForm';
import googleMapsPNG from '/images/googleMapsPNG.png';
// import juicePNG from '/images/juicePNG.png';

function ContactPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          width: '100%',
          maxWidth: '600px',
          paddingInline: '1rem',
          borderRadius: 3,
        }}
        component='img'
        src={googleMapsPNG}
      />
      <ContactForm />
    </Box>
  );
}
export default ContactPage;
