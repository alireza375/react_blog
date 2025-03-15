import Profile from '../../assets/images/profile.png';
const Header = () => {
    return (
        <header className='flex items-center justify-between p-4 mx-auto border-b-2 md:flex max-w-7xl '>
            <h1 className='text-4xl font-bold'>Knowledge Blog For Cafe</h1>
            <img src={Profile} alt="" />
        </header>
    );
};

export default Header;