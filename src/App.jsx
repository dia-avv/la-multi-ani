import { useState } from 'react'
import './App.css'
import Cover from './components/Cover'
import Playlist from './components/Playlist'
import Collage from './components/Collage'
import ActualGift from './components/ActualGift'
import Message from './components/Message'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Cover />
    <Playlist />
    <Collage />
    <Message />
    <ActualGift />
    <Footer />
    </>
  )
}

export default App
