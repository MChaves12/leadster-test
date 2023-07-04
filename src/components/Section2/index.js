import Thumbnail from '../Thumbnail';
import './styles.css';

export default function Section2() {
    return(
        <section className='section2'>
            <div className='btns-container'>
                <div className='generic-btns'>
                    <button className='btn1'>Agências</button>
                    <button className='btn2'>Chatbot</button>
                    <button className='btn3'>Marketing Digital</button>
                    <button className='btn4'>Geração de Leads</button>
                    <button className='btn5'>Mídia Paga</button>
                </div>
                <div className='filter-btn'>
                  Ordenar por: <button className='btn6'>Data da publicação </button>
                </div>
            </div>
            <hr className='breakline-sec2'></hr>
            <div className='thumbnails'>
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
            </div>
            <hr className='breakline-sec2'></hr>
        </section>
    );
};