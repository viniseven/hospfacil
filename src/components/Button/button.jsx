export function Button({ title, icon: Icon, ...rest }) {
  return (
    <button {...rest}>
      {Icon && <Icon size={22} />}
      {title}
    </button>
  );
}
