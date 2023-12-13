import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
    <>
    <Header/>
     <main className='p-6' style={{flex:'1'}}>
        <Outlet/>
     </main>
    <Footer/>
    </>
    );
}
export default MainLayout;