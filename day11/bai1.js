let counter = {
    value: 0,
    up(){
        this.value++;
        return this
    },
    down(){
        this.value--;
        return this
    },
    get(){
        console.log(this.value);
        return this
    }
}



