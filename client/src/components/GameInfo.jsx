import { useState, useEffect } from 'react'

const API_URL = process.env.REACT_APP_API_URL || 'https://zelda-app-server.onrender.com'


function GameInfo() {
    const [characters, setCharacters] = useState([])
    const [creators, setCreators] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch(`${API_URL}/characters`)
            .then(res => res.json())
            .then(data => setCharacters(data))
        fetch(`${API_URL}/creators`)
            .then(res => res.json())
            .then(data => setCreators(data))
    }, [])

    const handleSearch = () => {
        fetch(`${API_URL}/characters/search?q=${search}`)
            .then(res => res.json())
            .then(data => setCharacters(data))
    }

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-bold mb-4">Game Information</h2>
            <div className="mb-8">
                <h3 className="text-2xl mb-2">Search Characters</h3>
                <input
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="p-2 bg-gray-800 rounded mr-2"
                    placeholder="Search by name..."
                />
                <button
                    onClick={handleSearch}
                    className="bg-hyrule-green p-2 rounded hover:bg-hyrule-gold"
                >
                    Search
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h3 className="text-2xl mb-2">Characters</h3>
                    {characters.map(char => (
                        <div key={char.id} className="bg-gray-800 p-4 rounded mb-2">
                            <h4 className="text-xl font-bold">{char.name}</h4>
                            <p>{char.description}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <h3 className="text-2xl mb-2">Creators</h3>
                    {creators.map(creator => (
                        <div key={creator.id} className="bg-gray-800 p-4 rounded mb-2">
                            <h4 className="text-xl font-bold">{creator.name}</h4>
                            <p>{creator.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GameInfo