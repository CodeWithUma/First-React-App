import './App.css'
import {useEffect, useState} from "react";

const Card = ({title}) => {
    const [count, setCount] = useState(0);
    
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(() => {
        console.log(`${title} has been liked ${hasLiked}`);
    }, [hasLiked, title]);

    return (
        <div className="card" onClick={() => setCount(count + 1)}>
            <h2>{title} <br/> {count || null}</h2>

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
