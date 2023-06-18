import React from "react";
import Image from "next/image";

export default function Application() {
  return (
    <div id="Application" style={{ textAlign: "center" }}>
      <h1 className="mb-4 pt-5 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
      Cocina con el Chef Master Bot: Recetas y tips en un solo lugar
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
      Tu asistente personal en la cocina. Aquí encontrarás una amplia variedad de recetas,
      consejos culinarios y recomendaciones personalizadas para ayudarte a mejorar tus habilidades en la cocina y
      sorprender a tus invitados con deliciosos platos.
      </p>
      <Image
        src="/food-tomatoes.png"
        className="h-auto mx-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800"
        width={800}
        height={800}
        alt="Image Vegetal"
        style={{ maxWidth: "100%" }}
      />
      <div className="pt-4 pb-3">
      <a
        href="#"
        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
      >
        Aprende más
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      </div>
    </div>
  );
}
