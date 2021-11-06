class Task {
    
    constructor (
        public readonly id: string,
        public name: string,
        public tags: string,
        public body: string,
        public status: boolean
    ) {}
}

export { Task };