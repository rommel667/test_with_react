import React from 'react'
import Header from './components/Header'
import './app.scss'
import Headline from './components/Headline'
import Button from './components/Button'
import ListItem from './components/ListItem'
import { fetchPosts } from './redux/actions'
import {useDispatch, useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)

  const fetch = () => {
    dispatch(fetchPosts())
  }

  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Post" description="Click button to render post" />
        <Button buttonText={"Click"} emitEvent={fetch} />
        {posts.length > 0 && posts.map(post => {
          return (
            <ListItem key={post.id} title={post.title} description={post.body} />
          )
        })}
        
      </section>

    </div>
  );
}



export default App;
