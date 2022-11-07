import './App.css'


function App() {

  const handleClick = async () => {

    // const welcom = await fetch('http://localhost:8080/balance').then(res => res.json())
    const post = await fetch('http://localhost:8080/post', {
      method: 'POST',
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify({
        post: 2000,
      })
    }).then(res => res.json())

    const withdraw = await fetch('http://localhost:8080/withdraw', {
      method: 'POST',
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify({
        withdrawMoney: 2000,
      })
    }).then(res => res.json())



    console.log(withdraw)
  }




  const handleSubmit = (e) => {
    e.preventDefaults()


    console.log(e.target)
  }

  return <div className="App">
    <h1>Your Bank Account</h1>
    <button onClick={ handleClick }>
      click me
    </button>
    <form onSubmit={ handleSubmit }>
      <label>
        Post
        <input type='radio' value='Post' />
      </label>
      <label>
        withdraw
        <input type='radio' value='withdraw' />
      </label><br /><br />
      <label>Enter how much you want to post/withdraw</label>
      <input type='number' name='value' />
      <button type='submit'>Submit</button>
    </form>
    <div className='history'>


    </div>

  </div>
}

export default App
