import React, {useState} from 'react';

//não funciona usar state 
// hooks, normalmente podem ser identificados quando tem use na frente de algo. Ex: useState;

state = {
  repositories: [],

}

export default function App(){
  const [repositories, setRepositories ] = useState([]);
  return <h1>Hello World!</h1>
}

