export default function FilterButton({ name, onSelect, active }) {
	return (
		<button
			onClick={onSelect}
			className={active ? 'active' : ''}
		>
			{name}
		</button>
	);
}