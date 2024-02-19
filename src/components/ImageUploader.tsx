import { ChangeEvent, useRef } from "react";
import { Form, Button } from "react-bootstrap";

interface PropTypes {
  multipleFlag: boolean;
  multipleFileData?: File[];
  setMultipleFileData?(files: File[]): void;
  setSingleFileData?(file: File | null): void;
}

const ImageUploader = ({
  multipleFlag,
  multipleFileData,
  setMultipleFileData,
  setSingleFileData,
}: PropTypes) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const acceptFiletypes = ["image/png", "image/jpeg", "image/jpg"];

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // 다중 선택을 하는 이미지일 때
      if (multipleFlag) {
        const fileList = e.target.files;
        if (fileList && setMultipleFileData && multipleFileData) {
          let filterFileList = [];
          for (let i = 0; i < fileList.length; i++) {
            if (acceptFiletypes.includes(fileList[i].type)) {
              filterFileList.push(fileList[i]);
            } else {
              alert("이미지 파일은 png, jpeg, jpg만 가능합니다.");
              return;
            }
          }
          setMultipleFileData([...multipleFileData, ...filterFileList]);
        }
      }
      // 단일 선택하는 이미지일 때
      else {
        const file = e.target.files[0];
        if (setSingleFileData) {
          setSingleFileData(file);
        }
      }
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <Button onClick={handleClick}>사진 선택</Button>
      <Form.Control
        type="file"
        style={{ display: "none" }}
        ref={fileInputRef}
        accept={acceptFiletypes.join(", ")}
        onChange={handleFileChange}
        multiple={multipleFlag}
      />
    </>
  );
};

export default ImageUploader;
