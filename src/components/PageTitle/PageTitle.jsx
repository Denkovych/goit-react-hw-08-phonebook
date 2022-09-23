import PropTypes from 'prop-types';
import { Logo, Title, TitleWrapper } from './PageTitle.styled';
import {BookHalf} from 'react-bootstrap-icons';;

const PageTitle = ({ title }) => {
  return (
    <TitleWrapper>
      <Logo to="/">
        <BookHalf sx={{ fontSize: 80, mb: 3 }} />
      </Logo>
      <Title>{title}</Title>
    </TitleWrapper>
  );
};

export  {PageTitle};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};