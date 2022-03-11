import styled from 'styled-components'

export default styled.button`
  outline: none;
  border: none;
  background-color: ${({ bgColor }) => bgColor || '#777'};
  border-radius: 4px;
  padding: 8px;
  min-width: 200px;
  color: ${({ color }) => color || '#fff'};
`
