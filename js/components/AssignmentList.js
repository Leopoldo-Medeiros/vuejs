import Assignment from "./Assignment.js";

export default {
    components: { Assignment },

    template: `
        <!-- This is a section of the page that is displaying the assignments that are not complete. -->
        <!-- Collection of assignment -->
                
      <!-- This is the section of the page that is displaying the assignments that are complete. -->
        <section v-show="assignments.length" class="mt-8">
            <h2 class="font-bold mb-2">{{ title }}</h2>

            <!-- Creating a border around the list of assignments. --> 
            <ul class="border border-gray-600 divide-y divide-gray-600">
                <assignment 
                    v-for="assignment in assignments"
                    :key="assignment.id"
                    :assignment="assignment"
                ></assignment>    
            </ul>
        </section>
        
    `,

  props: {
    assignments: Array,
    title: String,
  },
};
