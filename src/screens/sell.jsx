import React, { useState } from 'react';
import {ImagePlus} from 'lucide-react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import '../styles/Sell.css'


function sell() {
    const [chosed, setChosed] = useState([]);
    const materials = ['Wood', 'Metal', 'Plastic', 'Glass']
    return (
        <div className='layout' >
            <Navbar />
            <h2 style={{ padding: '8px 16px', }} >Sell a product</h2>

            <form className='' action="">
                <div className='flex ' >
                    <div className='flexCol'>
                        <div>
                            <label htmlFor="">Name</label>
                            <input className='sell-input' placeholder='name' type="text" />
                        </div>
                        <div className='flex' style={{ gap: '1rem' }}>
                            <div>
                                <label htmlFor="">Height(cm)</label>
                                <input className='sell-input' type="number" min={0} />
                            </div>
                            <div>
                                <label htmlFor="">Width(cm)</label>
                                <input className='sell-input' type="number" min={0} />
                            </div>
                                                    <div>
                            <label htmlFor="">Quantity</label>
                            <input className='sell-input' type="number" min={1} />
                        </div>
                        </div>

                        <div>
                            <label htmlFor="">Price</label>
                            <input className='sell-input' placeholder='$' type="text" />
                        </div>
                        <div className='flexBetween' style={{ margin: '2rem 0',}}>
                        <button className='button-costum flex' style={{gap : '1rem' ,padding :''}}><ImagePlus size={24} color='white' /> Upload Photo</button>
                        <button className='button-costum'>Preview</button>
                        </div>
                    </div>
                    <div className='flexCol'>
                        <div>
                            <label htmlFor="">Categories</label>
                            <select className='sell-select' name="" id="">
                                <option value=""> Armchairs</option>
                                <option value=""> Tables</option>
                                <option value=""> Beds</option>
                                <option value=""> Dressing Tables</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">MaterielS</label>
                            <div style={{ margin: '0.5rem 0' }}>
                                {materials.map((m) => (<span onClick={() => {
                                    if (!chosed.includes(m)) return setChosed([...chosed, m])
                                    setChosed(chosed.filter(c => c !== m))
                                }}
                                    className={`material-span ${chosed.includes(m) && 'chosed'}`} key={m}>{m}</span>))}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Color</label>
                            <input className='sell-input' placeholder='Green, White, Black' type="text" />
                        </div>
                        
                    </div>

                </div>

            </form >
            <Footer></Footer>
        </div >
    )
} export default sell;