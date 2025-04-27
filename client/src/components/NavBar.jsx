import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="bg-hyrule-green p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Zelda: Breath of the Wild</h1>
                <div>
                    <Link to="/" className="mx-2 hover:text-hyrule-gold">Home</Link>
                    <Link to="/info" className="mx-2 hover:text-hyrule-gold">Game Info</Link>
                    <Link to="/chat" className="mx-2 hover:text-hyrule-gold">Chat with Link</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar