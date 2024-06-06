export default function Restaurant({ name, onClick, ...props }) {
	return (
		<button onClick={onClick} {...props}>{name}</button>
	);
}