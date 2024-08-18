import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import JordanMap from '../images/JordanMap.png';

const Circles = () => {
  const [circles, setCircles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCircles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/circles');
        setCircles(response.data);
      } catch (error) {
        setError('Failed to fetch circles data.');
      } finally {
        setLoading(false);
      }
    };

    fetchCircles();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const handleCardClick = (circle) => {
    navigate('/local-lists', { state: { circle } }); // Pass the circle to LocalLists
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {circles.map((circle) => (
            <div
              key={circle.circle_id}
              onClick={() => handleCardClick(circle)}
              className="cursor-pointer bg-[#FFFBF6] border-2 border-[#6E0B00] shadow-md rounded-lg p-6 flex flex-col items-center justify-center"
            >
              <img src={JordanMap} alt={`Map for ${circle.name}`} className="w-20 h-20 mb-4" />
              <h2 className="text-lg font-bold text-center text-gray-800">{circle.name}</h2>
              <p className="text-sm text-center text-gray-600">{circle.city}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Circles;
