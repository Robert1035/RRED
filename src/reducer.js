
let uptateState = (state,action) =>{
    if(action.type === 'INCREMENT'){
        return {count:state.count + action.amount}
    }else if(action.type === 'DESCREMENT'){
        return {count:state.count - action.amount}
    }else {
        return state
    }
};

class Store{
    constructor(updateState,state){
        this._updateState = updateState;
        this._state = state;
        this._callbacks = [];
    }

    get state(){
        return this._state;
    }
    update(action){
        this._state = this._updateState(this._state,action);
        this._callbacks.forEach(callback => callback());
    }

    subcribe(callback){
        this._callbacks.push(callback);
        return () => this._callbacks = this._callbacks.filter(cb => cb !== callback)
    }
             }
const initialState ={count:0};
const store = new Store(uptateState,initialState);

const increment = {type:'INCREMENT',amount:5};
const decrement = {type:'DESCREMENT',amount:3};

const onsubcribe = store.subcribe(() => console.log('State changed1',store.state));
store.subcribe(() => console.log('State changed2',store.state));

store.update(increment);
onsubcribe();
store.update(decrement);

store.update({});

export default Store;
