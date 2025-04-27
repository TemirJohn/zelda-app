import { useState } from 'react'

const API_URL = process.env.REACT_APP_API_URL || 'https://zelda-app-server.onrender.com'


function ChatWithLink() {
    const [message, setMessage] = useState('')
    const [replies, setReplies] = useState([])

    const handleSend = async () => {
        if (!message.trim()) return
        try {
            const res = await fetch(`${API_URL}/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message }),
            })
            const data = await res.json()
            setReplies([...replies, { user: message, link: data.reply }])
            setMessage('')
        } catch (error) {
            console.error('Chat error:', error)
        }
    }

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-bold mb-4">Chat with Link</h2>
            <div className="bg-gray-800 p-4 rounded h-96 overflow-y-auto mb-4">
                {replies.map((chat, idx) => (
                    <div key={idx}>
                        <p className="text-hyrule-green"><strong>You:</strong> {chat.user}</p>
                        <p className="text-hyrule-gold"><strong>Link:</strong> {chat.link}</p>
                    </div>
                ))}
            </div>
            <div className="flex">
                <input
                    type="text"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="p-2 bg-gray-800 rounded flex-grow mr-2"
                    placeholder="Talk to Link..."
                />
                <button
                    onClick={handleSend}
                    className="bg-hyrule-green p-2 rounded hover:bg-hyrule-gold"
                >
                    Send
                </button>
            </div>
        </div>
    )
}

export default ChatWithLink