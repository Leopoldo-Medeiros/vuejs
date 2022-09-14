export default {

template:
        // A button with a class of bg-gray-200 hover:bg-gray-400 border rounded px-5 py-2
        // :disabled:cursor-not-allowed. 
        `
        <button 
            :class="{
                'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
                'bg-blue-600 hover:bg-gray-700': type === 'primary',
                'bg-purple-200 hover:bg-gray-400': type === 'secondary',
                'bg-gray-200 hover:bg-gray-400': type === 'muted',
                'ls-loading': processing
            }"
            :disabled="processing"
        >

            <slot />
        </button>
    `,

    props: {
        type: {
            type: String,
            default: 'primary'
        },

        processing: {
            type: Boolean,
            default: false
        },
    }
}