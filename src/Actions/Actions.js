export let  addTodo = (id =2,title= 'Learn JS') => {
    return {
        type: 'ADD_TODO',
        payload:{
            id,title
        }
    }
};


