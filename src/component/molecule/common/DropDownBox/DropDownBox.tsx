import React, {
 useCallback, useEffect, useRef, useState,
} from 'react';

type Props = {
    setstate:(state:string | File)=>void;
    readOnly?:boolean
};
export default function DropDownBox({
  setstate,
  readOnly = false,
}:Props) {
  const dragRef = useRef<HTMLLabelElement>(null);
  const handleDragIn = useCallback((e:DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = useCallback((e:DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOver = useCallback((e:DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);
  const onChangeFiles = useCallback(
    (e:React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files || [''];
        setstate(files[0]);
    },
    [setstate],
  );
  const onDropFiles = useCallback(
    (e:DragEvent) => {
    const files = e.dataTransfer?.files || [''];
      setstate(files[0]);
    },
    [setstate],
  );

  const handleDrop = useCallback(
    (e:DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      onDropFiles(e);
    },
    [onChangeFiles],
  );
  const initDragEvents = useCallback(() => {
    if (dragRef.current) {
      dragRef.current.addEventListener('dragenter', handleDragIn);
      dragRef.current.addEventListener('dragleave', handleDragOut);
      dragRef.current.addEventListener('dragover', handleDragOver);
      dragRef.current.addEventListener('drop', handleDrop);
    }
  }, [handleDrop]);
  //   }, [handleDrop]);

  const resetDragEvents = useCallback(() => {
    if (dragRef.current) {
      dragRef.current.removeEventListener('dragenter', handleDragIn);
      dragRef.current.removeEventListener('dragleave', handleDragOut);
      dragRef.current.removeEventListener('dragover', handleDragOver);
      dragRef.current.removeEventListener('drop', handleDrop);
    }
  }, [handleDrop]);
  //   }, [handleDrop]);

  useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, []);

  return (
    <label
      className="border-8 w-[100%] h-[200px] flex justify-center items-center"
      htmlFor="abc44"
      ref={dragRef}
    >

      <span
        style={{
            textAlign: 'center',
            color: 'var(--textGray)',
          }}
      >
        Drag and Drop
        <br />
        or
        <br />
        Click and Attach
      </span>

      <input
        type="file"
        id="abc44"
        data-testid="dropdowninput"
        style={{ display: 'none' }}
        multiple
        onChange={readOnly ? () => {} : onChangeFiles}
        disabled={readOnly}
      />
      {/* </label> */}
    </label>
  );
}
