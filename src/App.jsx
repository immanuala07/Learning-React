import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const showModalHandler = () => {
    console.log("In showModalHandler()");
    setModalIsVisible(true);
  };

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };

  console.log("App.js : ",modalIsVisible);
  
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
