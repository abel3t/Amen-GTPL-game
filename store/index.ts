import { GetterTree, ActionTree, MutationTree } from 'vuex';

export type RootState = ReturnType<typeof state>

export const TOGGLE_OBSTACLE_BOX = 'toggleObstacleBox';
export const SET_OBSTACLE = 'setObstacle';

const state = () => ({
  showObstacleBox: false,
  obstacle: {},
  cellColors: {
    1: '#8E7CC3',
    2: '#6FA9DC',
    3: '#93C47D',
    4: '#F9D966',
    5: '#E06667',
    6: '#C37BA0',
    7: '#6FA9DC',
    8: '#93C47D',
    9: '#C37BA0',
    10: '#8E7CC3',
    11: '#93C47D',
    12: '#6FA9DC',
    13: '#E06667',
    14: '#C37BA0',
    15: '#8E7CC3',
    16: '#6FA9DC',
    17: '#93C47D',
    18: '#F9D966',
    19: '#E06667',
    20: '#C37BA0',
    21: '#8E7CC3',
    22: '#F7C100',
    23: '#C37BA0',
    24: '#F9D966',
    25: '#93C47D',
    26: '#E06667',
    27: '#F9D966',
    28: '#8E7CC3',
    29: '#93C47D',
    30: '#C37BA0',
    31: '#6FA9DC',
    32: '#8E7CC3',
    33: '#E06667',
    34: '#93C47D',
    35: '#F9D966',
    36: '#E06667',
    37: '#C37BA0',
    38: '#6FA9DC',
    39: '#93C47D',
    40: '#F7C100'
  },
  obstacles: {
    1: {
      header: 'Xuất Phát',
      title: 'AI CẬP – RẼ BIỂN ĐỎ',
      request: 'Quân Ai Cập đuổi tới rồi: mọi người chỉ kịp lấy hành lý quan trọng nhất mà chạy thôi! Mỗi người chơi hãy chọn 1 hành trang cho mình và giải thích chức năng hợp lý!'
    },
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
    10: {},
    11: {},
    12: {},
    13: {},
    14: {},
    15: {},
    16: {},
    17: {},
    18: {},
    19: {},
    20: {},
    21: {},
    22: {},
    23: {},
    24: {},
    25: {},
    26: {},
    27: {},
    28: {},
    29: {},
    30: {},
    31: {},
    32: {},
    33: {},
    34: {},
    35: {},
    36: {},
    37: {},
    38: {},
    39: {},
    40: {}
  } as any
});

const mutations: MutationTree<RootState> = {
  [`${TOGGLE_OBSTACLE_BOX}`](state, showObstacleBox: boolean) {
    state.showObstacleBox = showObstacleBox;
  },
  [`${SET_OBSTACLE}`](state, id: number) {
    state.obstacle = { id, ...state.obstacles[`${id}`] };
  }
};

const actions: ActionTree<RootState, RootState> = {
  [`${TOGGLE_OBSTACLE_BOX}`]({ commit }, payload) {
    commit(TOGGLE_OBSTACLE_BOX, payload);
  },
  [`${SET_OBSTACLE}`]({ commit }, payload) {
    commit(SET_OBSTACLE, payload);
  }
};

const getters: GetterTree<RootState, RootState> = {
  showObstacleBox(state) {
    return state.showObstacleBox;
  },
  cellColors(state) {
    return state.cellColors;
  },
  obstacles(state) {
    return state.obstacles;
  },
  obstacle(state) {
    return state.obstacle;
  }
};

export default {
  state, getters, mutations, actions
};
