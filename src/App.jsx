import React, { useCallback, useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
import XLSX from 'xlsx';

import Rainbow from './components/Rainbow';
import SheetButton from './components/SheetButton';
import Dropzone from './Dropzone';

const Holder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

function MultivoiceApp() {
  const [fileReader] = useState(new FileReader());
  const [sheetNames, setSheetNames] = useState([]);
  const [isDropzoneHidden, setIsDropzoneHidden] = useState(false);

  useEffect(() => {
    fileReader.onload = function (e) {
      var data = new Uint8Array(e.target.result);
      var workbook = XLSX.read(data, { type: 'array' });

      setSheetNames(workbook.SheetNames);
      /* DO SOMETHING WITH workbook HERE */
      setIsDropzoneHidden(true);
    };
  }, []);

  const onDrop = useCallback((acceptedFiles) => {
    fileReader.readAsArrayBuffer(acceptedFiles[0]);
  }, []);

  return (
    <Rainbow>
      <Holder>
        <Dropzone onDrop={onDrop} isHidden={isDropzoneHidden} />
        {sheetNames.map((name) => (
          <SheetButton key={name} name={name} />
        ))}
      </Holder>
    </Rainbow>
  );
}

export default hot(MultivoiceApp);
