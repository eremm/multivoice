import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';

const Holder = styled.div`
  padding: 0 1rem;
  cursor: pointer;
  border-radius: 0.5rem;
  box-shadow: 0.25rem 0.4rem 0.75rem -0.15rem rgba(0, 0, 0, 0.2),
    -0.25rem 0.4rem 0.75rem -0.15rem rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.15);
  visibility: ${({ isHidden }) => (isHidden ? 'hidden' : 'visible')};
`;

function Dropzone({ onDrop, isHidden }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Holder {...getRootProps()} isHidden={isHidden}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </Holder>
  );
}

Dropzone.defaultProps = {
  isHidden: false,
};

export default Dropzone;
