import './styles.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/images/logo.png';
import instaLogo from '../../assets/images/insta-logo.png';
import faceLogo from '../../assets/images/facebook-logo.png';
import linkLogo from '../../assets/images/linkedin-logo.png';

export default function Footer() {
    return(
        <footer className='footer-container'>
            <div className='logo-leadster'>
                <Image src={logo} />
                <p>Transformando cisitantes em clientes.</p>
            </div>
            <div className='footer-links'> 
                <div className='links-principais'>
                    <p>Links Principais</p>
                    <Link href={'#'}>Home</Link>
                    <Link href={'#'}>Ferramenta</Link>
                    <Link href={'#'}>Preços</Link>
                    <Link href={'#'}>Contato</Link>
                </div>
                <div className='cases'>
                    <p>Cases</p>
                    <Link href={'#'}>Geração de Leads B2B</Link>
                    <Link href={'#'}>Geração de Leads em Software</Link>
                    <Link href={'#'}>Geração de Leads em Imobiliaria</Link>
                    <Link href={'#'}>Cases de Sucesso</Link>
                </div>
                <div className='materiais'>
                    <p>Materiais</p>
                    <Link href={'#'}>Blog</Link>
                    <Link href={'#'}>Parceria com Agências</Link>
                    <Link href={'#'}>Guia Definitivo do Marketing</Link>
                    <Link href={'#'}>Matériais Gratuitos</Link>
                </div>
                <div className='social'>
                    <p>Siga a Leadster</p>
                    <div className='social-logo-container'>
                        <Link href={'#'}><Image className='social-logo' src={linkLogo} /></Link>
                        <Link href={'#'}><Image className='social-logo' src={faceLogo} /></Link>
                        <Link href={'#'}><Image className='social-logo' src={instaLogo} /></Link>
                    </div>
                    <p className='contact'><strong>Email:</strong> contato@leadster.com.br </p>
                    <p className='contact'><strong>Telefone para contat:</strong> (42) 98828-9851</p>
                </div>
            </div>
            <hr className='end-footer-divisor'></hr>
            <div className='address'> 
                <p className='copyrigth-text'>Copyright @ 2015 - 2022 Todos os direitos reservados | Leadster</p>
                <p className='street-text'>Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de Uso</p>
            </div>
        </footer>
    );
};
