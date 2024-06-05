// import { category } from "../../App"
// import { CATEGORIES } from "../../data"
// import CategoryButton from "./CategoryButton"

// export default function CategorySection() {
// 	return (
// 		<>
// 			<h2>Select a Category</h2>
// 			<ul>
// 				<CategoryButton
// 				name={"All"}
// 				active={category === 'All'}
// 				onSelect={() => updateCategory("All")}
// 				/>
// 				{CATEGORIES.map((item) =>
// 				<CategoryButton
// 					key={item}
// 					name={item}
// 					active={category === item}
// 					onSelect={() => updateCategory(item)}
// 				/>
// 				)}
// 			</ul>
// 		</>
// 	)
// }