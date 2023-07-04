import Image from 'next/image';
import './styles.css'
import logo from '../../assets/images/logo.png'

export default function Nav () {
    return(
        <div className='navbar'>
            <Image className='leadster-logo' src={logo}/>
        </div>
    );
};