<template>
  <div class="board">
    <div class="cell" id="cell-start">Start</div>
    <div class="cell" id="cell-1">1</div>
    <div class="cell" id="cell-2">2</div>
    <div class="cell" id="cell-3">3</div>
    <div class="cell" id="cell-4">4</div>
    <div class="cell" id="cell-5">5</div>
    <div class="cell" id="cell-6">6</div>
    <div class="cell" id="cell-7">7</div>
    <div class="cell" id="cell-8">8</div>
    <div class="cell" id="cell-9">9</div>
    <div class="cell col-start-10" id="cell-10">10</div>
    <div class="cell col-start-10" id="cell-11">11</div>
    <div class="cell col-start-10" id="cell-12">12</div>
    <div class="cell col-start-10" id="cell-13">13</div>
    <div class="reverse col-span-10 grid grid-cols-10 gap-0">
      <div class="cell" id="cell-14">14</div>
      <div class="cell" id="cell-15">15</div>
      <div class="cell" id="cell-16">16</div>
      <div class="cell" id="cell-17">17</div>
      <div class="cell" id="cell-18">18</div>
      <div class="cell" id="cell-19">19</div>
      <div class="cell" id="cell-20">20</div>
      <div class="cell" id="cell-21">21</div>
      <div class="cell" id="cell-22">22</div>
      <div class="cell" id="cell-23">23</div>
    </div>
    <div class="cell col-start-1" id="cell-24">24</div>
    <div class="cell col-start-15" id="cell-40">40</div>
    <div class="cell col-start-1" id="cell-25">25</div>
    <div class="cell" id="cell-26">26</div>
    <div class="cell" id="cell-27">27</div>
    <div class="cell" id="cell-28">28</div>
    <div class="cell" id="cell-29">29</div>
    <div class="cell" id="cell-30">30</div>
    <div class="cell" id="cell-31">31</div>
    <div class="cell" id="cell-32">32</div>
    <div class="cell" id="cell-33">33</div>
    <div class="cell" id="cell-34">34</div>
    <div class="cell" id="cell-35">35</div>
    <div class="cell" id="cell-36">36</div>
    <div class="cell" id="cell-37">37</div>
    <div class="cell" id="cell-38">38</div>
    <div class="cell" id="cell-39">39</div>
  </div>
</template>

<style lang="scss" scoped>
.board {
  @apply w-8/12 text-center p-4 grid grid-cols-16 gap-0;
  background: #FDF3CC;

  .cell {
    @apply p-3 border-0 rounded-b-sm cursor-pointer ;
    color: #fff;
  }
  .reverse {
    direction: rtl;
  }

  // region Cell colors
  #cell-start {
    @apply rounded-l-xl;
    background: #BB779A;
  }
  #cell-1 {
    background: #8E7CC3;
  }
  #cell-2 {
    background: #6FA9DC;
  }

  #cell-3 {
    background: #93C47D;
  }

  #cell-4 {
    background: #F9D966;
  }

  #cell-5 {
    background: #E06667;
  }

  #cell-6 {
    background: #C37BA0;
  }

  #cell-7 {
    background: #6FA9DC;
  }

  #cell-8 {
    background: #93C47D;
  }

  #cell-9 {
    @apply rounded-tr-xl;
    background: #C37BA0;
  }

  #cell-10 {
    background: #8E7CC3;
  }

  #cell-11 {
    background: #93C47D;
  }

  #cell-12 {
    background: #6FA9DC;
  }

  #cell-13 {
    background: #E06667;
  }

  #cell-14 {
    @apply rounded-br-xl;
    background: #C37BA0;
  }

  #cell-15 {
    background: #8E7CC3;
  }

  #cell-16 {
    background: #6FA9DC;
  }

  #cell-17 {
    background: #93C47D;
  }

  #cell-18 {
    background: #F9D966;
  }

  #cell-19 {
    background: #E06667;
  }

  #cell-20 {
    background: #C37BA0;
  }

  #cell-21 {
    background: #8E7CC3;
  }

  #cell-22 {
    background: #F7C100;
  }

  #cell-23 {
    @apply rounded-tl-xl;
    background: #C37BA0;
  }

  #cell-24 {
    background: #F9D966;
  }

  #cell-25 {
    @apply rounded-bl-xl;
    background: #93C47D;
  }

  #cell-26 {
    background: #E06667;
  }

  #cell-27 {
    background: #F9D966;
  }

  #cell-28 {
    background: #8E7CC3;
  }

  #cell-29 {
    background: #93C47D;
  }

  #cell-30 {
    background: #C37BA0;
  }

  #cell-31 {
    background: #6FA9DC;
  }

  #cell-32 {
    background: #8E7CC3;
  }

  #cell-33 {
    background: #E06667;
  }

  #cell-34 {
    background: #93C47D;
  }

  #cell-35 {
    background: #F9D966;
  }

  #cell-36 {
    background: #E06667;
  }

  #cell-37 {
    background: #C37BA0;
  }

  #cell-38 {
    background: #6FA9DC;
  }

  #cell-39 {
    background: #93C47D;
    @apply rounded-br-xl;
  }

  #cell-40 {
    background: #F7C100;
  }
  // endregion
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  components: {  }
});
</script>
