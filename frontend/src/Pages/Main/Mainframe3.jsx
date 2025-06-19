import React, { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from 'dompurify';  // Import DOMPurify

const Mainframe3 = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [todayCard, setTodayCard] = useState(null);
  

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/cards`);

        const allCards = res?.data || [];
        setCards(allCards); // store full list

        const startDate = new Date("2025-05-09"); // update to your series start date
        const today = new Date();

        // Calculate days since start
        const todayMidnight = new Date(new Date().setHours(0, 0, 0, 0));
        const startMidnight = new Date(startDate.setHours(0, 0, 0, 0));
        const diffInMs = todayMidnight - startMidnight;
        
        const daysSinceStart = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

        if (daysSinceStart >= 0 && allCards.length > 0) {
          const cardIndex = daysSinceStart % allCards.length;
          const selectedCard = allCards[cardIndex];
          setTodayCard(selectedCard);
        } else {
          setTodayCard(null); // before start date or no cards
        }
      } catch (error) {
        console.error("Error fetching cards:", error);
        setTodayCard(null);
        
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) return <div>Loading data...</div>;
  if (!todayCard) return <div>No card available for today.</div>;

  // Sanitize the content text before using dangerouslySetInnerHTML
  const sanitizedContent = DOMPurify.sanitize(todayCard.content_text);

  return (
    <div className="card" style={{display:"flex", flexDirection:"row", gap:"1rem"}}>
      <div style={{float:"left", width:"50rem"}}>
        <h3>{todayCard.card_title}</h3>
        {new Date().toDateString()}
        <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} style={{width: "auto"}} />
        <button style={{backgroundColor:"brown"}}>Read More</button>
      </div>
    
      <img className="image" style={{width:"25rem", height:"20rem", marginLeft:"auto"}}
        src={todayCard.photo_url}
        alt={todayCard.card_title}
      />
    </div>
  );
};

export default Mainframe3;
