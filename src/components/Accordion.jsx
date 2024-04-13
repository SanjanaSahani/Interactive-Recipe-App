import React, { useState } from 'react';

function Accordion() {
    const [openIndexes, setOpenIndexes] = useState([0]);

    const questions = [
        {
            question: 'Aenean Hendrerit Varius Massa Quis Laoreet.',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lectus eu felis semper finibus ac eget ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate id justo quis facilisis.'
        },
        {
            question: 'Hendrerit Varius Massa Quis Laoreet.',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lectus eu felis semper finibus ac eget ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate id justo quis facilisis.'
        },
        {
            question: 'Aenean Hendrerit Varius Massa Quis Laoreet.',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lectus eu felis semper finibus ac eget ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate id justo quis facilisis.'
        }
    ];

    const toggleAccordion = (index) => {
        const currentIndex = openIndexes.indexOf(index);
        const newIndexes = [...openIndexes];

        if (currentIndex === -1) {
            newIndexes.push(index);
        } else {
            newIndexes.splice(currentIndex, 1);
        }

        setOpenIndexes(newIndexes);
    };

    return (
        <div className="max-w-3xl ">
            {questions.map((item, index) => (
                <div key={index} className="border-b border-gray-200 ">
                    <button
                        onClick={() => toggleAccordion(index)}
                        className={`flex justify-between w-full p-4 focus:outline-none bg-slate-100 text-slate-400 border-l-4 border-green-700 mb-4 ${openIndexes.includes(index) ? 'bg-green-700 text-white' : ''}`}
                    >
                        <span className="text-lg font-semibold">{item.question}</span>
                        <span className="ml-6">{openIndexes.includes(index) ? '-' : '+'}</span>
                    </button>
                    {openIndexes.includes(index) && (
                        <div className="p-4 text-slate-400">
                            <p>{item.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Accordion;

