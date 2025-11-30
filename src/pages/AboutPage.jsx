import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Part1 } from '../pages/about/Part1.jsx';
import { Part2 } from '../pages/about/Part2.jsx';
import { Part3 } from '../pages/about/Part3.jsx';
import { Part4 } from '../pages/about/Part4.jsx';
import { Part5 } from '../pages/about/Part5.jsx';
import './headerr.css';

export function AboutPage() {
    return (
        <>
            <div className='headerr'><Header activePage={3} />
            </div>
            <Part1 />
            <Part2 />
            <Part3 />
            <Part4 />
            <Part5 />
            <Footer />
        </>
    );
}
