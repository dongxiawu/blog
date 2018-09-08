import { EventEmitter } from 'events';

import TodoConstants from '../constants/TodoConstants';
import TodoDispatcher from '../dispatcher/TodoDispatcher';

const CHANGE_EVENT = 'change';

const _store = {
  todoList: [
    { id: 0, text: 'AAAAAAAAAA', complete: true },
    { id: 1, text: 'BBBBBBBBBB', complete: false },
    { id: 2, text: 'CCCCCCCCCC', complete: true },
    { id: 3, text: 'DDDDDDDDDD', complete: false },
    { id: 4, text: 'EEEEEEEEEE', complete: false },
    { id: 5, text: 'FFFFFFFFFF', complete: true },
  ]
};

class TodoStore extends EventEmitter {

  // static _store = {
  //   todoList: [
  //     { id: 0, text: 'AAAAAAAAAA', complete: true },
  //     { id: 1, text: 'BBBBBBBBBB', complete: false },
  //     { id: 2, text: 'CCCCCCCCCC', complete: true },
  //     { id: 3, text: 'DDDDDDDDDD', complete: false },
  //     { id: 4, text: 'EEEEEEEEEE', complete: false },
  //     { id: 5, text: 'FFFFFFFFFF', complete: true },
  //   ]
  // }

  constructor(props) {
    super(props);

    this.createItem = this.createItem.bind(this);
    this.getTodoList = this.getTodoList.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.getLeftItems = this.getLeftItems.bind(this);
    this.toggleCompleteAll = this.toggleCompleteAll.bind(this);
    this.getAllCompleted = this.getAllCompleted.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.addChangeListener = this.addChangeListener.bind(this);
    this.removeChangeListener = this.removeChangeListener.bind(this);

  }

  addChangeListener(cb){
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb){
    this.removeListener(CHANGE_EVENT, cb);
  }

  createItem(item){
    // 生成一个随机的id
    let id = Number.parseInt(Math.random() * 1000000);
    const todoItem = {
      id: id,
      text: item,
      complete: false
    };
    // 前置放入数组
    _store.todoList.unshift(todoItem);
  }

  // 获取todo list
  getTodoList(){
    return _store.todoList;
  }

// 更改是否完成的状态 toggle
  toggleComplete(id){
    for (let i = 0, len = _store.todoList.length; i < len; i++) {
      if (_store.todoList[i].id === Number.parseInt(id)) {
        _store.todoList[i].complete = !_store.todoList[i].complete;
        break;
      }
    }
  }

  // 获取剩下的未做的 todoItem
  getLeftItems(){
    let count = 0;
    _store.todoList.forEach((item, index) => {
      if (!item.complete) {
        count++;
      }
    });
    return count;
  }

  // toggle complete
  toggleCompleteAll(){
    let complete = _store.todoList[0].complete ? false : true;
    _store.todoList.forEach((item, index) => {
      item.complete = complete;
    });
  }

  // 是否全部完成的flag
  getAllCompleted(){
    var complete = true;
    for (let i = 0, len = _store.todoList.length; i < len; i++) {
      if (!_store.todoList[i].complete) {
        // 如果存在未完成的
        complete = false;
        break;
      }
    }
    return complete;
  }

  // 更新某个item
  updateItem(id,value){
    for (let i = 0, len = _store.todoList.length; i < len; i++) {
      if (_store.todoList[i].id == id) {
        _store.todoList[i].text = value.trim();
        break;
      }
    }
  }
}

// // 增加 todo item
// const createItem = function (item) {
//   // 生成一个随机的id
//   var id = Number.parseInt(Math.random() * 1000000);
//   const todoItem = {
//     id: id,
//     text: item,
//     complete: false
//   };
//   // 前置放入数组
//   _store.todoList.unshift(todoItem);
// }
// // 获取todo list
// const getTodoList = function () {
//   return _store.todoList;
// }
// // 更改是否完成的状态 toggle
// const toggleComplete = function (id) {
//   for (let i = 0, len = _store.todoList.length; i < len; i++) {
//     if (_store.todoList[i].id === Number.parseInt(id)) {
//       _store.todoList[i].complete = !_store.todoList[i].complete;
//       break;
//     }
//   }
// }
// // 删除某个todoItem
// const deleteItem = function (id) {
//   for (let i = 0, len = _store.todoList.length; i < len; i++) {
//     if (_store.todoList[i].id === Number.parseInt(id)) {
//       _store.todoList.splice(i, 1);
//       break;
//     }
//   }
// }
// // 获取剩下的未做的 todoItem
// const getLeftItems = function (id) {
//   let count = 0;
//   _store.todoList.forEach((item, index) => {
//     if (!item.complete) {
//       count++;
//     }
//   });
//   return count;
// }
// // toggle complete
// const toggleCompleteAll = function () {
//   let complete = _store.todoList[0].complete ? false : true;
//   _store.todoList.forEach((item, index) => {
//     item.complete = complete;
//   });
// }
// // 是否全部完成的flag
// const getAllCompleted = function () {
//   var complete = true;
//   for (let i = 0, len = _store.todoList.length; i < len; i++) {
//     if (!_store.todoList[i].complete) {
//       // 如果存在未完成的
//       complete = false;
//       break;
//     }
//   }
//   return complete;
// }
// // 更新某个item
// const updateItem = function(id,value){
//   for (let i = 0, len = _store.todoList.length; i < len; i++) {
//     if (_store.todoList[i].id == id) {
//       _store.todoList[i].text = value.trim();
//       break;
//     }
//   }
// }
//
// // 构造 todoStore
// const TodoStore = Object.assign({}, EventEmitter.prototype, {
//   addChangeListener: function (cb) {
//     this.on(CHANGE_EVENT, cb);
//   },
//   removeChangeListener: function (cb) {
//     this.removeListener(CHANGE_EVENT, cb);
//   },
//   getTodoList: getTodoList,
//   getLeftItems: getLeftItems,
//   getAllCompleted: getAllCompleted
// });

export default new TodoStore();
