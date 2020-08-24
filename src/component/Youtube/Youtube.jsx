import React from 'react';

const Youtube = (props) => {
  return (
    <div className="w-1/5 h-15 bg-trasparent shadow m-3 rounded-lg">
      <p>
        <img
          src="https://images.unsplash.com/photo-1577911945168-b4a2d919fc73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt=""
        />
      </p>
      <p className="text-lg m-2 text-purple-600 font-bold">{props.title}</p>
      <p className="text-gray-400 m-2">{props.body}</p>
      <button className="px-4 py-2 my-2 ml-2 bg-purple-500 text-white rounded-lg hover:bg-black ">Detail</button>
        
    </div>
  );
}

Youtube.defaultProps = {
  title: 'Un title',
  body: 'No Body'
}

export default Youtube;