import styles from './searchBar.module.scss'

const SearchBar = ({...resc}) => {
  return (
    <div className={styles.coin_serach}>
        <input type="text"  className={styles.coin_input} {...resc}/>
    </div>
    
  )
}

export default SearchBar