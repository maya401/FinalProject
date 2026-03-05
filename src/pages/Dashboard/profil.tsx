import React, { useState } from "react";
import { HiX } from "react-icons/hi";

export default function Profil() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Profil utilisateur</h2>
      <FileUpload />

      <h2 className="text-2xl font-bold">Données personnelles</h2>
      <form className="max-w-1/2 flex flex-col gap-2">
        <label>Nom d'utilisateur</label>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm transition-all duration-300"
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="maya@gmail.com"
          className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm transition-all duration-300"
        />
        <label>telephone</label>
        <input
          type="text"
          placeholder="+221 77 234 45 64"
          className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm transition-all duration-300"
        />
        <label>Description</label>
        <textarea
          className="w-full mt-2 px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm transition-all duration-300"
          placeholder="à propos de moi"
        ></textarea>
        <div className="flex gap-5">
          <button className="bg-orange-400 w-50 h-10 rounded-xl text-white mt-4">
            Enregistrer{" "}
          </button>
         
        </div>
      </form>
    </div>
  );
}

function FileUpload() {
  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  return (
    <div className="relative flex  items-center gap-3">
      <label htmlFor="upload-button">
        {image.preview ? (
          <img
            src={image.preview}
            alt="dummy"
            className="rounded-full size-32"
          />
        ) : (
          <>
            <img
              src="/images/pp cv.jpg"
              alt="photo profil"
              className="rounded-full size-32"
            />
          </>
        )}
      </label>
      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <button className="bg-red-500 p-1 absolute top-0 left-24 cursor-pointer rounded-xl text-white">
        <HiX className="size-4" />
      </button>
      <p className="text-sm ">cliquer sur l'image pour modifier</p>
    </div>
  );
}
