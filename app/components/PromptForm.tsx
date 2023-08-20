"use client";

import React from "react";
import Image from "next/image";
import { FileWithPath, useDropzone } from "react-dropzone";

type PromptFormProps = {
  handleFormSubmit: (
    formData: FormData,
    landingPageIntention: string,
    companyInfo: string
  ) => void;
};

const PromptForm = ({ handleFormSubmit }: PromptFormProps) => {
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      minSize: 1,
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

    // formData.append(
    //   "landingPageIntention",
    //   e.currentTarget.intention.value || "Exciting discount on a Toyota vehicle"
    // );
    // formData.append(
    //   "companyInfo",
    //   e.currentTarget.companyinfo.value || "Toyota company info"
    // );

    acceptedFiles.forEach((file: FileWithPath) => {
      formData.append("pdf", file, file.name);
    });

    handleFormSubmit(
      formData,
      e.currentTarget.intention.value ||
        "Exciting discount on a Toyota vehicle",
      e.currentTarget.companyinfo.value || "Toyota company info"
    );
  };

  return (
    <>
      <div className="fixed z-10 bg-black inset-0">
        <Image
          src="verndale.svg"
          alt="logo"
          width={200}
          height={200}
          className="mx-auto fit-content block my-20"
        />
        <div className="grid place-content-center container mx-auto ">
          <div className="w-screen px-10 block md:min-w-[600px] md:w-full">
            {/* <h1 className="font-bold text-5xl mb-10 text-center font-titillium">
            Generate your landing page
          </h1> */}
            <form onSubmit={handleSubmit} className="w-full block">
              <div className="my-2">
                <label
                  htmlFor="intention"
                  className="text-xl text-white font-titillium"
                >
                  Landing page intention
                </label>
                <input
                  required={true}
                  placeholder="Ex: Exciting discount on a Toyota vehicle"
                  name="intention"
                  className="w-full rounded-md text-xl text-black p-4 font-titillium my-2"
                />
              </div>
              <div className="my-2">
                <label
                  htmlFor="companyinfo"
                  className="text-2xl text-white font-titillium"
                >
                  Company information
                </label>
                <input
                  required={true}
                  placeholder="Ex: Toyota company info"
                  name="companyinfo"
                  className="w-full rounded-md text-2xl text-black p-4 font-titillium my-2"
                />
              </div>
              <div>
                <div
                  {...getRootProps({ className: "dropzone" })}
                  className="cursor-pointer"
                >
                  <div className="border-2 rounded-md px-4 text-center py-16 font-sans my-5 ">
                    <input {...getInputProps()} />
                    <p>Drag your PDF file here, or click to select</p>
                  </div>
                </div>
                <div className="my-5">
                  <ul>{files}</ul>
                </div>
              </div>
              <button
                className="bg-yellow border-2 border-transparent text-white p-4 font-semibold hover:text-white hover:bg-black hover:border-2 hover:border-white text-md mx-auto block font-mono transition-all duration-300 ease-in-out rounded-md"
                type="submit"
              >
                Generate Landing Page
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromptForm;
