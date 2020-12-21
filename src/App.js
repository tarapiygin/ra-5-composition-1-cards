import './css/bootstrap.css';
import Card from './components/Card/Card';

function App() {
  return (
    <>
      <Card title='Заголовок карточки 1' description='Описание карточки 1' />
      <Card title='Заголовок карточки 2' description='Описание карточки 2' image={({
        src: 'https://image.freepik.com/free-vector/merry-christmas-calligraphy-with-baubles_1262-7024.jpg',
        alt: 'merry christmas'
      })}/>
    </>
  );
}

export default App;
