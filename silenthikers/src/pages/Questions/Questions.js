import React from 'react';
import '../Questions/Questions.css';

const Questions = () => {
  return (
    <div>
      <h1 className="questions-header">Frequently Asked Questions</h1>
      <div className="questions-container">
        <div className="questions-answer">
          <h1 className='questions-h1'>What is silent hikers, and why is it special?</h1>
          <h2 className='questions-h2'>Silent hiking is a practice where hikers choose to explore nature in a quiet and meditative manner, minimizing conversation and noise. It's special because it allows you to immerse yourself fully in the natural world, experiencing a deeper connection with the environment and a sense of tranquility that's hard to find in our busy lives.</h2>
        </div>
        <div className="questions-answer">
          <h1 className='questions-h1'>How can I join the Silent Hikers Community and get involved?</h1>
          <h2 className='questions-h2'>Joining our community is easy! You can start by visiting our website and Contacting us. Once you're a member, you'll gain access to our events, forums, and resources. We encourage everyone to participate in our hikes and discussions, and your input is always welcome.  We are planning to expand our community by creating a membership form where you can sign up for it.</h2>
        </div>
        <div className="questions-answer">
          <h1 className='questions-h1'>Are there any specific guidelines or etiquette for silent hikes?</h1>
          <h2 className='questions-h2'>Yes, we have some basic guidelines to ensure a smooth hiking experience. Participants are encouraged to maintain silence during hikes to respect the peaceful atmosphere. Leave no trace by following environmental conservation practices, and always be respectful of fellow hikers and the natural surroundings.</h2>
        </div>
        <div className="questions-answer">
          <h1 className='questions-h1'>Do I need to be an experienced hiker to participate in your community events?</h1>
          <h2 className='questions-h2'>Not at all! Our community welcomes hikers of all levels, from beginners to experts. We organize hikes of varying difficulty levels, and we're here to support your growth as a hiker. If you're new to silent hiking or nature exploration, you'll find a friendly and inclusive environment to start your journey.</h2>
        </div>
      </div>
    </div>
  );
};

export default Questions;
