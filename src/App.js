import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className='App'>
      <Button title='Defualt' />
      <Button title='Defualt' variant='outline' color='primary' />
      <Button title='Defualt' variant='outline' color='danger' />
      <Button title='Defualt' variant='outline' color='secondry' />
      <Button title='Defualt' variant='text' color='primary' />
      <Button title='Defualt' variant='text' color='danger' />
      <Button title='Defualt' variant='text' color='secondry' />
      <Button title='Defualt' color='primary' />
      <Button title='Defualt' color='danger' size='sm' />
      <Button title='Defualt' color='secondry' size='lg' />
      <Button title='Defualt' color='primary' startIcon='local_grocery_store' />
      <Button title='Defualt' color='primary' endIcon='local_grocery_store' />
    </div>
  );
}

export default App;
