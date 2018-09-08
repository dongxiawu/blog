import { Dispatcher } from 'flux';
import TodoConstants from "../constants/TodoConstants";
import TodoStore from "../stores/TodoStores";
// 任务分发器
const TodoDispatcher = new Dispatcher();
const CHANGE_EVENT = 'change';

TodoDispatcher.handleAction = function (action) {
  this.dispatch({
    source: 'VIEW_ACTION', // action 来源
    action: action
  });
};

// 注册 Dispatcher
TodoDispatcher.register((payload) => {
  const action = payload.action;
  switch (action.actionType) {
    // create 事件
    case TodoConstants.CREATE:
      // 修改数据
      TodoStore.createItem(action.data);
      // 通知回调
      TodoStore.emit(CHANGE_EVENT);
      break;
    // delete 事件
    case TodoConstants.DELETE:
      TodoStore.deleteItem(action.data);
      TodoStore.emit(CHANGE_EVENT);
      break;
    // toggle complete 事件
    case TodoConstants.TOGGLE_COMPLETE:
      TodoStore.toggleComplete(action.data);
      TodoStore.emit(CHANGE_EVENT);
      break;
    // toggle all
    case TodoConstants.TOGGLE_COMPLETE_ALL:
      TodoStore.toggleCompleteAll(action.data);
      TodoStore.emit(CHANGE_EVENT);
      break;
    case TodoConstants.UPDATE:
      TodoStore.updateItem(action.data.id,action.data.value);
      TodoStore.emit(CHANGE_EVENT);
      break;
    default:
      break;
  }
});
export default TodoDispatcher;

