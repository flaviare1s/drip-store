// eslint-disable-next-line react/prop-types
export const Button = ({ title, type }) => {
  return (
    <button
      className="bg-primary text-white font-bold py-2 px-4 rounded-lg w-full h-12"
      type={type}
    >
      {title}
    </button>
  );
};
