import {GET_TABLES,GET_CURRENT_TABLE,CANCEL_TABLE} from '../actions/types'

const initialState = {
    loading:true,
    tables:[],
    current_table:{}
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TABLES:
      return {
          ...state,
          tables:payload,
          loading:false
      };
      case GET_CURRENT_TABLE:
        return {
            ...state,
            current_table:payload,
            loading:false
        };
        case CANCEL_TABLE:
        return {
            ...state,
            tables:state.tables.filter(table => table._id !== payload),
            loading:false
        };
    default:
      return state;
  }
}