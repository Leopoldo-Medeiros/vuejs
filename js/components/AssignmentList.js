import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
  components: { Assignment, AssignmentTags },

  template: `
        <!-- This is a section of the page that is displaying the assignments that are not complete. -->
        <!-- Collection of assignment -->
                
      <!-- This is the section of the page that is displaying the assignments that are complete. -->
        <section v-show="assignments.length" class="mt-8">
            <h2 class="font-bold mb-2">
                {{ title }}
                <span>({{ assignments.length }})</span>
            </h2>
            
            <!-- This part access all assignments -->
            <!--  @change -> A way to pass data from a child component to a parent component. -->

            <!-- When this component anounces we change tags, we update our status too. -->
            <assignment-tags 
              v-model:currentTag="currentTag"
              :initial-tags="assignments.map(a => a.tag)" 
            />

            <!-- Creating a border around the list of assignments. --> 
            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                <assignment 
                    v-for="assignment in filteredAssignments"
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

  data() {
    return {
      /* tracking the current tag. */
      currentTag: "all",
    }
  },

  computed: {
    filteredAssignments() {
      if (this.currentTag === "all") {
        return this.assignments;
      }

      return this.assignments.filter((a) => a.tag === this.currentTag);
    },
  },
};
