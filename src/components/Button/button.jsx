export function Button({ title, icon: Icon, ...rest }) {
  return (
    <button className="text-purple" {...rest}>
      {Icon && <Icon size={22} />}
      {title}
    </button>
  );
}
