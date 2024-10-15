import ScheduleStore from "@/stores/scheduleI-store";
import {makeAutoObservable} from "mobx";

export type RootStoreHydration = {
    [key: string]: {
        hydrateFromLocalStore: () => void
    }
};

export class RootStore {

    scheduleStore: ScheduleStore

    constructor() {

        this.scheduleStore = new ScheduleStore()

        makeAutoObservable(this)
    }

    hydrate(data: RootStoreHydration) {
        console.log(data)
    }

}
