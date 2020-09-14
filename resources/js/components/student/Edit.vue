<template>
  <div class="container py-4">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title text-center">Ubah Data Siswa</h4>

        <form @submit.prevent="updateStudent">
          <div class="form-group">
            <label>Nama</label>
            <input type="text" v-model="student.name" class="form-control">
          </div>

          <div class="form-group">
            <label>Kelas</label>
            <select class="form-control" v-model="student.class">
              <option disabled value="">Pilih Opsi</option>
              <option value="10">X</option>
              <option value="11">XI</option>
              <option value="12">XII</option>
            </select>
          </div>

          <button type="submit" class="btn btn-primary btn-block">Simpan</button>
          <router-link :to="{name: 'home'}" class="btn btn-danger btn-block">Batal</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      student: {}
    }
  },

  created() {
    let url = `/api/student/edit/${this.$route.params.id}`;
    this.axios.get(url).then((res) => {
      this.student = res.data;
    });
  },

  methods: {
    updateStudent(e) {
      if(this.$data.student.name != null && this.$data.student.class != null) {
        let url = `/api/student/update/${this.$route.params.id}`;
        
        this.axios.put(url, this.student).then((res) => {
          this.$router.push({name: 'home'});
        });

        return true;
      }

      e.preventDefault();
    }
  },
}
</script>