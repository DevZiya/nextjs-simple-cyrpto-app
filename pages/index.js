import Head from 'next/head'
import CoinList from '../component/CoinList'
import SearchBar from '../component/SearchBar/SearchBar'
import Layout from '../component/Layout'
import { useState } from 'react'

export default function Home({filterCoins}) {
  const [search,setSearch]=useState("")

  const handleChange = e =>{
    e.preventDefault()
    setSearch(e.target.value)
  }

  const allCoins = filterCoins.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <Layout>
      <div className='coin_app'>
      <SearchBar type='text' placeholder="Search" onChange={handleChange}/>
     <CoinList filterCoins={allCoins}/>
      </div>

    </Layout>
  )
}

export const getServerSideProps = async () =>{
  const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
  const filterCoins = await res.json()

  return{props:{filterCoins}}
}
