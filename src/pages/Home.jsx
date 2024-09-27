// Home.jsx || Natalie Rekai || #301484514 || 26-Sep-24

const Home = () => {
  return (
    <div id='home' className='home-container page-outer'>
      <div className='page-inner'>
        <div className='left-container'>
            <h1 className='ital'>black-<br/>smith&nbsp;/</h1>
            <h1 className=''>progr-<br/>ammer</h1>
        </div>
        <div className='right-container'>
          <div className='text-box'>
            <h1 className='small'>Idolize nothing,</h1>
            <h1>touch everything.</h1>
            <a href='/about'><div className='button'>More about my mission...</div></a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
