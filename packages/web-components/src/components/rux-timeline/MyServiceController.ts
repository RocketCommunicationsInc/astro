class MyServiceController {
    public myData = []
    constructor() {}
    async load() {
        if (this.myData) {
            return this.myData
        } else {
            // Load data and then...
            return this.myData
        }
    }
    async getData() {
        const data = await this.load()
        return data
    }
    addData(data: any) {
        //@ts-ignore
        this.myData.push(data)
    }
}
export const MyService = new MyServiceController()
