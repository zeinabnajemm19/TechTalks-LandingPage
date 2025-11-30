import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Part1Champions } from '../pages/champions/Part1Champions';
import { Part2Champions } from '../pages/champions/Part2Champions';
import { Part3Champions } from '../pages/champions/Part3Champions'
import './headerr.css';


export function ChampionsPage() {
    return (
        <>
            <div className='headerr'><Header activePage={4} />
            </div>
            <Part1Champions />
            <Part2Champions />
            <Part3Champions />
            <Footer />
        </>
    );
}
