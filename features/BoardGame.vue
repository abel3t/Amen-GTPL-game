<template>
  <div>
    <ObstacleBox v-if="isShowObstacleBox"/>
    <ContingencyBox v-if="isShowContingencyBox"/>
    <div id="congratulation">
      <div id="party">
      </div>
    </div>
    <div class="board">
      <div class="cell" id="cell-start">Start</div>
      <div class="cell" id="cell-1" @click="showObstacleBox(1)" :style="{ background: cellColors['1'] }">1</div>
      <div class="cell" id="cell-2" @click="showObstacleBox(2)" :style="{ background: cellColors['2'] }">2</div>
      <div class="cell" id="cell-3" @click="showObstacleBox(3)" :style="{ background: cellColors['3'] }">3</div>
      <div class="cell" id="cell-4" @click="showObstacleBox(4)" :style="{ background: cellColors['4'] }">4</div>
      <div class="cell" id="cell-5" @click="showObstacleBox(5)" :style="{ background: cellColors['5'] }">5</div>
      <div class="cell" id="cell-6" @click="showObstacleBox(6)" :style="{ background: cellColors['6'] }">6</div>
      <div class="cell" id="cell-7" @click="showObstacleBox(7)" :style="{ background: cellColors['7'] }">7</div>
      <div class="cell" id="cell-8" @click="showObstacleBox(8)" :style="{ background: cellColors['8'] }">8</div>
      <div class="cell" id="cell-9" @click="showObstacleBox(9)" :style="{ background: cellColors['9'] }">9</div>
      <div class="settings">
        <Settings/>
      </div>
      <div class="cell" id="cell-10" @click="showObstacleBox(10)"
           :style="{ background: cellColors['10'] }">10
      </div>

      <div id="dice">
        <Dice/>
      </div>

      <div id="contingency" @click="showContingencyBox">
        <div>SỰ CỐ</div>
        <div>BẤT NGỜ</div>
      </div>

      <div class="cell" id="cell-11" @click="showObstacleBox(11)"
           :style="{ background: cellColors['11'] }">11
      </div>
      <div class="cell" id="cell-12" @click="showObstacleBox(12)"
           :style="{ background: cellColors['12'] }">12
      </div>
      <div class="cell" id="pawns">
        <div class="pawn" id="pawn-1" v-dragged="onDragged">
        </div>
        <div class="pawn" id="pawn-2" v-dragged="onDragged">
        </div>
        <div class="pawn" id="pawn-3" v-dragged="onDragged">
        </div>
        <div class="pawn" id="pawn-4" v-dragged="onDragged">
        </div>
      </div>
      <div class="cell" id="cell-13" @click="showObstacleBox(13)"
           :style="{ background: cellColors['13'] }">13
      </div>
      <div class="cell" id="cell-23" @click="showObstacleBox(23)" :style="{ background: cellColors['23'] }">
        23
      </div>
      <div class="cell" id="cell-22" @click="showObstacleBox(22)" :style="{ background: cellColors['22'] }">22</div>
      <div class="cell" id="cell-21" @click="showObstacleBox(21)" :style="{ background: cellColors['21'] }">21</div>
      <div class="cell" id="cell-20" @click="showObstacleBox(20)" :style="{ background: cellColors['20'] }">20</div>
      <div class="cell" id="cell-19" @click="showObstacleBox(19)" :style="{ background: cellColors['19'] }">19</div>
      <div class="cell" id="cell-18" @click="showObstacleBox(18)" :style="{ background: cellColors['18'] }">18</div>
      <div class="cell" id="cell-17" @click="showObstacleBox(17)" :style="{ background: cellColors['17'] }">17</div>
      <div class="cell" id="cell-16" @click="showObstacleBox(16)" :style="{ background: cellColors['16'] }">16</div>
      <div class="cell" id="cell-15" @click="showObstacleBox(15)" :style="{ background: cellColors['15'] }">15</div>
      <div class="cell" id="cell-14" @click="showObstacleBox(14)" :style="{ background: cellColors['14'] }">14</div>


      <div class="cell" id="cell-40" @click="showCongratulation">
        <div>
          Về đích
        </div>
      </div>

      <div class="cell" id="cell-24" @click="showObstacleBox(24)" :style="{ background: cellColors['24'] }">
        24
      </div>
      <div class="cell" id="cell-25" @click="showObstacleBox(25)" :style="{ background: cellColors['25'] }">
        25
      </div>
      <div class="cell" id="cell-26" @click="showObstacleBox(26)" :style="{ background: cellColors['26'] }">26</div>
      <div class="cell" id="cell-27" @click="showObstacleBox(27)" :style="{ background: cellColors['27'] }">27</div>
      <div class="cell" id="cell-28" @click="showObstacleBox(28)" :style="{ background: cellColors['28'] }">28</div>
      <div class="cell" id="cell-29" @click="showObstacleBox(29)" :style="{ background: cellColors['29'] }">29</div>
      <div class="cell" id="cell-30" @click="showObstacleBox(30)" :style="{ background: cellColors['30'] }">30</div>
      <div class="cell" id="cell-31" @click="showObstacleBox(31)" :style="{ background: cellColors['31'] }">31</div>
      <div class="cell" id="cell-32" @click="showObstacleBox(32)" :style="{ background: cellColors['32'] }">32</div>
      <div class="cell" id="cell-33" @click="showObstacleBox(33)" :style="{ background: cellColors['33'] }">33</div>
      <div class="cell" id="cell-34" @click="showObstacleBox(34)" :style="{ background: cellColors['34'] }">34</div>
      <div class="cell" id="cell-35" @click="showObstacleBox(35)" :style="{ background: cellColors['35'] }">35</div>
      <div class="cell" id="cell-36" @click="showObstacleBox(36)" :style="{ background: cellColors['36'] }">36</div>
      <div class="cell" id="cell-37" @click="showObstacleBox(37)" :style="{ background: cellColors['37'] }">37</div>
      <div class="cell" id="cell-38" @click="showObstacleBox(38)" :style="{ background: cellColors['38'] }">38</div>
      <div class="cell" id="cell-39" @click="showObstacleBox(39)" :style="{ background: cellColors['39'] }">39</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.board {
  @apply w-full text-center p-5 pt-11 grid grid-cols-16 gap-0 select-none;
  height: 100vh;
  background: #FDF3CC;
  min-height: 600px;
  min-width: 600px;

  .cell {
    @apply p-3 border-0 rounded-b-sm cursor-pointer flex items-center justify-center select-none;
    font-family: 'Bernard MT Condensed', 'arial', serif;
    font-size: 20px;
    color: #fff;
  }

  .settings {
    @apply col-start-16 row-span-2 w-full h-full;
  }

  #dice {
    @apply col-start-3 col-span-2 row-span-2 flex;
    background: #FDF3CC;
  }

  #contingency {
    @apply col-start-7 col-span-2 row-span-2 flex flex-col items-center justify-center cursor-pointer rounded-xl;
    font-family: 'arial', serif;
    font-size: 20px;
    color: #fff;
    background: #E06667;
  }

  #pawns {
    @apply col-start-11 col-span-3 row-span-3;
  }

  .pawn {
    @apply relative ml-2;
    z-index: 9;
    cursor: pointer;
    min-width: 48px;
    min-height: 75px;
    background: transparent;
  }

  #pawn-1 {
    background: url("assets/images/pwan-green.png") no-repeat center;
    background-size: 100px 100px;
    overflow: visible;
  }

  #pawn-2 {
    background: url("assets/images/pwan-red.png") no-repeat center;
    background-size: 100px 100px;
  }

  #pawn-3 {
    background: url("assets/images/pwan-purple.png") no-repeat center;
    background-size: 100px 100px;
  }

  #pawn-4 {
    background: url("assets/images/pawn-yello.png") no-repeat center;
    background-size: 100px 100px;
  }


  // region Cell colors
  #cell-start {
    @apply rounded-l-xl;
    background: #BB779A;
  }

  #cell-1 {
  }

  #cell-2 {
  }

  #cell-3 {
  }

  #cell-4 {
  }

  #cell-5 {
  }

  #cell-6 {
  }

  #cell-7 {
  }

  #cell-8 {
  }

  #cell-9 {
    @apply rounded-tr-xl;
  }

  #cell-10 {
    @apply col-start-10;
  }

  #cell-11 {
    @apply col-start-10;
  }

  #cell-12 {
    @apply col-start-10;
  }

  #cell-13 {
    @apply col-start-10;
  }

  #cell-14 {
    @apply rounded-br-xl;
  }

  #cell-15 {
  }

  #cell-16 {
  }

  #cell-17 {
  }

  #cell-18 {
  }

  #cell-19 {
  }

  #cell-20 {
  }

  #cell-21 {
  }

  #cell-22 {
  }

  #cell-23 {
    @apply rounded-tl-xl col-start-1;
  }

  #cell-24 {
    @apply col-start-1;
  }

  #cell-25 {
    @apply rounded-bl-xl col-start-1;
  }

  #cell-26 {
  }

  #cell-27 {
  }

  #cell-28 {
  }

  #cell-29 {
  }

  #cell-30 {
  }

  #cell-31 {
  }

  #cell-32 {
  }

  #cell-33 {
  }

  #cell-34 {
  }

  #cell-35 {
  }

  #cell-36 {
  }

  #cell-37 {
  }

  #cell-38 {
  }

  #cell-39 {
    @apply rounded-br-xl;
  }

  #cell-40 {
    @apply col-start-14 col-span-3 row-span-2 pb-0 flex items-end;
    > div {
      @apply flex items-center justify-center;
      width: 75%;
      height: 90%;
      background: url("assets/images/to-finish.png") no-repeat center;
      background-size: 100%;
      font-family: 'Alfa Slab One', serif;
      font-size: 0.8em;
    }
  }

  // endregion
}
</style>

