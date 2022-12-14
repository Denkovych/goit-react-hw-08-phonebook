import PropTypes from 'prop-types';
import PATH from 'helpers/pages/pathPages';
import { Link as RouterLink } from 'react-router-dom';
import { StyledLink, StyledLinkMobile } from './Logo.styled';
import {BookHalf} from 'react-bootstrap-icons';

const Logo = ({ sx = {} }) => {
  return (
    <>
      <StyledLink
        variant="h5"
        noWrap
        component={RouterLink}
        to={PATH.home}
        sx={{
          mr: 2,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.2rem',
          color: 'inherit',
          textDecoration: 'none',
          alignItems: 'center',
          ...sx,
        }}
      >
        <BookHalf sx={{ fontSize: 'inherit' }} /> PHONEBOOK
      </StyledLink>
      <StyledLinkMobile
        variant="h5"
        noWrap
        component={RouterLink}
        to={PATH.home}
        sx={{
          mr: 2,
          fontFamily: 'monospace',
          fontWeight: 700,
          color: 'inherit',
          textDecoration: 'none',
          alignItems: 'center',
          ...sx,
        }}
      >
        <BookHalf sx={{ fontSize: 30 }} /> PB
      </StyledLinkMobile>
    </>
  );
};

export default Logo;

Logo.propTypes = {
  sx: PropTypes.object,
};