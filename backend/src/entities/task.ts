import {v4 as uuid} from 'uuid';

class Task {
    public id: string = '';
    public name: string = '';
    public tags: string = '';
    public body: string = '';
    public status: boolean = true;

    constructor (props: Omit<Task, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        }
    }
}

export { Task };