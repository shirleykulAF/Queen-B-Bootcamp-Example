import React, { useState, useEffect } from 'react';
import Card from './Card';
import './Feed.css'; 


function Feed() {
    const [items, setItems] = useState([]); // State to store the list of items
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchItems(); // Fetch items when the component mounts
    }, []);

    const fetchItems = async () => {
        try {
            const response = await fetch('https://api.example.com/items'); // Fetch data from an API
            const data = await response.json();
            setItems(data); // Store the fetched data in state
        } catch (error) {
            setError('Failed to fetch items');
            console.error('Failed to fetch items:', error);
        }
        setLoading(false);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="feed-container">
            {items.map(item => (
                <Card key={item.id} {...item} /> // Render a Card for each item
            ))}
        </div>
    );
}

export default Feed;

