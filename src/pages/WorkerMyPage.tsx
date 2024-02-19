import { useState } from "react";
import ImageUploader from "@/components/ImageUploader";

const WorkerMyPage = () => {
  const [singleFileData, setSingleFileData] = useState<File | null>(null);
  return (
    <>
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

export default WorkerMyPage;
