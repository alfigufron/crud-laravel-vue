<template>
  <div class="container py-4">
    <div class="card shadow">
      <div class="card-body">
        <h4 class="card-title text-center">Data Siswa</h4>
        <router-link :to="{name: 'add-student'}" class="btn btn-outline-primary btn-block">Tambah Data</router-link>

        <div class="table-responsive">
          <table class="table table-striped w-100 text-center">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Kelas</th>
                <th>Opsi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(student, index) in students" :key="student.id">
                <td>{{ index+1 }}</td>
                <td>{{ student.name }}</td>
                <td>{{ student.class }}</td>
                <td>
                  <router-link :to="{name: 'edit-student', params: {id: student.id}}" class="btn btn-primary">Edit</router-link>
                  <button class="btn btn-danger" @click="deleteData(student.id)">Hapus</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: []
    }
  },

  created() {
    let url = '/api/student/data';
    this.axios.get(url).then(res => {
      this.students = res.data
    });
  },

  methods: {
    deleteData(id) {
      let url = `/api/student/delete/${id}`;
      this.axios.delete(url).then(res => { 
        this.students.splice(this.students.indexOf(id), 1); 
      });
    }
  },
}
</script>