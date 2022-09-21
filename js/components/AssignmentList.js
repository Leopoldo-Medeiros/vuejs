import Assignment from "./Assignment.js";

export default {
    components: { Assignment },

    template: `
        <!-- This is a section of the page that is displaying the assignments that are not complete. -->
        <!-- Collection of assignment -->
                
      <!-- This is the section of the page that is displaying the assignments that are complete. -->
        <section v-show="assignments.length" class="mt-8">
            <h2 class="font-bold mb-2">
                {{ title }}
                <span>({{ assignments.length }})</span>
            </h2>

            <!--  Creating a div with a class of flex gap-2. -->
            <div class="flex gap-2">
                <button 
                @click="currentTag = tag"
                v-for="tag in tags" 
                class="border rounded px-1 py-px text-xs"
                :class="{
                    'border-blue-500 text-blue-500': tag === currentTag
                }"
                >{{ tag }}</button>
            </div>

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
      currentTag: 'all'
    };
  },

  computed: {
    filteredAssignments() {
      if (this.currentTag === 'all') {
        return this.assignments;
      }

      return this.assignments.filter(a => a.tag === this.currentTag);
    },

    tags() {
       return ['all', ...new Set(this.assignments.map(a => a.tag))]; 
    }
  }
};
 