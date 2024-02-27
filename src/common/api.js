const LIVEURL = "http://localhost:5020/";
const ROOTURL = LIVEURL + 'api/v1/';

const API = {
  addTodo: ROOTURL + 'todo/addTodo',
  listTodo: ROOTURL + 'todo/listTodo',
  viewTodo: ROOTURL + 'todo/viewTodo',
  updateTodo: ROOTURL + 'todo/updateTodo',
  deleteTodo: ROOTURL + 'todo/deleteTodo',
}


const ImportedURL = {
  API: API,
  LIVEURL: LIVEURL,
}
export default ImportedURL;
