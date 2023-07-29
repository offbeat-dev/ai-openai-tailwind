"use client";

import React from "react";
import Image from "next/image";
import { FileWithPath, useDropzone } from "react-dropzone";

type PromptFormProps = {
  handleFormSubmit: (formData: FormData) => void;
};

const PromptForm = ({ handleFormSubmit }: PromptFormProps) => {
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      maxFiles: 1,
      accept: {
        "application/pdf": [],
      },
    });
  let formData = new FormData();

  const files = acceptedFiles.map((file: FileWithPath) => {
    return (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    );
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formData.append("prompt", e.currentTarget.prompt.value);
    acceptedFiles.forEach((file: FileWithPath) => {
      formData.append("pdfFile", file, file.name);
    });
    handleFormSubmit(formData);

    console.log(Object.fromEntries(formData.entries()));
  };

  return (
    <>
      <Image
        src="verndale.svg"
        alt="logo"
        width={200}
        height={200}
        className="mx-auto fit-content block my-20"
      />
      <div className="grid place-content-center container mx-auto h-full">
        <div className="w-screen px-10 block md:min-w-[600px] md:w-full">
          {/* <h1 className="font-bold text-5xl mb-10 text-center font-titillium">
            Generate your landing page
          </h1> */}
          <form onSubmit={handleSubmit} className="w-full block">
            <textarea
              placeholder="Describe the product or service you are generating a landing page for..."
              name="prompt"
              className="w-full rounded-md text-2xl text-black p-4 font-titillium"
              rows={5}
            />
            <div>
              <div
                {...getRootProps({ className: "dropzone" })}
                className="cursor-pointer"
              >
                <div className="border-2 rounded-md px-4 text-center py-16 font-titillium my-5 ">
                  <input {...getInputProps()} />
                  <p>Drag your PDF file here, or click to select</p>
                </div>
              </div>
              <div className="my-5">
                <ul>{files}</ul>
              </div>
            </div>
            <button
              className="bg-yellow text-black p-4 font-semibold hover:text-white hover:bg-black text-md mx-auto block font-titillium"
              type="submit"
            >
              Generate Landing Page
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PromptForm;
