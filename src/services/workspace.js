import axios from 'axios'
import env from '../config/enviroment'
import user from '../services/user'
const workspace = {};
const url = env.api_url;
const token = user.get_token();
const userId = user.getUserId();
const headers = { "x-access-token": token};
workspace.getAllWorkspaceByuser = function (id) {
  return axios.get(url+'/users/'+id,);
};
workspace.getMyworkspace = function () {
  return axios.get(url+'workspaces/users/'+ userId + "?token=" + token);
};
workspace.createWorkspace = function ( workspace ) {
    return axios.post(url+'workspaces/?token=' + token, workspace);
};
workspace.createResource = function ( resource ) {
    return axios.post(url+'resource/?token=' + token, resource);
};
workspace.register = function (user ) {
    return axios.post(url+'users/register', user);
};
export default workspace;