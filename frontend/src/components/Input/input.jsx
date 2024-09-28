export function Input({ type, placeholder, ...rest }) {
  return (
    <input
      className="border-light_gray rounded-lg border p-2 w-full"
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  );
}
