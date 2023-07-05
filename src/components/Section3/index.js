import './styles.css'
import Image from 'next/image';
import graficImg from '../../assets/images/comparativo_img_CTA.png'
import rating from '../../assets/images/rating.webp';
import seloRd from '../../assets/images/selo_RD.png';
import noCard from '../../assets/images/no-card-dark.webp';

export default function Section3() {
    return(
        <section className='section3-container'>
            <div>
                <Image className='grafic-img' src={graficImg} />
            </div>
            <div className='section3-text'>           
                <h3>Pronto para triplicar sua</h3>
                <h3><strong>Geração de Leads?</strong></h3>
                <p>Criação e ativação em<strong>4 minutos.</strong></p>
                <hr className='divisor'></hr>
                <div className='top10'> 
                    <button>VER DEMONSTRAÇÃO</button>
                    <Image className='seloRd' src={seloRd} />
                </div> 
                <div className='noCard-and-rating'>
                    <div className='noCard'>
                        <Image src={noCard} /> 
                        <p>Não é necessário cartão de crédito</p>
                    </div>   
                    <div className='rating'>
                        <Image src={rating} /> 
                        <p>4.9/5 média de satisfação</p>
                    </div>
                </div>
            </div>
        </section>
    );
};