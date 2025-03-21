export default defineAppConfig({
    ui: {
        primary: 'blue',
        button: {
            default: {
                size: 'xl',
                color: 'blue',
            },
            variant: {
                solid: 'dark:bg-black dark:text-white hover:bg-blue-700 dark:hover:bg-cool-800 transition-colors duration-200',
            },
        }
    }
})
