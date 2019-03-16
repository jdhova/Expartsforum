import axios from 'axios'



const saveTokenToHead = token => {
    token? axios.defaults.headers.common['Authorizatoion'] = token :delete axios.defaults.headers.common['Authorizatoion']
}

export default saveTokenToHead;