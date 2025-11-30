import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Course } from './course/Course';
import './headerr.css';

export function CoursesPage() {
    return (
        <>
            <div className='headerr'><Header activePage={2} />
            </div>
            <Course />
            <Footer />
        </>
    );
}
