import { GetterTree, ActionTree, MutationTree } from 'vuex';

export type RootState = ReturnType<typeof state>

export const TOGGLE_OBSTACLE_BOX = 'toggleObstacleBox';
export const SET_OBSTACLE = 'setObstacle';
export const SET_OBSTACLES = 'setObstacles';

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
    1: {},
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
  } as any,
  animates: {
    1: 'animate__flipInX',
    2: 'animate__bounceIn',
    3: 'animate__bounceInDown',
    4: 'animate__rubberBand',
    5: 'animate__shakeX',
    6: 'animate__shakeY',
    7: 'animate__swing',
    8: 'animate__tada',
    9: 'animate__wobble',
    10: 'animate__heartBeat',
    11: 'animate__lightSpeedInRight',
    12: 'animate__jackInTheBox',
    13: 'animate__fadeIn',
    14: 'animate__rotateIn',
    15: 'animate__slideInUp'
  }
});

const mutations: MutationTree<RootState> = {
  [`${TOGGLE_OBSTACLE_BOX}`](state, showObstacleBox: boolean) {
    state.showObstacleBox = showObstacleBox;
  },
  [`${SET_OBSTACLE}`](state, id: number) {
    state.obstacle = { id, ...state.obstacles[`${id}`] };
  },
  [`${SET_OBSTACLES}`](state, obstacles: any) {
    state.obstacles = obstacles;
  }
};

const actions: ActionTree<RootState, RootState> = {
  [`${TOGGLE_OBSTACLE_BOX}`]({ commit }, payload) {
    commit(TOGGLE_OBSTACLE_BOX, payload);
  },
  [`${SET_OBSTACLE}`]({ commit }, payload) {
    commit(SET_OBSTACLE, payload);
  },
  [`${SET_OBSTACLES}`]({ commit }, payload) {
    commit(SET_OBSTACLES, payload);
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
  },
  animates(state) {
    return state.animates;
  }
};

export default {
  state, getters, mutations, actions
};
