import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if the same item is clicked
    } else {
      setActiveIndex(index); // Open the clicked item
    }
  };

  const faqData = [
    {
      title: 'Curious about how to build your own UX strategy? Here are five simple steps.',
      content:
        'Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, libero ex hendrerit nunc, ac sagittis eros metus ut diam. Donec a nibh in libero maximus vehicula.',
    },
    {
      title: 'Where Could a Career in UX Take You? Agency vs. In-House vs. Freelance?',
      content:
        'Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, libero ex hendrerit nunc, ac sagittis eros metus ut diam. Donec a nibh in libero maximus vehicula.',
    },
    {
      title: 'What Is a Problem Statement in UX? (And How To Write One?)',
      content:
        'Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, libero ex hendrerit nunc, ac sagittis eros metus ut diam. Donec a nibh in libero maximus vehicula.',
    },
    {
      title: 'There are several techniques UX designers employ to arrive at a succinct?',
      content:
        'Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, libero ex hendrerit nunc, ac sagittis eros metus ut diam. Donec a nibh in libero maximus vehicula.',
    },
    {
      title: 'What are the obstacles users are facing? What are they trying to do?',
      content:
        'Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, libero ex hendrerit nunc, ac sagittis eros metus ut diam. Donec a nibh in libero maximus vehicula.',
    },
  ];

  return (
    <section className="section faq" aria-label="frequently asked questions">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="h2 section-title">Discover Frequently Asked Questions?</h2>
          <a href="#" className="btn btn-primary">
            Work Together
          </a>
        </div>

        <ul className="grid-list">
          {faqData.map((item, index) => (
            <li key={index}>
              <div className="faq-card">
                <button
                  className="card-action"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="h3 card-title">{`${index + 1}. ${item.title}`}</h3>
                  <div className="action-icon">
                    <ion-icon
                      name={activeIndex === index ? 'remove-outline' : 'add-outline'}
                      aria-hidden="true"
                      className={activeIndex === index ? 'close' : 'open'}
                    ></ion-icon>
                  </div>
                </button>
                {activeIndex === index && (
                  <div className="card-content">
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
