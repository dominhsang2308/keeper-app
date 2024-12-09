import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Note from './components/Note/Note'
import note from './note'
import Login from './components/Login/Login';

var isLoggedIn = false
var unRegister = false

function conditionRender(){
  if(isLoggedIn){
    return(
      <div>
      <Header />
      {note.map((noteItem) => {
        return (
          <Note
            key={noteItem.key}
            title={noteItem.title}
            content={noteItem.content}
          />

        )
      })}
      <Footer />
    </div>
    )
  }
  else{
    return <Login 
    unRegister = {unRegister}
    />
  }
}

function App() {
  return (
    <div className=''>{conditionRender()}</div>
  )
}

export default App;
