import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="bg-stone-50 w-full min-h-screen flex flex-col justify-center items-center">
      <LoginForm isExtraMethods={true} />
    </div>
  );
}

export default App;
