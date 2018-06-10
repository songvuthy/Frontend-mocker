import axios from 'axios'
import env from '../config/enviroment'
import user from '../services/user'
const resource = {};
const url = env.api_url;
const token = user.get_token();
const userId = user.getUserId();
const headers = { "x-access-token": token};

resource.createResource = function ( resource ) {
    return axios.post(url+'resources/?token=' + token, resource);
};
resource.getResource = function ( id_workspace ) {
    return axios.get(url+'resources/workspaces'+id_workspace+'/?token=' + token);
};

export default resource;