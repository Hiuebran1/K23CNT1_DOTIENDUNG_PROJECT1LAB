import React, { Component } from 'react';
import dtd7RenderCondition from './components/dtd7RenderCondition';
import dtd7RenderList from './components/dtd7RenderList';
import dtd7RenderListStudent from './components/dtd7RenderListStudent';

class dtd7App extends Component {
  render() {
    return (
      <div className='container border mt-3'>
          <h1>Trịnh Văn Chung - Lesson07 - Render condition - Render List Key</h1>
          <dtd7RenderCondition />

          <dtd7RenderList />

          <dtd7RenderListStudent />
      </div>
    );
  }
}

export default dtd7App;