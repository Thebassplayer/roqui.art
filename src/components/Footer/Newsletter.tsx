import React from "react";

const Newsletter = () => {
  return (
    <div className="mb-10 flex w-full flex-col items-center justify-center bg-lightBlue p-10">
      <h2 className="mb-6 text-2xl uppercase">Newsletter</h2>
      <p className="mb-6 text-light">RECIBI TODAS NUESTRAS NOVEDADES</p>
      <input
        type="text"
        placeholder="email:"
        className="w-96 rounded-full border-none"
      />
    </div>
  );
};

export default Newsletter;
