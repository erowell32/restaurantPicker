export default function TypeButton({ name, onSelect, active }) {
	return (
		<button id='filter'
			onClick={onSelect}
			className={active ? 'active' : ''}
		>
			{name}
		</button>
	);
}