<script>
import party from 'party-js';
import ObstacleBox from '../components/ObstacleBox.vue';
import Settings from '../components/Settings.vue';
import Dice from '~/components/Dice.vue';
import ContingencyBox from '~/components/ContingencyBox.vue';

import {
  SET_OBSTACLE,
  SET_OBSTACLES,
  SET_CONTINGENCIES,
  TOGGLE_OBSTACLE_BOX,
  TOGGLE_CONTINGENCY_BOX,
  UPDATE_OBSTACLE_SOUND,
  UPDATE_CONGRATULATION_SOUND
} from '~/store';

export default {
  components: { Dice, ObstacleBox, ContingencyBox, Settings },
  data() {
    return {
      isDragging: true
    };
  },
  mounted() {
    const obstacles = window.localStorage.getItem('obstacles');
    const contingencies = window.localStorage.getItem('contingencies');
    if (obstacles) {
      this.$store.dispatch(SET_OBSTACLES, JSON.parse(obstacles));
    }

    if (contingencies) {
      this.$store.dispatch(SET_CONTINGENCIES, JSON.parse(contingencies));
    }

    const audio = new Audio('music/answer_10sec.mp3');
    audio.volume = 0.1;

    const congratulationSound = new Audio('music/loud-applause.mp3');

    this.$store.dispatch(UPDATE_OBSTACLE_SOUND, audio);
    this.$store.dispatch(UPDATE_CONGRATULATION_SOUND, congratulationSound);
  },
  computed: {
    cellColors: function () {
      return this.$store.getters.cellColors;
    },
    isShowObstacleBox: {
      get() {
        return this.$store.getters.showObstacleBox;
      },
      set() {}
    },
    isShowContingencyBox: {
      get() {
        return this.$store.getters.showContingencyBox;
      },
      set() {}
    }
  },
  methods: {
    showObstacleBox(id) {
      this.$store.dispatch(SET_OBSTACLE, id);
      this.$store.dispatch(TOGGLE_OBSTACLE_BOX, true);
      if (this.$store.getters?.settings.sound) {
        this.$store.getters?.obstacleSound?.play();
      }
    },
    showContingencyBox() {
      this.$store.dispatch(TOGGLE_CONTINGENCY_BOX, true);
      if (this.$store.getters?.settings.sound) {
        this.$store.getters?.obstacleSound?.play();
      }
    },
    onDragged({ el, deltaX, deltaY }) {
      let l = +window.getComputedStyle(el)['left'].slice(0, -2) || 0;
      let t = +window.getComputedStyle(el)['top'].slice(0, -2) || 0;
      el.style.left = l + deltaX + 'px';
      el.style.top = t + deltaY + 'px';
    },
    showCongratulation() {
      if (this.$store.getters?.settings.sound) {
        this.$store.getters?.congratulationSound.play();
      }

      for (let i = 0; i <=16; i++) {
        let element = this.makeDiv(i);
        document.getElementById('party').append(element);
        setTimeout(() => {
          party.confetti(element, {
            count: party.variation.range(55, 60),
          });
          party.sparkles(element, {
            count: party.variation.range(55, 60),
          });
        }, i < 4 ? i ** 3 * 20 : i ** 2 * 21);
      }
      setTimeout(() => {
        document.getElementById('congratulation').removeChild(document.getElementById('party'));
        let element = document.createElement('div');
        element.id = 'party';
        document.getElementById('congratulation').append(element);
      }, 5500);
    },
    makeDiv(x) {
      let element = document.createElement('div');
      const posX = (Math.random() * 1920 + x ** 2).toFixed();
      const posY = (Math.random() * 200).toFixed();

      element.style.width = 0 + 'px';
      element.style.height = 0 + 'px';
      element.style.position = 'absolute';
      element.style.left = posX + 'px';
      element.style.top = posY + 'px';
      element.style.zIndex = '-1';
      return element;
    }
  }
};
</script>
