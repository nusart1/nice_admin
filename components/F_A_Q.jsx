import React, { useState } from 'react';
import './F_A_Q.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const faqData = [
    {
        section: 'Laborum dolorem quam porro',
        items: [
            'Debitis adipisci eius?',
            'Omnis fugiat quis repellendus?',
            'Et occaecati preasentium aliquam modi incidut?',
            'Quo unde eaque vero dolor quis ipsam?',
            'Natus sunt quo atque mollitia accusamus?'
        ]
    },
    {
        section: 'Deserunt ut unde corporis',
        items: [
            'Comque voluptatem requsandea?',
            'Provident beatea eveniet placeat est aperiam repellat adipisci?',
            'Minus aliquam modi id reprehanderit nihil?',
            'Quaerat qui est iusto asperiores qui est reiciendis eos et?',
            'Laboriosam asperiores eum?'
        ]
    },
    {
        section: 'Dolore occaecati ducimus quam',
        items: [
            'Assumenda doloribus est fugiat sint incidunt animi totam nisi?',
            'Consequatur saepe explicabo odio atque nini?',
            'Volupdates vel est fugiat molestiae rem sit eos sint?',
            'Ab ipsa cum autem voluptas doloremque velit?',
            'Aliquam magni ducimus facilis numpuam dolorum harum eveniet iusto?'
        ]
    }
];

const answers = [
    "Ut quasi odit odio totam accusamus vero eius. Nostrum asperiores voluptatem eos nulla ab dolores est asperiores iure.",
    "In minus quia impedit est quas deserunt deserunt et. Nulla non quo dolores minima fugiat aut saepe aut inventore.",
    "Voluptates magni amet enim perspiciatis atque excepturi itaque est. Sit beatae animi incidunt eum repellat sequi ea saepe inventore.",
    "Numquam ut reiciendis aliquid. Quia veritatis quasi ipsam sed quo ut eligendi et non.",
    "Aut necessitatibus maxime quis dolor et. Nihil laboriosam molestiae qui molestias placeat corrupti non quo accusamus."
];

const F_A_Q = () => {
    const [activeIndex, setActiveIndex] = useState(null); // faqat bitta ochilgan bo'lishi uchun

    const toggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className='FAQ'>
            <div className='hpfaq'>
                <h2>Frequently Asked Questions</h2>
                <span>Home / Pages / <strong>Frequently Asked Questions</strong></span>
            </div>

            <div className='baqdes'>
                <div className='baqdes-left'>
                    <div className='card'>
                        <h2>Basic Questions</h2>
                        <ul>
                            <li>
                                <span>1. Nisi ut ut exercitationem voluptatem esse sunt rerum?</span>
                                <p>Saepe perspiciatis ea. Incidunt blanditiis enim mollitia qui voluptates...</p>
                            </li>
                            <li>
                                <span>2. Reiciendis dolores repudiandae?</span>
                                <p>Id ipsam non ut. Placeat doloremque deserunt quia tenetur...</p>
                            </li>
                            <li>
                                <span>3. Qui qui reprehenderit ut est illo numquam voluptatem?</span>
                                <p>Enim inventore in consequuntur ipsam voluptatem consequatur beatae...</p>
                            </li>
                        </ul>
                    </div>

                    {faqData.slice(0, 1).map((block, blockIdx) => (
                        <FAQBlock
                            key={blockIdx}
                            block={block}
                            startIndex={blockIdx * 5}
                            activeIndex={activeIndex}
                            toggle={toggle}
                        />
                    ))}
                </div>

                <div className='baqdes-right'>
                    {faqData.slice(1).map((block, blockIdx) => (
                        <FAQBlock
                            key={blockIdx + 1}
                            block={block}
                            startIndex={(blockIdx + 1) * 5}
                            activeIndex={activeIndex}
                            toggle={toggle}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const FAQBlock = ({ block, startIndex, activeIndex, toggle }) => (
    <div className='card_ocy'>
        <h2>{block.section}</h2>
        <ul>
            {block.items.map((question, idx) => {
                const index = startIndex + idx;
                const isOpen = activeIndex === index;
                return (
                    <li key={index}>
                        <div
                            className={`click_up ${isOpen ? 'open' : ''}`}
                            onClick={() => toggle(index)}
                            style={{ cursor: 'pointer', color: isOpen ? 'blue' : 'black' }}
                        >
                            <strong style={{ flexWrap: 'wrap' }}>{question}</strong>
                            <i
                                className='bi bi-chevron-down'
                                style={{
                                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease'
                                }}
                            ></i>
                        </div>
                        {isOpen && (
                            <div className='opny'>
                                <p>{answers[idx]}</p>
                            </div>
                        )}
                    </li>
                );
            })}
        </ul>
    </div>
);

export default F_A_Q;
