"use client";
import React, { useState, useEffect } from "react";
import { FileUpload } from "@/components/ui/Fileupload";

function FileUploadDemo() {
  const [files, setFiles] = useState<File[]>([]);
  const [fileURLs, setFileURLs] = useState<string[]>([]);

  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem("uploadedFiles") || "[]");
    const storedURLs = JSON.parse(localStorage.getItem("uploadedFileURLs") || "[]");

    if (storedFiles.length > 0 && storedURLs.length > 0) {
      const reconstructedFiles = storedFiles.map((file: any) => 
        new File([file], file.name, { type: file.type || "application/octet-stream" }) 
      );
      setFiles(reconstructedFiles);
      setFileURLs(storedURLs);
    }
  }, []);

  useEffect(() => {
    if (files.length > 0) {
      localStorage.setItem("uploadedFiles", JSON.stringify(files));
      localStorage.setItem("uploadedFileURLs", JSON.stringify(fileURLs));
    }
  }, [files, fileURLs]);

  const handleFileUpload = (uploadedFiles: File[]) => {
    const urls = uploadedFiles.map((file) => URL.createObjectURL(file));

    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
    setFileURLs((prevURLs) => [...prevURLs, ...urls]);

    localStorage.setItem("uploadedFiles", JSON.stringify([...files, ...uploadedFiles]));
    localStorage.setItem("uploadedFileURLs", JSON.stringify([...fileURLs, ...urls]));
  };

  const handleDelete = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    const updatedURLs = fileURLs.filter((_, i) => i !== index);

    setFiles(updatedFiles);
    setFileURLs(updatedURLs);

    localStorage.setItem("uploadedFiles", JSON.stringify(updatedFiles));
    localStorage.setItem("uploadedFileURLs", JSON.stringify(updatedURLs));
  };

  return (
    <div className="w-full max-w-4xl mx-auto min-h-96 p-6 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg shadow-lg flex flex-col items-center justify-center">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Upload your file</h2>
      <FileUpload onChange={handleFileUpload} />
      <div className="w-full mt-4 grid gap-4">
        {files.map((file, index) => (
          <div key={index} className="p-4 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 shadow-sm">
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{file.name}</p>
            <a href={fileURLs[index]} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Open File</a>
            {file.type && file.type.startsWith("image") && (
              <img src={fileURLs[index]} alt={file.name} className="mt-2 max-w-full h-auto rounded-md" />
            )}
            {file.type && file.type === "application/pdf" && (
              <iframe src={fileURLs[index]} className="mt-2 w-full h-64 border rounded-md" title={file.name}></iframe>
            )}
            <button 
              onClick={() => handleDelete(index)} 
              className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileUploadDemo;
