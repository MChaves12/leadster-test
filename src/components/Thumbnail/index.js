import './styles.css';
import Image from 'next/image';
import Thumb from '../../assets/images/thumbnail.png';

export default function Thumbnail() {
    return(
        <div className='thumbnail'>
            <Image alt='marketing em 2014' className='thumb-img' src={Thumb} />
            <p className='thumb-text'>Como aumentar sua Geração de Leads feat Traktor </p>
        </div>
    );
};