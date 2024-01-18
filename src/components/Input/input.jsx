export function Input({ type, placeholder, ...rest }) {
  return (
    <input
      className="border-light_gray rounded-lg border w-full p-2"
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  );
}
