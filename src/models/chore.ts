///<reference path="../../typings/moment/moment.d.ts" />

export interface IChore {
    key: number;
    name: string;
    nextDate: Date;
    period: moment.Duration;
}