export default function CategoryButton({ name, onSelect, active }) {
	return (
		<button
			onClick={onSelect}
			className={active ? 'active' : ''}
		>
			{name}
		</button>
	);
}