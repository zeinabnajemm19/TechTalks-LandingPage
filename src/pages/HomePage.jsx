import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Part1Page } from './home/Part1Page';
import { Part2Page } from './home/Part2Page';
import { Part3Page } from './home/Part3Page';
import { Part4Page } from './home/Part4Page';
import { Part5Page } from './home/Part5Page';
import { Part6Page } from './home/Part6Page';
import { Part7Page } from './home/Part7Page';

import { Course } from './course/Course'
import './headerr.css';

export function HomePage() {
    return (
        <>
            <div className='headerr'><Header activePage={1} />
            </div>
            <Part1Page />
            <Part2Page />
            <Part3Page />
            <Part4Page />
            <Part5Page />
            <Part6Page />
            <Part7Page />
            <Course />
            <Footer />
        </>
    );
}
