import './result.css'

export default function Result({choice = null}) {
	return <h1 className='result'>{choice}</h1>
}