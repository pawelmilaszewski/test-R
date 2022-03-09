import './App.css';
import React, {useCallback, useState, useEffect} from 'react';
import {addNode, increment, incrementNodesCounter} from './redux/reducer';
import {Node} from './Node';
import {useDispatch, useSelector} from 'react-redux';

let nodesCounter = 0;

const App = () => {
  // const dispatch = useDispatch();
  // const nodesCounter = useSelector((state) => state.nodesCounter);

  const a = new Node(nodesCounter);
  nodesCounter++;
  // dispatch(incrementNodesCounter());
  const b = new Node(nodesCounter);
  nodesCounter++;
  // dispatch(incrementNodesCounter());
  const c = new Node(nodesCounter);
  nodesCounter++;
  // dispatch(incrementNodesCounter());
  const d = new Node(nodesCounter);
  nodesCounter++;
  // dispatch(incrementNodesCounter());
  const e = new Node(nodesCounter);

  a.children.push(b);
  a.children.push(c);
  b.children.push(d);
  b.children.push(e);
  
  useEffect(() => {
    console.log('counter: ', nodesCounter);
  }, [nodesCounter]);
  
  const addNode = (item) => {
    nodesCounter++;
    item.addNode(nodesCounter);
    console.log('item: ', item);
  };
  
  const increment = (item) => {
    item.increment();
    console.log('item: ', item);
  };
  
  
  const renderNodes = (values) => {
    return values.map((item) => {
      return (
        <div style={{marginLeft: 60}} key={item.id}>
          <div style={{flexDirection: 'row', padding: 8, alignItems: 'center'}}>
            <div>
              <p style={{fontSize: 20}}>ID: {item.id}</p>
              <p style={{fontSize: 16}}>Counter: {item.counter}</p>
            </div>
            <button title={'Add node'} onClick={() => addNode(item)}/>
            <button title={'Increment'} onClick={() => increment(item)}/>
          </div>
          {renderNodes(item.children)}
        </div>
      )
    })
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
        {renderNodes(a.children)}
      </header>
    </div>
  );
}

export default App;
