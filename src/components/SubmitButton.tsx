import React from "react";

export type SubmitButtonProps = {
  text?: string;
  className?: string;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({ text = "Submit", className }) => {
  return (
    <button
      type="submit"
      className={`${className} w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition ease-in-out duration-300 hover:scale-105 hover:border-zinc-800 hover:shadow-lg hover:ring-1 hover:ring-zinc-800`}
    >
      {text}
    </button>
  );
};

export default SubmitButton;