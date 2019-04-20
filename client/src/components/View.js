import React from 'react';
import styled from 'styled-components';

const ViewStyles = styled.div`
  padding: 2.4rem;
`;

const View = props => {
  return <ViewStyles>{props.children}</ViewStyles>;
};

export default View;
