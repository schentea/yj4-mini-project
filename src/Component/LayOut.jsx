import Footer from './Footer';
import Header from './Header';

export default function LayOut({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
