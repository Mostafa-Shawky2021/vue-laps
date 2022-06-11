<template>
  <table class="table table-striped table-bordered text-center">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>City</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="student in students" :key="student.id">
        <td>{{student.id}}</td>
        <td>{{student.name}}</td>
        <td>{{student.city}}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
          </button>
        </td>
      </tr>
      <tr>
        <th colspan="3">Total Number of Students : {{ students.length }}</th>
      </tr>
    </tfoot>
  </table>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" v-model="newStudent.name">
        </div>
        <div class="form-group">
          <label for="city">City</label>
          <input type="text" class="form-control" id="city" v-model="newStudent.city">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="addStudent">Add</button>
      </div>
    </div>
  </div>
</div>

</template>

<script>
  import students from '../students'
  export default {
    name: 'ContentComponent',
    data() {
      return {
        students: students,
        newStudent: {
          name: '',
          city: ''
        }
      }
    },
    created() {
      console.log('ContentComponent created')
    },
    methods: {
      addStudent() {
        this.students.push({id: this.students.length+1, ...this.newStudent})
        this.newStudent = {
          name: '',
          city: ''
        }
        // $('#addStudentModal').modal('hide')
      }
    }
  }
</script>
