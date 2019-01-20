
export class Event {

    constructor(public readonly id: string, public readonly value: string) { }
}

export interface EventHandler {
    receive(payload: Event);
}

export class EventBus {

    private handlers: Map<String, EventHandler[]> = new Map();
    readonly instance = new EventBus();

    public emit(topic: String, event: Event) {
        let handlers = this.handlers.get(topic) || [];
        handlers.forEach(handler => handler.receive(event));
    }

    public register(topic: string, handler: EventHandler) {
        let handlers: EventHandler[] = this.handlers.get(topic);
        if (handlers) {
            if (handlers.indexOf(handler) === -1) {
                handlers.push(handler);
            }
        } else {
            let handlers = [];
            handlers.push(handler);
            this.handlers.set(topic, handlers)
        }
    }
}