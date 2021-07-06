import MainPage from "./components/MainPage";

import {useState} from 'react'

import LoginModal from "./components/LoginModal";

function App() {

    const [isBackground, setBackground] = useState(true);
    const [showLoginModal, setshowLoginModal] = useState(true);
    const [isSuperviser, setSuperviser] = useState(false);

    return (
    <>

        {showLoginModal && <LoginModal onModalClose={setshowLoginModal} showBackground={isBackground}
                                        setSuperviser={setSuperviser}/>}

        <MainPage onModalClose={setshowLoginModal} setBackground={setBackground}/>
    </>
    );
}

export default App;
