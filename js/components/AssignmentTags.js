export default {
  template: `
        <!--  Creating a div with a class of flex gap-2. -->
        <div class="flex gap-2">
                <button 
                @click="$emit('change', tag) = tag"
                v-for="tag in tags" 
                class="border rounded px-1 py-px text-xs"
                :class="{
                    'border-blue-500 text-blue-500': tag === currentTag
                }"
            >{{ tag }}</button>
        </div>
    `,

    props: {
        initialTags: Array,
        currentTag: String
    },

    computed: {
        /* Returning an array of tags. */
        /* Where the tag is creaeted */
        tags() {
        return ["all", ...new Set(this.initialTags)];
        },
    },
};
