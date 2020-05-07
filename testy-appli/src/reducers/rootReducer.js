const initState = {
    posts: [
        {id: '1', title: 'turtle', body: 'thats my turtle green body ! '},
        {id: '2', title: 'egg', body: 'im just an egg ok? '},
        {id: '3', title: 'lion', body: 'im gonna eat you, im lion chocolate '},
    ]
}

const rootReducer = (state = initState, action) => {
    console.log(action);
    if(action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => post.id !== action.id)
        return {
            ...state,
            posts: newPosts
        }
    }

    return state
}

export default rootReducer