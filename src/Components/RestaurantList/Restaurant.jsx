export default function Restaurant({ name, ...props }) {
	return (
		//<button {...props}>{name}</button>
		<li>{name}</li>
	);
}