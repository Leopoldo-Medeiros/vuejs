export default {
  template: `
        <!-- Calling the add method when the form is submitted. -->
        <section class="space-y-6">
        <form @submit.prevent="add">
          <div class="border border-gray-600 text-black flex">
            <input v-model="newAssignment" placeholder="New Assignment ..." class="input" />
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
