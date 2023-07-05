'use client'

import Thumbnail from '../Thumbnail';
import { useState } from 'react';
import './styles.css';

export default function Section2() {

    const [ fakeData, setFakeData] = useState(['item1', 'item2', 'item3']);

    function getFakeData() {
       const fakeDataFromDB = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9'];
       setTimeout(() =>{
        setFakeData(fakeDataFromDB)
       }, 1000)    
    }
    
    
    return(
        <section className='section2'>
            <div className='btns-container'>
                <div className='generic-btns'>
                    <button onClick={getFakeData} className='btn1'>Agências</button>
                    <button onClick={getFakeData} className='btn2'>Chatbot</button>
                    <button onClick={getFakeData} className='btn3'>Marketing Digital</button>
                    <button onClick={getFakeData} className='btn4'>Geração de Leads</button>
                    <button onClick={getFakeData} className='btn5'>Mídia Paga</button>
                </div>
                <div className='filter-btn'>
                  Ordenar por: <button className='btn6'>Data da publicação </button>
                </div>
            </div>
            <hr className='breakline-sec2'></hr>
            <div className='thumbnails'>
                {fakeData.map(item =>{
                    return(
                        <Thumbnail />
                    )
                })}
            </div>
            <hr className='breakline-sec2'></hr>
        </section>
    );
};