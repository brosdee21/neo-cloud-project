import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1>Lorem Ipsum</h1>
        <form>
            <div>
                <label htmlFor="">Name</label>
                <input type='text' placeholder='name' />
            </div>
            <div>
                <label htmlFor="">Email address</label>
                <input type='email' placeholder='name' />
            </div>
            <div>
                <label htmlFor="">Message</label>
                <textarea name="" id="" rows="4" cols="50"></textarea>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Contact