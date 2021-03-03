import React, { useLayoutEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

const Holder = styled.div`
  padding: 0.75rem 1rem;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 0.5rem 0.05rem #ccc;
  border-radius: 0.115rem;
  position: absolute;
  ${({ position: [top, left] }) => css`
    top: ${top}px;
    left: ${left}px;
  `}
  color: #444;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
`;

const SheetButton = ({ name }) => {
  const ref = useRef();
  const [position, setPosition] = useState([0, 0]);
  const [dragStartPosition, setDragStartPosition] = useState([0, 0]);

  useLayoutEffect(() => {
    const { height, width } = ref.current.getBoundingClientRect();
    const { height: parentHeight, width: parentWidth } = ref.current.parentElement.getBoundingClientRect(); // prettier-ignore
    const newPosition = [
      Math.random() * (parentHeight - height),
      Math.random() * (parentWidth - width),
    ];
    setPosition(newPosition);
  }, []);

  return (
    <Holder
      ref={ref}
      position={position}
      draggable="true"
      onDragStart={(d) => {
        setDragStartPosition([d.clientY, d.clientX]);
      }}
      onDragEnd={(d) => {
        const [prevTop, prevLeft] = dragStartPosition;
        const [nextTop, nextLeft] = [d.clientY, d.clientX];

        const deltaTop = nextTop - prevTop;
        const deltaLeft = nextLeft - prevLeft;

        const [top, left] = position;
        setPosition([top + deltaTop, left + deltaLeft]);
      }}
    >
      {name}
    </Holder>
  );
};

export default SheetButton;
