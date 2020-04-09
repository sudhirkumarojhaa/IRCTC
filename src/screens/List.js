import React ,{useEffect,useState}from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ListItem from '../components/ListItem'
import { useLocation } from "react-router-dom";

export default function List() {
  const location = useLocation();
  const [local,setLocal]= useState({})
  useEffect(() => {
    setLocal({ from: location.state.from.toLowerCase(), to: location.state.to.toLowerCase()});
  }, [location.state.from, location.state.to]);

  return (
    <div>
      <Header />
      <ListItem dataFromParent={local} />
      <Footer />
    </div>
  )
}
