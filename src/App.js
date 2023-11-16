import './App.css';
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from './mapContainers/appContainer';

function App({ counter, isLoading, addCounter, removeCounter, resetCounter, addCounterAsync, removeCounterAsync }) {

  return (
    <div className="w-full flex flex-col items-center bg-slate-500 h-screen">
      <header className="text-center py-4">
        <h1 className='text-4xl text-white m-0 font-semibold'>Redux</h1>
      </header>
      <main className='flex flex-col items-center h-full'>
        <div className='flex gap-4 items-center font-semibold text-white text-2xl'>
          <p>Counter:</p>
          <span>{counter}</span>
        </div>
        <div className='mt-4 grid grid-cols-2 gap-4'>
          <button onClick={() => addCounter(1)}
            className='rounded-md py-2 px-5 bg-gray-300	text-xl min-w-[100px] active:bg-gray-400'>Plus</button>
          <button onClick={() => removeCounter(1)}
            className='rounded-md py-2 px-5 bg-gray-300	text-xl min-w-[100px] active:bg-gray-400'>Minus</button>
          <button onClick={() => addCounterAsync(1)}
            className='rounded-md py-2 px-5 bg-gray-300	text-xl min-w-[100px] active:bg-gray-400'>PlusAsync</button>
          <button onClick={() => removeCounterAsync(1)}
            className='rounded-md py-2 px-5 bg-gray-300	text-xl min-w-[100px] active:bg-gray-400'>MinusAsync</button>
          <button onClick={resetCounter}
            className='rounded-md py-2 px-5 bg-gray-300	text-xl col-span-2 min-w-[100px] active:bg-gray-400'>Reset</button>
          <p className='text-lg text-white col-span-2 m-auto'>{isLoading === true && 'Sending...'}</p>
        </div>
      </main>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
