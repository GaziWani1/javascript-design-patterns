function Process(state) {
    this.state = state;
}

const singleTon = (function () {
    function ProcessManager() {
        this.numProcess = 0;
    }

    let pManager;

    function createPManager() {
        pManager = new ProcessManager();
        return pManager;
    }

    return {
        getProcessManager: () => {
            if (!pManager) {
                pManager = createPManager();
            }
            return pManager;
        }
    };
})();

// Usage
const manager1 = singleTon.getProcessManager();
const manager2 = singleTon.getProcessManager();

console.log(manager1 === manager2); // true ✅
