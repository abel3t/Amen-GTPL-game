<template>
   <label class="ml-4 h-1/3 w-1/3 rounded-lg cursor-pointer">
      <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
      </svg>
      <input type='file' class="hidden" @change="previewFile" />
    </label>
</template>

<script>
import readXlsxFile from 'read-excel-file'
import { SET_OBSTACLES } from '~/store';

export default {
  components: {},
  methods: {
    previewFile: function(e) {
      const file = e.target.files[0];
      readXlsxFile(file)
        .then(rows => {
          const titles = rows[0];
          const id = titles.findIndex(title => title.toLowerCase() === 'id');
          const header = titles.findIndex(title => title.toLowerCase() === 'header');
          const title = titles.findIndex(_title => _title.toLowerCase() === 'title');
          const request = titles.findIndex(title => title.toLowerCase() === 'request');
          const obstacles = {};
          if (id > -1 && header > -1 && title > -1 && request > -1) {
            rows.forEach(row => {
              obstacles[row[id]] = {
                header: row[header],
                title: row[title],
                request: row[request]
              }
            })
          }

          if (Object.keys(obstacles).length) {
            this.$store.dispatch(SET_OBSTACLES, obstacles);
            localStorage.setItem('obstacles', JSON.stringify(obstacles));
          }
        })
    }
  }
}

</script>
