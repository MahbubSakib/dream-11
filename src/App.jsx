import { useEffect, useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import PlayerContainer from './components/playerContainer/PlayerContainer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [coin, setCoin] = useState(0)
  const [isActive, setisActive] = useState({
    active: true
  })
  const [selected, setSelected] = useState([])

  const handleRemove = (id) => {
    const updatedSelect = selected.filter(player => player.playerId !== id)
    setSelected(updatedSelect)
    toast('Player removed successfully.')
  }


  const handleSelected = (player) => {
    if (selected.length >= 6) {
      toast('Cannot add more than 6 players.');
    }
  
    const isSelected = selected.find(previousSelected => previousSelected.playerId === player.playerId);
    if (isSelected) {
      toast('Player already selected.');
      return;
    }
  
    const updatedCoin = coin - player.biddingPrice;
    if (updatedCoin < 0) {
      toast('Not enough money to buy.');
      return;
    } else {
      setCoin(updatedCoin);
    }
  
    setSelected([...selected, player]);
    toast('Player added successfully.');
  };
  
  
  

  const handleCoin = () => {
    const newCoin = coin + 500000;
    setCoin(newCoin);
    toast('Credit added.')
  }

  const handleActive = (status) => {
    if (status == 'active') {
      setisActive({
        active: true
      })
    } else {
      setisActive({
        active: false
      })
    }
  }

  return (
    <>
      <Header coin={coin}></Header>
      <Banner handleCoin={handleCoin}></Banner>
      <div style={{ position: 'relative' }}>
        <PlayerContainer 
          handleRemove={handleRemove} 
          selected={selected} 
          handleSelected={handleSelected} 
          isActive={isActive} 
          handleActive={handleActive} 
        />
        
        <div style={{
          position: 'absolute',
          top: '100%',
          left: '50%',
          transform: 'translate(-50%, -270%)',
          backgroundColor: 'rgba(250, 230, 250)',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
          borderRadius: '8px',
        }}>
          <Newsletter />
        </div>
        
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
}

export default App
