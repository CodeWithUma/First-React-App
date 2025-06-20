import './App.css'
import {useState} from "react";

const Card = ({title}) => {
    const [hasLiked, setHasLiked] = useState(false);

    return (
        <div className="card">
            <h2>{title}</h2>

            <button
                onClick={() => setHasLiked(!hasLiked)}
                style={{color: hasLiked ? '#ff0000' : '#ffffff'}}
                aria-label={hasLiked ? 'Unlike' : 'Like'}>
                ♥
            </button>
        </div>
    )
}

const App = () => {
    return (
        <div className="card-container">
            <Card title="Star Wars" rating={5} isCool={true} />
            <Card title="Avatar" />
            <Card title="The Lion King" />
        </div>
    )
}

export default App
