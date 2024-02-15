import { useState } from "react";
import ImageUploader from "@/components/ImageUploader";

const CompanyRecruit = () => {
  const [multipleFileData, setMultipleFileData] = useState<File[]>([]);
  const [singleFileData, setSingleFileData] = useState<File | null>(null);

  const changeMultipleFileData = (deleteIndex: number) => {
    setMultipleFileData((prevFiles) => {
      return prevFiles.filter((file, index) => deleteIndex !== index);
    });
  };

  return (
    <>
      <h3>이미지 업로드</h3>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ImageUploader
          multipleFlag={true}
          multipleFileData={multipleFileData}
          setMultipleFileData={(data) => setMultipleFileData(data)}
        />
        <div>
          {multipleFileData.map((data, index) => (
            <span
              key={index}
              style={{ marginLeft: 10 }}
              onClick={() => changeMultipleFileData(index)}
            >
              {data.name},
            </span>
          ))}
        </div>
      </div>

      <h3 className="mt-3">대표 이미지</h3>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ImageUploader
          multipleFlag={false}
          setSingleFileData={setSingleFileData}
        />
        <span style={{ marginLeft: 10 }}>{singleFileData?.name}</span>
      </div>
    </>
  );
};

export default CompanyRecruit;
