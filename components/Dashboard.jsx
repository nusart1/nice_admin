import './Dashboard.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState, useMemo, useEffect } from 'react';

import pngone from'./assets/image(1).png';
import pngtwo from'./assets/image(2).png';
import pngthree from'./assets/image(3).png';
import pngfour from'./assets/image(4).png';

import product_1 from'./assets/products/product-1.jpg';
import product_2 from'./assets/products/product-2.jpg';
import product_3 from'./assets/products/product-3.jpg';
import product_4 from'./assets/products/product-4.jpg';
import product_5 from'./assets/products/product-5.jpg';

import news_1 from'./assets/news/news-1.jpg';
import news_2 from'./assets/news/news-2.jpg';
import news_3 from'./assets/news/news-3.jpg';
import news_4 from'./assets/news/news-4.jpg';
import news_5 from'./assets/news/news-5.jpg';

const Dashboard = () => {

    const Selling = [
        {
            Preview: product_1,
            Product: "Ut inventore ipsa voluptas nulla",
            Price: "$64",
            Sold: "124",
            Revenue: "$5,828",
        },
        {
            Preview: product_2,
            Product: "Exercitationem similique doloremque",
            Price: "$46",
            Sold: "98",
            Revenue: "$4,508",
        },
        {
            Preview: product_3,
            Product: "Doloribus nisi exercitationem",
            Price: "$59",
            Sold: "74",
            Revenue: "$4,366",
        },
        {
            Preview: product_4,
            Product: "Officiis quaerat sint rerum error",
            Price: "$32",
            Sold: "63",
            Revenue: "$2,016",
        },
        {
            Preview: product_5,
            Product: "Sit unde debitis delectus repellendus",
            Price: "$79",
            Sold: "41",
            Revenue: "$3,239",
        },
    ];

    const recentSalesData = [
        { id: 1, customer: "Ali Valiyev", product: "Product A", price: "$25", status: "Paid" },
        { id: 2, customer: "Sami Akbar", product: "Product B", price: "$40", status: "Pending" },
        { id: 3, customer: "Jasur Aliyev", product: "Product C", price: "$18", status: "Paid" },
        { id: 4, customer: "Gulnoza Karimova", product: "Product D", price: "$32", status: "Refunded" },
        { id: 5, customer: "Temur Rahimov", product: "Product E", price: "$15", status: "Pending" },
    ];
    
   const [searchTerm, setSearchTerm] = useState('');
    const [entriesPerPage, setEntriesPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [dropdownOpen, setDropdownOpen] = useState(false); // 🆕 Qo‘shildi


    // Filter data
    const filteredSales = useMemo(() => {
        return recentSalesData.filter(item =>
            Object.values(item).some(val =>
                String(val).toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm]);

    // Paginate
    const totalPages = useMemo(() => {
        return Math.ceil(filteredSales.length / entriesPerPage);
    }, [filteredSales, entriesPerPage]);

    const paginatedSales = useMemo(() => {
        const start = (currentPage - 1) * entriesPerPage;
        const end = start + entriesPerPage;
        return filteredSales.slice(start, end);
    }, [filteredSales, currentPage, entriesPerPage]);

    useEffect(() => {
        setCurrentPage(1); // Reset page when search or entries change
    }, [searchTerm, entriesPerPage]);

  return (
    <div className='Dashboard'>
        <div className='dash'>
            <h1>Dashboard</h1>
            <span>Home / <strong>Dashboard</strong></span>
        </div>
        <div className='dashContent'>
            <div className='leftCont'>
                <div className='increase'>
                    <div>
                        <div className='incheader'>
                            <h2>
                                <strong>Sales </strong>
                                <span>|Today</span>
                            </h2>
                            <i class="bi bi-three-dots"></i>
                        </div>
                        <div className='incbi'>
                            <div className='bicart'>{/** orqasi havorangcha-oq */}
                                <i class="bi bi-cart2"></i>{/** ko'k */}
                            </div>
                            <div>
                                <h2>145</h2>
                                <span><strong className='otf'>12%</strong> increase</span>{/** strong yashil */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='incheader'>
                            <h2>
                                <strong>Revenue </strong>
                                <span>| This Month</span>
                            </h2>
                            <i class="bi bi-three-dots"></i>
                        </div>
                        <div className='incbi'>
                            <div className='curdol'>{/** orqasi past yashil tusli oq rang */}
                                <i class="bi bi-currency-dollar"></i>{/** yashil */}
                            </div>
                            <div>
                                <h2>$3,264</h2>
                                <span><strong className='egf'>8% </strong> increase</span>{/** strong yashil */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='incheader'>
                            <h2>
                                <strong>Customers </strong>
                                <span>| This Year</span>
                            </h2>
                            <i class="bi bi-three-dots"></i>
                        </div>
                        <div className='incbi'>
                            <div className='peop'>{/** orqasi pushticha-oq */}
                                <i class="bi bi-people"></i>{/** olovrang */}
                            </div>
                            <div>
                                <h2>1244</h2>
                                <span><strong className='bif'>12%</strong> increase</span>{/** strong qizil */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='reports'>
                    <div className='dx'>
                        <h2><strong>Reports </strong>/Today</h2>

                        <i class="bi bi-three-dots"></i>
                    </div>
                    <div>
                        <img src={pngone} alt="" />
                    </div>
                </div>
                <div className='recent'>
                    <div className='dx'>
                        <h2><strong>Recent Sales </strong>|Today</h2>
                        <i className="bi bi-three-dots"></i>
                    </div>
                    <div>
                        <div className='dthd'>
                            <div className='dthd-right'>
                                <div className='mdl'>
                                    <h2 onClick={() => setDropdownOpen(prev => !prev)}>{entriesPerPage}</h2>
                                    <div className='chvrn' onClick={() => setDropdownOpen(prev => !prev)}>
                                        <i className="bi bi-chevron-up"></i>
                                        <i className="bi bi-chevron-down"></i>
                                    </div>
                                    {dropdownOpen && (
                                        <ul>
                                            {['5', '10', '15', 'All'].map((val) => (
                                                <li key={val} onClick={() => {
                                                    setEntriesPerPage(val === 'All' ? filteredSales.length : parseInt(val));
                                                    setDropdownOpen(false);
                                                }}>
                                                    {val}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <p>entries per page</p>
                            </div>
                            <div className='dthd-left'>
                                <input
                                    placeholder='Search'
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <i className="bi bi-x" onClick={() => setSearchTerm('')}></i>
                            </div>
                        </div>

                        <div className='datas'>
                            <div className="dknown">
                                <div><strong>ID</strong></div>
                                <div><strong>Customer</strong></div>
                                <div><strong>Product</strong></div>
                                <div><strong>Price</strong></div>
                                <div><strong>Status</strong></div>
                            </div>
                            {paginatedSales.map((item, index) => (
                                <div key={index} className='datatable-row'>
                                    <div>{item.id}</div>
                                    <div>{item.customer}</div>
                                    <div>{item.product}</div>
                                    <div>{item.price}</div>
                                    <div>{item.status}</div>
                                </div>
                            ))}
                        </div>

                        <div className='shwng'>
                            <h3>
                                Showing {(currentPage - 1) * entriesPerPage + 1} to {Math.min(currentPage * entriesPerPage, filteredSales.length)} of {filteredSales.length} entries
                            </h3>

                            <div className='pagination'>
                                <i
                                    className="bi bi-chevron-left"
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                ></i>
                                <ul>
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                        <li
                                            key={page}
                                            onClick={() => setCurrentPage(page)}
                                            className={currentPage === page ? 'active' : ''}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {page}
                                        </li>
                                    ))}
                                </ul>
                                <i
                                    className="bi bi-chevron-right"
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                ></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='topSelling'>
                    <div className='tdy'>
                        <h2><strong>Top Selling </strong>|Today</h2>

                        <i class="bi bi-three-dots"></i>
                    </div>
                    <div className='pam'>{/** map va array lardan foydalanib yasabber*/}
                        <ul>
                            <li><strong>Preview</strong></li>
                            <li><strong>Product</strong></li>
                            <li><strong>Price</strong></li>
                            <li><strong>Sold</strong></li>
                            <li><strong>Revenue</strong></li>
                        </ul>
                        <div>
                            {Selling.map((item, index) => (
                                <ul key={index}>
                                <li><img src={item.Preview} alt={`product-${index}`} style={{ width: '50px' }} /></li>
                                <li>{item.Product}</li>
                                <li>{item.Price}</li>
                                <li>{item.Sold}</li>
                                <li>{item.Revenue}</li>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='rightCont'>
                <div className='recentAct'>
                    <div className='dx'>
                        <h2><strong>Recent Activity </strong>|Today</h2>

                        <i class="bi bi-three-dots"></i>
                    </div>
                    <div className='gmi'>
                        <img src={pngthree} alt="" />
                    </div>
                </div>
                <div className='budget'>
                    <div>
                        <h2><strong>Budget Report </strong>| This Month</h2>

                        <i class="bi bi-three-dots"></i>
                    </div>
                    <div className='gmi'>
                        <img src={pngtwo} alt="" />
                    </div>
                </div>
                <div className='webTraf'>
                    <div>
                        <h2><strong>Website Traffic </strong>| Today</h2>

                        <i class="bi bi-three-dots"></i>
                    </div>
                    <div className='gmi'>
                        <img src={pngfour} alt="" />
                    </div>
                </div>
                <div className='newsUp'>
                    <div className='nwup'>
                        <h2><strong>News & Updates </strong>| Today</h2>

                        <i class="bi bi-three-dots"></i>
                    </div>
                    <div className='dfl'>
                        <div>{/**display flex lar */}
                            <div>
                                <img src={news_1} alt="" />
                            </div>
                            <div>
                                <h2>Nihil blanditiis at in nihil autem</h2>
                                <p>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={news_2} alt="" />
                            </div>
                            <div>
                                <h2>Quidem autem et impedit</h2>
                                <p>Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={news_3} alt="" />
                            </div>
                            <div>
                                <h2>Id quia et et ut maxime similique occaecati ut</h2>
                                <p>Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam...</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={news_4} alt="" />
                            </div>
                            <div>
                                <h2>Laborum corporis quo dara net para</h2>
                                <p>Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder...</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={news_5} alt="" />
                            </div>
                            <div>
                                <h2>Et dolores corrupti quae illo quod dolor</h2>
                                <p>Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae dignissimos eius...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default Dashboard;




