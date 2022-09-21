export default {
  template: `
        <!-- Calling the add method when the form is submitted. -->
        <form @submit.prevent="add">
          <div class="border border-gray-600 text-black">
            <input v-model="newAssignment" placeholder="New Assignment ..." class="p-2" />
            <button type="submit" class="bg-white p-2 border-l">Add</button>
          </div>
        </form>
    `,

  data() {
    return {
      newAssignment: ""
    };
  },

  methods: {
    add() {
       /* Emitting an event called add, and passing the newAssignment as a parameter. */
        this.$emit('add', this.newAssignment);

        this.newAssignment = '';
    },
  },
};
