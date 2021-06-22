import axios from 'axios';

const config = {
    baseUrl: 'https://api.hnpwa.com/v0'
}
function fetchList(pageName) {
    return axios.get(`${config.baseUrl}/${pageName}/1.json`)
}

function fetchUserInfo(id){
    return axios.get(`${config.baseUrl}/user/${id}.json`)
}

function fetchCommentItem(data){
    return axios.get(`${config.baseUrl}/item/${data.id}.json`)
}

export {
    fetchUserInfo,
    fetchCommentItem,
    fetchList
}