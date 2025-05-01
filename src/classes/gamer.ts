// Class with access modifiers
export class Gamer {
    constructor(
        public name: string,
        private age: number,
        protected isStudent: boolean,
        readonly isHuman: boolean = true
    ) {}
}