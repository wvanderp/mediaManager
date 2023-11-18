export type SubscribeFunction = (data: any) => void;

export default class PubSub {

    subscriptions: Record<string,  SubscribeFunction> = {};


    constructor() {

    }

    subscribe(event: string, callback: SubscribeFunction) {
        this.subscriptions[event] = callback;
    }

    unsubscribe(event: string) {
        delete this.subscriptions[event];
    }

    publish(event: string, data: any) {
        for (const subscriber in this.subscriptions[event]) {
            this.subscriptions[event](data);
        }
    }
}
